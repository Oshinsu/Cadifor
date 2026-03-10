import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteShell } from "@/components/site-shell";
import { SiteFooter } from "@/components/footer";
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
    default: "Cadifor — Haut Royaume d'Azeroth",
    template: "%s — Cadifor",
  },
  description:
    "Encyclopedie vivante du Haut Royaume de Cadifor. Quatre siecles de dynastie, de lore et de scenes canoniques.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${display.variable} ${body.variable} bg-stone-950 font-sans text-stone-100 antialiased`}
      >
        <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.12),_transparent_28%),radial-gradient(ellipse_at_bottom_right,_rgba(34,211,238,0.08),_transparent_22%),linear-gradient(180deg,_#0c0a09_0%,_#110e0c_42%,_#0c0a09_100%)]">
          <SiteShell />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
