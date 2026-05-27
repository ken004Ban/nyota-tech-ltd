---
title: Product & Services
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Product & Services

Nyota Tech operates as a technology consultancy rather than a product company.
The offering is organised into six service areas, each scoped for fixed-scope
or retainer-based early engagements.

## Service Catalog

All six services are defined in `lib/constants.ts:66-157` and rendered on the
homepage (`ServicesSection.tsx`) and a dedicated services page
(`/app/services/page.tsx`) with an accordion detail view
(`ServicesAccordion.tsx`).

| # | Service | Short Description |
|---|---------|-------------------|
| 01 | Custom Software Development | Bespoke applications engineered for
  reliability, security, and long-term maintainability. |
| 02 | System Integration | Connect legacy platforms, APIs, and data
  pipelines with clear contracts and observability. |
| 03 | IT Support & Deployment | Hands-on rollout, patching, and on-call
  support structured around your risk profile. |
| 04 | Web & Mobile Applications | Fast, accessible interfaces with
  performance budgets and editorial polish. |
| 05 | Database Solutions | Modelling, migration, and tuning for Postgres,
  SQL Server, and cloud-native stores. |
| 06 | Technical Consulting | Architecture reviews, security assessments,
  and roadmap clarity without fluff. |

## Differentiators per Service

Each service includes a "differentiator" line used in the accordion panel
(`ServicesAccordion.tsx:92-94`):

- **01:** "We optimize for systems you can operate for years—not throwaway
  demos."
- **02:** "Integration work centered on clear contracts and observable
  behavior."
- **03:** "Releases treated with seriousness—checklists, rollback paths,
  and calm communication."
- **04:** "Interfaces built with performance budgets and accessible,
  editorial detail."
- **05:** "Data modeling aimed at durability under real-world
  constraints—not slide-deck schemas."
- **06:** "Recommendations in plain language—actionable, prioritized,
  and honest."

## Pricing

> ⚠ **Not determinable from codebase:** No pricing page, Stripe
> configuration, or pricing tiers exist in the source files. The site
> explicitly states the company is "taking a small number of early
> engagements" — pricing is likely handled outside the website.

## User Journey

The site defines a simple marketing funnel with four routes:

```
Home (/) → Services (/services) → About (/about) → Contact (/contact)
```

1. **Awareness** — Visitor lands on hero with scramble-text headline
   "Building reliable digital systems" and a clear CTA "Start a project →"
2. **Consideration** — Scroll-driven narrative presents stats (6 capability
   areas, 48h response), service list with hover-reveal descriptions, and
   an about section with values
3. **Conversion** — Contact page offers a form (`ContactForm.tsx`) and a
   WhatsApp button (`MagneticButton` → `wa.me/260973971192`). Form sends
   via Resend API (`/api/contact`)
4. **Follow-through** — On submit, user sees "Thank you. We'll reply within
   two business days." — no account creation or activation step exists

### Auth Flows

No authentication, user accounts, or login system exists in the codebase.

## Contact Form

- **Fields:** Name, Email, Message
- **Validation:** Client-side + server-side; name/email/message required;
  email format checked via regex
- **Delivery:** Raw `fetch` to Resend API (`api.resend.com/emails`) — no SDK
- **Error states:** Field-level inline errors (Highlight — `#c8ff4d`), form
  API error, network error
- **Success message:** "Thank you. We'll reply within two business days."

---

## References

- `lib/constants.ts:56-157` — Full SERVICE array with id, number, title,
  short, includes, audience, differentiator
- `components/sections/ServicesSection.tsx` — Homepage service list with
  hover interaction
- `components/sections/ServicesAccordion.tsx` — Full detail accordion on
  services page
- `app/services/page.tsx` — Services page with "What we deliver." heading
- `app/contact/page.tsx` — Contact page layout
- `components/sections/ContactForm.tsx` — Form implementation with validation
  and Resend POST
- `app/api/contact/route.ts` — Server-side contact form handler
