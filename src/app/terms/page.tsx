import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Terms & conditions",
  description: "Website and enquiry terms for Ananya Interiors furniture, lighting and interior design services.",
};

export default function TermsPage() {
  return (
    <LegalPage path="/terms" title="Terms & conditions" intro="These terms cover browsing the Ananya Interiors website and making enquiries about furniture, lighting and interior design.">
      <section>
        <h2>Collection and portfolio</h2>
        <p>Our collection and portfolio illustrate products, materials and completed work. Finishes, grain and colour can vary with natural materials, lighting and screens. Confirm dimensions, finish, price, availability and suitability with us before ordering.</p>
      </section>
      <section>
        <h2>Enquiries and quotes</h2>
        <p>You can browse, save pieces on your device and request a consultation. The website has no checkout. Sending an enquiry starts a conversation. A quote or project proposal sets out the scope, price, payment terms and estimated schedule for your acceptance. Confirm any changes to the agreed scope, materials or schedule in writing.</p>
      </section>
      <section>
        <h2>Delivery, installation and aftercare</h2>
        <p>Confirm delivery or installation coverage, site access, charges and expected timing in your quote or order. Check the written terms for cancellation, changes, returns, refunds and warranty details before accepting, especially for custom pieces or work made to your specifications.</p>
      </section>
      <section>
        <h2>Questions and consumer rights</h2>
        <p>Use our <Link href="/contact">Contact us</Link> page for order questions, service concerns or to report an issue with a product. Include your quote or order reference if available. Your rights and remedies under applicable consumer protection law continue to apply.</p>
      </section>
    </LegalPage>
  );
}
