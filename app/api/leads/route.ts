import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"
import { LeadType, LeadRole } from "@/src/generated/prisma/enums"
import {
  waitlistSchema,
  demoSchema,
  contactSchema,
} from "@/lib/validations/lead"
import { sendLeadNotification } from "@/lib/email"
import { z } from "zod"

// ── Rate limiting ─────────────────────────────────────────────────────────────
// In-memory sliding window. Works within a single function instance only.
// For global rate limiting across Vercel serverless instances, use Vercel KV.
const ipRequests = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60_000 // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = ipRequests.get(ip)
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT_MAX) return true
  entry.count++
  return false
}

// ── Schema ────────────────────────────────────────────────────────────────────
const leadTypeSchema = z.enum(["waitlist", "demo", "contact"])

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { success: false, code: "rate_limited", message: "Too many requests. Please try again later." },
      { status: 429 },
    )
  }

  // Parse body
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, code: "invalid_json", message: "Invalid request body" },
      { status: 400 },
    )
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json(
      { success: false, code: "invalid_body", message: "Request body must be an object" },
      { status: 400 },
    )
  }

  const rawBody = body as Record<string, unknown>

  // Honeypot check — bots that fill the hidden field get a fake success response
  if (typeof rawBody._honeypot === "string" && rawBody._honeypot.length > 0) {
    return NextResponse.json({ success: true }, { status: 200 })
  }

  // Strip honeypot before schema validation so it doesn't cause validation errors
  const { leadType, _honeypot: _consumed, ...formData } = rawBody
  void _consumed

  // Validate lead type
  const typeResult = leadTypeSchema.safeParse(leadType)
  if (!typeResult.success) {
    return NextResponse.json(
      { success: false, code: "invalid_lead_type", message: "Invalid lead type" },
      { status: 400 },
    )
  }

  const type = typeResult.data

  // Validate form data with the appropriate schema
  const parsed =
    type === "waitlist" ? waitlistSchema.safeParse(formData)
    : type === "demo"   ? demoSchema.safeParse(formData)
    :                     contactSchema.safeParse(formData)

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        code: "validation_error",
        message: "Submission contains invalid or missing fields",
        issues: parsed.error.issues.map((issue) => ({
          path: issue.path.map(String).join("."),
          message: issue.message,
        })),
      },
      { status: 422 },
    )
  }

  try {
    const data = parsed.data

    // Build the Prisma create payload from the validated data
    const baseData = {
      type: type as LeadType,
      email: data.email,
      firstName: "firstName" in data ? (data.firstName ?? null) : null,
      lastName: "lastName" in data ? (data.lastName ?? null) : null,
      consent: data.consent,
      sourcePage:
        type === "waitlist" ? "/waitlist"
        : type === "demo" ? "/request-demo"
        : "/contact",
    }

    let typeSpecificData: Record<string, unknown> = {}

    if (type === "waitlist") {
      const d = data as z.infer<typeof waitlistSchema>
      typeSpecificData = {
        role: d.role as LeadRole,
        company: d.company ?? null,
        state: d.state ?? null,
        primaryUseCase: d.primaryUseCase ?? null,
      }
    } else if (type === "demo") {
      const d = data as z.infer<typeof demoSchema>
      typeSpecificData = {
        role: d.role as LeadRole,
        company: d.company,
        phone: d.phone ?? null,
        problemDescription: d.problemDescription,
        currentWorkflow: d.currentWorkflow,
        teamSize: d.teamSize ?? null,
        preferredContactMethod: d.preferredContactMethod,
      }
    } else {
      // contact
      const d = data as z.infer<typeof contactSchema>
      typeSpecificData = {
        problemDescription: d.message,
      }
    }

    const lead = await prisma.lead.create({
      data: { ...baseData, ...typeSpecificData },
    })

    // Send notification email — failure does NOT fail the request
    sendLeadNotification(lead).catch((err) => {
      console.error("[email] notification failed:", err)
    })

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (err) {
    console.error("[api/leads] insert error:", err)
    return NextResponse.json(
      { success: false, code: "server_error", message: "Something went wrong. Please try again." },
      { status: 500 },
    )
  }
}
