---
title: Roadmap Signals
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Roadmap Signals

## Features in Progress / TODO Signals

The codebase is early-stage with minimal TODO/FIXME comments. What exists:

### Explicit TODO Comments

No `TODO:` or `FIXME:` comments were found in the production code. The only
prospective code is in `lib/constants.ts`:

- `COMPANY.phone?: string` — phone field defined as optional in the type
  (`lib/constants.ts:9`) but never set in the object (`lib/constants.ts:19`).
  The contact page renders it conditionally (`app/contact/page.tsx:34`).
  Likely placeholder for future addition.
- `COMPANY.address?: string` — same pattern. Address is typed, optional,
  conditionally rendered.

### Conditional Rendering Signals

| Signal | File | Status |
|--------|------|--------|
| `COMPANY.phone` | `app/contact/page.tsx:34` | Defined in type, not set —
  ready for activation |
| `COMPANY.address` | `app/contact/page.tsx:35` | Same pattern |
| `SOCIAL_LINKS` — LinkedIn, X | `lib/constants.ts:51-52` | Points to
  generic domains — no brand-specific profile URLs |

### Disabled / Draft Routes

No disabled routes or feature flags found. All four routes (Home, Services,
About, Contact) are active with no commented-out page code.

## Technical Debt Signals

### Dependency Age

| Dependency | Version | Status |
|------------|---------|--------|
| `next` | 14.2.35 | Current — Next.js 15 is available but not adopted |
| `typescript` | ^5 | Broadly current |
| `tailwindcss` | ^3.4.1 | Current — v4 is stable but not adopted |

### Deprecation / Console Warnings

No deprecation warnings, `console.warn`, or `console.error` calls exist in
production code (the API route's `console.error` at `route.ts:77` is a
server-side logging call, not a warning signal).

### Code Observations

- **GSAP dynamic import:** GSAP is loaded via dynamic `import("gsap")` in
  `MagneticButton.tsx:49` because the library is ESM-only and incompatible
  with Next.js SSR. This is a working workaround but adds an extra network
  request per button interaction.
- **Preloaded but unused fonts:** `app/fonts/` contains `GeistVF.woff` and
  `GeistMonoVF.woff` files from `create-next-app` scaffolding, but the
  actual site uses DM Sans, Instrument Serif, and DM Mono via Google Fonts.
  The Geist files are dead weight.
- **`lenis/dist/lenis.css`** is imported in `globals.css:1` but Lenis 1.x
  minimal CSS is already included; this import may not be needed.

## Inferred Next Milestones

Based on incomplete flows and placeholder values, the following are likely
near-term priorities:

1. **Populate social profile URLs** — LinkedIn and X links point to generic
   domains, not Nyota Tech branded pages
2. **Add phone number** — Type-defined, not yet set; likely awaiting a
   business line
3. **Add physical address** — Same pattern
4. **Upgrade to Next.js 15** when React 19 support is stable
5. **Tailwind CSS v4 upgrade** follows the Next.js upgrade path
6. **Add analytics** — No measurement infrastructure exists; pre-requisite
   for any growth effort
7. **Case studies or portfolio** — No past-work section exists on the site;
   the first completed engagement would likely become a case study page
8. **Remove stale Geist font files** — `app/fonts/GeistVF.woff` and
   `GeistMonoVF.woff` are unused artefacts from project scaffolding
9. **Add pricing page** — No pricing or engagement model information exists
   publicly; likely handled offline for now
10. **Open-source infrastructure** — LICENSE, contributing guide, issue
    templates are all absent

---

## References

- `lib/constants.ts:8-11` — CompanyInfo type with optional fields
- `lib/constants.ts:19` — CompanyInfo object (phone/address not set)
- `app/contact/page.tsx:34-37` — Conditional rendering of phone/address
- `app/fonts/` — Unused Geist font files
- `components/ui/MagneticButton.tsx:49` — GSAP dynamic import workaround
- `app/globals.css:1` — Lenis CSS import
- `lib/constants.ts:50-54` — SOCIAL_LINKS with generic URLs
- `package.json` — Stale dependency versions against latest
