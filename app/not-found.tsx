import Link from "next/link";

/** Renders the global 404 page for unknown static routes. */
export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300 uppercase">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        That page does not exist.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-slate-400">
        The route may have moved, expired, or never existed in the static export.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
        >
          Back To Home
        </Link>
        <Link
          href="/ai-job-search"
          className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/10"
        >
          Browse Guides
        </Link>
      </div>
    </div>
  );
}
