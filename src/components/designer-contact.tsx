import { Phone } from "lucide-react";
import { site, whatsappChatUrl } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export function DesignerContact() {
  return (
    <section className="designer-contact" aria-labelledby="designer-contact-title">
      <div className="wrap">
        <h2 id="designer-contact-title">Talk to an interior designer.</h2>
        <p>Call or message us on WhatsApp to discuss your space, budget, and next steps.</p>
        <div className="designer-contact-actions">
          <a className="button" href={`tel:+${site.whatsappNumber}`}>
            <Phone size={18} aria-hidden /> Call now
          </a>
          <a className="button" href={whatsappChatUrl}>
            <WhatsAppIcon /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
