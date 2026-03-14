import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { ContactForm } from "@/components/forms/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact the KitchenAI360 team with questions about kitchen planning, standards verification, or early access to the platform.",
}

const otherOptions = [
  {
    label: "Request a demo",
    description: "Walk through the platform with our team.",
    href: "/request-demo",
  },
  {
    label: "Join the waitlist",
    description: "Get notified when early access opens.",
    href: "/waitlist",
  },
  {
    label: "Read the FAQ",
    description: "Answers to common questions about the platform.",
    href: "/faq",
  },
]

export default function ContactPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1fr_400px] md:items-start">

            {/* Form side */}
            <div>
              <Badge variant="accent" className="mb-5">Contact</Badge>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
                Get in touch
              </h1>
              <p className="mt-4 max-w-md leading-relaxed text-slate-600">
                We are a small team building in the open. Send us a message
                and we will get back to you as soon as we can.
              </p>

              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Other ways to connect
              </p>
              {otherOptions.map((opt) => (
                <Link
                  key={opt.href}
                  href={opt.href}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition-colors duration-150 hover:border-navy-200 hover:bg-navy-50"
                >
                  <p className="font-semibold text-navy-900 group-hover:text-navy-800">
                    {opt.label}
                  </p>
                  <p className="mt-0.5 text-sm text-slate-500">{opt.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
