# Gatekeeper QA — QA Methodology

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24

---

## Purpose

This document defines how Gatekeeper QA tests software. It is the shared language for delivery, the Process page on the website, and client reporting.

---

## Guiding Principles

1. **Risk first** — Test what can hurt users, revenue, or trust before low-value coverage.
2. **Evidence over opinion** — Recommendations come from what was exercised and observed.
3. **Honest scope** — Always state what was tested and what was not.
4. **Fit the team** — Match depth to product stage, time, and client capacity.
5. **Continuous improvement** — Capture lessons and strengthen the next release cycle.

---

## Approach Overview

```
Understand product → Identify risks → Plan tests → Execute → Report → Retest / advise release
```

Gatekeeper QA uses a **risk-based, hybrid** approach:

- Manual and exploratory testing for discovery and judgment
- Structured checks for known critical paths
- Automation where repetition and CI feedback pay off
- API and integration focus when the backend holds the risk

---

## 1. Understand the Product

Before deep testing:

- Product purpose and main users
- Critical journeys (signup, pay, core feature, admin, etc.)
- Environments (staging preferred for destructive tests)
- Known issues and recent changes
- Release date and go / no-go owner

**Output:** short product context in the engagement brief.

---

## 2. Identify Risks

Risks are ranked by **likelihood × impact** on users or the business.

Examples of high risk:

- Auth / account takeover paths
- Payments and billing
- Data loss or incorrect data
- Broken core workflow on happy path
- Integrations that must succeed for the product to work

**Output:** prioritized risk list that drives what gets tested first.

---

## 3. Plan Tests

Choose techniques based on the engagement (see Service Catalog):

| Need | Technique |
|------|-----------|
| Unknown quality / launch pressure | Exploratory sessions with charters |
| Known critical paths | Structured manual scripts or checklists |
| Frequent shipping | Automation (e.g. Playwright) on smoke / regression |
| API-heavy product | API contract and workflow tests |
| Hard ship date | Time-boxed release test plan |

Plans stay lightweight. Prefer a clear priority list over a thick unused document.

---

## 4. Execute

### Exploratory testing

- Time-boxed sessions with a charter (mission + scope + risks)
- Notes of paths taken, observations, and bugs
- Follow interesting failures; do not only follow scripts

### Structured testing

- Cover agreed critical journeys and acceptance points
- Record pass / fail and environment

### Automation

- Automate stable, high-value checks first
- Prefer maintainable tests over brittle UI spam
- Run in CI when the client stack allows
- Treat flaky tests as defects to fix or remove

### API / integration

- Validate status codes, payloads, auth, and error handling on priority flows
- Capture request/response evidence for failures

---

## 5. Defect Reporting

Every bug report should include:

- Title (clear and specific)
- Severity
- Environment and build / version if known
- Steps to reproduce
- Expected vs actual result
- Evidence (screenshot, video, logs, request/response)
- Impact note when helpful (who is affected)

### Severity scale

| Severity | Meaning |
|----------|---------|
| **S1 — Blocker** | Release must not proceed; core flow broken or severe data/security impact |
| **S2 — High** | Major feature broken or serious workaround required |
| **S3 — Medium** | Important issue with reasonable workaround |
| **S4 — Low** | Minor functional or cosmetic issue |

Severity is about **user/business impact**, not how hard the bug is to fix.

### Priority

Priority (P1–P4) may differ from severity when the client chooses order of fixes. Gatekeeper QA recommends; the client decides.

---

## 6. Reporting and Release Advice

Clients receive clear status, not raw noise.

**Status updates include:**

- What was tested
- What was not tested
- Open S1/S2 issues
- Overall risk view
- Recommended next actions

**Release recommendation language:**

| Recommendation | Meaning |
|----------------|---------|
| **Ship** | No known S1; remaining risk accepted or low |
| **Ship with caveats** | Known issues; document workarounds and follow-ups |
| **Hold** | Open S1 (or equivalent risk); do not release yet |

Gatekeeper QA advises; the client owns the go / no-go decision.

---

## 7. Retest and Regression

- Retest fixed bugs with the same or better evidence
- Smoke critical paths after important fixes
- Expand automation only for checks that will be reused

---

## 8. Tools (Default Stack)

Defaults can change per client:

| Area | Default |
|------|---------|
| Web UI automation | Playwright |
| Issue tracking | Client tool (GitHub Issues, Jira, Linear, etc.) |
| Notes / reports | Shared docs agreed at kickoff |
| CI | Client CI where possible; GitHub Actions preferred when greenfield |
| Communication | Email + one agreed chat channel |

---

## 9. Quality Bar for Gatekeeper QA’s Own Work

Apply the same discipline to Gatekeeper QA deliverables and the company website:

- Clear acceptance criteria before calling work done
- Accessibility and responsive checks on web surfaces
- Automated smoke where it pays off
- No silent scope cuts — document trade-offs

---

## Website Implication

The Process page should summarize this methodology in plain language:

1. Understand  
2. Prioritize risk  
3. Test  
4. Report with evidence  
5. Advise release confidence  

Primary CTA remains **Book a QA Discovery Call**.
