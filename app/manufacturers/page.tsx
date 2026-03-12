import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Database, FileText, AlertCircle } from "lucide-react"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Manufacturer Catalog Coverage",
  description:
    "How KitchenAI360 sources appliance and cabinet dimension data, what is covered, and what the catalog does not represent.",
}

const categoryGroups = [
  {
    category: "Major appliances",
    items: [
      "Refrigerators and French door / counter-depth models",
      "Freestanding, slide-in, and drop-in ranges",
      "Cooktops (gas, electric, induction)",
      "Wall ovens (single and double)",
      "Dishwashers (standard and compact widths)",
      "Range hoods and ventilation inserts",
      "Microwave-and-oven combination units",
    ],
    note: "Dimensions referenced from publicly available product specification sheets.",
  },
  {
    category: "Cabinet and storage",
    items: [
      "Standard base cabinet widths and depth dimensions",
      "Wall cabinet heights and depth configurations",
      "Tall cabinet (pantry, utility) standard dimensions",
      "Corner cabinet configurations",
      "Island base configurations",
    ],
    note: "Cabinet dimensions are referenced from manufacturer published standard dimension guides, not custom-configured dimensions.",
  },
  {
    category: "Fixture and sink rough-ins",
    items: [
      "Undermount and drop-in sink opening dimensions",
      "Farmhouse / apron front sink depth requirements",
      "Standard rough-in plumbing positioning",
      "Disposal unit clearance requirements",
    ],
    note: "Rough-in data is general guidance. Always verify with the specific fixture specification sheet.",
  },
]

const principles = [
  {
    icon: Database,
    title: "Source: publicly available spec sheets",
    body: "All dimension data in the KitchenAI360 catalog is sourced from product specification documents that manufacturers make publicly available — installation guides, spec sheets, and product data sheets. We do not have proprietary data-sharing arrangements with manufacturers.",
  },
  {
    icon: FileText,
    title: "Not a product database",
    body: "The catalog is a dimension reference used during layout planning — not a product comparison tool or purchasing guide. We do not surface pricing, availability, or retailer information.",
  },
  {
    icon: AlertCircle,
    title: "No endorsements or partnerships",
    body: "Inclusion of a manufacturer's product dimensions in our catalog does not represent an endorsement, partnership, sponsorship, or commercial relationship of any kind. We reference publicly available data only.",
  },
]

const coverageNotes = [
  {
    heading: "What the catalog covers",
    items: [
      "Standard residential appliance dimensions for common model configurations",
      "Published rough-in and installation clearance requirements",
      "Standard cabinet dimension references for common configurations",
    ],
  },
  {
    heading: "What the catalog does not cover",
    items: [
      "Custom or non-standard appliance configurations",
      "Commercial-grade residential appliances (pro-style ranges with non-standard depths)",
      "Custom cabinet builds and bespoke millwork dimensions",
      "Smart home integration specifications",
      "Pricing, availability, or purchasing information",
      "All models from any given manufacturer — catalog coverage is partial",
    ],
  },
]

export default function ManufacturersPage() {
  return (
    <>
      {/* Hero */}
      <Section size="lg" background="white">
        <Container narrow>
          <div className="text-center">
            <Badge variant="accent" className="mb-5">Catalog coverage</Badge>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl">
              Manufacturer dimension<br className="hidden sm:block" /> data explained
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              KitchenAI360 maintains a catalog of appliance and cabinet dimension
              data used during layout planning. This page explains what that
              catalog is, how the data is sourced, and what it does not
              represent.
            </p>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section background="surface">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              How the catalog works
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              Three things you should know about how we source and use product
              dimension data.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <Card key={p.title}>
                <CardHeader>
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50">
                    <p.icon size={18} className="text-accent-500" aria-hidden />
                  </div>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coverage scope */}
      <Section background="white">
        <Container>
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900">
              Category coverage
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-500">
              The catalog currently covers these appliance and cabinet categories.
              Coverage is not exhaustive — it reflects the most common
              configurations encountered in residential kitchen planning.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {categoryGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
                  <p className="font-semibold text-navy-900">{group.category}</p>
                </div>
                <div className="grid gap-2 p-6 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" aria-hidden />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-200 bg-slate-50 px-6 py-3">
                  <p className="text-xs text-slate-400 italic">{group.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Coverage grid */}
      <Section background="surface">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {coverageNotes.map((block) => (
              <div
                key={block.heading}
                className="rounded-xl border border-slate-200 bg-white p-6"
              >
                <p className="font-semibold text-navy-900 mb-4">{block.heading}</p>
                <ul className="flex flex-col gap-2.5">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Disclaimer callout */}
      <Section background="white" size="sm">
        <Container narrow>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-sm">
            <p className="font-semibold text-amber-900">Always verify against the manufacturer spec sheet</p>
            <p className="mt-2 leading-relaxed text-amber-800">
              Catalog dimensions are reference data and may not reflect the most
              current model specifications. Before placing orders, scheduling
              rough-ins, or committing to a layout, verify all critical dimensions
              directly against the manufacturer&#39;s current installation guide or
              specification sheet for the specific model you are purchasing.
            </p>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="navy">
        <Container narrow>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Missing a product or category?
            </h2>
            <p className="mx-auto mt-4 max-w-lg leading-relaxed text-navy-100">
              Catalog coverage grows with user input. If there is an appliance
              category or configuration that is important to your workflow, we
              want to hear about it.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Send us feedback
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
