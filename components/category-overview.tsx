import Link from "next/link";
import { BriefcaseBusiness, Brain, Cpu, RefreshCcw } from "lucide-react";

import type { Category } from "@/lib/content/types";

type CategoryOverviewProps = {
  categories: Category[];
};

const iconMap = {
  cpu: Cpu,
  refreshCcw: RefreshCcw,
  brain: Brain,
  briefcaseBusiness: BriefcaseBusiness,
} as const;

/** Renders the homepage category grid with icons and descriptions. */
export function CategoryOverview({ categories }: CategoryOverviewProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">
          Four practical tracks
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Start where your pressure is highest.
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          const Icon = iconMap[category.icon];

          return (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/35 hover:bg-white/[0.07]"
            >
              <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-slate-950/70 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{category.name}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                {category.shortDescription}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
