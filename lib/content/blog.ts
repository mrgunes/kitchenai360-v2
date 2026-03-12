import fs from "fs"
import path from "path"
import { blogFrontmatterSchema, type BlogFrontmatter, type BlogPostMeta } from "./types"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

// ── Minimal frontmatter parser ────────────────────────────────────────────────
// Parses YAML-style frontmatter from the leading --- block.
// Handles string, number, and array (- item) values.
function parseFrontmatter(source: string): { frontmatter: Record<string, unknown>; content: string } {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { frontmatter: {}, content: source }

  const raw = match[1]
  const content = match[2]
  const frontmatter: Record<string, unknown> = {}

  for (const line of raw.split(/\r?\n/)) {
    const colonIdx = line.indexOf(":")
    if (colonIdx === -1) continue

    const key = line.slice(0, colonIdx).trim()
    const value = line.slice(colonIdx + 1).trim()

    if (value === "") {
      // Could be an array — look ahead (simple single-pass, not needed for our schema)
      frontmatter[key] = []
      continue
    }

    // Number
    if (/^\d+$/.test(value)) {
      frontmatter[key] = parseInt(value, 10)
      continue
    }

    // Inline array: [a, b, c]
    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
      continue
    }

    // Quoted string
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      frontmatter[key] = value.slice(1, -1)
      continue
    }

    frontmatter[key] = value
  }

  return { frontmatter, content }
}

// ── Public API ────────────────────────────────────────────────────────────────

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getAllBlogSlugs()
  const posts: BlogPostMeta[] = []

  for (const slug of slugs) {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, "utf8")
    const { frontmatter } = parseFrontmatter(source)
    const result = blogFrontmatterSchema.safeParse(frontmatter)
    if (!result.success) {
      console.warn(`[content/blog] Invalid frontmatter in ${slug}.mdx:`, result.error.issues)
      continue
    }
    posts.push({ slug, frontmatter: result.data })
  }

  // Sort newest first
  return posts.sort((a, b) =>
    b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt),
  )
}

export function getBlogPost(slug: string): { frontmatter: BlogFrontmatter; source: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { frontmatter, content } = parseFrontmatter(raw)
  const result = blogFrontmatterSchema.safeParse(frontmatter)
  if (!result.success) {
    console.warn(`[content/blog] Invalid frontmatter in ${slug}.mdx:`, result.error.issues)
    return null
  }

  // Re-include the frontmatter block for next-mdx-remote (it handles stripping it)
  return { frontmatter: result.data, source: raw }
}
