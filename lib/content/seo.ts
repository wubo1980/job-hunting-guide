import type { Metadata } from "next";

import type { Article, Category } from "@/lib/content/types";
import { sharedKeywords, siteConfig } from "@/lib/site-config";

/** Formats a route path into an absolute URL for metadata and sitemap use. */
function toAbsoluteUrl(path: string): string {
  return new URL(path, siteConfig.url).toString();
}

/** Builds shared metadata fields for all pages on the site. */
function createBaseMetadata(
  title: string,
  description: string,
  path: string,
  keywords: string[],
): Metadata {
  const absoluteUrl = toAbsoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    keywords,
    openGraph: {
      title,
      description,
      url: absoluteUrl,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Returns the homepage metadata with site-level positioning terms. */
export function getHomeMetadata(): Metadata {
  return createBaseMetadata(
    "Job Hunting Guide For The 2026 AI Job Market",
    siteConfig.description,
    "/",
    sharedKeywords,
  );
}

/** Returns metadata for a specific category page. */
export function getCategoryMetadata(category: Category): Metadata {
  return createBaseMetadata(
    `${category.name} | ${siteConfig.name}`,
    category.heroDescription,
    `/${category.slug}`,
    [...sharedKeywords, category.name, ...category.shortDescription.split(" ")],
  );
}

/** Returns metadata for a specific article page.
 *  Uses absolute title to bypass the root layout template suffix,
 *  keeping the <title> tag exactly at the article title length (50-60 chars). */
export function getArticleMetadata(
  article: Article,
  category: Category,
): Metadata {
  return {
    ...createBaseMetadata(
      article.title,
      article.description,
      `/articles/${article.slug}`,
      [...sharedKeywords, category.name, ...article.tags],
    ),
    title: {
      absolute: article.title,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: toAbsoluteUrl(`/articles/${article.slug}`),
      siteName: siteConfig.name,
      type: "article",
      publishedTime: new Date(article.publishedAt).toISOString(),
      tags: article.tags,
    },
  };
}
