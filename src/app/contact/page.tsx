import { projects } from "@/lib/projects";
import { ContactSection } from "@/components/contact-section";

export const metadata = {
  title: "Contact us",
  description: "Ask Ananya Interiors about interior design, furniture, lighting, or an existing order or project.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ project?: string | string[] }> }) {
  const { project } = await searchParams;
  const initialProject = projects.find(({ key }) => key === project)?.title;
  return <main id="main"><ContactSection standalone initialProject={initialProject} /></main>;
}
