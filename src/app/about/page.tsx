import Image from "next/image";
import Link from "next/link";
import { ServiceAreas } from "@/components/service-areas";

export const metadata = {
  title: "About",
  description: "Meet Ananya Interiors and explore our approach to home interiors across Andhra Pradesh and Telangana.",
};

export default function AboutPage() {
  return (
    <main id="main">
      <section className="studio about-hero" data-page-hero aria-labelledby="about-title">
        <div className="studio-copy">
          <p className="eyebrow">Ananya Interiors</p>
          <h1 id="about-title">Thoughtful design for everyday living.</h1>
          <p>We plan interiors around how you use your home. The layout, storage, lighting, and finishes all have a part to play, whether you’re fitting out a new home or reworking one room.</p>
          <Link className="button" href="/contact">Plan your project</Link>
        </div>
        <div className="studio-image">
          <Image src="/images/studio.webp" alt="A light-filled living room with a linen sofa and natural stone table" fill sizes="(max-width: 680px) 100vw, 55vw" />
        </div>
      </section>
      <ServiceAreas />
    </main>
  );
}
