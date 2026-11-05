# Grand Empire Hotel & Apartments — Website

Next.js website for Grand Empire Hotel, Civic Center, Bahria Town Phase 4, Rawalpindi.

## Run it on your computer

```bash
npm install      # first time only
npm run dev      # open http://localhost:3000
```

## Where to edit things

| What | File |
|---|---|
| **Rates (change once, updates every page)** — short stay 1–3 hrs, full night, monthly | `lib/site.ts` → `RATES` |
| Phone, WhatsApp, address, map, check-in/out times, room count | `lib/site.ts` |
| Blog articles (add / edit) | `lib/blog.ts` |
| "Best hotel / luxury / affordable / family / Phase 4 / near Islamabad" pages | `lib/landing.ts` |
| Hourly, night stay, weekly, 2-bed per day, parking & business pages | `lib/landing.ts` (bottom of the list) |
| In-room features (AC, heater, Smart TV, safe, parking …) | `lib/site.ts` → `ROOM_FEATURES` |
| Home page | `app/page.tsx` |
| Rooms & Rates | `app/rooms-and-rates/page.tsx` |
| Daily stay · Couples · Monthly rent | `app/<page-name>/page.tsx` |
| Food menu | `app/hotel-with-food-bahria-town-rawalpindi/page.tsx` (the `MENU` list) |
| Hotel details & policies | `app/about/page.tsx` |
| Booking form (WhatsApp) | `components/QuickBook.tsx`, `components/BookingForm.tsx` |
| Navbar / footer | `components/Header.tsx`, `components/Footer.tsx` |
| Colours & styling | `app/globals.css` |
| Photos | `public/images/` |

Keep every meta description under ~155 characters (longer ones get flagged by SEO tools and cut off by Google).

Each page's Google title, description and keywords are in the `pageMeta({...})` block at the top of its file
(for blog and search pages, in `lib/blog.ts` / `lib/landing.ts`).

### Add a new blog post
Copy one entry in `lib/blog.ts`, change the `slug`, title, text and date. It automatically appears on
the blog page, in the footer, and in `sitemap.xml`.

## Publish

1. Push this folder to GitHub and import it at https://vercel.com (free).
2. In Vercel → Settings → Domains, keep `grandempirehotel.com` (no www) as the **primary** domain and set
   `www.grandempirehotel.com` to **redirect (308/301) to grandempirehotel.com**. The site's canonical URLs,
   sitemap and schema all use the non-www address (`SITE_URL` in `lib/site.ts`) — keep the two in sync.
3. In Google Search Console: verify the site (put the code in a `GOOGLE_SITE_VERIFICATION`
   environment variable on Vercel), then submit `https://grandempirehotel.com/sitemap.xml`.
4. Add the website link to your Google Business Profile.

`static-html-version/` is the earlier plain-HTML version, kept as a backup.
