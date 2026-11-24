"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatPrice, pieces } from "@/lib/catalog";
import { SavePiece } from "./shop";

const categories = ["All pieces", ...new Set(pieces.map((piece) => piece.category))];

export function Collection() {
  const [category, setCategory] = useState("All pieces");
  const visiblePieces = category === "All pieces" ? pieces : pieces.filter((piece) => piece.category === category);

  return (
    <section className="collection wrap" id="collection" aria-labelledby="collection-title">
      <div className="collection-heading" data-page-hero>
        <div>
          <p className="eyebrow">The collection</p>
          <h2 id="collection-title">Considered essentials.</h2>
        </div>
        <div className="filters" role="group" aria-label="Filter the collection">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={item === category} onClick={() => setCategory(item)}>
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="product-grid">
        {visiblePieces.map((piece) => (
          <article className="product-card" key={piece.slug}>
            <div className="product-image">
              <Link href={`/pieces/${piece.slug}`} aria-label={`View ${piece.name}`}>
                <Image src={piece.image} alt={piece.alt} fill sizes="(max-width: 560px) 92vw, (max-width: 800px) 45vw, 30vw" />
              </Link>
              <SavePiece slug={piece.slug} name={piece.name} />
            </div>
            <div className="product-info">
              <div>
                <h3><Link href={`/pieces/${piece.slug}`}>{piece.name}</Link></h3>
                <p>{piece.material}</p>
              </div>
              <span>{formatPrice(piece.price)}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
