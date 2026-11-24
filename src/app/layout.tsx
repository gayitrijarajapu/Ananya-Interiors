import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Shop } from "@/components/shop";
import { SiteFooter } from "@/components/site-footer";
import { CookieConsent } from "@/components/cookie-consent";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import "./globals.css";
import "./editorial.css";
import "./contact.css";
import "./policies.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { default: `${site.name} | Interiors, Furniture & Lighting`, template: `%s | ${site.name}` },
  description: `Discover ${site.name}, a collection of tactile furniture and sculptural lighting for everyday living.`,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Shop>{children}<SiteFooter /></Shop>
        <CookieConsent />
      </body>
    </html>
  );
}
