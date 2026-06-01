import { CategoryOverview } from "@/components/category-overview";
import { GuideCard } from "@/components/guide-card";
import { HeroSection } from "@/components/hero-section";
import { categories, homeHeroContent } from "@/lib/content/data";
import { getLatestArticles } from "@/lib/content/queries";
import { getHomeMetadata } from "@/lib/content/seo";

export const metadata = getHomeMetadata();

/** Renders the homepage with hero copy, category navigation, and latest guides. */
export default function Home() {
  const latestArticles = getLatestArticles(4);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <HeroSection content={homeHeroContent} />
      <CategoryOverview categories={categories} />
      <section id="latest-articles" className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300 uppercase">
            Latest articles
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Start with the guides built for the current market.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {latestArticles.map((article) => {
            const category = categories.find(
              (currentCategory) => currentCategory.slug === article.category,
            );

            if (!category) {
              return null;
            }

            return (
              <GuideCard key={article.slug} article={article} category={category} />
            );
          })}
        </div>
      </section>
    </div>
  );
}
