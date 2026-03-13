"use client"

import { useState } from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { CheckCircle2 } from "lucide-react"
import { FormField } from "@/components/forms/form-field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics/events"
import {
  contactSchema,
  type ContactFormValues,
} from "@/lib/validations/lead"

type Status = "idle" | "submitting" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [serverError, setServerError] = useState<string | null>(null)
  const [honeypot, setHoneypot] = useState("")

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      firstName: "",
      lastName:  "",
      email:     "",
      message:   "",
      consent:   false,
    },
  })

  const onSubmit = handleSubmit(async (rawData) => {
    const parsed = contactSchema.safeParse(rawData)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        const field = issue.path[0] as keyof ContactFormValues
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
        body: JSON.stringify({
          leadType: "contact",
          _honeypot: honeypot,
          ...parsed.data,
        }),
      })

      if (res.ok) {
        trackEvent("contact_submitted")
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
          <p className="font-semibold text-navy-900">Message received</p>
          <p className="mt-1 text-sm text-slate-500">
            We&#39;ll get back to you as soon as we can.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot — hidden from real users, traps bots that auto-fill all fields */}
      <input
        type="text"
        name="_honeypot"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First name" htmlFor="ct-firstName" required error={errors.firstName?.message}>
          <Input
            id="ct-firstName"
            autoComplete="given-name"
            {...register("firstName", { required: "First name is required" })}
          />
        </FormField>

        <FormField label="Last name" htmlFor="ct-lastName" required error={errors.lastName?.message}>
          <Input
            id="ct-lastName"
            autoComplete="family-name"
            {...register("lastName", { required: "Last name is required" })}
          />
        </FormField>

        <FormField
          label="Email address"
          htmlFor="ct-email"
          required
          error={errors.email?.message}
          className="sm:col-span-2"
        >
          <Input
            id="ct-email"
            type="email"
            autoComplete="email"
            {...register("email", { required: "Email is required" })}
          />
        </FormField>

        <FormField
          label="Message"
          htmlFor="ct-message"
          required
          error={errors.message?.message}
          className="sm:col-span-2"
        >
          <Textarea
            id="ct-message"
            rows={5}
            placeholder="What would you like to tell us?"
            {...register("message", { required: "Please enter a message" })}
          />
        </FormField>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          id="ct-consent"
          type="checkbox"
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 accent-accent-500"
          {...register("consent", { required: "You must accept the terms to continue" })}
        />
        <div>
          <label htmlFor="ct-consent" className="cursor-pointer text-sm text-slate-600">
            I agree to be contacted in response to this message and accept the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-navy-900">
              Privacy Policy
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
        size="md"
        disabled={status === "submitting"}
        className="self-start"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  )
}
