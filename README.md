# Care Veliyathunadu — Website

A SEO-ready, responsive, professional website for **Care Veliyathunadu**, a charitable community initiative that builds simple, dignified homes for the poor — starting at just **₹1000 per donation**.

Built with **Astro 5**, **Tailwind CSS v4**, and zero JavaScript framework overhead — the result is a fast, static-first, easily-extendable site.

---

## Quick Start

```bash
# Install dependencies (first time only)
npm install

# Run the dev server
npm run dev
# → http://localhost:4321

# Build for production
npm run build
# → outputs to ./dist (static files — deploy anywhere)

# Preview the production build
npm run preview
```

---

## Project Structure

```
care-veliyathunadu/
├── public/
│   ├── favicon.svg          # Brand mark
│   └── robots.txt           # SEO crawl rules
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Icon.astro       # 30+ inline SVG icons (Lucide-style)
│   │   └── SectionHeading.astro
│   ├── data/                # Centralised content (edit here!)
│   │   ├── site.ts          # Site name, contact, bank details
│   │   ├── projects.ts      # All homes — add a new one here
│   │   ├── team.ts          # Working team + society leaders
│   │   ├── gallery.ts       # All gallery images
│   │   └── faqs.ts          # FAQ + values
│   ├── layouts/
│   │   └── Layout.astro     # Base layout with SEO + Header/Footer
│   ├── pages/
│   │   ├── index.astro      # Home
│   │   ├── about.astro      # About / Our Story
│   │   ├── team.astro       # Working team + Society leaders
│   │   ├── projects/
│   │   │   ├── index.astro  # All projects (filterable)
│   │   │   └── [slug].astro # Individual project page (auto-generated)
│   │   ├── gallery.astro    # Filterable masonry + lightbox
│   │   └── contact.astro    # Contact + Donate (full flow)
│   └── styles/
│       └── global.css       # Tailwind + design tokens + animations
├── astro.config.mjs
└── package.json
```

---

## How to Update Content

### Add a new home (project)

Edit `src/data/projects.ts` and append a new object to the `PROJECTS` array:

```ts
{
  slug: "home-7-new-family",
  number: 7,
  familyName: "New Family",
  head: "Family head's name",
  location: "Locality",
  district: "Malappuram",
  completedOn: "2026-03-01",
  status: "delivered",           // or "in-progress" / "planned"
  cover: "https://your-image.jpg",
  gallery: ["https://img1.jpg", "https://img2.jpg"],
  short: "1-2 sentence summary.",
  story: "Long-form paragraph about the family.",
  beneficiaries: 4,
  contributors: 50,
},
```

The page at `/projects/home-7-new-family/` will be generated automatically.

### Update bank account / contact details

Edit `src/data/site.ts` — bank account, UPI, WhatsApp number, etc.

### Add a working team member or leader

Edit `src/data/team.ts`.

### Add gallery photos

Edit `src/data/gallery.ts`.

---

## Replacing Placeholder Images

All images currently use **Unsplash** URLs (free, optimised). To swap with actual project photos:

1. Drop the new images into `public/images/...`
2. Update the `src` in the relevant data file to point to the new path
3. Or use any CDN-hosted image URL

For best Lighthouse scores, serve images as WebP/AVIF and use `width`/`height` attributes (already done).

---

## Design System

| Token | Value | Use |
|---|---|---|
| `--color-brand-500` | `#0F6E54` (forest green) | Primary buttons, links, accents |
| `--color-saffron-400` | `#F4A623` | Donate CTAs, highlights |
| `--color-gold-400` | `#FFD66B` | Hero overlays, dots, badges |
| `--color-cream-100` | `#FAF7F2` | Page background |
| `--font-display` | Playfair Display | Headlines, serif moments |
| `--font-sans` | Inter | Body, UI |

All tokens are defined in `src/styles/global.css` under the `@theme` block. Modify them once, change everywhere.

---

## Features

- ⚡ Static-first Astro — minimal JS, 12 pages < 1.1 MB total
- 📱 Mobile-first responsive (sm, md, lg, xl)
- 🔍 SEO: per-page titles, meta, OG, Twitter, JSON-LD schema, sitemap
- 🎨 Custom design system with brand tokens
- 🎞️ Hero image carousel (auto-rotating with Ken Burns zoom)
- 🎠 Embla-powered carousels for projects & testimonials
- 🖼️ Masonry gallery with category filters + lightbox
- 📬 Donate flow: tabs → chat (WhatsApp) → bank details (with copy) → form → slip upload → submission via WhatsApp
- ♿ Accessible: skip links, keyboard-friendly carousels, ARIA labels, reduced-motion support
- 🎬 Subtle scroll-reveal animations
- 📄 Auto-generated sitemap (`dist/sitemap-index.xml`)

---

## Deployment

The output in `dist/` is pure static files — deploy anywhere:

- **Netlify / Vercel**: drag-and-drop `dist/` or connect the repo
- **GitHub Pages**: push `dist/` to `gh-pages` branch
- **Traditional hosting**: upload `dist/` contents via FTP
- **Any static host**: Cloudflare Pages, AWS S3, etc.

Before deploying:
1. Update `SITE.url` in `src/data/site.ts` and `astro.config.mjs` to the real domain
2. Replace placeholder images with real ones
3. Update bank account details in `src/data/site.ts`
4. Replace WhatsApp/phone/email in `src/data/site.ts`
5. Update social media URLs in `src/data/site.ts`

---

## License

© Care Veliyathunadu. All rights reserved.