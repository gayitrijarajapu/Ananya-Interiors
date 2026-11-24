import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="not-found">
      <div className="wrap">
        <p className="eyebrow">Error 404</p>
        <h1>Page not found.</h1>
        <p className="not-found-description">The page you’re looking for may have moved or the address may be incorrect.</p>
        <div className="not-found-actions">
          <Link className="button" href="/">Back to homepage</Link>
          <Link className="text-link" href="/collection">Browse the collection</Link>
        </div>
      </div>
    </main>
  );
}
