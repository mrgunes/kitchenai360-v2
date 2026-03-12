import type { Metadata } from "next"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { WaitlistForm } from "@/components/forms/waitlist-form"

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Sign up for early access to KitchenAI360. We will notify you when the platform opens for testing.",
}

export default function WaitlistPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container narrow>
          <div className="mb-10 text-center">
            <Badge variant="accent" className="mb-5">Early access</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Join the waitlist
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              KitchenAI360 is in development. Leave your details and we will
              reach out when early access opens.
            </p>
          </div>

          <WaitlistForm />
        </Container>
      </Section>
    </>
  )
}
