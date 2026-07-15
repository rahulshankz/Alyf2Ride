# Image placeholders

Every image in `hero/` and `rides/` is a generated JPG placeholder (dark
charcoal background, amber label) marking one specific spot on the site.
Replace them **by overwriting the exact same filename** — the code looks
for that filename directly, so a differently-named or differently-extensioned
file (e.g. `home-hero.jpeg` instead of `home-hero.jpg`, or `IMG_1234.jpg`)
will not show up until the code is updated to match.

The `gallery/` folder works differently — see below.

| Placeholder (exact filename required) | Used in | Replace with |
|---|---|---|
| `hero/home-hero.jpg` | `app/page.tsx` | Wide cinematic shot, riders/bike, dusk or monsoon light |
| `hero/group-story.jpg` | `app/page.tsx` | Portrait-ish group photo |
| `hero/about-hero.jpg` | `app/about/page.tsx` | Wide moody landscape/rider shot |
| `hero/about-group.jpg` | `app/about/page.tsx` | Full community group photo |
| `hero/rides-hero.jpg` | `app/rides/page.tsx` | Bikes parked on a ghat road |
| `hero/join-hero.jpg` | `app/join/page.tsx` | Riders gathered before a ride |
| `hero/contact-hero.jpg` | `app/contact/page.tsx` | Single bike at dusk |
| `hero/gallery-hero.jpg` | `app/gallery/page.tsx` | Wide highway shot |
| `rides/monsoon-ride-idukki-2026.jpg` | `data/rides.json` | Cover photo for that ride |
| `rides/sundowner-circuit-blore-edition.jpg` | `data/rides.json` | Cover photo for that ride |
| `../og-cover.jpg` | `app/layout.tsx` | Social share preview (1200×630) — shown when links are shared on WhatsApp/Instagram |
| `../favicon.svg` | `app/layout.tsx` | Browser-tab icon — fine to keep as SVG, or swap for a branded icon |

If you rename a hero/ride file instead of overwriting it, update the
matching path in the page component (for `hero/*`) or `data/rides.json`
(for `rides/*`) to point at the new name.

## Gallery is different: just drop files in, no filename required

`app/gallery/page.tsx` reads `public/images/gallery/` directly via
`lib/gallery.ts` and lists whatever `.jpg`, `.jpeg`, `.png`, or `.webp`
files it finds there, sorted alphabetically — any filename works, nothing
to edit. Delete a file from the folder and it disappears from the page.

## General tips

- Keep hero images roughly 1600×1000+ and under ~400KB — `next/image`
  handles resizing/lazy-loading automatically, but a smaller source file
  still loads faster.
- After adding/replacing/removing files while `npm run dev` is running, hard
  refresh the browser (`Cmd+Shift+R`) — Next's image optimizer caches
  responses briefly and a plain refresh can show a stale version.
