# ALyf2Ride — A Life to Ride

Community site for the ALyf2Ride motorcycle riding group. Static/server-rendered
Next.js site, no login, no database — content lives in editable JSON files.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** — dark, moody, photographic theme (charcoal / olive / rust / amber)
- **Formspree** for the contact form (no backend)
- Deploys to **Vercel** (zero-config)

## Project structure

```
app/                    Pages (App Router)
  page.tsx              Home
  about/page.tsx         About
  rides/page.tsx          Rides list (upcoming + past)
  rides/[slug]/page.tsx    Ride detail page
  gallery/page.tsx        Gallery
  join/page.tsx            Join Us + etiquette
  contact/page.tsx         Contact form + socials
  layout.tsx             Root layout, fonts, global SEO/OG metadata
  sitemap.ts / robots.ts  Auto-generated SEO files
components/            Reusable UI (Navbar, Footer, Hero, RideCard, WhatsAppButton, ContactForm)
data/                  Editable content — no code changes needed to update these
  site.json             Name, tagline, socials, WhatsApp link, email
  rides.json             Ride/event data (add a new object to add a ride)
  etiquette.json           Riding etiquette / ground rules
lib/rides.ts           Helpers to read/sort/filter ride data
lib/gallery.ts          Auto-scans public/images/gallery/ at request time
public/images/         Placeholder JPG images — see public/images/README.md
```

## Editing content (no code required)

- **Add/edit a ride**: open `data/rides.json`, copy an existing entry, change
  the fields. `status: "upcoming"` shows it in the upcoming section and on
  the homepage; `status: "past"` moves it to the archive.
- **Update site info / WhatsApp link / Instagram / email**: `data/site.json`.
- **Update riding etiquette**: `data/etiquette.json`.
- **Add gallery photos**: drop any `.jpg`/`.jpeg`/`.png`/`.webp` file into
  `public/images/gallery/` — the Gallery page reads that folder directly and
  picks it up automatically, no JSON editing needed. Files are shown in
  alphabetical filename order.
- **Swap hero/ride cover photos for real ones**: these are one specific
  photo per page slot (e.g. the homepage hero), so the filename matters —
  see `public/images/README.md` for the exact filename each page expects.

## Run locally

Requires [Node.js](https://nodejs.org) 18.18+ and npm (not currently
installed in this environment — install Node first).

```bash
cd alyf2ride
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Before going live

1. Replace `public/og-cover.jpg` with a real photo (1200×630) — this is
   what shows up when links are shared on WhatsApp/Instagram.
2. Replace hero/ride/gallery placeholder JPGs with real photos
   (`public/images/README.md` has the full list).
3. Set the real WhatsApp invite link in `data/site.json` and per-ride in
   `data/rides.json`.
4. Set the real Formspree endpoint in `components/ContactForm.tsx`
   (`FORMSPREE_ENDPOINT`) — sign up free at [formspree.io](https://formspree.io),
   create a form, and paste the form ID into the URL.
5. Update `url` and `email` in `data/site.json` to your real domain/inbox.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects as Next.js — no config needed.
4. Deploy. Every push to `main` auto-deploys; PRs get preview URLs.

Or via CLI:

```bash
npm install -g vercel
vercel
```

### Custom domain

In the Vercel project settings → Domains, add `alyf2ride.com` (or whichever
domain you own) and follow the DNS instructions. Update `url` in
`data/site.json` to match once it's live — this feeds the sitemap and OG
tags.
