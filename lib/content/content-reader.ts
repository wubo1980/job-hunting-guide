/**
 * content-reader.ts — 从 content/ JSON 目录读取文章数据的统一入口
 *
 * 替代旧的 TS import 方式（lib/content/data.ts），使用 fs.readFile 读取 JSON。
 * 这样新文章部署时只需写入 JSON 文件，无需修改 TypeScript 代码。
 */
import { promises as fs } from "fs";
import path from "path";

import type { Article, Category, HomeHeroContent } from "@/lib/content/types";

/** content/ 目录的绝对路径 */
const CONTENT_DIR = path.join(process.cwd(), "content");

/** 读取文章索引 */
export async function getIndex(): Promise<{ version: string; updatedAt: string; articles: ArticleIndexEntry[] }> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "index.json"), "utf-8");
  return JSON.parse(raw);
}

/** 文章索引条目（精简字段，不含正文） */
export type ArticleIndexEntry = {
  slug: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
};

/** 读取单篇文章全部数据 */
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const raw = await fs.readFile(path.join(CONTENT_DIR, "articles", `${slug}.json`), "utf-8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/** 读取所有分类 */
export async function getCategories(): Promise<Category[]> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "categories.json"), "utf-8");
  return JSON.parse(raw);
}

/** 按 slug 查找分类 */
export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug);
}

/** 读取首页 Hero 内容 */
export async function getHomeHero(): Promise<HomeHeroContent> {
  const raw = await fs.readFile(path.join(CONTENT_DIR, "hero.json"), "utf-8");
  return JSON.parse(raw);
}
