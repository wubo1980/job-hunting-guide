import type { Article } from "@/lib/content/types";

type ArticleContentProps = {
  article: Article;
};

/** Renders structured article sections plus a source list and final CTA. */
export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <div className="space-y-12">
      {article.sections.map((section) => (
        <section key={section.title} className="space-y-5">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {section.title}
          </h2>
          <div className="space-y-4">
            {section.content.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>
          {section.bullets ? (
            <ul className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-200">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {section.checklist ? (
            <div className="rounded-[1.5rem] border border-cyan-400/20 bg-cyan-400/5 p-5">
              <p className="mb-4 text-xs font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                Checklist
              </p>
              <ul className="grid gap-3 text-sm leading-7 text-slate-200">
                {section.checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-emerald-300">[ ]</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </section>
      ))}

      <section className="space-y-5 rounded-[1.75rem] border border-emerald-400/20 bg-emerald-400/8 p-6">
        <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300 uppercase">
          Community CTA
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          {article.cta.heading}
        </h2>
        <p className="text-base leading-8 text-slate-300">{article.cta.body}</p>
        <a
          href={article.cta.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          {article.cta.label}
        </a>
      </section>

      <section className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.24em] text-slate-400 uppercase">
          Sources
        </p>
        <ul className="grid gap-3">
          {article.sources.map((source) => (
            <li
              key={source.url}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-300"
            >
              <a
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white transition hover:text-emerald-200"
              >
                {source.label}
              </a>
              {source.note ? <p className="mt-2 text-slate-400">{source.note}</p> : null}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
