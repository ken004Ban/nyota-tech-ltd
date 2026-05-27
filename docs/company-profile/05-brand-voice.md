---
title: Brand Voice & Tone
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Brand Voice & Tone

Nyota Tech's voice is **calm, direct, and professionally restrained**. It
avoids hype, jargon, and pressure language. The register is conversational
but not casual — closer to a thoughtful engineering lead explaining trade-offs
than a marketing copywriter.

## Tone Characteristics

| Dimension | Position |
|-----------|----------|
| Formal ↔ Casual | Leans formal but avoids corporate boilerplate |
| Technical ↔ Plain | Prefers plain language over jargon (but uses tech
  terms precisely when needed) |
| Hype ↔ Restraint | Strongly restrained — "calm dependable software" not
  "revolutionary platform" |
| Personal ↔ Corporate | Uses "we" but acknowledges small/early-stage reality
  honestly |

## Sample Copy in Brand Voice

### Headline (hero)

> Building **reliable** digital systems.

*Source: `HeroSection.tsx:60-77` — font-sans for structure, font-serif
italic for emphasis on "reliable".*

### Subheading (hero)

> Nyota Tech is at the start of its story—taking a small number of early
> engagements while we prove delivery discipline in the open. If you need
> calm execution more than hype, we should talk.

*Source: `HeroSection.tsx:84-86`*

### Call to Action

> Start a project →  
> What we build  
> Let's talk

*Sources: `HeroSection.tsx:91-96`, `ContactCTA.tsx:19`*

### Error Messages

- **Field validation:** "Please add your name." / "Email is required." /
  "Tell us a little about the project."
- **Form API error:** "Something went wrong. Please try again or email us
  directly."
- **Server misconfig:** "Email delivery is not configured."
- **Success:** "Thank you. We'll reply within two business days."

*Sources: `ContactForm.tsx:17-21`, `app/api/contact/route.ts:49-52`*

### Values Section

> Clarity over noise. Calm velocity. Ownership.

*Source: `lib/constants.ts:159-175`*

## Writing Rules (Inferred)

### Capitalisation

- **Sentence case** throughout — headings, CTAs, navigation, labels
  - "Start a project →" not "Start A Project"
  - "Let's begin quietly." not "Let's Begin Quietly"
  - Exception: Proper nouns retain capitals ("Nyota Tech Limited", "Resend")
- **All-caps used sparingly** — only for mono labels ("CAPABILITIES",
  "VALUES", "EST. 2026") at `11px` with `tracking-[0.2em]`

### Punctuation

- **Periods used** in full sentences (headings are sentences, not fragments)
- **Em-dash** preferred for parenthetical asides ("taking a small number of
  early engagements — while we prove delivery discipline")
- **No exclamation marks** found anywhere in copy
- **Oxford comma** — inconclusive from available text; no list of three or
  more items with serial comma exists in the copy

### Sentence Length

Short to medium. No sentence exceeds ~35 words. Typical length: 12–20 words.

## Words & Phrases Used Repeatedly

| Word/Phrase | Frequency | Context |
|-------------|-----------|---------|
| calm / calmly | 5+ occurrences | "calm execution", "calm velocity",
  "calm deployments", "calm, dependable software" |
| reliable / reliability | 4+ | Core product promise |
| clarity / clear | 4+ | "clarity over noise", "clear contracts",
  "clear communication" |
| early / beginning / start | 5+ | Honest positioning as new company |
| systems / software | Repeated | Generic category terms |
| deliberate / intentionally | 3+ | "intentional about it", "deliberately
  small" |
| runbook / observable | Repeat | Operations-minded vocabulary |
| pipeline | 2+ | "pipeline open", "client work moving through pipeline" |
| heroics | 2+ | "without heroics" |
| fluff | 1 | "without fluff" (consulting differentiator) |

## Words & Phrases to Avoid (Inferred from Absence)

The codebase notably avoids:

- "Disrupt", "transformative", "revolutionary", "game-changing",
  "next-gen", "innovative"
- "Leverage", "synergy", "holistic", "granular", "best-in-class"
- "Growth hacking", "scale at all costs", "move fast and break things"
- Emoji in any content copy
- Superlative claims ("the best", "number one", "leading")

---

## References

- `components/sections/HeroSection.tsx:56-86` — Hero headline and
  subheading copy
- `components/sections/AboutPreview.tsx:24-29` — Company intro paragraph
- `components/sections/ContactCTA.tsx:11-20` — CTA copy
- `components/sections/ContactForm.tsx:17-21` — Validation errors
- `components/sections/ContactForm.tsx:93-97` — Success message
- `app/api/contact/route.ts:49-52` — Server-side error messages
- `lib/constants.ts:66-157` — Service differentiator copy
- `lib/constants.ts:159-175` — Values copy
- `app/layout.tsx:25-33` — Metadata description and OpenGraph copy
- `components/layout/Footer.tsx:36-38` — Footer description copy
