import Link from "next/link"
import type { BlogPostMeta } from "@/lib/content/types"

interface BlogCardProps {
  post: BlogPostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter } = post

  const formattedDate = new Date(frontmatter.publishedAt + "T00:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-150 hover:border-navy-200 hover:bg-navy-50"
    >
      {frontmatter.tags.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {frontmatter.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent-50 px-2.5 py-0.5 text-xs font-medium text-accent-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

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
