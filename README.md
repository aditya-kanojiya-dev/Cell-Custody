# Cell Custody — Website (Phase 1)

Doorstep mobile repair website for Nagpur. Built with Next.js 14, TypeScript, and Tailwind CSS.

## What's included in this phase

- Homepage: hero, trust stats, service "work order" ticket list, brand strip, how-it-works, why-us, FAQ, CTA
- Booking page (`/book`) with a form (currently simulates submission — not yet wired to a database)
- Dynamic service pages (`/services/[slug]`) — one page per repair type, statically generated
- Pricing page (`/pricing`)
- Contact page (`/contact`)
- Sticky header with call + WhatsApp links, mobile menu
- Footer with service/area links
- Floating WhatsApp button

## Placeholders to replace before going live

All of these live in `lib/data.ts` and a few page files — search for them and swap in real values:

- `contact.phoneDisplay` / `contact.phoneHref` / `contact.whatsappHref` / `contact.email` / `contact.addressLine` — currently placeholder numbers
- Stats in `components/StatsStrip.tsx` (500+ repairs, 45 min response time, etc.) — currently placeholder numbers, swap once you have real data
- Service prices in `lib/data.ts` — currently estimated starting prices, confirm against your real pricing
- Testimonials — not yet added; add a `Testimonials` component once you have real reviews (Google/Instagram)

## Not yet built (planned for next phases)

- Database connection (Supabase/Postgres) for storing real bookings
- WhatsApp Cloud API integration for automated booking confirmations
- Admin dashboard (`/admin`) to view and manage bookings
- Brand pages (`/brands/[slug]`) and area pages (`/areas/[slug]`) — data structure already exists in `lib/data.ts`, pages need to be built following the same pattern as `/services/[slug]`
- Legal pages: Terms, Privacy, Warranty Policy (linked in footer but not yet created)
- Google Maps address autocomplete on the booking form
- Real Google Business Profile / review integration

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploying

This is set up to deploy directly to Vercel:

1. Push this code to a GitHub repository
2. Import the repo in Vercel (vercel.com/new)
3. Vercel auto-detects Next.js — no config needed for this phase
4. Once deployed, point your domain (cellcustody.in or .com) to the Vercel project

## Tech stack (Phase 1)

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- Google Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (prices/numbers)

Phase 2 will add Supabase (database), WhatsApp Cloud API, and the admin dashboard.
# Cell-Custody-Development
# Cell-Custody-Development
