import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cadifor",
  description: "Application editoriale et encyclopedique pour le corpus Cadifor.",
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
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_22%),linear-gradient(180deg,_#0c0a09_0%,_#120f0d_42%,_#0c0a09_100%)]">
          <SiteShell />
          {children}
        </div>
      </body>
    </html>
  );
}
