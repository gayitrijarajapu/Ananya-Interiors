import type { MetadataRoute } from "next";
import { pieces } from "@/lib/catalog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/collection", "/about", "/contact", "/privacy", "/terms", "/cookies", ...pieces.map(({ slug }) => `/pieces/${slug}`)];

  return paths.map((path) => ({ url: new URL(path, site.origin).href }));
}
