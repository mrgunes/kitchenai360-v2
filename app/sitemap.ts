import type { MetadataRoute } from "next"
import { getAllBlogSlugs } from "@/lib/content/blog"
import { getAllGuideSlugs } from "@/lib/content/guides"

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kitchenai360.com"

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL,                    priority: 1.0,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/how-it-works`,  priority: 0.9,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/use-cases`,     priority: 0.9,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/standards`,     priority: 0.8,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/manufacturers`, priority: 0.8,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/waitlist`,      priority: 0.8,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/request-demo`,  priority: 0.8,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/blog`,          priority: 0.8,  changeFrequency: "weekly"  },
  { url: `${BASE_URL}/guides`,        priority: 0.8,  changeFrequency: "weekly"  },
  { url: `${BASE_URL}/faq`,           priority: 0.6,  changeFrequency: "monthly" },
  { url: `${BASE_URL}/about`,         priority: 0.5,  changeFrequency: "yearly"  },
  { url: `${BASE_URL}/contact`,       priority: 0.5,  changeFrequency: "yearly"  },
  { url: `${BASE_URL}/privacy`,       priority: 0.3,  changeFrequency: "yearly"  },
  { url: `${BASE_URL}/terms`,         priority: 0.3,  changeFrequency: "yearly"  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = getAllBlogSlugs()
  const guideSlugs = getAllGuideSlugs()

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const guideEntries: MetadataRoute.Sitemap = guideSlugs.map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...staticRoutes, ...blogEntries, ...guideEntries]
}
