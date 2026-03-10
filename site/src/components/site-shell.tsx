"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Lenis from "lenis";
import { Menu, ScrollText, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/dossiers", label: "Dossiers" },
  { href: "/scenes", label: "Scenes" },
  { href: "/encyclopedie", label: "Encyclopedie" },
  { href: "/chronologie", label: "Chronologie" },
  { href: "/canon/progression-pdf", label: "Progression PDF" },
];

export function SiteShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-white/8 bg-stone-950/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-3 text-stone-100">
            <div className="flex size-10 items-center justify-center rounded-full border border-amber-300/40 bg-amber-300/10">
              <ScrollText className="size-4 text-amber-300" />
            </div>
            <div>
              <p className="font-serif text-lg tracking-[0.18em] uppercase">Cadifor</p>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-400">
                Editorial + Encyclopedique
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.2em] text-stone-400 transition hover:text-stone-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/recherche"
              className="rounded-full border border-white/10 p-2 text-stone-400 transition hover:border-amber-300/30 hover:text-stone-100"
            >
              <Search className="size-4" />
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-full border border-white/10 p-2 text-stone-300 transition hover:border-amber-300/30 md:hidden"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="sticky top-[73px] z-40 overflow-hidden border-b border-white/8 bg-stone-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-stone-300 transition hover:bg-white/5 hover:text-stone-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/recherche"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm uppercase tracking-[0.2em] text-amber-200 transition hover:bg-white/5"
              >
                Recherche
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
