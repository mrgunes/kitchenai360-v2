import { z } from "zod"

// ── Shared option sets ───────────────────────────────────────────────────────

export const LEAD_ROLES = [
  "homeowner",
  "designer",
  "contractor",
  "dealer",
  "manufacturer",
  "investor",
  "other",
] as const

export type LeadRoleValue = (typeof LEAD_ROLES)[number]

export const ROLE_LABELS: Record<LeadRoleValue, string> = {
  homeowner:    "Homeowner",
  designer:     "Kitchen Designer",
  contractor:   "Contractor / Builder",
  dealer:       "Kitchen Dealer",
  manufacturer: "Manufacturer",
  investor:     "Investor",
  other:        "Other",
}

export const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC",
] as const

export const TEAM_SIZES = [
  "1 (just me)",
  "2–5",
  "6–15",
  "16–50",
  "50+",
] as const

export const CONTACT_METHODS = ["email", "phone", "either"] as const
export type ContactMethodValue = (typeof CONTACT_METHODS)[number]

export const CONTACT_METHOD_LABELS: Record<ContactMethodValue, string> = {
  email: "Email",
  phone: "Phone",
  either: "Either works",
}

// ── Waitlist ─────────────────────────────────────────────────────────────────

export const waitlistSchema = z.object({
  firstName:    z.string().min(1, "First name is required"),
  lastName:     z.string().min(1, "Last name is required"),
  email:        z.string().email("Please enter a valid email address"),
  role:         z.enum(LEAD_ROLES),
  company:      z.string().optional(),
  state:        z.string().optional(),
  primaryUseCase: z.string().optional(),
  consent:      z.boolean().refine(v => v === true, "You must accept the terms to continue"),
})

export type WaitlistFormValues = z.infer<typeof waitlistSchema>

// ── Demo request ─────────────────────────────────────────────────────────────

export const demoSchema = z.object({
  firstName:              z.string().min(1, "First name is required"),
  lastName:               z.string().min(1, "Last name is required"),
  email:                  z.string().email("Please enter a valid email address"),
  company:                z.string().min(1, "Company or project name is required"),
  role:                   z.enum(LEAD_ROLES),
  phone:                  z.string().optional(),
  problemDescription:     z.string().min(10, "Please describe your planning challenge (at least 10 characters)"),
  currentWorkflow:        z.string().min(5, "Please briefly describe your current workflow"),
  teamSize:               z.string().optional(),
  preferredContactMethod: z.enum(CONTACT_METHODS),
  consent:                z.boolean().refine(v => v === true, "You must accept the terms to continue"),
})

export type DemoFormValues = z.infer<typeof demoSchema>

// ── Contact ───────────────────────────────────────────────────────────────────

export const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName:  z.string().min(1, "Last name is required"),
  email:     z.string().email("Please enter a valid email address"),
  message:   z.string().min(10, "Please enter a message (at least 10 characters)"),
  consent:   z.boolean().refine(v => v === true, "You must accept the terms to continue"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
