import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { site, whatsappChatUrl } from "@/lib/site";
import { BrandLogo } from "./brand-logo";
import { WhatsAppIcon } from "./whatsapp-icon";
import { CookieSettingsButton } from "./cookie-consent";

const socialLinks = [
  { label: "Instagram", icon: Instagram, href: process.env.NEXT_PUBLIC_INSTAGRAM_URL },
  { label: "Facebook", icon: Facebook, href: process.env.NEXT_PUBLIC_FACEBOOK_URL },
  { label: "YouTube", icon: Youtube, href: process.env.NEXT_PUBLIC_YOUTUBE_URL },
];

export function SiteFooter() {
  const socials = socialLinks.filter(({ href }) => Boolean(href));

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-columns">
          <div className="footer-brand">
            <BrandLogo placement="footer" />
            <p>A quieter, brighter everyday.</p>
            <a className="footer-email" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <nav aria-labelledby="footer-shop">
            <h2 id="footer-shop">Shop</h2>
            <Link href="/collection">Furniture</Link>
            <Link href="/#collection">Lighting</Link>
            <Link href="/collection#collection">Full collection</Link>
          </nav>
          <nav aria-labelledby="footer-about">
            <h2 id="footer-about">About</h2>
            <Link href="/about">Our story</Link>
            <Link href="/#materials">Materials</Link>
            <Link href="/#interiors">Interior design</Link>
            <Link href="/contact">Contact us</Link>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <nav className="footer-policies" aria-label="Policies">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms &amp; conditions</Link>
            <Link href="/cookies">Cookie policy</Link>
            <CookieSettingsButton />
          </nav>
            <nav aria-label="Social media and messaging" className="footer-socials">
              <a href={whatsappChatUrl} className="footer-whatsapp" aria-label="Chat with Ananya Interiors on WhatsApp"><WhatsAppIcon /></a>
              {socials.map(({ href, icon: Icon, label }) => <a key={label} href={href} aria-label={label}><Icon size={17} aria-hidden /></a>)}
            </nav>
        </div>
      </div>
    </footer>
  );
}
