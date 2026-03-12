import { NextResponse } from "next/server"
import { prisma } from "@/lib/db/prisma"

export async function GET() {
  const leadCount = await prisma.lead.count()

  return NextResponse.json({
    ok: true,
    leadCount
  })
}