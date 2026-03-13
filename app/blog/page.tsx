import type { Metadata } from "next"
import { getAllBlogPosts } from "@/lib/content/blog"
import { BlogCard } from "@/components/content/blog-card"
import { Section } from "@/components/layout/section"
import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Kitchen planning insights, design standards explained, and practical guides for homeowners, designers, and contractors.",
}

export default function BlogIndexPage() {
  const posts = getAllBlogPosts()

  return (
    <Section size="lg" background="white">
      <Container>
        <div className="mb-12">
          <Badge variant="accent" className="mb-5">Blog</Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-900">
            Kitchen planning insights
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">
            Practical articles on kitchen design, construction coordination, and
            industry standards — written for professionals and informed homeowners.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-slate-500">No posts published yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </Container>
    </Section>
  )
}
