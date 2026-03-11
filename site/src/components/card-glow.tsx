"use client";

import { useEffect } from "react";

/**
 * Tracks mouse position on .card-imperial elements
 * and sets --mouse-x / --mouse-y CSS custom properties
 * for the radial glow effect defined in globals.css.
 */
export function CardGlowTracker() {
  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      const target = (e.target as HTMLElement).closest<HTMLElement>(".card-imperial");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      target.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    }
    document.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => document.removeEventListener("pointermove", onPointerMove);
  }, []);

  return null;
}
