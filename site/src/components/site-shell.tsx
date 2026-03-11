"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";
import { Command, Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/scenes", label: "Scenes" },
  { href: "/encyclopedie", label: "Encyclopedie" },
  { href: "/chronologie", label: "Chronologie" },
  { href: "/dossiers", label: "Dossiers" },
];

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export function SiteShell() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  // Scroll-aware header
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cmd+K search shortcut
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        router.push("/recherche");
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [router]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 border-b bg-[#0a0908]/80 backdrop-blur-2xl backdrop-saturate-150 transition-[border-color,box-shadow] duration-300 ${
          scrolled
            ? "border-[var(--gold)]/[0.08] shadow-[0_1px_12px_rgba(0,0,0,0.4)]"
            : "border-white/[0.04]"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="group flex items-center gap-3.5">
            <div className="flex size-9 items-center justify-center rounded-lg border border-[var(--gold)]/25 bg-[var(--gold)]/[0.06] transition-all duration-300 group-hover:border-[var(--gold)]/40 group-hover:bg-[var(--gold)]/[0.1]">
              <span className="font-serif text-base font-bold text-[var(--gold)]">C</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-serif text-[1.05rem] tracking-[0.15em] text-stone-100">CADIFOR</p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-stone-500">Le Haut Royaume</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href, pathname);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-lg px-3.5 py-2 text-[0.8rem] tracking-[0.08em] transition-all duration-300 hover:bg-white/[0.04] hover:text-stone-100 ${
                    active ? "text-[var(--gold-light)]" : "text-stone-400"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-2 -bottom-[17px] h-[2px] rounded-full bg-[var(--gold)]" />
                  )}
                </Link>
              );
            })}
            <div className="mx-2 h-4 w-px bg-white/[0.06]" />
            <Link
              href="/recherche"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-[0.8rem] tracking-[0.08em] text-stone-500 transition-all duration-300 hover:bg-white/[0.04] hover:text-stone-100"
            >
              <Search className="size-3.5" />
              <kbd className="hidden items-center gap-0.5 rounded border border-white/[0.08] bg-white/[0.03] px-1.5 py-0.5 text-[10px] text-stone-600 lg:inline-flex">
                <Command className="size-2.5" />K
              </kbd>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/[0.06] p-2.5 text-stone-400 transition hover:border-[var(--border-gold)] hover:text-stone-100 md:hidden"
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
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="sticky top-[65px] z-40 overflow-hidden border-b border-white/[0.04] bg-[#0a0908]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-0.5 px-6 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[0.84rem] text-stone-300 transition hover:bg-white/[0.04] hover:text-stone-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/recherche"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-[0.84rem] text-[var(--gold)] transition hover:bg-white/[0.04]"
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
