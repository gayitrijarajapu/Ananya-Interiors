import { ContactForm } from "./contact-form";
import { site, whatsappChatUrl } from "@/lib/site";

export function ContactSection({ standalone = false, initialProject }: { standalone?: boolean; initialProject?: string }) {
  const Heading = standalone ? "h1" : "h2";

  return (
    <section className="contact-section" id="contact" data-page-hero={standalone || undefined} aria-labelledby="contact-title">
      <div className="wrap contact-layout">
        <div className="contact-intro">
          <p className="eyebrow">Free design consultation</p>
          <Heading id="contact-title">{standalone ? "Contact us" : "Let’s plan your space."}</Heading>
          <p>{standalone
            ? "Tell us about your interior design project or ask about furniture and lighting."
            : "Share a few details about your home and what you have in mind. We’ll use them to start the conversation."}</p>
          <address>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:+${site.whatsappNumber}`}>{site.phone}</a>
            {standalone && <a href={whatsappChatUrl}>Chat on WhatsApp</a>}
          </address>
          {standalone && <p className="contact-support">For help with an existing order or project, email or message us with your quote or order reference if you have one.</p>}
        </div>
        <ContactForm key={initialProject} initialProject={initialProject} />
      </div>
    </section>
  );
}
