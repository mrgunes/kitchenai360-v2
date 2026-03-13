import Link from "next/link"
import { ArrowRight, ShieldCheck, BookOpen, Home, Accessibility } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

const referencedStandards = [
  {
    icon: BookOpen,
    name: "NKBA Kitchen Planning Guidelines",
    description:
      "Workflow zone placement, clearance minimums, and appliance spacing recommendations from the National Kitchen & Bath Association.",
  },
  {
    icon: Home,
    name: "IRC Residential Clearances",
    description:
      "Minimum clearance requirements from the International Residential Code applicable to residential kitchen layouts.",
  },
  {
    icon: Accessibility,
    name: "ADA Guidelines (where applicable)",
    description:
      "Accessibility clearance requirements for universal design and accessible kitchen planning considerations.",
  },
]

export function StandardsSummary() {
  return (
    <Section background="white">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left: text */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-600">
              <ShieldCheck size={12} aria-hidden />
              Accuracy-first approach
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Built on published industry standards
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              KitchenAI360&#39;s specification guidance is grounded in publicly
              documented industry standards — not internal rules. We are
              transparent about what we reference and what falls outside our
              scope.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              We do not claim certified compliance or guarantee that any output
              satisfies local code requirements. All guidance should be reviewed
              by a qualified professional.
            </p>

            <div className="mt-6">
              <Link
                href="/standards"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                View our standards approach
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>

          {/* Right: standards list */}
          <div className="flex flex-col gap-3">
            {referencedStandards.map((s) => (
              <div
                key={s.name}
                className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white">
                  <s.icon size={15} className="text-navy-700" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-900">{s.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
