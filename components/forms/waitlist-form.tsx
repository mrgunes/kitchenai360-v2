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
  waitlistSchema,
  type WaitlistFormValues,
  LEAD_ROLES,
  ROLE_LABELS,
  US_STATES,
} from "@/lib/validations/lead"

type Status = "idle" | "submitting" | "success" | "error"

export function WaitlistForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<WaitlistFormValues>({
    defaultValues: {
      firstName:    "",
      lastName:     "",
      email:        "",
      company:      "",
      state:        "",
      primaryUseCase: "",
      consent:      false,
    },
  })

  const onSubmit = handleSubmit(async (rawData) => {
    // Client-side Zod pass before sending
    const parsed = waitlistSchema.safeParse(rawData)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof WaitlistFormValues
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
        body: JSON.stringify({ leadType: "waitlist", ...parsed.data }),
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
          <p className="font-semibold text-navy-900">You&#39;re on the list</p>
          <p className="mt-1 text-sm text-slate-500">
            We&#39;ll send one email when early access opens. No spam.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First name" htmlFor="wl-firstName" required error={errors.firstName?.message}>
          <Input
            id="wl-firstName"
            autoComplete="given-name"
            {...register("firstName", { required: "First name is required" })}
          />
        </FormField>

        <FormField label="Last name" htmlFor="wl-lastName" required error={errors.lastName?.message}>
          <Input
            id="wl-lastName"
            autoComplete="family-name"
            {...register("lastName", { required: "Last name is required" })}
          />
        </FormField>

        <FormField label="Email address" htmlFor="wl-email" required error={errors.email?.message}>
          <Input
            id="wl-email"
            type="email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
          />
        </FormField>

        <FormField label="Your role" htmlFor="wl-role" required error={errors.role?.message}>
          <Select
            id="wl-role"
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

        <FormField label="Company / firm" htmlFor="wl-company" error={errors.company?.message}>
          <Input
            id="wl-company"
            autoComplete="organization"
            placeholder="Optional"
            {...register("company")}
          />
        </FormField>

        <FormField label="State" htmlFor="wl-state" error={errors.state?.message}>
          <Select id="wl-state" {...register("state")}>
            <option value="">Select state…</option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField
          label="What are you hoping to use KitchenAI360 for?"
          htmlFor="wl-useCase"
          error={errors.primaryUseCase?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="wl-useCase"
            rows={3}
            placeholder="Optional — helps us understand your planning needs"
            {...register("primaryUseCase")}
          />
        </FormField>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="wl-consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-accent-500"
          {...register("consent", { required: "You must accept the terms to continue" })}
        />
        <div>
          <label htmlFor="wl-consent" className="cursor-pointer text-sm text-slate-600">
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
        {status === "submitting" ? "Submitting…" : "Join the Waitlist"}
      </Button>

      <p className="text-xs text-slate-400">
        We&#39;ll send one email when early access opens. No spam, no marketing lists.
      </p>
    </form>
  )
}
