import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { outOfScope, serviceMixes, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Gatekeeper QA services: exploratory testing, strategy, automation, API testing, and release quality support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border bg-[linear-gradient(180deg,_#eef2f7_0%,_#f7f8fa_100%)]">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <h1 className="animate-fade-up text-4xl font-semibold tracking-tight text-primary">
            Services
          </h1>
          <p className="animate-fade-up animate-delay-1 mt-4 max-w-2xl text-lg text-muted">
            Practical quality engineering for SaaS startups. Engagements start
            with a discovery call — not a package cart.
          </p>
          <div className="animate-fade-up animate-delay-2 mt-8">
            <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl space-y-16 px-6 py-16 sm:py-20">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-24 border-b border-border pb-16 last:border-b-0 last:pb-0"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-primary">
                {service.name}
              </h2>
              <p className="mt-3 text-lg text-muted">{service.summary}</p>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                    Who it is for
                  </h3>
                  <p className="mt-2 text-foreground">{service.whoFor}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                    Not included
                  </h3>
                  <p className="mt-2 text-foreground">{service.notIncluded}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                    Outcomes
                  </h3>
                  <ul className="mt-3 space-y-2 text-foreground">
                    {service.outcomes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-primary">
                    Typical deliverables
                  </h3>
                  <ul className="mt-3 space-y-2 text-foreground">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-surface">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Typical starting mixes
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Scope is risk-based and confirmed after discovery.
          </p>
          <ul className="mt-8 divide-y divide-border border-y border-border">
            {serviceMixes.map((row) => (
              <li
                key={row.situation}
                className="grid gap-2 py-4 sm:grid-cols-[12rem_1fr] sm:gap-8"
              >
                <span className="font-medium text-primary">{row.situation}</span>
                <span className="text-foreground">{row.mix}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Not in the current catalog
          </h2>
          <ul className="mt-6 space-y-3 text-foreground">
            {outOfScope.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight text-primary">
            Not sure where to start?
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Tell us your release pressure — we will propose a focused mix.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
