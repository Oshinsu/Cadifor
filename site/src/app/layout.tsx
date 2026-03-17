import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteShell } from "@/components/site-shell";
import { SiteFooter } from "@/components/footer";
import { CardGlowTracker } from "@/components/card-glow";
import { ScrollRevealProvider } from "@/components/scroll-reveal";
import { BackToTop } from "@/components/back-to-top";
import "./globals.css";

const display = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    { path: "../fonts/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/manrope-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/manrope-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cadifor — Le Haut Royaume",
    template: "%s — Cadifor",
  },
  description: "Encyclopedie vivante du Haut Royaume de Cadifor. Quatre siecles de dynastie, 997 pages de lore, forgees dans le fer et la sagesse.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} bg-[#080a10] font-sans text-slate-200 antialiased`}
      >
        <div className="relative min-h-screen">
          {/* Cinematic ambient background */}
          <div
            className="pointer-events-none fixed inset-0 -z-10"
            style={{
              background: [
                "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(212,168,83,0.06), transparent 60%)",
                "radial-gradient(ellipse 40% 30% at 90% 80%, rgba(58,107,197,0.05), transparent 50%)",
                "radial-gradient(ellipse 50% 40% at 10% 60%, rgba(124,92,191,0.04), transparent 50%)",
                "linear-gradient(180deg, #080a10 0%, #0a0c14 30%, #080a10 100%)",
              ].join(", "),
            }}
          />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-[var(--gold)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--deep)]"
          >
            Aller au contenu
          </a>
          <SiteShell />
          <div id="main-content">
            {children}
          </div>
          <SiteFooter />
          <CardGlowTracker />
          <ScrollRevealProvider />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
