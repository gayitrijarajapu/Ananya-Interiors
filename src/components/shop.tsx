"use client";

import { Bookmark, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { formatPrice, pieces } from "@/lib/catalog";
import { BrandLogo } from "./brand-logo";

const savedPiecesKey = "ananyainteriors-saved";

type Panel = "Saved pieces" | "Menu";

const SavedContext = createContext<{ saved: string[]; toggle: (slug: string) => void }>({
  saved: [],
  toggle: () => {},
});

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Shop({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [outsideHeroPath, setOutsideHeroPath] = useState<string | null>(null);

  useLayoutEffect(() => {
    const heroElement = document.querySelector<HTMLElement>("main[data-page-hero], main [data-page-hero]");
    const headerElement = header.current;
    if (!heroElement || !headerElement) return;

    const update = () => {
      const heroBounds = heroElement.getBoundingClientRect();
      const headerBounds = headerElement.getBoundingClientRect();
      const overHero = heroBounds.top < headerBounds.bottom && heroBounds.bottom > headerBounds.bottom;
      setOutsideHeroPath(overHero ? null : pathname);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(heroElement);
    observer.observe(headerElement);
    return () => {
      window.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, [pathname]);
  const [saved, setSaved] = useState<string[]>([]);
  const [savedChanged, setSavedChanged] = useState(false);
  const [panel, setPanel] = useState<Panel>("Saved pieces");
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    try {
      const stored: unknown = JSON.parse(localStorage.getItem(savedPiecesKey) ?? localStorage.getItem("stillform-saved") ?? "[]");
      if (Array.isArray(stored)) {
        setSaved(pieces.map(({ slug }) => slug).filter((slug) => stored.includes(slug)));
      }
    } catch {
      // Storage may be unavailable in private or restricted sessions.
    }
  }, []);

  useEffect(() => {
    if (!savedChanged) return;
    try {
      localStorage.setItem(savedPiecesKey, JSON.stringify(saved));
    } catch {
      // Keep the current selection available in memory.
    }
  }, [saved, savedChanged]);

  function toggle(slug: string) {
    setSavedChanged(true);
    setSaved((current) => current.includes(slug)
      ? current.filter((item) => item !== slug)
      : [...current, slug]);
  }

  function open(next: Panel) {
    setPanel(next);
    dialog.current?.showModal();
  }

  const results = pieces.filter((piece) => saved.includes(piece.slug));

  return (
    <SavedContext.Provider value={{ saved, toggle }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header
        ref={header}
        className="site-header"
        data-outside-hero={outsideHeroPath === pathname ? "true" : undefined}
      >
        <div className="wrap header-inner">
          <BrandLogo placement="header" />
          <nav className="desktop-nav" aria-label="Main">
            {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button" type="button" aria-label={`Saved pieces (${saved.length})`} onClick={() => open("Saved pieces")}>
              <ShoppingBag size={20} />{saved.length > 0 && <span className="saved-count">{saved.length}</span>}
            </button>
            <button className="icon-button menu-button" type="button" aria-label="Menu" onClick={() => open("Menu")}><Menu size={23} /></button>
          </div>
        </div>
      </header>
      {children}
      <dialog ref={dialog} className="shop-dialog" aria-labelledby="dialog-title">
        <div className="dialog-heading">
          <h2 id="dialog-title">{panel}</h2>
          <button className="icon-button" type="button" aria-label="Close" onClick={() => dialog.current?.close()}><X size={22} /></button>
        </div>
        {panel === "Menu" ? (
          <nav aria-label="Mobile" className="dialog-links">
            {links.map((link) => <Link key={link.href} href={link.href} onClick={() => dialog.current?.close()}>{link.label}</Link>)}
          </nav>
        ) : results.length ? (
          <ul className="dialog-results">
            {results.map((piece) => (
              <li key={piece.slug}>
                <Link href={`/pieces/${piece.slug}`} onClick={() => dialog.current?.close()}>{piece.name}</Link>
                <span>{formatPrice(piece.price)}</span>
              </li>
            ))}
          </ul>
        ) : <p role="status">Save a piece from the collection to find it here.</p>}
      </dialog>
    </SavedContext.Provider>
  );
}

export function SavePiece({ slug, name, withLabel = false }: { slug: string; name: string; withLabel?: boolean }) {
  const { saved, toggle } = useContext(SavedContext);
  const isSaved = saved.includes(slug);

  return (
    <button
      className={withLabel ? "button secondary-button" : "icon-button card-save"}
      type="button"
      aria-label={`Save ${name}`}
      aria-pressed={isSaved}
      onClick={() => toggle(slug)}
    >
      <Bookmark size={18} fill={isSaved ? "currentColor" : "none"} />
      {withLabel && (isSaved ? "Saved to your pieces" : "Save this piece")}
    </button>
  );
}
