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

const leadTypeSchema = z.enum(["waitlist", "demo", "contact"])

export async function POST(req: NextRequest) {
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

  const { leadType, ...formData } = body as Record<string, unknown>

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

    // Send notification email — failure does not fail the request
    sendLeadNotification(lead).catch(err => {
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
