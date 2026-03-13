import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Home, PenTool, HardHat, Check } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "How KitchenAI360 supports homeowners, designers, and contractors throughout the kitchen planning process.",
}

const useCases = [
  {
    id: "homeowners",
    icon: Home,
    label: "Homeowners",
    heading: "Plan your renovation with confidence",
    intro:
      "Kitchen renovations are one of the most involved home projects most homeowners will undertake. Design decisions made early — before contractors are engaged — often determine how smoothly the rest of the project goes.",
    body: "KitchenAI360 helps homeowners understand what their proposed layout actually requires: what clearances are standard, how appliance positions affect workflow, and what questions to ask a designer or contractor before signing off on a plan.",
    usagePoints: [
      "Understand clearance requirements for your proposed layout",
      "Compare two or three layout options before committing to a design direction",
      "Generate a specification summary to share with your contractor or designer",
      "Identify potential issues before they reach the build phase",
      "Ask better questions in your design consultations",
    ],
    caveat:
      "KitchenAI360 is a planning aid, not a design service. For permitted work, always engage a qualified design or build professional.",
  },
  {
    id: "designers",
    icon: PenTool,
    label: "Designers",
    heading: "Verify specifications as you design",
    intro:
      "Kitchen designers work across multiple projects simultaneously and reference a lot of technical material — clearance standards, appliance rough-in requirements, workflow zone guidelines. Manual cross-referencing takes time and creates opportunities for specification errors.",
    body: "KitchenAI360 is designed to fit into the design workflow as a verification layer: check a layout against published standards, surface potential issues before client sign-off, and produce documentation that supports a clean contractor handoff.",
    usagePoints: [
      "Surface potential clearance issues before the client presentation",
      "Reference NKBA guidelines without leaving your design workflow",
      "Check appliance spacing against published residential minimums",
      "Generate specification summaries for contractor handoff packets",
      "Reduce revision cycles driven by specification oversights",
    ],
    caveat:
      "The platform is in early development. Feedback from professional designers is particularly valuable — join the waitlist or request a demo to be involved in testing.",
  },
  {
    id: "contractors",
    icon: HardHat,
    label: "Contractors",
    heading: "Reference requirements quickly in the field",
    intro:
      "Contractors often need to verify clearance requirements, rough-in dimensions, or layout specifications quickly — during estimation, site visits, or when a design question comes up mid-build. Digging through multiple standard documents takes time that is not always available.",
    body: "KitchenAI360 provides a fast way to look up relevant dimensional requirements and flag layout concerns without back-and-forth with the design team. It is a reference tool, not a replacement for professional judgement.",
    usagePoints: [
      "Look up standard clearance requirements quickly during estimation",
      "Reference appliance and cabinet rough-in dimension data",
      "Verify layout parameters before flagging a potential issue to the designer",
      "Reduce design clarification requests during the build phase",
      "Support documentation for project records",
    ],
    caveat:
      "KitchenAI360 references published standards but does not account for local code variations or site-specific conditions. Contractor judgement and local authority requirements always take precedence.",
  },
]

const sharedScenarios = [
  {
    title: "New construction kitchen planning",
    body: "Establishing a kitchen layout from scratch in a new build. The platform can help verify that the proposed configuration meets standard clearance requirements before the rough-in stage.",
  },
  {
    title: "Full kitchen renovation",
    body: "Removing existing cabinetry and starting fresh. Useful for checking new layout parameters before cabinet orders are placed and contractors are scheduled.",
  },
  {
    title: "Appliance replacement with layout changes",
    body: "When a new appliance — particularly one with different dimensions — requires reconsidering the surrounding layout. Useful for checking how the change affects workflow clearances.",
  },
  {
    title: "Accessible kitchen design",
    body: "Layouts that need to meet ADA accessibility guidelines. The platform references published ADA clearance requirements for applicable scenarios.",
  },
]

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="accent" className="mb-5">Use cases</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Built for everyone<br className="hidden sm:block" /> in the process
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Kitchen projects involve multiple stakeholders, each with different
              needs at different stages. KitchenAI360 is designed to be useful
              across the full planning workflow.
            </p>
          </div>
        </Container>
      </Section>

      {/* Use case sections */}
      {useCases.map((uc, i) => (
        <Section
          key={uc.id}
          id={uc.id}
          background={i % 2 === 0 ? "surface" : "white"}
        >
          <Container>
            <div className="grid gap-10 md:grid-cols-2 md:items-start">
              {/* Text */}
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-600">
                  <uc.icon size={13} aria-hidden />
                  {uc.label}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  {uc.heading}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-600">{uc.intro}</p>
                <p className="mt-3 leading-relaxed text-slate-600">{uc.body}</p>
                <p className="mt-4 text-sm text-slate-400 italic">{uc.caveat}</p>
              </div>

              {/* Points card */}
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <Card>
                  <CardHeader>
                    <CardTitle>How {uc.label.toLowerCase()} use it</CardTitle>
                  </CardHeader>
                  <ul className="flex flex-col gap-3 px-6 pb-6">
                    {uc.usagePoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <Check size={14} className="mt-0.5 shrink-0 text-accent-500" aria-hidden />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Shared scenarios */}
      <Section background="surface">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Common planning scenarios
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Specific situations where specification verification typically has
              the most impact.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {sharedScenarios.map((s) => (
              <Card key={s.title}>
                <CardHeader>
                  <CardTitle>{s.title}</CardTitle>
                  <CardDescription>{s.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Get involved in early access
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy-100">
              We are actively looking for designers, contractors, and homeowners
              to help shape KitchenAI360. Your input directly influences what
              gets built.
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
                Join the Waitlist
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
