import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { CardCarousel } from "./card-carousel";

export function ProjectGallery() {
  return (
    <section className="wrap project-gallery" id="interiors" aria-labelledby="interiors-title">
      <div className="project-gallery-heading">
        <div>
          <p className="eyebrow">Interior design</p>
          <h2 id="interiors-title">Homes for every budget.</h2>
          <p>Start with the rooms you want to change. We’ll discuss your priorities, materials, and what fits your budget.</p>
        </div>
        <a className="button project-quote-button" href="#quote-form">Get free quote</a>
      </div>
      <CardCarousel label="project cards" variant="project">
        {projects.map((project) => (
          <li key={project.key}>
            <Link className="category-tile" href={`/contact?project=${project.key}#quote-form`}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 540px) 90vw, (max-width: 760px) 45vw, 30vw" />
              <span className="project-price">Budget guide · {project.referenceBudget}*</span>
              <span>{project.title}</span>
            </Link>
          </li>
        ))}
      </CardCarousel>
      <p className="project-note">*Starting prices for modular interiors in new homes. Your Ananya Interiors quote depends on the layout, scope, and finishes. <a href="https://www.livspace.com/in/interiors/hyderabad">Source: Livspace Hyderabad</a>.</p>
    </section>
  );
}
