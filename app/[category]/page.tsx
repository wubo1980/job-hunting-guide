import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BriefcaseBusiness, Brain, Cpu, RefreshCcw } from "lucide-react";

import { GuideCard } from "@/components/guide-card";
import { getArticlesByCategory, getCategories, getCategoryBySlug } from "@/lib/content/queries";
import { getCategoryMetadata } from "@/lib/content/seo";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

const iconMap = {
  cpu: Cpu,
  refreshCcw: RefreshCcw,
  brain: Brain,
  briefcaseBusiness: BriefcaseBusiness,
} as const;

export const dynamicParams = false;

/** Generates all supported category routes for static export. */
export function generateStaticParams() {
  return getCategories().map((category) => ({
    category: category.slug,
  }));
}

/** Generates route-level metadata for each category page. */
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return getCategoryMetadata(category);
}

/** Renders a category landing page with a hero summary and article list. */
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByCategory(category.slug);
  const Icon = iconMap[category.icon];

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <section className="rounded-[2rem] border border-white/10 bg-white/5 p-6 sm:p-8">
        <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-emerald-300">
          <Icon className="h-6 w-6" />
        </div>
        <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300 uppercase">
          {category.name}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {category.heroTitle}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {category.heroDescription}
        </p>
      </section>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">
            Articles
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Tactical reading for this track
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {categoryArticles.map((article) => (
            <GuideCard key={article.slug} article={article} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
}
