import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DesignerContact } from "@/components/designer-contact";
import { ContactSection } from "@/components/contact-section";
import { ProjectGallery } from "@/components/project-gallery";
import { HeroVideo } from "@/components/hero-video";
import { StudioHighlights } from "@/components/studio-highlights";
import { ServiceAreas } from "@/components/service-areas";
import { Materials } from "@/components/materials";
import { CategoryGallery } from "@/components/category-gallery";

export default function Home() {
  return (
    <main id="main">
      <section className="hero" data-page-hero aria-labelledby="hero-title">
        <HeroVideo />
        <div className="wrap hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Sculptural lighting<br />for modern living</p>
            <h1 id="hero-title">Light that<br />feels like home.</h1>
            <p className="hero-description">Thoughtfully designed lighting and furniture that bring warmth to everyday spaces.</p>
            <a className="button hero-button" href="#collection">Explore collection <ArrowRight size={16} aria-hidden /></a>
          </div>
        </div>
      </section>

      <StudioHighlights />
      <CategoryGallery />

      <section className="studio" id="studio" aria-labelledby="studio-title">
        <div className="studio-copy">
          <p className="eyebrow">Our philosophy</p>
          <h2 id="studio-title">Shape the<br />atmosphere.</h2>
          <p>Light changes how a room feels. We pair soft illumination with tactile materials to create spaces that feel inviting throughout the day.</p>
          <a className="editorial-link" href="#materials">Our materials <ArrowRight size={15} aria-hidden /></a>
        </div>
        <div className="studio-image">
          <Image src="/images/studio.webp" alt="Linen sofa and natural stone table beside a sunlit window" fill sizes="(max-width: 680px) 100vw, 61vw" />
        </div>
      </section>
      <Materials />
      <ProjectGallery />
      <DesignerContact />
      <ServiceAreas />
      <ContactSection />
    </main>
  );
}
