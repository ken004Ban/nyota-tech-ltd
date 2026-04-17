# Deployment — Nyota Tech site

## Environment variables

Copy `.env.example` to `.env.local` for local development, and configure the same keys in your host (e.g. Vercel **Settings → Environment Variables**).

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key (`re_…`) |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend (e.g. `Nyota Tech <mail@yourdomain.com>`) |
| `CONTACT_TO_EMAIL` | Where contact form mail is delivered (e.g. `nyotatech.info@gmail.com`) |
| `NEXT_PUBLIC_SITE_URL` | Optional. Set your production URL, then use it in `app/layout.tsx` for `metadataBase` |

## Resend setup

1. Create a [Resend](https://resend.com) account and an API key.
2. For production, add and verify your domain, then send from `something@yourdomain.com`.
3. For quick tests, Resend allows sending from `onboarding@resend.dev` with limits — set `CONTACT_FROM_EMAIL` accordingly.

## Vercel (recommended for Next.js)

1. Push the repo to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com) and set root to `editorial-site` if the repo is monorepo-style.
3. Add the environment variables above (Production + Preview as needed).
4. Deploy. Production URL: set `NEXT_PUBLIC_SITE_URL` and update `metadataBase` in `app/layout.tsx` to match (or read from `process.env.NEXT_PUBLIC_SITE_URL`).

## Build checks

```bash
npm install
npm run lint
npm run build
```

## Contact form

Submissions `POST` to `/api/contact`. If env vars are missing, the API returns `503` and the UI shows an error instead of a false success.
