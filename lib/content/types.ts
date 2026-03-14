import { z } from "zod"

// ── Frontmatter schemas ──────────────────────────────────────────────────────

export const blogFrontmatterSchema = z.object({
  title:       z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Expected YYYY-MM-DD"),
  updatedAt:   z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  tags:        z.array(z.string()).default([]),
  readingTime: z.number().int().positive().optional(),
  author:      z.string().optional(),
})

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>

export const guideFrontmatterSchema = z.object({
  title:       z.string().min(1),
  description: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  updatedAt:   z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
  category:    z.enum(["planning", "standards", "workflow", "tools"]),
  difficulty:  z.enum(["beginner", "intermediate", "advanced"]),
  readingTime: z.number().int().positive().optional(),
  tags:        z.array(z.string()).default([]),
  author:      z.string().optional(),
})

export type GuideFrontmatter = z.infer<typeof guideFrontmatterSchema>

// ── Derived list types (no compiled content — for index pages) ────────────────

export interface BlogPostMeta {
  slug: string
  frontmatter: BlogFrontmatter
}

export interface GuideMeta {
  slug: string
  frontmatter: GuideFrontmatter
}
