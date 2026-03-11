"use client";

import { useEffect, useState } from "react";

/**
 * A slim progress bar at the top of the viewport that fills
 * as the user scrolls through an article.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      setProgress(Math.min(100, (scrollTop / docHeight) * 100));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
