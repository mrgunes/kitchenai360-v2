/**
 * Email notification layer — Resend integration.
 *
 * TODO before deployment:
 *   1. Set RESEND_API_KEY in .env (get from resend.com)
 *   2. Set LEAD_NOTIFICATION_EMAIL in .env (inbox that receives new-lead alerts)
 *   3. Set EMAIL_FROM in .env — e.g. "KitchenAI360 <noreply@kitchenai360.com>"
 *      The FROM domain must be verified in your Resend dashboard.
 *   4. (Optional) Set NEXT_PUBLIC_SITE_URL in .env for correct links in emails.
 *
 * If RESEND_API_KEY is not set, notification emails are skipped silently.
 * Form submissions still succeed — email is best-effort.
 */

import { Resend } from "resend"

// Conditional initialisation — avoids a throw if key is absent during dev.
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null

export interface LeadEmailData {
  id: string
  type: string
  email: string
  firstName?: string | null
  lastName?: string | null
  fullName?: string | null
  role: string
  company?: string | null
  sourcePage?: string | null
  createdAt: Date
}

export async function sendLeadNotification(lead: LeadEmailData): Promise<void> {
  if (!resend) {
    console.warn("[email] RESEND_API_KEY not set — skipping lead notification")
    return
  }

  const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL
  if (!notificationEmail) {
    console.warn("[email] LEAD_NOTIFICATION_EMAIL not set — skipping notification")
    return
  }

  const name =
    (lead.fullName ??
    [lead.firstName, lead.lastName].filter(Boolean).join(" ")) ||
    lead.email

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitchenai360.com"

  await resend.emails.send({
    from: process.env.EMAIL_FROM ?? "KitchenAI360 <noreply@kitchenai360.com>",
    to: notificationEmail,
    subject: `New ${lead.type} lead: ${name}`,
    html: `
      <h2 style="font-family:sans-serif;margin:0 0 16px">
        New ${lead.type} lead
      </h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Name</td><td>${name}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Email</td><td>${lead.email}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Role</td><td>${lead.role}</td></tr>
        ${lead.company ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">Company</td><td>${lead.company}</td></tr>` : ""}
        ${lead.sourcePage ? `<tr><td style="padding:4px 12px 4px 0;color:#6b7280">Source</td><td>${siteUrl}${lead.sourcePage}</td></tr>` : ""}
        <tr><td style="padding:4px 12px 4px 0;color:#6b7280">Submitted</td><td>${lead.createdAt.toUTCString()}</td></tr>
      </table>
    `,
  })
}
