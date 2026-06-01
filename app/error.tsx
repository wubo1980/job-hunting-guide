"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

/** Renders the global error boundary fallback for unexpected runtime failures. */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center gap-6 px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.24em] text-cyan-300 uppercase">
        Unexpected error
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Something broke while rendering this page.
      </h1>
      <p className="max-w-2xl text-base leading-8 text-slate-400">
        {error.message || "Try reloading the route or head back to the homepage."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-linear-to-r from-emerald-400 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110"
      >
        Try Again
      </button>
    </div>
  );
}
