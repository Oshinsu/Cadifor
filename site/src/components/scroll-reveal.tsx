"use client";

import { useEffect } from "react";

/**
 * Intersection Observer that adds reveal animations to elements
 * with [data-reveal] attribute. Much smoother than CSS-only animations
 * because it triggers on scroll visibility, not page load.
 */
export function ScrollRevealProvider() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    const elements = document.querySelectorAll("[data-reveal]");
    for (const el of elements) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return null;
}
