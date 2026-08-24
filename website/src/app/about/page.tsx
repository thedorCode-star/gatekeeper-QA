import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "About",
  description:
    "Gatekeeper QA helps SaaS startups improve software quality through professional testing and quality engineering.",
};

export default function AboutPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-primary">
          About
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Gatekeeper QA helps SaaS startups improve software quality through
          professional testing, automation, and quality engineering practices.
        </p>
        <p className="mt-6 max-w-2xl text-foreground">
          We work with early-stage teams that need release confidence without
          building a full QA department overnight. Our approach is calm,
          evidence-led, and honest about scope.
        </p>
        <div className="mt-10">
          <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
        </div>
      </div>
    </section>
  );
}
