import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

/** Renders the global footer with supporting links and a community CTA. */
export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:px-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold tracking-[0.22em] text-emerald-300 uppercase">
            Stay practical
          </p>
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-white">
            A sharper search strategy matters more than more applications.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-400">
            {siteConfig.description}
          </p>
          <a
            href={siteConfig.discordUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/10 px-5 py-3 text-sm font-medium text-emerald-200 transition hover:border-emerald-300/60 hover:bg-emerald-400/15"
          >
            Join The Discord
          </a>
        </div>
        <div className="grid gap-3 text-sm text-slate-400">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-400/30 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
