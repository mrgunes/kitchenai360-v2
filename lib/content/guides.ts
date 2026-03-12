import fs from "fs"
import path from "path"
import { guideFrontmatterSchema, type GuideFrontmatter, type GuideMeta } from "./types"

const GUIDES_DIR = path.join(process.cwd(), "content/guides")

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
      frontmatter[key] = []
      continue
    }

    if (/^\d+$/.test(value)) {
      frontmatter[key] = parseInt(value, 10)
      continue
    }

    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
      continue
    }

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      frontmatter[key] = value.slice(1, -1)
      continue
    }

    frontmatter[key] = value
  }

  return { frontmatter, content }
}

export function getAllGuideSlugs(): string[] {
  if (!fs.existsSync(GUIDES_DIR)) return []
  return fs
    .readdirSync(GUIDES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}

export function getAllGuides(): GuideMeta[] {
  const slugs = getAllGuideSlugs()
  const guides: GuideMeta[] = []

  for (const slug of slugs) {
    const filePath = path.join(GUIDES_DIR, `${slug}.mdx`)
    const source = fs.readFileSync(filePath, "utf8")
    const { frontmatter } = parseFrontmatter(source)
    const result = guideFrontmatterSchema.safeParse(frontmatter)
    if (!result.success) {
      console.warn(`[content/guides] Invalid frontmatter in ${slug}.mdx:`, result.error.issues)
      continue
    }
    guides.push({ slug, frontmatter: result.data })
  }

  return guides.sort((a, b) =>
    b.frontmatter.publishedAt.localeCompare(a.frontmatter.publishedAt),
  )
}

export function getGuide(slug: string): { frontmatter: GuideFrontmatter; source: string } | null {
  const filePath = path.join(GUIDES_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf8")
  const { frontmatter } = parseFrontmatter(raw)
  const result = guideFrontmatterSchema.safeParse(frontmatter)
  if (!result.success) {
    console.warn(`[content/guides] Invalid frontmatter in ${slug}.mdx:`, result.error.issues)
    return null
  }

  return { frontmatter: result.data, source: raw }
}
