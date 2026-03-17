import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs">
      {items.map((crumb, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={crumb.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="breadcrumb-separator size-3" />}
            {isLast || !crumb.href ? (
              <span className={isLast ? "text-[var(--gold-light)]" : "text-slate-500"}>
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="text-slate-500 transition-colors duration-200 hover:text-slate-300"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
