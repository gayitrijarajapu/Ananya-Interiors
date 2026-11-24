"use client";

import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { whatsappEnquiryUrl } from "@/lib/site";

export function ContactForm({ initialProject = "" }: { initialProject?: string }) {
  const [contact, setContact] = useState<{ name: string; phone: string; email: string; city: string } | null>(null);
  const [step, setStep] = useState(1);
  const stepTitle = useRef<HTMLHeadingElement>(null);

  function changeStep(next: number) {
    setStep(next);
    requestAnimationFrame(() => stepTitle.current?.focus());
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const field = (name: string) => String(fields.get(name) ?? "").trim();

    if (step === 1) {
      setContact({ name: field("name"), phone: field("phone"), email: field("email"), city: field("city") });
      changeStep(2);
      return;
    }

    if (!contact) return;
    window.location.assign(whatsappEnquiryUrl({
      ...contact,
      topic: field("topic"),
      budget: field("budget"),
      possession: field("possession"),
      message: field("message"),
    }));
  }

  return (
    <form className="contact-form quote-form" id="quote-form" onSubmit={submit} aria-labelledby="quote-heading">
      <header className="contact-form-wide quote-form-heading">
        <p className="eyebrow">Step {step} of 2</p>
        <h2 id="quote-heading" ref={stepTitle} tabIndex={-1}>{step === 1 ? "Your contact details" : "Tell us about your project"}</h2>
      </header>
      <fieldset hidden={step !== 1} disabled={step !== 1}>
        <legend className="sr-only">Your contact details</legend>
        <label>
          Full name
          <input name="name" autoComplete="name" required maxLength={100} pattern={".*\\S.*"} />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" required maxLength={24} pattern={"[+]?\\s*[0-9](?:[0-9\\s.\\-\\(\\)]*[0-9])"} />
        </label>
        <label>
          Email (optional)
          <input name="email" type="email" autoComplete="email" maxLength={254} />
        </label>
        <label>
          Project city
          <input name="city" autoComplete="address-level2" required maxLength={80} pattern={".*\\S.*"} />
        </label>
      </fieldset>
      <fieldset hidden={step !== 2} disabled={step !== 2}>
        <legend className="sr-only">Project requirements</legend>
        <label className="contact-form-wide">
          What are you planning?
          <select name="topic" defaultValue={initialProject} required>
            <option value="" disabled>Choose a project type</option>
            {projects.map(({ key, title }) => <option key={key}>{title}</option>)}
            <option>Furniture or lighting</option>
            <option>Other enquiry</option>
          </select>
        </label>
        <label>
          Approximate budget
          <select name="budget" defaultValue="" required>
            <option value="" disabled>Choose a budget range</option>
            <option>Under ₹2 lakh</option>
            <option>₹2–4 lakh</option>
            <option>₹4–7 lakh</option>
            <option>₹7 lakh and above</option>
            <option>Still deciding</option>
          </select>
        </label>
        <label>
          Do you have possession?
          <select name="possession" defaultValue="" required>
            <option value="" disabled>Choose possession status</option>
            <option>Yes, I have possession</option>
            <option>Awaiting handover</option>
            <option>Still looking or not applicable</option>
          </select>
        </label>
        <label className="contact-form-wide">
          Anything else we should know? (optional)
          <textarea name="message" rows={3} maxLength={1000} />
        </label>
      </fieldset>
      <div className="contact-form-wide">
        <div className="quote-actions">
          {step === 2 && <button className="quote-back" type="button" onClick={() => changeStep(1)}>Back</button>}
          <button className="button" type="submit">{step === 1 ? "Continue" : "Continue to WhatsApp"}</button>
        </div>
        {step === 2 && <p className="contact-form-hint">Review and send your prefilled message in WhatsApp. See our <Link href="/privacy">privacy policy</Link> for how we use your details.</p>}
      </div>
    </form>
  );
}
