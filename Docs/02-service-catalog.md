# Gatekeeper QA — Service Catalog

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24

---

## Purpose

This catalog defines what Gatekeeper QA sells. It is the source of truth for the Services page, proposals, and discovery calls.

Pricing is intentionally omitted until offering and delivery capacity are proven.

---

## Who These Services Are For

SaaS startups (about 5–50 people) building web or cloud products, preparing to launch or scaling, without a dedicated QA function.

**Not a fit (for now):** hardware, regulated medical devices, large enterprise transformation programs, or “staff a 20-person QA org” requests.

---

## How Engagements Typically Start

Every new client starts with a **QA Discovery Call**, then a short written proposal. Work is scoped by risk, product stage, and team capacity — not by a generic package.

---

## Service 1 — Manual and Exploratory Testing

**One-line:** Find critical defects before customers do.

**Who it is for:** Teams about to launch, demo to investors, or ship a major feature with little structured testing.

**Outcomes**

- Highest-risk user journeys are exercised
- Release-blocking and high-severity bugs are documented
- Founders and engineers know what is safe to ship and what is not

**Typical deliverables**

- Test charter / session notes
- Bug reports with steps, severity, and evidence
- Risk summary for the release

**Not included:** Building a full regression suite, writing production code, or 24/7 on-call.

---

## Service 2 — Test Strategy and Process Setup

**One-line:** Help the team decide what to test, when, and how.

**Who it is for:** Startups that test ad hoc, disagree on “done,” or keep missing the same class of bugs.

**Outcomes**

- A shared quality bar for the product
- A practical test approach that matches team size and release cadence
- Clear ownership: what Gatekeeper QA does vs. what the product team does

**Typical deliverables**

- Lightweight test strategy
- Priority areas (risk-based)
- Definition of ready / done for quality
- Recommended tooling and rituals (e.g. bug triage, release checklist)

**Not included:** Replacing the product manager, rewriting the entire backlog, or enterprise process frameworks.

---

## Service 3 — Test Automation

**One-line:** Build maintainable automated checks so regressions are caught in CI.

**Who it is for:** Teams that ship often and cannot afford to re-test everything by hand each time.

**Outcomes**

- Repeatable coverage on critical paths
- Faster feedback on pull requests or main-branch builds
- Less reliance on last-minute manual regression

**Typical deliverables**

- Automation approach (what to automate vs. leave manual)
- Automated checks (starting with Playwright for web flows)
- How to run them locally and in CI
- Handover notes so the team can maintain the suite

**Not included:** Automating everything, flaky “record and playback” dumps, or owning the product’s entire CI platform.

---

## Service 4 — API and Integration Testing

**One-line:** Validate backend contracts and the workflows that connect systems.

**Who it is for:** Products where the UI is thin, the risk lives in APIs, billing, auth, or third-party integrations.

**Outcomes**

- Broken contracts and edge cases are found before they reach the UI
- Integrations have explicit expected behavior
- Failures are easier to isolate (client vs. API vs. partner)

**Typical deliverables**

- API test plan for priority endpoints and flows
- Automated or scripted API checks where they add value
- Defect reports with request/response evidence
- Notes on contract gaps and error handling

**Not included:** Rewriting APIs, security pentesting as a full offering, or load testing unless scoped separately.

---

## Service 5 — Release Quality Support

**One-line:** Improve confidence immediately before and after a release.

**Who it is for:** Teams with a hard ship date who need a focused quality gate, not a long-term program.

**Outcomes**

- A go / no-go view based on evidence
- Known issues ranked by user and business impact
- A short post-release watch list

**Typical deliverables**

- Release test plan (time-boxed)
- Execution results and bug list
- Release recommendation (ship / ship with caveats / hold)
- Suggested follow-up tests for the next sprint

**Not included:** Taking product-launch decisions for the company, or standing in as full-time release manager unless agreed.

---

## How Services Combine

Most clients will not buy one service in isolation.

| Situation | Typical mix |
|-----------|-------------|
| First launch | Strategy + manual/exploratory + release support |
| Recurring shipping | Manual/exploratory + automation + release support |
| API-heavy product | Strategy + API testing + automation |
| “We don’t know where to start” | Discovery call → strategy first |

---

## What Gatekeeper QA Does Not Sell (Yet)

- Dedicated full-time embedded QA hire replacement at scale
- Security audits / penetration testing as a primary product
- Accessibility as a standalone certification
- Performance / load testing as a default package
- 24/7 production monitoring

These may appear later; they are out of the MVP catalog.

---

## Primary Call to Action

**Book a QA Discovery Call** — confirm fit, risks, and a scoped next engagement.

Secondary: **Explore Our Services** (this catalog, on the website).
