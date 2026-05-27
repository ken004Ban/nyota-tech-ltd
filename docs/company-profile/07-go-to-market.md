---
title: Go-to-Market
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Go-to-Market

## Target Audience

Inferred from copy, service descriptions, and audience fields:

| Audience Segment | Evidence | Service Fit |
|------------------|----------|-------------|
| Teams needing mission-critical software | "without vendor lock-in"
  (service 01 audience) | Custom Software Dev |
| Organisations with multiple vendors | "juggling multiple vendors"
  (service 02 audience) | System Integration |
| Operations teams | "need calm deployments" (service 03 audience) | IT
  Support & Deployment |
| Product teams launching customer-facing apps | "performance budgets
  and editorial polish" (service 04) | Web & Mobile Applications |
| Teams hitting scaling limits | "scaling or consistency limits"
  (service 05 audience) | Database Solutions |
| Leaders needing a second opinion | "honest technical second opinion"
  (service 06 audience) | Technical Consulting |

**Geography signal:** WhatsApp number uses country code `+260` (Zambia),
suggesting a Zambian or Africa-region operating base.

**Vertical:** Horizontal (not industry-specific) — services apply to any
sector with technology delivery needs.

## Acquisition Channels

### Confirmed

| Channel | Implementation | Evidence |
|---------|---------------|----------|
| Organic / direct | SEO metadata, OpenGraph tags | `app/layout.tsx:22-35` |
| Email | `mailto:nyotatech.info@gmail.com` | `lib/constants.ts:18` |
| WhatsApp | `wa.me/260973971192` link | `lib/constants.ts:53`,
  `app/contact/page.tsx:42-47` |
| LinkedIn | Generic linkedin.com link | `lib/constants.ts:51` |
| X (Twitter) | Generic twitter.com link | `lib/constants.ts:52` |

### Not Found

The following acquisition mechanisms were **checked for but absent**:

- No analytics scripts (Google Analytics, Plausible, Umami, etc.)
- No UTM parameter helpers or referral tracking code
- No blog or content-marketing routes
- No newsletter signup form
- No cookie consent banner
- No live chat widget (WhatsApp is a static link, not a widget)
- No sitemap.xml or robots.txt found in `/public`

## SEO Approach

### Metadata Strategy

Each page defines custom `metadata` export:

| Page | Title Template | Description |
|------|---------------|-------------|
| Home | `Nyota Tech — Calm, dependable software` | Early-stage positioning |
| Services | `Services — Nyota Tech` | Capability summary |
| About | `About — Nyota Tech` | Mission and values |
| Contact | `Contact — Nyota Tech` | Contact invitation |

All pages use `metadataBase` derived from `NEXT_PUBLIC_SITE_URL` or
`VERCEL_URL` (`app/layout.tsx:10-20`).

### OpenGraph

- `og:title`, `og:description`, `og:type: website`, `og:locale: en_US`
- No `og:image` defined

### Structured Data

> ⚠ **Not determinable from codebase:** No JSON-LD, microdata, or
> schema.org markup found in any component.

## Internationalisation / Localisation

| Aspect | Status |
|--------|--------|
| `html lang` attribute | `lang="en"` (hardcoded in `app/layout.tsx:45`) |
| i18n library | ⚠ Not present |
| Locale detection | ⚠ Not implemented |
| Translation files | ⚠ Not found |
| Multi-language routes | ⚠ Not found |

The site is **English-only** with no internationalisation infrastructure.

---

## References

- `app/layout.tsx:22-35` — Metadata, OpenGraph, lang attribute
- `lib/constants.ts:37-54` — NAV_LINKS, SOCIAL_LINKS
- `lib/constants.ts:66-157` — Service audience fields
- `app/contact/page.tsx:42-47` — WhatsApp button
- `DEPLOYMENT.md` — Vercel and Resend setup
- `glob` for analytics scripts, sitemap, robots.txt — confirmed absent
