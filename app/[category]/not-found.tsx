import Link from "next/link";

/** Renders a category-level not found state for invalid category slugs. */
export default function CategoryNotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 px-4 py-20 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.24em] text-emerald-300 uppercase">
        Category not found
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white">
        This guide track is not available.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-slate-400">
        Try one of the main editorial tracks instead of relying on an expired link.
      </p>
      <Link
        href="/"
        className="inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-300/50 hover:bg-white/10"
      >
        Return Home
      </Link>
    </div>
  );
}
