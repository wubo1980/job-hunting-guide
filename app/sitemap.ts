import type { MetadataRoute } from "next";

import { getArticles, getCategories } from "@/lib/content/queries";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

/** Generates a sitemap from local categories and article routes. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const categoryRoutes: MetadataRoute.Sitemap = getCategories().map((category) => ({
    url: `${siteConfig.url}/${category.slug}`,
    lastModified: new Date("2026-06-01"),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const articleRoutes: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: `${siteConfig.url}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...categoryRoutes, ...articleRoutes];
}
