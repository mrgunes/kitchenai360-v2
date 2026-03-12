import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Describe your project",
    description:
      "Enter your kitchen dimensions, appliance selections, and layout goals. The platform captures the parameters it needs to assess your design.",
  },
  {
    number: "02",
    title: "Review AI-assisted feedback",
    description:
      "KitchenAI360 checks your layout against published clearance guidelines and surfaces potential specification issues for your review.",
  },
  {
    number: "03",
    title: "Refine and export",
    description:
      "Adjust your plan based on the guidance provided and export a specification summary for your team, client, or contractor.",
  },
]

export function HowItWorksSteps() {
  return (
    <Section background="white">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            A straightforward three-step process designed around the way
            kitchen projects actually get planned.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white">
                <span className="text-xs font-bold text-accent-500">
                  {step.number}
                </span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-navy-900">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/how-it-works"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            See the full process
            <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
