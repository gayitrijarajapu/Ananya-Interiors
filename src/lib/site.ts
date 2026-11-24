export const site = {
  name: "Ananya Interiors",
  origin: "https://ananyainteriordesign.com",
  email: "ananyainteriordesigns@gmail.com",
  phone: "+91 79897 97640",
  whatsappNumber: "917989797640",
};

export const whatsappChatUrl = `https://wa.me/${site.whatsappNumber}`;

type Enquiry = {
  name: string;
  phone: string;
  email: string;
  city: string;
  topic: string;
  budget: string;
  possession: string;
  message: string;
};

export function whatsappEnquiryUrl(enquiry: Enquiry) {
  const text = [
    `Hello ${site.name}, I’m contacting you from your website.`,
    "",
    `Name: ${enquiry.name.trim()}`,
    `Phone: ${enquiry.phone.trim()}`,
    ...(enquiry.email.trim() ? [`Email: ${enquiry.email.trim()}`] : []),
    `City: ${enquiry.city.trim()}`,
    `Project: ${enquiry.topic.trim()}`,
    `Approximate budget: ${enquiry.budget.trim()}`,
    `Property possession: ${enquiry.possession.trim()}`,
    ...(enquiry.message.trim() ? ["", "Project notes:", enquiry.message.trim()] : []),
  ].join("\n");

  const url = new URL(whatsappChatUrl);
  url.searchParams.set("text", text);
  return url.toString();
}
