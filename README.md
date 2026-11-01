# TheMangalore.in

**Build Smarter. Grow Faster.** The website for TheMangalore.in, an AI-first technology company in Mangalore, India.

## Tech stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Vercel

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
cp .env.example .env.local   # then edit values if needed
npm run dev                  # http://localhost:3000
```

## Scripts

| Command             | What it does                                              |
| ------------------- | --------------------------------------------------------- |
| `npm run dev`       | Start the local development server                        |
| `npm run build`     | Create a production build                                 |
| `npm run start`     | Serve the production build locally                        |
| `npm run lint`      | Check code for problems (ESLint)                          |
| `npm run typecheck` | Check TypeScript types                                    |
| `npm run format`    | Auto-format all files (Prettier)                          |
| `npm test`          | Run unit tests (Vitest)                                   |
| `npm run check`     | Lint + typecheck + format + tests (run before committing) |

## Project structure

```
src/
  actions/        Server Actions (form submissions)
  app/            Pages, layouts and SEO files (App Router)
  components/     ui/ (shadcn), forms/, sections/, layout/, shared/
  content/        Site text and settings (site-config.ts, services.ts, …)
  lib/            Helpers: forms engine, Supabase, email, SEO, validation
supabase/
  migrations/     Database setup SQL
```

## Forms & backend setup

The contact form and product waitlist store submissions in **Supabase** and
send new-enquiry alerts by email through **Resend**.

1. Create a Supabase project (region: Mumbai / `ap-south-1` recommended).
2. In Supabase → **SQL Editor**, run `supabase/migrations/0001_leads_and_waitlist.sql`.
3. Copy the project URL and **secret** key into `.env.local`
   (`SUPABASE_URL`, `SUPABASE_SECRET_KEY`).
4. Optional: create a Resend API key and set `RESEND_API_KEY` and `LEAD_ALERT_TO`.
5. Set `FORMS_ENABLED=true`, restart `npm run dev`, and send a test enquiry.
6. Add the same variables in Vercel → Settings → Environment Variables and redeploy.

View enquiries in Supabase → **Table Editor** → `leads` (update `status` as you follow up).
Tables use Row Level Security with no public access; only the server writes.

## Brand

Colours live in one place: `src/app/globals.css` (`--brand-navy`, `--brand-blue`, `--brand-light`).
Use them in components as `bg-brand-navy`, `text-primary`, `border-brand-light`, etc.
Add `className="dark"` to any section to switch it to the midnight-navy theme.

## Environment variables

See `.env.example`. Real values go in `.env.local` (never committed) and in Vercel → Project Settings → Environment Variables.
