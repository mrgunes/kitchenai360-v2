"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { CheckCircle2 } from "lucide-react"
import { FormField } from "@/components/forms/form-field"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  demoSchema,
  type DemoFormValues,
  LEAD_ROLES,
  ROLE_LABELS,
  TEAM_SIZES,
  CONTACT_METHODS,
  CONTACT_METHOD_LABELS,
} from "@/lib/validations/lead"

type Status = "idle" | "submitting" | "success" | "error"

export function DemoRequestForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<DemoFormValues>({
    defaultValues: {
      firstName:              "",
      lastName:               "",
      email:                  "",
      company:                "",
      phone:                  "",
      problemDescription:     "",
      currentWorkflow:        "",
      teamSize:               "",
      consent:                false,
    },
  })

  const onSubmit = handleSubmit(async (rawData) => {
    const parsed = demoSchema.safeParse(rawData)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof DemoFormValues
        setError(field, { type: "manual", message: issue.message })
      }
      return
    }

    setStatus("submitting")
    setServerError(null)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadType: "demo", ...parsed.data }),
      })

      if (res.ok) {
        setStatus("success")
      } else {
        const json = await res.json().catch(() => ({}))
        setServerError(
          (json as { message?: string }).message ?? "Something went wrong. Please try again.",
        )
        setStatus("error")
      }
    } catch {
      setServerError("Network error. Please check your connection and try again.")
      setStatus("error")
    }
  })

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-green-200 bg-green-50 px-8 py-12 text-center">
        <CheckCircle2 size={36} className="text-green-600" aria-hidden />
        <div>
          <p className="font-semibold text-navy-900">Request received</p>
          <p className="mt-1 text-sm text-slate-500">
            We&#39;ll review your submission and follow up within a few business days.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">

        {/* Name */}
        <FormField label="First name" htmlFor="dr-firstName" required error={errors.firstName?.message}>
          <Input
            id="dr-firstName"
            autoComplete="given-name"
            {...register("firstName", { required: "First name is required" })}
          />
        </FormField>

        <FormField label="Last name" htmlFor="dr-lastName" required error={errors.lastName?.message}>
          <Input
            id="dr-lastName"
            autoComplete="family-name"
            {...register("lastName", { required: "Last name is required" })}
          />
        </FormField>

        {/* Contact */}
        <FormField label="Email address" htmlFor="dr-email" required error={errors.email?.message}>
          <Input
            id="dr-email"
            type="email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
          />
        </FormField>

        <FormField label="Phone" htmlFor="dr-phone" error={errors.phone?.message}>
          <Input
            id="dr-phone"
            type="tel"
            autoComplete="tel"
            placeholder="Optional"
            {...register("phone")}
          />
        </FormField>

        {/* Org */}
        <FormField label="Company / firm / project" htmlFor="dr-company" required error={errors.company?.message}>
          <Input
            id="dr-company"
            autoComplete="organization"
            {...register("company", { required: "Company or project name is required" })}
          />
        </FormField>

        <FormField label="Your role" htmlFor="dr-role" required error={errors.role?.message}>
          <Select
            id="dr-role"
            {...register("role", { required: "Please select your role" })}
          >
            <option value="">Select your role…</option>
            {LEAD_ROLES.map((r) => (
              <option key={r} value={r}>
                {ROLE_LABELS[r]}
              </option>
            ))}
          </Select>
        </FormField>

        {/* Logistics */}
        <FormField label="Team size" htmlFor="dr-teamSize" error={errors.teamSize?.message}>
          <Select id="dr-teamSize" {...register("teamSize")}>
            <option value="">Select…</option>
            {TEAM_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          label="Preferred contact method"
          htmlFor="dr-contact"
          required
          error={errors.preferredContactMethod?.message}
        >
          <Select
            id="dr-contact"
            {...register("preferredContactMethod", { required: "Please select a contact preference" })}
          >
            <option value="">Select…</option>
            {CONTACT_METHODS.map((m) => (
              <option key={m} value={m}>
                {CONTACT_METHOD_LABELS[m]}
              </option>
            ))}
          </Select>
        </FormField>

        {/* Qualifying questions */}
        <FormField
          label="What planning challenge are you trying to solve?"
          htmlFor="dr-problem"
          required
          error={errors.problemDescription?.message}
          hint="Describe the specification or layout challenge you face most often."
          className="sm:col-span-2"
        >
          <Textarea
            id="dr-problem"
            rows={4}
            {...register("problemDescription", { required: "Please describe your planning challenge" })}
          />
        </FormField>

        <FormField
          label="How do you currently handle kitchen planning?"
          htmlFor="dr-workflow"
          required
          error={errors.currentWorkflow?.message}
          hint="Briefly describe your current tools or process."
          className="sm:col-span-2"
        >
          <Textarea
            id="dr-workflow"
            rows={3}
            {...register("currentWorkflow", { required: "Please describe your current workflow" })}
          />
        </FormField>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="dr-consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-accent-500"
          {...register("consent", { required: "You must accept the terms to continue" })}
        />
        <div>
          <label htmlFor="dr-consent" className="cursor-pointer text-sm text-slate-600">
            I agree to be contacted about KitchenAI360 and accept the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-navy-900">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-navy-900">
              Terms of Service
            </Link>
            .
          </label>
          {errors.consent && (
            <p role="alert" className="mt-1 text-xs font-medium text-red-600">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {serverError && (
        <p role="alert" className="text-sm font-medium text-red-600">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? "Submitting…" : "Request a Demo"}
      </Button>

      <p className="text-xs text-slate-400">
        We review all requests personally and follow up within a few business days.
      </p>
    </form>
  )
}
