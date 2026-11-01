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

| Command             | What it does                                            |
| ------------------- | ------------------------------------------------------- |
| `npm run dev`       | Start the local development server                      |
| `npm run build`     | Create a production build                               |
| `npm run start`     | Serve the production build locally                      |
| `npm run lint`      | Check code for problems (ESLint)                        |
| `npm run typecheck` | Check TypeScript types                                  |
| `npm run format`    | Auto-format all files (Prettier)                        |
| `npm run check`     | Lint + typecheck + format check (run before committing) |

## Project structure

```
src/
  app/            Pages and layouts (App Router)
  components/ui/  shadcn/ui components (add more with `npx shadcn@latest add <name>`)
  content/        Site text and settings (site-config.ts)
  lib/            Shared helpers
```

## Brand

Colours live in one place: `src/app/globals.css` (`--brand-navy`, `--brand-blue`, `--brand-light`).
Use them in components as `bg-brand-navy`, `text-primary`, `border-brand-light`, etc.
Add `className="dark"` to any section to switch it to the midnight-navy theme.

## Environment variables

See `.env.example`. Real values go in `.env.local` (never committed) and in Vercel → Project Settings → Environment Variables.
