# Gatekeeper QA Website — Wireframes

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24  
**Covers:** Shared chrome, Home, Services, Contact  
**Maps to:** `Docs/06-user-stories.md` (US-00–US-07)

These are structural wireframes (ASCII), not visual mockups. Use brand tokens from `Docs/01-brand-identity.md` when building.

---

## Design rules for all pages

- One composition per section; one headline + one short support line
- First viewport: brand, headline, support, CTA group only — no stats, cards, or promo chips
- Brand name is a hero-level signal, not only nav text
- Primary CTA: **Book a QA Discovery Call** → `/contact`
- Secondary CTA: **Explore Our Services** → `/services`
- Deep blue + neutrals; generous whitespace; no card grids in the hero

---

## Shared — Header / Footer (US-00)

### Desktop header

```
┌──────────────────────────────────────────────────────────────────┐
│  Gatekeeper QA     Home  Services  Process  About  Contact       │
│                              [ Book a QA Discovery Call ]        │
└──────────────────────────────────────────────────────────────────┘
```

### Mobile header

```
┌────────────────────────────────┐
│  Gatekeeper QA          [≡]    │
└────────────────────────────────┘
         │
         ▼ open menu
┌────────────────────────────────┐
│  Home                          │
│  Services                      │
│  Process                       │
│  About                         │
│  Contact                       │
│  [ Book a QA Discovery Call ]  │
└────────────────────────────────┘
```

### Footer

```
┌──────────────────────────────────────────────────────────────────┐
│  Gatekeeper QA                                                   │
│  Quality engineering for SaaS teams that need to ship            │
│  with confidence.                                                │
│                                                                  │
│  Company          Services              [ Book a Discovery Call ]│
│  · Home           · Overview                                     │
│  · About          · Process                                      │
│  · Contact        · Case Studies                                 │
│                                                                  │
│  © Gatekeeper QA                                                 │
└──────────────────────────────────────────────────────────────────┘
```

---

## Home (`/`) — US-01, US-02, US-03

### Section map

1. Hero (first viewport)
2. Who we help / problems
3. Services preview
4. Process teaser
5. Closing CTA

### 1. Hero

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Gatekeeper QA                                                   │
│                                                                  │
│  Release with confidence.                                        │
│                                                                  │
│  Professional testing, automation, and quality engineering       │
│  for SaaS startups that need to ship reliably.                   │
│                                                                  │
│  [ Book a QA Discovery Call ]   [ Explore Our Services ]         │
│                                                                  │
│  (optional full-bleed calm visual plane behind text —            │
│   not an inset card image)                                       │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

**Notes:** Brand appears in hero body (not only nav). No cards, badges, or stats here.

### 2. Who we help

```
┌──────────────────────────────────────────────────────────────────┐
│  Who we help                                                     │
│  Early-stage SaaS teams without a dedicated QA function.         │
│                                                                  │
│  · Bugs reaching users                                           │
│  · Weak or missing testing process                               │
│  · Limited QA capacity                                           │
│  · Low release confidence                                        │
└──────────────────────────────────────────────────────────────────┘
```

### 3. Services preview

```
┌──────────────────────────────────────────────────────────────────┐
│  What we do                                                      │
│  Five focused services — scoped after a discovery call.          │
│                                                                  │
│  Manual & exploratory testing                                    │
│  Test strategy & process setup                                   │
│  Test automation                                                 │
│  API & integration testing                                       │
│  Release quality support                                         │
│                                                                  │
│  → View all services                                             │
└──────────────────────────────────────────────────────────────────┘
```

**Notes:** Prefer a clean list over a card grid. Link to `/services`.

### 4. Process teaser

```
┌──────────────────────────────────────────────────────────────────┐
│  How we work                                                     │
│  Risk-based testing with clear evidence and honest scope.        │
│                                                                  │
│  1 Understand → 2 Prioritize risk → 3 Test → 4 Report → 5 Advise │
│                                                                  │
│  → See our process                                               │
└──────────────────────────────────────────────────────────────────┘
```

### 5. Closing CTA

