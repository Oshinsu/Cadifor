"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/lib/toc";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  return (
    <nav className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-stone-600">
        Sommaire
      </p>
      <div className="space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`toc-link block truncate text-xs transition-colors duration-200 ${
              item.level === 3 ? "ml-3" : ""
            } ${
              activeId === item.id
                ? "active text-[var(--gold-light)]"
                : "text-stone-500 hover:text-stone-300"
            }`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
