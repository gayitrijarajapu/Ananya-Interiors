import Link from "next/link";
import type { ReactNode } from "react";
import { CookieSettingsButton } from "./cookie-consent";

const policies = [
  { href: "/privacy", label: "Privacy policy" },
  { href: "/terms", label: "Terms & conditions" },
  { href: "/cookies", label: "Cookie policy" },
];

export function LegalPage({ path, title, intro, children }: {
  path: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main id="main" className="wrap legal-page">
      <header>
        <h1>{title}</h1>
        <p>{intro}</p>
      </header>
      <nav className="legal-links" aria-label="Policies">
        {policies.map(({ href, label }) => (
          <Link key={href} href={href} aria-current={path === href ? "page" : undefined}>{label}</Link>
        ))}
        <CookieSettingsButton />
      </nav>
      <div className="legal-copy">{children}</div>
    </main>
  );
}
