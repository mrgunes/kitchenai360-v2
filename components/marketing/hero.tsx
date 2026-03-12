import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <Container narrow>
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-navy-700">
            Early access — currently in development
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-900 sm:text-5xl md:text-6xl">
            Kitchen planning built
            <br className="hidden sm:block" /> around accuracy
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            KitchenAI360 helps designers, contractors, and homeowners verify
            layouts against published industry standards — reducing costly
            specification errors before construction begins.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/request-demo"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Request a Demo
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/waitlist"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Join the Waitlist
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            No commitment required. We will contact you when early access opens.
          </p>
        </div>
      </Container>
    </section>
  )
}
