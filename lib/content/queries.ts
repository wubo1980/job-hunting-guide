/**
 * queries.ts — 文章/分类查询层
 *
 * 从 content/ JSON 目录读取数据（通过 content-reader），
 * 而不是从 data.ts 的 TypeScript 数组 import。
 *
 * 所有函数均为 async，支持在 async 组件/函数中调用。
 */
import type { Article, Category } from "@/lib/content/types";
import { getIndex, getArticleBySlug, getCategories, getCategoryBySlug as readerGetCategory, ArticleIndexEntry } from "@/lib/content/content-reader";

/** Returns every category in the order curated for the homepage and nav. */
export async function getCategoriesAsync(): Promise<Category[]> {
  return getCategories();
}

/** Finds a category by slug for route rendering and metadata generation. */
export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return readerGetCategory(slug);
}

/** Returns all articles sorted by newest publication date first. */
export async function getArticles(): Promise<Article[]> {
  const index = await getIndex();
  // Load full articles in parallel
  const articles = await Promise.all(
    index.articles.map((entry) => getArticleBySlug(entry.slug))
  );
  return articles
    .filter((a): a is Article => a !== null)
    .sort(
      (left, right) =>
        new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime(),
    );
}

/** Returns the latest articles for the homepage and spotlight sections. */
export async function getLatestArticles(limit = 4): Promise<Article[]> {
  const all = await getArticles();
  return all.slice(0, limit);
}

/** Returns articles belonging to a single category slug. */
export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  const all = await getArticles();
  return all.filter((article) => article.category === categorySlug);
}

/** Finds an article by slug for the article detail page. */
export async function getArticleBySlugAsync(slug: string): Promise<Article | undefined> {
  return (await getArticleBySlug(slug)) ?? undefined;
}

/** Returns related articles by preferring same-category matches, then shared tags. */
export async function getRelatedArticles(article: Article, limit = 3): Promise<Article[]> {
  const tagSet = new Set(article.tags);
  const all = await getArticles();

  return all
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
      if (right.score !== left.score) return right.score - left.score;
      return (
        new Date(right.candidate.publishedAt).getTime() -
        new Date(left.candidate.publishedAt).getTime()
      );
    })
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

// ── 同步版本（用于没有 async 的上下文，但尽量用 async 版本） ──
// 这些同步版本在构建时直接 import 旧 data.ts，保持向后兼容
// 当 content/ 目录完全稳定后可删除
export { getCategories, getCategoryBySlug as getCategoryBySlugSync } from "@/lib/content/content-reader";

// ── 导出 ArticleIndexEntry 类型 ──
export type { ArticleIndexEntry };
