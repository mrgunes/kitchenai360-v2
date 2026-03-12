import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ClipboardList, Bot, FileOutput, MessageSquare } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "A walkthrough of how KitchenAI360 helps you verify kitchen layouts against published industry standards before construction begins.",
}

const steps = [
  {
    number: "01",
    title: "Describe your kitchen project",
    body: "Start by entering the core parameters of your project: room dimensions, proposed layout type (galley, L-shape, U-shape, island, and so on), appliance selections, and any known constraints such as window or door positions. The platform captures what it needs to perform a meaningful review.",
    icon: ClipboardList,
    notes: [
      "Supported layout configurations: galley, one-wall, L-shape, U-shape, peninsula, island",
      "Appliance categories: refrigerator, range or cooktop, dishwasher, microwave, oven",
      "Optional: entry clearances, window positions, cabinet layout intent",
    ],
  },
  {
    number: "02",
    title: "Receive AI-assisted specification feedback",
    body: "KitchenAI360 checks your submitted parameters against published clearance guidelines and flags potential issues for your review. The platform surfaces the relevant standard or guideline alongside each flagged item so you can understand the basis for the feedback — not just the outcome.",
    icon: Bot,
    notes: [
      "Clearance checks based on NKBA Kitchen Planning Guidelines",
      "Workflow zone analysis for primary work triangle or zone configurations",
      "Appliance spacing review against published residential minimums",
      "Each flag references the guideline it is based on",
    ],
  },
  {
    number: "03",
    title: "Review and refine your plan",
    body: "Use the feedback to adjust dimensions, reposition appliances, or reconsider layout choices. You can re-submit a revised plan as many times as needed. The tool is designed to support iteration — not replace the judgement of the designer or contractor reviewing the final plan.",
    icon: MessageSquare,
    notes: [
      "Re-submit revised parameters to check updates",
      "Compare specification notes across iterations",
      "All guidance should be reviewed by a qualified professional before construction",
    ],
  },
  {
    number: "04",
    title: "Export a specification summary",
    body: "When your plan is ready for handoff, export a specification summary that captures the key dimensions, appliance selections, and notes from your review. This document is intended to support client communication, contractor briefings, and project record-keeping — not as a certified compliance document.",
    icon: FileOutput,
    notes: [
      "Summary includes: layout type, key dimensions, appliance list, flagged items",
      "Suitable for client review and contractor reference",
      "Not a permit document or compliance certificate",
    ],
  },
]

const designedFor = [
  {
    heading: "The planning stage",
    body: "KitchenAI360 is most useful during early planning — when layouts are still flexible and catching an issue costs a conversation rather than a construction change.",
  },
  {
    heading: "Iterative design",
    body: "The tool supports multiple submissions. Designers and contractors can test alternative configurations quickly without manually cross-referencing standard documents.",
  },
  {
    heading: "Client communication",
    body: "Homeowners can use the specification summary to have more informed conversations with their design and build teams — reducing the gap between what was intended and what gets built.",
  },
  {
    heading: "Pre-handoff review",
    body: "Before a design moves to the build phase, a quick review can surface specification details that might otherwise require a revision mid-construction.",
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="accent" className="mb-5">How it works</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              A clear process for<br className="hidden sm:block" /> specification accuracy
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              KitchenAI360 walks you through a structured review of your kitchen
              layout against published industry standards. Here is what happens at
              each stage.
            </p>
          </div>
        </Container>
      </Section>

      {/* Steps */}
      <Section background="surface">
        <Container>
          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="grid gap-8 md:grid-cols-2 md:items-start"
              >
                {/* Left */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500 bg-white">
                      <span className="text-xs font-bold text-accent-500">{step.number}</span>
                    </div>
                    <h2 className="text-xl font-bold text-navy-900">{step.title}</h2>
                  </div>
                  <p className="leading-relaxed text-slate-600">{step.body}</p>
                </div>

                {/* Right: notes card */}
                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <Card>
                    <CardHeader>
                      <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50">
                        <step.icon size={18} className="text-accent-500" aria-hidden />
                      </div>
                      <CardTitle className="text-sm">Details</CardTitle>
                    </CardHeader>
                    <ul className="flex flex-col gap-2.5 px-6 pb-6">
                      {step.notes.map((note) => (
                        <li key={note} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* When to use */}
      <Section background="white">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              When to use it
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              KitchenAI360 fits most naturally at specific points in the kitchen
              planning process.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {designedFor.map((item) => (
              <Card key={item.heading}>
                <CardHeader>
                  <CardTitle>{item.heading}</CardTitle>
                  <CardDescription>{item.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Limitations callout */}
      <Section background="surface" size="sm">
        <Container narrow>
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-navy-900">A note on scope</p>
            <p className="mt-2 leading-relaxed">
              KitchenAI360 is an AI-assisted planning aid, not a licensed design
              service or code compliance tool. All output should be reviewed by a
              qualified professional — designer, contractor, or building
              official — before construction begins. The platform does not
              account for local code variations, site-specific conditions, or
              structural constraints.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Ready to see it in practice?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy-100">
              Request a demo to walk through the platform with our team, or join
              the waitlist for early access.
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
