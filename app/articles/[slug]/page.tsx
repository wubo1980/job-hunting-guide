import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleContent } from "@/components/article-content";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GuideCard } from "@/components/guide-card";
import { getCategories, getArticles, getArticleBySlugAsync, getRelatedArticles } from "@/lib/content/queries";
import { getArticleMetadata } from "@/lib/content/seo";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

/** Generates all article detail routes for static export. */
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

/** Generates article-specific metadata from the local content dataset. */
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlugAsync(slug);

  if (!article) {
    notFound();
  }

  const category = (await getCategories()).find(c => c.slug === article.category);

  if (!category) {
    notFound();
  }

  return getArticleMetadata(article, category);
}

/** Renders the article page with meta details, sources, and related guides. */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlugAsync(slug);

  if (!article) {
    notFound();
  }

  const categories = await getCategories();
  const category = categories.find(c => c.slug === article.category);

  if (!category) {
    notFound();
  }

  const relatedArticles = await getRelatedArticles(article, 3);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: `/${category.slug}`, label: category.name },
            { href: `/articles/${article.slug}`, label: article.title },
          ]}
        />
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
          <span>{article.publishedAt}</span>
          <span>{article.readingTime}</span>
          <span>{category.name}</span>
        </div>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {article.title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {article.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr),320px]">
        <article className="min-w-0">
          <ArticleContent article={article} />
        </article>
        <aside className="space-y-5">
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            Related reads
          </p>
          {relatedArticles.map((relatedArticle) => (
            <GuideCard
              key={relatedArticle.slug}
              article={relatedArticle}
              category={categories.find(c => c.slug === relatedArticle.category) ?? category}
            />
          ))}
        </aside>
      </div>
    </div>
  );
}
