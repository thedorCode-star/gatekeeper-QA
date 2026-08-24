export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-tight text-primary">
            Gatekeeper QA
          </p>
          <a
            href="#contact"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Book a QA Discovery Call
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-24">
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Release with confidence.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Gatekeeper QA helps SaaS startups build confidence in their software
          through professional testing, automation, and quality engineering
          support.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            id="contact"
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Book a QA Discovery Call
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-background"
          >
            Explore Our Services
          </a>
        </div>
        <p
          id="services"
          className="mt-16 text-sm text-muted"
        >
          Foundation scaffold — Phase 1. Full pages come in Phase 3.
        </p>
      </main>
    </div>
  );
}
