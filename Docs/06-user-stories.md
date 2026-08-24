# Gatekeeper QA Website — User Stories & Acceptance Criteria

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24  
**Priority focus:** Home, Services, Contact (build first)

---

## How to read this

- **US** = user story  
- **AC** = acceptance criteria (must all pass for the story to be done)  
- Personas: **Founder** (primary), **CTO** (secondary)

---

## Shared / Site-wide

### US-00 — Navigate the site

**As a** visitor,  
**I want** clear navigation to key pages,  
**so that** I can find services, process, and contact without guessing.

**Acceptance criteria**

- [ ] Header shows Gatekeeper QA brand name as a primary visual signal
- [ ] Nav links include at least: Home, Services, Process, About, Contact
- [ ] Primary CTA **Book a QA Discovery Call** is visible in the header on desktop and mobile
- [ ] Footer includes contact CTA and basic company links
- [ ] Layout is usable at common mobile and desktop widths
- [ ] Focus states are visible for keyboard navigation

---

## Home

### US-01 — Understand Gatekeeper QA in seconds

**As a** startup founder,  
**I want** the homepage to explain what Gatekeeper QA does immediately,  
**so that** I know if I am in the right place.

**Acceptance criteria**

- [ ] First viewport includes brand name, one headline, one short supporting sentence, and CTA group
- [ ] Headline/supporting copy communicates quality engineering for SaaS startups (release confidence)
- [ ] Primary CTA is **Book a QA Discovery Call**
- [ ] Secondary CTA is **Explore Our Services** and links to Services
- [ ] No competing promo blocks, stat strips, or card grids in the first viewport
- [ ] Page title and meta description are set for SEO

### US-02 — See who we help and why it matters

**As a** founder,  
**I want** to see who Gatekeeper QA helps and what problems it solves,  
**so that** I can relate the offer to my company.

**Acceptance criteria**

- [ ] Home includes a section for ideal clients (SaaS startups / early-stage teams)
- [ ] Home lists the main problems solved (bugs reaching users, weak process, low release confidence)
- [ ] Copy stays professional and calm (matches brand voice)
- [ ] Section has one clear purpose and one short supporting sentence

### US-03 — Preview services and process

**As a** CTO,  
**I want** a short preview of services and how Gatekeeper QA works,  
**so that** I can judge technical fit before digging deeper.

**Acceptance criteria**

- [ ] Home summarizes the five core services (or links clearly into Services)
- [ ] Home includes a short process teaser aligned with QA methodology (understand → risk → test → report → advise)
- [ ] Links to Services and Process pages work
- [ ] A discovery-call CTA appears again near the bottom of the page

---

## Services

### US-04 — Explore the service catalog

**As a** founder or CTO,  
**I want** to understand each service Gatekeeper QA offers,  
**so that** I can choose a starting engagement.

**Acceptance criteria**

- [ ] Services page lists all five catalog services:
  - Manual and exploratory testing
  - Test strategy and process setup
  - Test automation
  - API and integration testing
  - Release quality support
- [ ] Each service shows: one-line summary, who it is for, outcomes, and typical deliverables
- [ ] Each service notes what is not included (or links to a shared exclusions note)
- [ ] Page explains that engagements start with a discovery call (not a generic package checkout)
- [ ] Primary CTA **Book a QA Discovery Call** is present

### US-05 — Understand how services combine

**As a** CTO,  
**I want** to see typical service combinations,  
**so that** I know what a realistic first engagement looks like.

**Acceptance criteria**

- [ ] Page includes example mixes (e.g. first launch, recurring shipping, API-heavy product)
- [ ] Copy clarifies scope is risk-based and proposed after discovery
- [ ] Out-of-scope offerings for now are stated (e.g. full pentest as primary product)

---

## Contact

### US-06 — Book a QA discovery call

**As a** founder,  
**I want** an easy way to request a discovery call,  
**so that** I can start a conversation about our quality risks.

**Acceptance criteria**

- [ ] Contact page states the purpose: book a QA discovery call
- [ ] Form (or booking embed) captures at minimum: name, email, company, role, message / need
- [ ] Required fields are validated with clear error messages
- [ ] Successful submit shows a confirmation state (on-page or thank-you)
- [ ] Failed submit shows a recoverable error message
- [ ] Page works on mobile
- [ ] Privacy expectation is stated briefly (how the info will be used)

### US-07 — Contact without friction

**As a** visitor who does not want a long form,  
**I want** an alternative contact path,  
**so that** I can still reach Gatekeeper QA.

**Acceptance criteria**

- [ ] An email address and/or calendar booking link is available when configured
- [ ] If calendar is not configured yet, form-only path is clearly labeled as the next step
- [ ] Response expectation is stated (e.g. within one business day), matching onboarding docs

---

## Later MVP pages (outline only)

Build after Home / Services / Contact unless needed sooner.

| ID | Story | Done when |
|----|--------|-----------|
| US-08 | About builds trust in Gatekeeper QA | Mission, who we help, values, and CTA present |
| US-09 | Process explains the methodology | Five-step process visible; severity/reporting language is plain; CTA present |
| US-10 | Case studies show evidence | At least one case study template or placeholder with honest empty state |
| US-11 | Blog supports SEO and expertise | Index page exists; can list posts; empty state is clear if no posts yet |

---

## Definition of Done (any story)

- Meets all listed AC
- Matches brand identity (voice + deep-blue visual direction)
- Responsive and keyboard accessible for primary flows
- No broken primary/secondary CTAs
- Reviewed against PRD success criteria where relevant
