import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ShieldCheck, AlertTriangle, BookOpen, ExternalLink } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Standards Approach",
  description:
    "What industry standards KitchenAI360 references, how they are used, and what the platform does not guarantee.",
}

const referencedStandards = [
  {
    name: "NKBA Kitchen Planning Guidelines",
    shortName: "NKBA Guidelines",
    publisher: "National Kitchen & Bath Association",
    scope:
      "The NKBA publishes a set of kitchen planning guidelines covering recommended clearances, workflow zone placement, appliance spacing, and landing area requirements. These guidelines represent current industry best practice for residential kitchen design.",
    howUsed:
      "KitchenAI360 uses the NKBA clearance and spacing recommendations as the primary reference when checking kitchen layout parameters. Where a layout may conflict with a guideline, the platform flags the item and cites the relevant guideline number.",
    note: "The NKBA guidelines are recommendations, not legal code. They represent professional best practice, not mandatory minimums in all jurisdictions.",
  },
  {
    name: "International Residential Code (IRC)",
    shortName: "IRC",
    publisher: "International Code Council (ICC)",
    scope:
      "The IRC establishes minimum construction and safety requirements for one- and two-family dwellings. Relevant sections cover minimum kitchen clearances, ventilation requirements, and utility rough-in positioning.",
    howUsed:
      "KitchenAI360 references selected IRC clearance requirements where they apply to layout parameters. This is limited to the dimensions and spacing requirements most directly relevant to kitchen layout review.",
    note: "The IRC is a model code. Local jurisdictions adopt and amend it independently. KitchenAI360 does not account for local amendments or jurisdiction-specific requirements.",
  },
  {
    name: "ADA Standards for Accessible Design",
    shortName: "ADA Standards",
    publisher: "U.S. Access Board / Department of Justice",
    scope:
      "The ADA Standards specify minimum dimensions for accessible residential and commercial spaces, including kitchen clearances for wheelchair turning radius, countertop heights, and appliance reach ranges.",
    howUsed:
      "When accessibility considerations are indicated, KitchenAI360 references ADA clearance minimums for relevant layout parameters. This is intended as informational guidance for accessible design planning.",
    note: "ADA compliance for commercial and public accommodation spaces requires professional assessment. KitchenAI360 does not provide ADA compliance certification.",
  },
]

const limitations = [
  {
    title: "Not a compliance certification",
    body: "KitchenAI360 does not certify that any kitchen layout meets code, ADA requirements, or any other legal standard. The platform provides reference information based on published guidelines — not a compliance audit.",
  },
  {
    title: "Not a substitute for professional review",
    body: "All guidance produced by the platform should be reviewed by a qualified professional — kitchen designer, architect, contractor, or building official — before it is acted upon. Design decisions that affect construction, permits, or occupancy safety require professional sign-off.",
  },
  {
    title: "Does not account for local code variations",
    body: "Building codes in the United States are adopted and amended at the state and local level. The IRC is a model code; your jurisdiction may have adopted a different version, or applied local amendments. KitchenAI360 does not know or account for your jurisdiction's specific requirements.",
  },
  {
    title: "Does not cover commercial kitchens",
    body: "KitchenAI360 is designed for residential kitchen planning. Commercial kitchens are subject to different standards, including NSF, health department requirements, and local fire codes. These are outside our scope.",
  },
  {
    title: "Standards are updated periodically",
    body: "The NKBA, ICC, and ADA periodically update their published guidelines and standards. We reference a specific version of each and will note when our references are updated. We cannot guarantee that the version we reference reflects the most current edition at all times.",
  },
  {
    title: "AI output is not perfect",
    body: "The platform uses AI to interpret and apply specification guidelines. AI systems can produce incorrect or incomplete outputs. All flagged items and specification notes should be treated as input for professional review — not as definitive findings.",
  },
]

export default function StandardsPage() {
  return (
    <>
      {/* Hero */}
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="accent" className="mb-5">Standards approach</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Grounded in published<br className="hidden sm:block" /> industry standards
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              KitchenAI360 references publicly documented industry standards when
              checking layout parameters. This page explains exactly which
              standards we use, how we use them, and — equally important — what
              we do not guarantee.
            </p>
          </div>
        </Container>
      </Section>

      {/* Principle callout */}
      <Section background="surface" size="sm">
        <Container narrow>
          <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6">
            <ShieldCheck size={20} className="mt-0.5 shrink-0 text-accent-500" aria-hidden />
            <div>
              <p className="font-semibold text-navy-900">Our transparency principle</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                We believe you should know exactly what data sources we reference
                and what they cover. We do not use proprietary scoring systems or
                undisclosed rules. Every flagged item in a review links to the
                published guideline it is based on.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Referenced standards */}
      <Section background="white">
        <Container>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 mb-4">
              <BookOpen size={12} aria-hidden />
              Referenced standards
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              What we reference
            </h2>
            <p className="mt-4 max-w-xl text-slate-500">
              The following published standards form the basis of KitchenAI360&#39;s
              specification checks.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {referencedStandards.map((s) => (
              <Card key={s.name}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle>{s.name}</CardTitle>
                      <p className="mt-1 text-sm text-slate-400">{s.publisher}</p>
                    </div>
                    <Badge variant="outline">{s.shortName}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-4 text-sm">
                    <div>
                      <p className="font-medium text-navy-700">Scope</p>
                      <p className="mt-1 leading-relaxed text-slate-600">{s.scope}</p>
                    </div>
                    <div>
                      <p className="font-medium text-navy-700">How KitchenAI360 uses it</p>
                      <p className="mt-1 leading-relaxed text-slate-600">{s.howUsed}</p>
                    </div>
                    <div className="rounded-md bg-slate-50 border border-slate-200 px-4 py-3">
                      <p className="text-slate-500 italic">{s.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Limitations */}
      <Section background="surface">
        <Container>
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 mb-4 border border-amber-200">
              <AlertTriangle size={12} aria-hidden />
              Limitations and disclaimers
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              What we do not guarantee
            </h2>
            <p className="mt-4 max-w-xl text-slate-500">
              Being clear about our limitations is part of our commitment to
              accuracy. Read this section carefully before relying on
              KitchenAI360 output for professional or construction decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {limitations.map((l) => (
              <Card key={l.title}>
                <CardHeader>
                  <CardTitle>{l.title}</CardTitle>
                  <CardDescription>{l.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Out-of-scope callout */}
      <Section background="white" size="sm">
        <Container narrow>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-sm">
            <p className="font-semibold text-navy-900">What falls outside our scope</p>
            <ul className="mt-3 flex flex-col gap-2 text-slate-600">
              {[
                "Structural engineering assessments",
                "Electrical, plumbing, and mechanical code compliance",
                "Local authority having jurisdiction (AHJ) interpretations",
                "Commercial kitchen or food-service facility requirements",
                "Fire safety and egress code review",
                "Historic preservation or HOA restrictions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Questions about our approach?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy-100">
              If you have questions about the standards we reference or our
              methodology, we are happy to discuss it. Reach out or request a
              demo.
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
                href="/contact"
                className={buttonVariants({ variant: "inverted", size: "lg" })}
              >
                Contact us
                <ExternalLink size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
