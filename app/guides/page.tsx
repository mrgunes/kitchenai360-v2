import type { Metadata } from "next"
import { getAllGuides } from "@/lib/content/guides"
import { GuideCard } from "@/components/content/guide-card"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Planning Guides",
  description:
    "Practical reference guides on kitchen clearances, standards, workflow zones, and appliance specifications for professionals and homeowners.",
}

const categoryOrder = ["planning", "standards", "workflow", "tools"] as const

export default function GuidesIndexPage() {
  const guides = getAllGuides()

  // Group by category
  const grouped = categoryOrder.reduce<Record<string, typeof guides>>((acc, cat) => {
    const items = guides.filter((g) => g.frontmatter.category === cat)
    if (items.length > 0) acc[cat] = items
    return acc
  }, {})

  const categoryLabels: Record<string, string> = {
    planning:  "Planning",
    standards: "Standards",
    workflow:  "Workflow",
    tools:     "Tools & Specs",
  }

  return (
    <Section size="lg" background="white">
      <Container>
        <div className="mb-12">
          <Badge variant="accent" className="mb-5">Guides</Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
            Kitchen planning guides
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Reference guides on clearances, standards, and workflow — practical
            information for anyone involved in kitchen design or construction.
          </p>
        </div>

        {guides.length === 0 ? (
          <p className="text-slate-500">No guides published yet.</p>
        ) : (
          <div className="space-y-12">
            {Object.entries(grouped).map(([cat, items]) => (
              <div key={cat}>
                <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {categoryLabels[cat] ?? cat}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((guide) => (
                    <GuideCard key={guide.slug} guide={guide} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
