import Link from "next/link";

import type { HomeHeroContent } from "@/lib/content/types";

type HeroSectionProps = {
  content: HomeHeroContent;
};

/** Renders the homepage hero block with primary and secondary actions. */
export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_28%),rgba(15,23,42,0.78)] px-5 py-16 sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0 bg-grid-white/[0.05] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />
      <div className="relative max-w-4xl space-y-6">
        <p className="text-xs font-semibold tracking-[0.28em] text-emerald-300 uppercase">
          {content.eyebrow}
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {content.title}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          {content.description}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href={content.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            {content.primaryCta.label}
          </Link>
          <a
            href={content.secondaryCta.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/10"
          >
            {content.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
