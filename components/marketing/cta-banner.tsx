import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <Section background="navy" className="relative overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        aria-hidden
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <Container narrow>
        <div className="relative text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-navy-100/60">
            Early access
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-white">
            Get early access to KitchenAI360
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy-100">
            We are building in the open and looking for designers, contractors,
            and homeowners to help shape the platform. Join the waitlist or
            request a demo.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-demo"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Request a Demo
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/waitlist"
              className={buttonVariants({ variant: "inverted", size: "lg" })}
            >
              <Mail size={16} aria-hidden />
              Join the Waitlist
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
