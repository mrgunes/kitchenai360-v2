import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { DemoRequestForm } from "@/components/forms/demo-request-form"

export const metadata: Metadata = {
  title: "Request a Demo",
  description:
    "Tell us about your kitchen planning workflow and we'll schedule a KitchenAI360 walkthrough. Our team follows up within a few business days.",
}

export default function RequestDemoPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container narrow>
          <div className="mb-10 text-center">
            <Badge variant="accent" className="mb-5">Request demo</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              See KitchenAI360 in practice
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              Walk through the platform with our team. We review all requests
              personally and follow up within a few business days.
            </p>
          </div>

          <DemoRequestForm />
        </Container>
      </Section>
    </>
  )
}
