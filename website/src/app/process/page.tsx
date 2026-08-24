import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { processSteps } from "@/lib/content";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Gatekeeper QA works: understand, prioritize risk, test, report, and advise release confidence.",
};

export default function ProcessPage() {
  return (
    <section>
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-20">
        <h1 className="text-4xl font-semibold tracking-tight text-primary">
          Process
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Risk-based testing with clear evidence and honest scope.
        </p>

        <ol className="mt-12 space-y-6">
          {processSteps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-semibold text-primary">{step}</h2>
                <p className="mt-2 text-muted">
                  {index === 0 &&
                    "Learn the product, users, environments, and release pressure."}
                  {index === 1 &&
                    "Focus first on journeys that can hurt users, revenue, or trust."}
                  {index === 2 &&
                    "Use exploratory, structured, API, and automation techniques where they fit."}
                  {index === 3 &&
                    "Share what was tested, what was not, and evidence for findings."}
                  {index === 4 &&
                    "Recommend ship, ship with caveats, or hold — you own the go/no-go."}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <ButtonLink href="/contact">Book a QA Discovery Call</ButtonLink>
        </div>
      </div>
    </section>
  );
}
