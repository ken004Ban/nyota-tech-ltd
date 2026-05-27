---
title: Company Profile Index
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Nyota Tech — Company Profile

This package contains an 8-section company profile for **Nyota Tech Limited**,
auto-generated from analysis of the project's source code, configuration
files, design tokens, and git history.

## Sections

| # | File | Summary |
|---|------|---------|
| 01 | [01-overview.md](./01-overview.md) | Company identity, brand
  name/legal name, founding date, mission statement, market positioning as a
  calm, reliable technology consultancy. |
| 02 | [02-product.md](./02-product.md) | Six service areas with
  descriptions, differentiators, contact form flow, and user journey from
  landing to inquiry. |
| 03 | [03-tech-stack.md](./03-tech-stack.md) | Full dependency tree
  (Next.js 14, React 18, Tailwind 3), three-layer animation pipeline
  (Framer Motion, GSAP, Lenis), Mermaid architecture diagram, API surface,
  and third-party integrations. |
| 04 | [04-design-system.md](./04-design-system.md) | Colour palette with
  hex codes and Tailwind aliases, typography (DM Sans, Instrument Serif,
  DM Mono), spacing scale, component register, and motion philosophy. |
| 05 | [05-brand-voice.md](./05-brand-voice.md) | Tone analysis, sample
  copy across channels, writing rules, vocabulary frequency, and words to
  avoid. |
| 06 | [06-team-and-culture.md](./06-team-and-culture.md) | Inferred team
  size (single founder), engineering culture signals (strict TS, no CI, no
  tests), and open-source posture. |
| 07 | [07-go-to-market.md](./07-go-to-market.md) | Target audience by
  service, acquisition channels, SEO metadata strategy, and
  internationalisation status. |
| 08 | [08-roadmap-signals.md](./08-roadmap-signals.md) | In-progress
  features (optional fields), technical debt (unused font files, GSAP
  workaround), and 10 inferred next milestones. |

## Generation Metadata

| Field | Value |
|-------|-------|
| Generated | 2026-05-18 |
| Repository commit | `8b284ada7386b8ed8d11a210ae1b8a6d487bb841` |
| Source | Codebase analysis via file I/O, grep, glob, git log |
| Model | opencode/big-pickle |

## How to Update

Each section has a **References** section listing the exact source files
used. To regenerate or update after code changes, re-read the referenced
files and update the corresponding profile section:

| Section | Key source files to re-read |
|---------|---------------------------|
| 01 — Overview | `lib/constants.ts`, `app/layout.tsx`, `app/page.tsx`,
  `components/sections/HeroSection.tsx`, `git log` |
| 02 — Product | `lib/constants.ts`, `components/sections/Services*.tsx`,
  `app/services/page.tsx`, `app/contact/page.tsx`,
  `app/api/contact/route.ts`, `components/sections/ContactForm.tsx` |
| 03 — Tech Stack | `package.json`, `app/api/contact/route.ts`,
  `.env.example`, `DEPLOYMENT.md`, `.vercel/project.json` |
| 04 — Design System | `app/globals.css`, `tailwind.config.ts`,
  `lib/fonts.ts`, `lib/animations.ts`, `public/mark.svg` |
| 05 — Brand Voice | All section components, `lib/constants.ts`,
  contact form error strings, metadata in layout |
| 06 — Team & Culture | `git log`, `lib/constants.ts`,
  `app/about/page.tsx`, `package.json` (scripts), absence of
  `.github/` files |
| 07 — Go-to-Market | `app/layout.tsx`, `lib/constants.ts`, glob
  search for analytics/i18n/sitemap files |
| 08 — Roadmap Signals | `lib/constants.ts` (optional fields),
  `app/fonts/`, `package.json` (version pins), all components (conditional
  rendering patterns) |

### Quick regeneration workflow

```bash
# Re-extract design tokens
grep --include="*.css" -r "var(--color-" app/ tailwind.config.ts

# Re-check dependencies
cat package.json | jq '.dependencies'

# Re-check git activity
git log --all --format="%ai %an %s"

# Search for future signals
rg "TODO|FIXME|HACK|XXX" --type ts --type tsx
```
