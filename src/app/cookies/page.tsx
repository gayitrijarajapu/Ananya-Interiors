import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata = {
  title: "Cookie policy",
  description: "What Ananya Interiors stores in your browser and how to manage your cookie preferences.",
};

export default function CookiesPage() {
  return (
    <LegalPage path="/cookies" title="Cookie policy" intro="What this site stores on your device and how you can manage it.">
      <section>
        <h2>Essential browser storage</h2>
        <p>The site uses local storage to remember your cookie preferences and keep the pieces you choose to save available on the same browser. These records stay on your device until you clear the website’s browser data. Clearing it also resets your cookie preferences and saved pieces.</p>
      </section>
      <section>
        <h2>Optional categories</h2>
        <p>Functional, analytics and marketing preferences start switched off. There are currently no optional functional tools, analytics scripts or advertising trackers on this site. Accepting optional categories records your choices in this browser.</p>
      </section>
      <section>
        <h2>Change your choices</h2>
        <p>Open Cookie settings here or in the site footer to reject optional categories, accept all, or save individual choices. Settings apply to the current browser and device. When you follow a link to an external service, that service manages its own cookies and storage.</p>
        <p>See our <Link href="/privacy">Privacy policy</Link> for how we handle information you share with us.</p>
      </section>
    </LegalPage>
  );
}
