import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllGuideSlugs, getGuide } from "@/lib/content/guides"
import { MdxRenderer } from "@/components/content/mdx-renderer"
import { JsonLd } from "@/components/content/json-ld"
import { PageViewTracker } from "@/components/content/page-view-tracker"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"

interface PageProps {
  params: Promise<{ slug: string }>
}

const difficultyColors = {
  beginner:     "bg-green-50 text-green-700",
  intermediate: "bg-amber-50 text-amber-700",
  advanced:     "bg-red-50 text-red-700",
} as const

const categoryLabels: Record<string, string> = {
  planning:  "Planning",
  standards: "Standards",
  workflow:  "Workflow",
  tools:     "Tools & Specs",
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) return {}

  const { frontmatter } = guide
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitchenai360.com"

  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: "article",
      publishedTime: frontmatter.publishedAt,
      modifiedTime: frontmatter.updatedAt,
      url: `${siteUrl}/guides/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.description,
    },
  }
}

export default async function GuidePostPage({ params }: PageProps) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide) notFound()

  const { frontmatter, source } = guide
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitchenai360.com"

  const formattedDate = new Date(frontmatter.publishedAt + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: frontmatter.title,
    description: frontmatter.description,
    datePublished: frontmatter.publishedAt,
    dateModified: frontmatter.updatedAt ?? frontmatter.publishedAt,
    publisher: {
      "@type": "Organization",
      name: "KitchenAI360",
      url: siteUrl,
    },
    url: `${siteUrl}/guides/${slug}`,
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageViewTracker event="guide_article_opened" properties={{ slug, title: frontmatter.title }} />

      <Section size="lg" background="white">
        <Container narrow>
          {/* Back link */}
          <Link
            href="/guides"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy-700"
          >
            <span aria-hidden="true">←</span> All guides
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-medium text-navy-700">
                {categoryLabels[frontmatter.category] ?? frontmatter.category}
              </span>
              <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColors[frontmatter.difficulty]}`}>
                {frontmatter.difficulty}
              </span>
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              {frontmatter.description}
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
              <time dateTime={frontmatter.publishedAt}>{formattedDate}</time>
              {frontmatter.readingTime && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{frontmatter.readingTime} min read</span>
                </>
              )}
            </div>
          </header>

          {/* Content */}
          <MdxRenderer source={source} />

          {/* Footer */}
          <div className="mt-16 border-t border-slate-200 pt-8">
            <Link
              href="/guides"
              className="text-sm font-medium text-accent-600 hover:text-accent-700"
            >
              ← Back to all guides
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
