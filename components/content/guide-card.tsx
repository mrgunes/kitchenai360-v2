import Link from "next/link"
import type { GuideMeta } from "@/lib/content/types"

const difficultyColors = {
  beginner:     "bg-green-50 text-green-700",
  intermediate: "bg-amber-50 text-amber-700",
  advanced:     "bg-red-50 text-red-700",
} as const

const categoryLabels: Record<string, string> = {
  planning:  "Planning",
  standards: "Standards",
  workflow:  "Workflow",
  tools:     "Tools",
}

interface GuideCardProps {
  guide: GuideMeta
}

export function GuideCard({ guide }: GuideCardProps) {
  const { slug, frontmatter } = guide

  const formattedDate = new Date(frontmatter.publishedAt + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/guides/${slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-navy-200 hover:bg-navy-50"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-navy-100 px-2.5 py-0.5 text-xs font-medium text-navy-700">
          {categoryLabels[frontmatter.category] ?? frontmatter.category}
        </span>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColors[frontmatter.difficulty]}`}>
          {frontmatter.difficulty}
        </span>
      </div>

      <h2 className="text-lg font-semibold leading-snug text-navy-900 group-hover:text-navy-700">
        {frontmatter.title}
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
        {frontmatter.description}
      </p>

      <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
        <time dateTime={frontmatter.publishedAt}>{formattedDate}</time>
        {frontmatter.readingTime && (
          <>
            <span aria-hidden="true">·</span>
            <span>{frontmatter.readingTime} min read</span>
          </>
        )}
      </div>
    </Link>
  )
}
