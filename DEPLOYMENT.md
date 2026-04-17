# Deployment — Nyota Tech site

Use this doc in order: **Git first**, then **Vercel** when you are ready. Secrets stay in `.env.local` (local) and in the Vercel dashboard (production)—never in the repo.

---

## 1. Environment variables (the “right” names)

These are the only variables the app expects today:

| Variable | Where | Purpose |
|----------|--------|---------|
| `RESEND_API_KEY` | `.env.local` locally; Vercel **Settings → Environment Variables** in production | Resend API key (`re_…`) |
| `CONTACT_FROM_EMAIL` | Same | Sender Resend accepts (verified domain in prod, or `… <onboarding@resend.dev>` for tests) |
| `CONTACT_TO_EMAIL` | Same | Inbox that receives contact form submissions |
| `NEXT_PUBLIC_SITE_URL` | Optional | Production URL for `metadataBase` in [`app/layout.tsx`](app/layout.tsx) (falls back to `VERCEL_URL` on Vercel) |

**Local setup**

1. Copy [`.env.example`](.env.example) to `.env.local`.
2. Fill in real values. If `CONTACT_FROM_EMAIL` includes spaces or `<…>`, use double quotes in `.env.local`, for example:  
   `CONTACT_FROM_EMAIL="Nyota Tech <onboarding@resend.dev>"`
3. Restart `npm run dev` after any change.

**Git / repo**

- Do **not** commit `.env.local` or `.env copy.local`. They are listed in [`.gitignore`](.gitignore).
- Committing [`.env.example`](.env.example) is safe (placeholders only).

---

## 2. Push to Git (GitHub example)

Prerequisites: [Git](https://git-scm.com/) installed; a **new empty** repository on GitHub (no README/license if you want a clean first push—otherwise you must pull/merge first).

Replace `YOUR_USER` and `YOUR_REPO` with yours.

```bash
cd /path/to/editorial-site

# Use main as the default branch (matches GitHub’s default)
git branch -M main

# Point at your GitHub repo (HTTPS)
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git

# First push
git push -u origin main
```

If `git remote add` fails because `origin` already exists:

```bash
git remote set-url origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

**SSH** (if you use keys):

```bash
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin main
```

After this, future updates:

```bash
git add -A
git commit -m "Your message"
git push
```

---

## 3. Vercel (later)

When the repo is on GitHub/GitLab/Bitbucket:

1. In [Vercel](https://vercel.com): **Add New Project** → import the repo.
2. **Framework**: Next.js (default). **Root directory**: repository root (folder that contains `package.json`).
3. **Environment variables**: add the same keys as in the table above for **Production** (and **Preview** if you want the contact form on preview URLs). Values should match what you use locally, unless you use a different Resend sender for prod.
4. Deploy. If `/api/contact` returns **503**, one of the three required vars is missing or the deployment needs a **Redeploy** after saving env.
5. If your Vercel team needs an explicit scope in the CLI, use `--scope your-team-slug` (see Vercel CLI messages when linking).

---

## Resend setup

1. Create a [Resend](https://resend.com) account and an API key.
2. For production, verify your domain and send from an address on that domain.
3. For quick tests, you can use `onboarding@resend.dev` as in `.env.example` (subject to Resend limits).

---

## Build checks

```bash
npm install
npm run lint
npm run build
```

---

## Contact form

Submissions `POST` to `/api/contact`. If `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, or `CONTACT_TO_EMAIL` is missing, the API returns **503** with a JSON error (see [`app/api/contact/route.ts`](app/api/contact/route.ts)).
