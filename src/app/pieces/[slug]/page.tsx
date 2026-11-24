import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SavePiece } from "@/components/shop";
import { formatPrice, pieces } from "@/lib/catalog";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pieces.map(({ slug }) => ({ slug }));
}

async function getPiece(params: PageProps["params"]) {
  const { slug } = await params;
  const piece = pieces.find((item) => item.slug === slug);
  if (!piece) notFound();
  return piece;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const piece = await getPiece(params);
  return { title: piece.name, description: piece.description };
}

export default async function PiecePage({ params }: PageProps) {
  const piece = await getPiece(params);

  return (
    <main className="wrap detail" id="main" data-page-hero>
      <Link className="text-link" href="/collection">Back to the collection</Link>
      <div className="detail-grid">
        <div className="detail-image">
          <Image src={piece.image} alt={piece.alt} fill preload sizes="(max-width: 800px) 90vw, (max-width: 1466px) 45vw, 660px" />
        </div>
        <div className="detail-copy">
          <p className="eyebrow">{piece.category}</p>
          <h1>{piece.name}</h1>
          <p className="detail-price">{formatPrice(piece.price)}</p>
          <p>{piece.description}</p>
          <p className="detail-material">{piece.material}</p>
          <SavePiece slug={piece.slug} name={piece.name} withLabel />
        </div>
      </div>
    </main>
  );
}
