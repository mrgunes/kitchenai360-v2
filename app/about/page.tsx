import type { Metadata } from "next"
import Link from "next/link"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About",
  description:
    "KitchenAI360 is an early-stage platform focused on specification accuracy in kitchen planning. Learn about who we are and why we are building it.",
}

export default function AboutPage() {
  return (
    <>
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="default" className="mb-5">About</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
              About KitchenAI360
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
              An early-stage platform focused on one thing: helping kitchen
              professionals and homeowners plan accurately before construction begins.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="surface">
        <Container narrow>
          <div className="flex flex-col gap-12 text-slate-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">What we are building</h2>
              <p className="mb-4">
                KitchenAI360 is an AI-assisted kitchen planning tool that helps
                designers, contractors, and homeowners verify layouts against
                published industry standards — catching specification errors
                before they become construction problems.
              </p>
              <p>
                Most kitchen planning tools focus on visualization: renders,
                mood boards, and 3D walkthroughs. KitchenAI360 focuses on
                accuracy. Our goal is to surface clearance violations, appliance
                conflicts, and specification gaps at the planning stage, when
                they are inexpensive to fix.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Why we are building it</h2>
              <p className="mb-4">
                Kitchen projects fail for predictable reasons. Clearances are
                underestimated. Appliance specs are misread. Layouts that look
                correct on a floor plan create problems the moment construction
                begins. These errors are common, expensive, and largely
                preventable.
              </p>
              <p>
                Published standards — from the NKBA, the International
                Residential Code, and ADA guidelines — exist precisely to
                prevent these problems. But they are dense, technical, and
                time-consuming to cross-reference manually on every project.
                KitchenAI360 automates that reference work.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">Who is building it</h2>
              <p className="mb-4">
                KitchenAI360 is a small, early-stage team. We are building in
                the open — sharing our approach to standards, data sourcing, and
                accuracy limitations transparently, because we believe you
                should know exactly what the platform does and does not do.
              </p>
              <p>
                The platform is currently in development. We are working with
                designers, contractors, and homeowners during early access to
                understand how to make it genuinely useful in real planning
                workflows.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-navy-900 mb-4">What we do not claim</h2>
              <p>
                KitchenAI360 is a planning aid, not a licensed design service.
                Output from the platform does not constitute professional advice
                and does not certify compliance with any building code or
                regulation. All plans should be reviewed by a qualified
                professional before construction begins.{" "}
                <Link href="/standards" className="text-accent-600 underline underline-offset-2 hover:text-accent-700">
                  Read our full standards approach.
                </Link>
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-8">
              <h2 className="text-lg font-bold text-navy-900 mb-3">Get in touch</h2>
              <p className="mb-5 text-slate-600">
                Questions about the platform, early access, or our approach?
                We would like to hear from you.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-navy-900 transition-colors hover:border-navy-200 hover:bg-navy-50"
                >
                  Contact us
                </Link>
                <Link
                  href="/waitlist"
                  className="inline-flex items-center rounded-lg bg-accent-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-600"
                >
                  Join the waitlist
                </Link>
              </div>
            </div>

          </div>
        </Container>
      </Section>
    </>
  )
}
