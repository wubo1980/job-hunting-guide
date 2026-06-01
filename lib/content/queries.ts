import { articles, categories } from "@/lib/content/data";
import type { Article, Category } from "@/lib/content/types";

/** Returns every category in the order curated for the homepage and nav. */
export function getCategories(): Category[] {
  return categories;
}

/** Finds a category by slug for route rendering and metadata generation. */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

/** Returns all articles sorted by newest publication date first. */
export function getArticles(): Article[] {
  return [...articles].sort(
    (left, right) =>
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
  );
}

/** Returns the latest articles for the homepage and spotlight sections. */
export function getLatestArticles(limit = 4): Article[] {
  return getArticles().slice(0, limit);
}

/** Returns articles belonging to a single category slug. */
export function getArticlesByCategory(categorySlug: string): Article[] {
  return getArticles().filter((article) => article.category === categorySlug);
}

/** Finds an article by slug for the article detail page. */
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Returns related articles by preferring same-category matches, then shared tags. */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const tagSet = new Set(article.tags);

  return getArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => {
      const sharedTagCount = candidate.tags.filter((tag) => tagSet.has(tag)).length;
      const sameCategoryScore = candidate.category === article.category ? 2 : 0;

      return {
        candidate,
        score: sameCategoryScore + sharedTagCount,
      };
    })
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return (
        new Date(right.candidate.publishedAt).getTime() -
        new Date(left.candidate.publishedAt).getTime()
      );
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}
