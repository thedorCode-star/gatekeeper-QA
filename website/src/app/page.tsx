import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Gatekeeper QA helps SaaS startups release with confidence through professional testing, automation, and quality engineering.",
};

const problems = [
  "Bugs reaching users",
  "Weak or missing testing process",
  "Limited QA capacity",
  "Low release confidence",
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(46,90,136,0.18),_transparent_55%),linear-gradient(180deg,_#eef2f7_0%,_#f7f8fa_55%,_#f7f8fa_100%)]"
        />
        <div className="relative mx-auto flex min-h-[calc(100vh-4.5rem)] w-full max-w-5xl flex-col justify-center px-6 py-20">
          <p className="animate-fade-up text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
            Gatekeeper QA
          </p>
          <h1 className="animate-fade-up animate-delay-1 mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
            Release with confidence.
          </h1>
          <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Professional testing, automation, and quality engineering for SaaS
            startups that need to ship reliably.
          </p>
          <div className="animate-fade-up animate-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Who we help
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Early-stage SaaS teams without a dedicated QA function.
          </p>
          <ul className="mt-8 max-w-xl space-y-3 text-foreground">
            {problems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            What we do
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Five focused services — scoped after a discovery call.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {services.map((service) => (
              <li key={service.id} className="py-4 text-foreground">
                {service.name}
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-8 inline-flex text-sm font-medium text-accent transition-colors hover:text-primary"
          >
            View all services →
          </Link>
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            How we work
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Risk-based testing with clear evidence and honest scope.
          </p>
          <ol className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-4">
            {processSteps.map((step, index) => (
              <li key={step} className="flex items-center gap-3 text-foreground">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
                {index < processSteps.length - 1 ? (
                  <span
                    aria-hidden
                    className="hidden text-border sm:inline sm:pl-1"
                  >
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <Link
            href="/process"
            className="mt-8 inline-flex text-sm font-medium text-accent transition-colors hover:text-primary"
          >
            See our process →
          </Link>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-5xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Ready to reduce release risk?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Book a short discovery call — we respond within one business day.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
