---
title: Design System
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Design System

The design language is **editorial-dark** — a high-contrast, warm-on-black
palette with generous whitespace, serif italic emphasis, and subtle texture.

## Colour Palette

All colours are defined as CSS custom properties in `app/globals.css:7-17`
and referenced through Tailwind aliases in `tailwind.config.ts:11-18`.

| Token | Tailwind Alias | Hex / Value | Usage |
|-------|----------------|-------------|-------|
| `--color-bg` | `bg-bg` | `#141416` | Page background — near-black, easier
  on eyes than pure `#000` |
| `--color-surface` | `bg-surface` | `#1c1c20` | Card, accordion panel, hover
  state backgrounds |
| `--color-border` | `border-border` | `rgba(255,255,255,0.1)` | Dividers,
  frame strokes, input underlines |
| `--color-text-primary` | `text-primary` | `#f7f7f2` | Body and heading
  text — warm off-white |
| `--color-text-secondary` | `text-secondary` | `rgba(247,247,242,0.55)` |
  Supporting text, labels, muted links |
| `--color-accent` | `text-accent` / `border-accent` | `#ebe4d6` | Button
  borders, hover accents, blockquote border — warm cream |
| `--color-highlight` | (via `text-highlight` / `bg-highlight`) | `#c8ff4d` |
  Error messages, custom cursor dot/ring, scroll cue dot — lime green |
| `--color-nav-scrolled` | — | `rgba(20,20,22,0.9)` | Navigation bar
  background after scroll, with `backdrop-blur-[12px]` |

### Rarity of Highlight

Highlight (`#c8ff4d`) is used sparingly for attention only — form errors,
the custom cursor, and a small scroll-progress indicator dot. It appears in
the SVG mark (`public/mark.svg`) at 8% opacity and 15% stroke opacity on the
cream border, confirming its role as a brand accent that must not be
overused.

## Typography

Three font families are loaded via `next/font/google` in
`lib/fonts.ts` and configured in `tailwind.config.ts:20-24`.

| Family | CSS Variable | Tailwind Class | Weights | Usage |
|--------|-------------|----------------|---------|-------|
| DM Sans | `--font-dm-sans` | `font-sans` | 400, 500 | Body text, navigation,
  headings (roman weight) |
| Instrument Serif | `--font-instrument-serif` | `font-serif` | 400 (incl.
  italic) | Headline emphasis, block quotes, large numerals — always italic
  in practice |
| DM Mono | `--font-dm-mono` | `font-mono` | 400 | Labels, stats, service
  numbers, legal text, form field labels |

### Size Scale

The codebase uses `clamp()` for responsive type sizing rather than a fixed
scale. Key breakpoints:

| Element | Min Size | Fluid | Max Size | Example File |
|---------|----------|-------|----------|--------------|
| Hero headline | `3rem` | `8vw` | `7rem` | `HeroSection.tsx:63` |
| Section heading | `2.25rem` | `5vw` | `3.75rem` | `ContactCTA.tsx:13` |
| Service accordion title | `1.35rem` | `3vw` | `2rem` | `ServicesAccordion.tsx:37` |
| Mono label | `11px` | fixed | — | Used in section overline labels |
| Body copy | `text-sm` / `text-lg` via Tailwind | — | — | Various |

### Letter Spacing

Monospaced labels use `tracking-[0.2em]` (e.g. section headings like
"Capabilities", "About us", "Values"). Navigation links and buttons use
`tracking-wide`.

## Spacing & Layout

- **Site max-width:** 1200px (`container-editorial` in `globals.css:31`)
- **Horizontal padding:** `clamp(1.5rem, 5vw, 4rem)`
- **Section vertical padding:** `clamp(6rem, 12vw, 14rem)` (`.section-y`
  utility)
- **Navigation height:** 4rem on mobile, 4.5rem on desktop
- **Page top padding:** `pt-28 md:pt-36` (to clear fixed nav)

The grid uses Tailwind's `grid-cols-12` on large layouts (contact page),
`grid-cols-3` for stats and about values, and `md:grid-cols-2` for accordion
detail panels.

## Component Library

No third-party component library is used. All components are custom-built:

| Component | File | Animation |
|-----------|------|-----------|
| `Navigation` | `components/layout/Navigation.tsx` | Framer Motion mobile
  menu, scroll-aware background |
| `Footer` | `components/layout/Footer.tsx` | Static — large brand watermark
  via CSS |
| `CustomCursor` | `components/ui/CustomCursor.tsx` | 10px dot + 40px ring
  (60px on hover), mix-blend-difference |
| `MagneticButton` | `components/ui/MagneticButton.tsx` | GSAP elastic pull
  (max 8px), dynamically imported |
| `ScrambleText` | `components/ui/ScrambleText.tsx` | Per-character
  scramble on mount (1.2s) |
| `SplitText` | `components/ui/SplitText.tsx` | Framer Motion line-by-line
  clip reveal on scroll |
| `RevealOnScroll` | `components/ui/RevealOnScroll.tsx` | Framer Motion
  stagger fade-up |
| `AnimatedStat` | `components/ui/AnimatedStat.tsx` | Framer Motion spring
  counter on scroll |
| `MarqueeStrip` | `components/ui/MarqueeStrip.tsx` | CSS `@keyframes
  marquee`, 48s linear infinite |
| `ContactForm` | `components/sections/ContactForm.tsx` | Framer Motion
  AnimatePresence swap |
| `ServicesAccordion` | `components/sections/ServicesAccordion.tsx` | Framer
  Motion height/opacity transition |

## Icon Set

No icon library is imported. The site uses:

- **Unicode arrow** `→` for CTAs and interactive indicators
- **Unicode plus/minus** `+` `−` for accordion expand/collapse
- **SVG logo** (`public/mark.svg`) — abstract "N" mark with Highlight fill
  at 8% opacity in a rounded rectangle frame

The logo SVG dimensions: `160×160`, with a rounded rectangle (`rx="12"`) and
an angular path resembling a stylised "N".

## Motion / Animation Approach

Three animation libraries are layered with a unified philosophy:

1. **CSS transitions** for micro-interactions (nav link underlines, service
   list hover reveals, form label transitions, custom cursor ring size)
2. **Framer Motion** for page transitions (`app/template.tsx`), scroll-triggered
   entrances, and AnimatePresence-driven mount/unmount sequences
3. **GSAP** (dynamically imported, no SSR) exclusively for the magnetic
   button elastic-out effect
4. **Lenis** for smooth scrolling (duration 1.1s, `smoothWheel: true`)

### Easing

The project defines a shared cubic-bezier: `[0.22, 1, 0.36, 1]` (named
`PAGE_EASE` in `lib/animations.ts:4`). This is used across Framer Motion
transitions, Lenis duration, and the nav link underline CSS transition.

### Reduced Motion

Every interactive component checks `usePrefersReducedMotion()` and short
circuits to instant/static presentation when the user's OS prefers reduced
motion. Custom cursor, Lenis, GSAP, scramble, and scroll reveals all
respect this.

---

## References

- `app/globals.css:7-17` — CSS custom property definitions
- `tailwind.config.ts` — Tailwind colour aliases, font families, keyframes
- `lib/fonts.ts` — Google Font configuration and variable names
- `lib/animations.ts` — Easing curve, page transition, stagger variants
- `public/mark.svg` — SVG logo mark
- `lib/hooks/usePrefersReducedMotion.ts` — Accessibility hook
- `components/ui/CustomCursor.tsx` — Cursor implementation and ring sizing
- `components/ui/MagneticButton.tsx` — GSAP magnetic pull implementation
