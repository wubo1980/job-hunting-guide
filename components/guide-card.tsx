import Link from "next/link";

import type { Article, Category } from "@/lib/content/types";

type GuideCardProps = {
  article: Article;
  category: Category;
};

/** Renders a reusable article preview card across lists and related content. */
export function GuideCard({ article, category }: GuideCardProps) {
  return (
    <article className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.07]">
      <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
        <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] tracking-[0.18em] uppercase">
          {category.name}
        </span>
        <span>{article.publishedAt}</span>
        <span>{article.readingTime}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">
        <Link href={`/articles/${article.slug}`} className="hover:text-emerald-200">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-400">{article.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
