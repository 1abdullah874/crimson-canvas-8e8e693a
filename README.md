# Portfolio Site

TanStack Start + React 19 + Tailwind v4.

## Local development

```bash
npm install
npm run dev
```

App runs on `http://localhost:8080`.

## Deploy to Vercel

1. Push this repo to GitHub (use the GitHub button in Lovable, top-right).
2. In Vercel, **Add New → Project** and import the repo.
3. Leave all settings on defaults — `vercel.json` already configures the build (`NITRO_PRESET=vercel vite build`) and output directory (`.vercel/output`).
4. Click **Deploy**.

No env vars are required for the current build. If you later add Lovable Cloud / Supabase, copy the matching `VITE_*` and server-side secrets into Vercel's project settings.

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build (Cloudflare preset by default; Vercel preset on Vercel via `vercel.json`)
- `npm run preview` — preview the production build locally
- `npm run lint` — eslint