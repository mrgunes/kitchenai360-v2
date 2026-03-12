import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils/cn"

export function CtaBanner() {
  return (
    <Section background="navy">
      <Container narrow>
        <div className="text-center">
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
            </Link>
            <Link
              href="/waitlist"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "border-white/30 text-white hover:border-white/50 hover:bg-white/10",
              )}
            >
              Join the Waitlist
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  )
}
