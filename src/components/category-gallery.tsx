import Image from "next/image";
import Link from "next/link";
import { pieces } from "@/lib/catalog";
import { projects } from "@/lib/projects";
import { CardCarousel } from "./card-carousel";

const roomCategories = new Set(["kitchen", "bedroom", "living-room"]);

const categories = [
  ...pieces.map(({ slug, image, categoryLabel }) => ({
    href: `/pieces/${slug}`,
    image,
    label: categoryLabel,
  })),
  ...projects.filter(({ key }) => roomCategories.has(key)).map(({ key, title, image }) => ({
    href: `/contact?project=${key}#quote-form`,
    image,
    label: title,
  })),
];

export function CategoryGallery() {
  return (
    <section className="wrap category-gallery" id="collection" aria-labelledby="category-title">
      <p className="eyebrow">Our range</p>
      <h2 id="category-title">Shop by <em>category.</em></h2>
      <CardCarousel label="categories" variant="category">
        {categories.map(({ href, image, label }) => (
          <li key={href}>
            <Link className="category-tile" href={href}>
              <Image src={image} alt="" fill sizes="(max-width: 540px) 65vw, (max-width: 900px) 37vw, (max-width: 1466px) 21vw, 300px" />
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </CardCarousel>
    </section>
  );
}
