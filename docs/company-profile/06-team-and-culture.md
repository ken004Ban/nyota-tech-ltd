---
title: Team & Culture
updated: 2026-05-18
source: auto-generated from codebase analysis
---

# Team & Culture

## Inferred Team Size & Structure

The codebase shows strong signals of a **single-founder operation**:

| Signal | Evidence |
|--------|----------|
| Git author | Single contributor `ken004Ban` across all 3 commits
  (2026-04-17 to 2026-05-16) |
| Homepage stats | "1 Founding chapter — pipeline open" |
| About page | "We are at the beginning — building a practice where
  stillness precedes motion" — uses "we" aspirationally |
| Team section | Explicitly states "no placeholder names, just the work
  we are organizing around first" |
| No CODEOWNERS | `.github/CODEOWNERS` does not exist |
| No pull request templates | `.github/` directory does not exist |

### Team Focus Areas (Role-Shaped Pillars)

Defined in `lib/constants.ts:177-197`, these are intentionally descriptive
rather than naming individuals:

1. **Engineering** — Architecture, implementation, review
2. **Delivery** — Scoping, sequencing, communication
3. **Operations mindset** — Runbooks, observability, handover

> ⚠ **Not determinable from codebase:** Number of employees,
> contractors, or whether the company has non-technical co-founders.

## Engineering Culture Signals

### CI/CD

- **No CI configuration files found** — no `.github/workflows/`,
  `.circleci/`, or `Jenkinsfile`
- **Vercel deployment** is manual (guide in `DEPLOYMENT.md`) — push to git,
  then Vercel auto-deploys via git import
- **No test files or test configuration** — no `jest`, `vitest`, `cypress`,
  `playwright`, or test script in `package.json`
- **Lint command exists** (`next lint`) but no pre-commit hook config

### Code Quality

- **TypeScript strict mode** enabled (`tsconfig.json:7`)
- **Next.js ESLint config** (`next/core-web-vitals`, `next/typescript`)
- **No comments** in production components (only JSDoc-style annotations for
  component descriptions)
- **Accessibility considered** — skip-link, `aria-*` attributes, `sr-only`
  text, `role` attributes, keyboard focus management in mobile menu
- **Type exports** used (`CompanyInfo`, `ServiceItem`, `ScramblePart`, etc.)

### Commit Conventions

3 commits in history:

| Date | Message | Scope |
|------|---------|-------|
| 2026-04-17 | Initial commit for Vercel deployment | Setup |
| 2026-04-17 | docs: deployment guide, env example, README link | Documentation |
| 2026-05-16 | Add WhatsApp button across site (footer + contact page) | Feature |

Convention: lowercase, prefix for docs (`docs:`), descriptive body for
features. No conventional commit spec enforced (no commitlint).

## Open-Source Posture

| Aspect | Status |
|--------|--------|
| **LICENSE file** | ⚠ Not present |
| **Contributing guide** | ⚠ Not present (`CONTRIBUTING.md` does not exist) |
| **Issue/PR templates** | ⚠ Not present (`.github/` folder does not exist) |
| **Code of conduct** | ⚠ Not present |
| **Public repo** | Likely (deployed via Vercel, `.env.example` is
  placeholder-only) |

The absence of open-source infrastructure files suggests the project is
currently **private or pre-public**, or that open-source contribution is not
yet a priority.

---

## References

- `git log --all` — Author count, commit history, dates
- `lib/constants.ts:177-197` — TEAM_FOCUS_AREAS array
- `lib/constants.ts:21-35` — COMPANY_STATS (includes "1 Founding chapter")
- `app/about/page.tsx:21-26` — Founding team philosophy
- `app/about/page.tsx:69-98` — Team focus areas section
- `package.json` — No test or CI scripts
- `tsconfig.json:7` — `strict: true`
- `.eslintrc.json` — Lint configuration
