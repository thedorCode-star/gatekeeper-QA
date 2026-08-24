import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a QA discovery call with Gatekeeper QA. Tell us about your product and release pressure.",
};

export default function ContactPage() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <h1 className="animate-fade-up text-4xl font-semibold tracking-tight text-primary">
            Book a QA Discovery Call
          </h1>
          <p className="animate-fade-up animate-delay-1 mt-4 text-lg leading-relaxed text-muted">
            Tell us about your product and release pressure. We reply within one
            business day.
          </p>

          <div className="animate-fade-up animate-delay-2 mt-10 space-y-4 text-sm text-muted">
            <p>
              Prefer email? Use the form for now — that is the next step until a
              public inbox is configured.
            </p>
            <p>
              Calendar booking will appear here once it is set up. Until then,
              the form is the fastest way to reach us.
            </p>
            <p>
              Privacy: we use this information to respond about QA support. We
              do not sell your details.
            </p>
          </div>
        </div>

        <div className="animate-fade-in">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
