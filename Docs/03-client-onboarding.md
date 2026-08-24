# Gatekeeper QA — Client Onboarding

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24

---

## Purpose

This document defines how a lead becomes a client and how work starts cleanly. It keeps discovery, proposals, kickoff, and handover consistent.

---

## Onboarding Flow

```
Lead → Discovery Call → Fit Check → Proposal → Agreement → Kickoff → Delivery Cadence → Close / Handover
```

---

## 1. Lead Intake

**Sources:** website contact form, LinkedIn, referral, outbound outreach.

**Capture (minimum):**

- Name, company, role
- Product type (web / SaaS / other)
- Why they reached out (launch, bugs, automation, process)
- Preferred contact and timezone

**Response target:** acknowledge within one business day and offer discovery-call times.

---

## 2. QA Discovery Call (30–45 minutes)

**Goal:** confirm fit, understand risk, and decide whether to propose work.

### Agenda

1. Their product, stage, and release pressure
2. Current testing practices (or lack of them)
3. Highest-risk journeys and known pain points
4. Tools and access (repo, staging, issue tracker, CI)
5. What success looks like for them in 2–4 weeks
6. Next step (proposal or polite no-fit)

### Questions to ask

- What must not break for users or revenue?
- What ships next, and when?
- Who decides go / no-go on releases?
- What environments can we use (staging vs production)?
- Who owns bugs after we report them?

### Fit check

**Proceed** if they match the ICP (SaaS startup, real quality risk, willing to give access and feedback).  
**Decline or refer** if the ask is out of catalog (e.g. full security pentest, enterprise staff-aug at scale).

---

## 3. Proposal

Send a short written proposal within 1–2 business days of a good discovery call.

**Proposal must include:**

- Problem summary (in their words)
- Recommended services from the catalog
- Scope (in / out)
- Deliverables and success criteria
- Access and collaboration needs
- Timeline and cadence
- Commercials (when pricing is set)
- Assumptions and dependencies

Keep it readable for a founder and specific enough for a CTO.

---

## 4. Agreement and Setup

Before kickoff:

- [ ] Proposal accepted (email or signed agreement)
- [ ] Primary contacts named (founder and/or eng lead)
- [ ] Access granted (staging, issue tracker, docs; repo if automation)
- [ ] Communication channel agreed (email + one chat/tool)
- [ ] Working hours / timezone expectations set
- [ ] Confidentiality understood (NDA if requested)

**Do not start testing until access and a named product contact exist.**

---

## 5. Kickoff (30–60 minutes)

**Goal:** align on risk, scope, and the first week of work.

### Kickoff checklist

- Confirm product walkthrough and critical user journeys
- Confirm environments and test accounts
- Confirm bug severity language (see QA Methodology)
- Confirm where bugs are filed and how triage works
- Confirm reporting cadence (e.g. mid-week note + end-of-week summary)
- Confirm first milestone (e.g. risk summary before next release)

**Kickoff output:** a one-page engagement brief (scope, contacts, journeys, cadence, first milestone).

---

## 6. Delivery Cadence

Default for ongoing work:

| Rhythm | What |
|--------|------|
| Daily (as needed) | Questions, blockers, critical bugs |
| Mid-engagement | Short progress note: tested, found, next |
| End of week / sprint | Written status: coverage, open risks, recommendations |
| Before release | Go / no-go style risk summary when in scope |

Clients always know:

- What was tested
- What was not tested
- What blocks release
- What is recommended next

---

## 7. Change Control

If the client asks for work outside the agreed scope:

1. Note the request
2. Confirm impact on timeline or focus
3. Propose a small scope change or a follow-on engagement
4. Do not silently expand scope

---

## 8. Close and Handover

At the end of an engagement (or phase):

**Deliver**

- Final summary (what was tested, findings, open risks)
- Bug list status (open / fixed / deferred)
- Assets (test notes, automation, strategy docs) with ownership notes
- Recommended next steps

**Ask**

- Short feedback (what helped, what to improve)
- Permission for a future case study (optional, anonymized if needed)
- Referral if they were happy

---

## Roles

| Role | Responsibility |
|------|----------------|
| Gatekeeper QA lead | Delivery quality, reporting, scope |
| Client product contact | Priorities, product answers, go / no-go |
| Client eng contact | Access, environments, bug fixes |

---

## Website / Sales Link

Primary CTA remains **Book a QA Discovery Call**. This onboarding process starts the moment that call is booked.
