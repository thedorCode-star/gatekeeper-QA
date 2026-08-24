# Gatekeeper QA — Git Strategy

**Version:** 1.0  
**Status:** Draft  
**Date:** 2026-08-24

---

## Purpose

Keep changes reviewable, shippable, and easy to roll back as the website and company docs grow.

---

## Branches

| Branch | Role |
|--------|------|
| `main` | Production-ready; what can deploy |
| `develop` | Integration branch for finished features |
| `feature/*` | One feature or doc set at a time |

Examples: `feature/website-prd`, `feature/phase-1-foundation`, `feature/homepage`.

---

## Workflow

1. Branch from `develop` (or `main` early on if `develop` is unused)
2. Make focused commits with clear messages (`docs:`, `feat:`, `fix:`, `chore:`)
3. Open a pull request into `develop`
4. Review, merge, then promote `develop` → `main` when ready to release

For this early stage, short-lived feature branches and PRs into `develop` are enough. Direct commits to `main` should be avoided once the site is live.

---

## Commit Message Style

Use short imperative subjects:

- `docs: complete Phase 0 business foundation`
- `feat: scaffold Next.js website with Tailwind`
- `fix: correct contact form validation`

Explain **why** in the body when the change is non-obvious.

---

## What Lives Where

| Path | Contents |
|------|----------|
| `Docs/` | Business and product documentation |
| `website/` | Next.js application |
| `MASTER_ROADMAP.md` | Phase checklist and company status |
| `CHANGELOG.md` | Human-readable change log |

Do not commit secrets (`.env*`, keys, tokens). Use environment variables locally and in Vercel.

---

## Protection (when ready)

- Protect `main` (PR required)
- Require CI green before merge (Phase 5)
- Prefer squash or merge commits consistently once the team is larger than one

---

## Website App Commands

```bash
cd website
npm install
npm run dev
npm run build
npm run lint
```
