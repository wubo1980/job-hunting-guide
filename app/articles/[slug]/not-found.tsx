import Link from "next/link";

/** Renders an article-level not found state for invalid article slugs. */
export default function ArticleNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">
        Article not found
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        That guide is not part of the current archive.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-slate-400">
        The article link may be outdated, or it was never included in this static build.
      </p>
      <Link
        href="/"
        className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/10"
      >
        Browse Latest Articles
      </Link>
    </div>
  );
}
