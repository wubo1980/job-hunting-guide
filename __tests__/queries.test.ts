import { describe, expect, it } from "vitest";

import {
  getArticleBySlug,
  getArticlesByCategory,
  getLatestArticles,
  getRelatedArticles,
} from "../lib/content/queries";

/** Verifies the latest-article query keeps the newest publication first. */
describe("content queries", () => {
  it("returns the newest articles first", () => {
    const latestArticles = getLatestArticles(3);

    expect(latestArticles).toHaveLength(3);
    expect(latestArticles[0]?.slug).toBe("2026-tech-layoffs-landscape-analysis");
  });

  /** Verifies category filtering only returns matching slugs. */
  it("filters articles by category slug", () => {
    const categoryArticles = getArticlesByCategory("ai-job-search");

    expect(categoryArticles.every((article) => article.category === "ai-job-search")).toBe(
      true,
    );
  });

  /** Verifies related articles exclude the source article and prefer relevant matches. */
  it("returns related articles without including the current article", () => {
    const article = getArticleBySlug("how-to-pass-an-ai-interview");

    expect(article).toBeDefined();

    const relatedArticles = getRelatedArticles(article!, 3);

    expect(relatedArticles).toHaveLength(3);
    expect(
      relatedArticles.some((relatedArticle) => relatedArticle.slug === article?.slug),
    ).toBe(false);
  });
});
