"use client";
import { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageSquare, X } from "lucide-react";
import {
  CONSENT_KEY,
  OPEN_PREFERENCES,
  defaults,
  readPreferences,
  savePreferences,
  type Preferences,
} from "@/lib/cookie-consent";
export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="cookie-reopen"
      onClick={() => window.dispatchEvent(new Event(OPEN_PREFERENCES))}
    >
      Cookie settings
    </button>
  );
}
const categories = [
  {
    key: "functional",
    title: "Functional",
    text: "Optional site conveniences. No optional functional tools are currently installed.",
  },
  {
    key: "analytics",
    title: "Analytics",
    text: "Website traffic and performance measurement. No analytics tools are currently installed.",
  },
  {
    key: "marketing",
    title: "Marketing",
    text: "Advertising and campaign measurement. No advertising trackers are currently installed.",
  },
] as const;
const acceptAll: Preferences = {
  essential: true,
  functional: true,
  analytics: true,
  marketing: true,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(true);
  const [preferences, setPreferences] = useState<Preferences>(defaults);
  const current = useRef<Preferences | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    function sync() {
      current.current = readPreferences();
      setVisible(!current.current);
    }

    function open() {
      setPreferences(current.current ?? defaults);
      if (!dialog.current?.open) dialog.current?.showModal();
    }

    function onStorage(event: StorageEvent) {
      if (event.key === CONSENT_KEY || event.key === null) sync();
    }

    sync();
    window.addEventListener(OPEN_PREFERENCES, open);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(OPEN_PREFERENCES, open);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  function choose(next: Preferences) {
    current.current = next;
    savePreferences(next);
    setVisible(false);
    dialog.current?.close();
  }

  return (
    <>
      <div className="site-corner-actions">
        {visible && (
          <aside className="cookie-banner" aria-label="Cookie notice">
            <div className="cookie-intro">
              <h2>Cookies</h2>
              <p>Browser storage remembers your preferences and saved pieces. See our <Link href="/cookies">cookie policy</Link>.</p>
            </div>
            <div className="cookie-actions">
              <button type="button" className="cookie-primary" onClick={() => choose(acceptAll)}>Accept</button>
              <button type="button" onClick={() => choose(defaults)}>Decline</button>
            </div>
          </aside>
        )}
        <Link className="project-shortcut" href="/contact#quote-form">
          <MessageSquare size={18} aria-hidden /> Plan your project
        </Link>
      </div>

      <dialog ref={dialog} className="cookie-settings" aria-labelledby="cookie-settings-title">
        <div className="cookie-dialog-heading">
          <h2 id="cookie-settings-title">Cookie settings</h2>
          <button type="button" className="icon-button" aria-label="Close cookie settings" onClick={() => dialog.current?.close()}><X size={20} aria-hidden /></button>
        </div>
        <p className="cookie-policy-links">Optional categories are off by default. See our <Link href="/cookies">Cookie policy</Link> and <Link href="/privacy">Privacy policy</Link>.</p>
        <div className="cookie-categories">
          <label>
            <input type="checkbox" checked disabled />
            <span><b>Essential</b><small>Always active. Remembers your cookie choices and saved pieces on this device.</small></span>
          </label>
          {categories.map(({ key, title, text }) => (
            <label key={key}>
              <input type="checkbox" checked={preferences[key]} onChange={() => setPreferences((value) => ({ ...value, [key]: !value[key] }))} />
              <span><b>{title}</b><small>{text}</small></span>
            </label>
          ))}
        </div>
        <div className="cookie-actions">
          <button type="button" onClick={() => choose(defaults)}>Decline optional</button>
          <button type="button" onClick={() => choose(acceptAll)}>Accept all</button>
          <button type="button" className="cookie-primary" onClick={() => choose(preferences)}>Save choices</button>
        </div>
      </dialog>
    </>
  );
}
