import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto grid w-full max-w-5xl gap-10 px-6 py-12 sm:grid-cols-[1.4fr_1fr_1fr_auto]">
        <div>
          <p className="text-lg font-semibold text-primary">Gatekeeper QA</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Quality engineering for SaaS teams that need to ship with
            confidence.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-primary">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-primary">Services</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services" className="hover:text-primary">
                Overview
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-primary">
                Process
              </Link>
            </li>
          </ul>
        </div>

        <div className="sm:justify-self-end">
          <ButtonLink href="/contact">Book a Discovery Call</ButtonLink>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-6 py-4 text-sm text-muted">
          © {new Date().getFullYear()} Gatekeeper QA
        </p>
      </div>
    </footer>
  );
}
