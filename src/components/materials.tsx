import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Materials() {
  return (
    <section className="materials" id="materials" aria-labelledby="materials-title">
      <div className="material-panel material-oak">
        <Image src="/images/oak-detail.webp" alt="Close-up of solid oak joinery" fill sizes="(max-width: 680px) 100vw, 60vw" />
        <div className="material-copy">
          <p className="eyebrow">Lasting materials</p>
          <h2 id="materials-title">Formed by nature,<br />made to last.</h2>
          <p>Solid oak, natural linen, and stone with character that deepens over time.</p>
          <Link className="editorial-link" href="/#studio">Our philosophy <ArrowRight size={15} aria-hidden /></Link>
        </div>
      </div>
      <div className="material-panel material-linen">
        <Image src="/images/linen-detail.webp" alt="Olive leaves resting on woven natural linen" fill sizes="(max-width: 680px) 100vw, 40vw" />
        <div className="material-note">
          <p className="eyebrow">Natural linen</p>
          <p>Textiles that soften<br />with everyday use.</p>
        </div>
      </div>
    </section>
  );
}
