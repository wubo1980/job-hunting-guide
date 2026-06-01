import Link from "next/link";

type Breadcrumb = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

/** Renders a compact breadcrumb trail for article detail pages. */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="text-white">{item.label}</span>
              ) : (
                <Link href={item.href} className="transition hover:text-emerald-200">
                  {item.label}
                </Link>
              )}
              {!isLast ? <span>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