```
┌──────────────────────────────────────────────────────────────────┐
│  Ready to reduce release risk?                                   │
│  Book a short discovery call — we respond within one business    │
│  day.                                                            │
│                                                                  │
│  [ Book a QA Discovery Call ]                                    │
└──────────────────────────────────────────────────────────────────┘
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

## Services (`/services`) — US-04, US-05

### Section map

1. Page intro + CTA
2. Service blocks (×5)
3. How services combine
4. Out of scope (for now)
5. Closing CTA

### 1. Intro

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│  Services                                                        │
│  Practical quality engineering for SaaS startups.                │
│  Engagements start with a discovery call — not a package cart.   │
│                                                                  │
│  [ Book a QA Discovery Call ]                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 2. Service block (repeat ×5)

```
┌──────────────────────────────────────────────────────────────────┐
│  Service name                                                    │
│  One-line summary                                                │
│                                                                  │
│  Who it is for                                                   │
│  · …                                                             │
│                                                                  │
│  Outcomes                                                        │
│  · …                                                             │
│                                                                  │
│  Typical deliverables                                            │
│  · …                                                             │
│                                                                  │
│  Not included                                                    │
│  · …                                                             │
└──────────────────────────────────────────────────────────────────┘
```

**Order**

1. Manual and exploratory testing  
2. Test strategy and process setup  
3. Test automation  
4. API and integration testing  
5. Release quality support  

### 3. How services combine

```
┌──────────────────────────────────────────────────────────────────┐
│  Typical starting mixes                                          │
│  Scope is risk-based and confirmed after discovery.              │
│                                                                  │
│  First launch     Strategy + exploratory + release support       │
│  Recurring ship   Exploratory + automation + release support     │
│  API-heavy        Strategy + API testing + automation            │
└──────────────────────────────────────────────────────────────────┘
```

### 4. Out of scope (for now)

```
┌──────────────────────────────────────────────────────────────────┐
│  Not in the current catalog                                      │
│  · Full security / penetration testing as a primary product      │
│  · Large enterprise staff-augmentation programs                  │
│  · 24/7 production monitoring                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 5. Closing CTA

```
┌──────────────────────────────────────────────────────────────────┐
│  Not sure where to start?                                        │
│  Tell us your release pressure — we will propose a focused mix.  │
│                                                                  │
│  [ Book a QA Discovery Call ]                                    │
└──────────────────────────────────────────────────────────────────┘
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

---

## Contact (`/contact`) — US-06, US-07

### Section map

1. Intro + response expectation
2. Discovery form
3. Alternative path (email / calendar when configured)
4. Privacy note

### Layout (desktop: copy left, form right; mobile: stacked)

```
┌──────────────────────────────────────────────────────────────────┐
│  HEADER                                                          │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Book a QA Discovery Call          ┌───────────────────────────┐ │
│                                    │ Name*                     │ │
│  Tell us about your product and    │ Email*                    │ │
│  release pressure. We reply within │ Company*                  │ │
│  one business day.                 │ Role                      │ │
│                                    │ Message / need*           │ │
│  Prefer email?                     │                           │ │
│  hello@… (when configured)         │ [ Send request ]          │ │
│                                    └───────────────────────────┘ │
│  Calendar link (optional)                                        │
│  · Shown only when configured                                    │
│  · Otherwise: “Use the form — that is the next step.”            │
│                                                                  │
│  Privacy: we use this information to respond about QA support.   │
│  We do not sell your details.                                    │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
│  FOOTER                                                          │
└──────────────────────────────────────────────────────────────────┘
```

### Form states

| State | UI |
|-------|-----|
| Default | Empty fields, primary submit |
| Validation error | Inline errors on invalid required fields |
| Submitting | Submit disabled / loading |
| Success | Confirmation message (on-page or thank-you) |
| Failure | Recoverable error + retry |

**Required fields:** name, email, company, message/need  
**Optional:** role; calendar embed when available

---

## Build order

1. Shared header + footer  
2. Home  
3. Services  
4. Contact (form can start as client-side validation + mailto or form service)

---

## Out of this wireframe set

About, Process, Case Studies, and Blog follow later MVP stories (US-08–US-11). They should reuse the same header/footer and CTA pattern.
