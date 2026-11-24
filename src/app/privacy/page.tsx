import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy policy",
  description: "How Ananya Interiors uses information from project enquiries and website visits.",
};

export default function PrivacyPage() {
  return (
    <LegalPage path="/privacy" title="Privacy policy" intro="How Ananya Interiors handles information when you browse our site, contact the studio or sign up for updates.">
      <section>
        <h2>Project and product enquiries</h2>
        <p>Our enquiry form asks for your name, phone number, project city, project type, approximate budget and property possession status. Your email and project notes are optional. Choosing to continue to WhatsApp passes these details to WhatsApp in a prefilled message. Review the message before you send it.</p>
        <p>We use the details you share by WhatsApp, email or phone to respond, discuss your requirements, prepare a quote where appropriate and coordinate any work or order you agree to. Please keep passwords, payment card details and identity documents out of the enquiry form.</p>
      </section>
      <section>
        <h2>External services</h2>
        <p>WhatsApp and social media destinations have their own privacy policies. The website’s hosting service may process technical information such as your IP address and request details to deliver and secure the site.</p>
      </section>
      <section>
        <h2>Browser storage</h2>
        <p>Your saved pieces and cookie choices are stored in the browser on your device. See our <Link href="/cookies">Cookie policy</Link> for details and controls.</p>
      </section>
      <section>
        <h2>Retention and privacy requests</h2>
        <p>We keep enquiry and project records as needed to respond, provide agreed services, maintain business records and meet applicable legal requirements. To ask about your information, request access, a correction or deletion, withdraw consent where applicable, or raise a privacy concern, email <a href={`mailto:${site.email}`}>{site.email}</a>. We may ask for details to verify the request.</p>
      </section>
    </LegalPage>
  );
}
