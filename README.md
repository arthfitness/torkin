# Torkin Couplings — Website 

A Next.js (App Router) + TypeScript + Tailwind CSS rebuild of the Torkin
industrial coupling manufacturer site: same page structure, real design
tokens (colors, fonts, spacing) pulled from the production site's CSS,
matching animations, and a fully data-driven programmatic SEO section for
city × product landing pages.

Written content (product copy, policy text, testimonials, FAQs) is original
and meant to be reviewed/replaced with your actual copy before going live.
Product photography ships as generated placeholder SVGs — see
[`public/images/products/README.md`](public/images/products/README.md) for
how to swap in real photos.

## Tech Stack

- **Next.js 15** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** for scroll reveals, hero transitions, testimonial carousel
- **lucide-react** for icons

## Project Structure

```
src/
  app/
    layout.tsx                 Root layout — fonts, header/footer, floating UI
    page.tsx                   Home page
    about/page.tsx
    contact/page.tsx
    market-area/page.tsx
    privacy/page.tsx
    terms/page.tsx
    disclaimer/page.tsx
    products/
      page.tsx                 Product listing
      [slug]/page.tsx          Product detail (6 static products)
    [city]/[product]/page.tsx  Programmatic city × product SEO pages
    sitemap.ts                 Generated sitemap (static + dynamic routes)
    robots.ts
    not-found.tsx               404 page
  components/
    layout/                    Header, MobileNav, Footer, FloatingIcons, Preloader, ScrollToTop
    home/                      Hero, ProductsShowcase, AboutSnippet, CtaSection, Testimonials, FaqSection, IndustriesStrip
    ui/                        ProductCard, Accordion, Breadcrumb, ScrollReveal, Toast, LegalContent
    forms/                     ContactForm (client-side validation + mock submit)
  lib/data/                    products, cities, testimonials, faqs, legal copy, site config
public/
  images/products/             Placeholder product imagery (SVG)
```

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, product showcase, about snippet, CTA, testimonials, FAQ, industries strip |
| `/about` | Company story, values, milestones |
| `/products` | All 6 coupling types |
| `/products/[slug]` | Individual product spec sheet |
| `/[city]/[product]` | 20 cities × 6 products = 120 statically generated local-SEO landing pages |
| `/market-area` | City directory linking into the above |
| `/contact` | Contact form with validation + Google Maps embed |
| `/privacy`, `/terms`, `/disclaimer` | Policy pages |
| `/404` (not-found) | Custom 404 |

## Getting Started

### Prerequisites

- Node.js 18.18+ (tested on Node 22)
- npm (or pnpm/yarn if you prefer — adjust commands accordingly)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm run start
```

`npm run build` statically generates every product page and all 120
city/product SEO pages at build time (`generateStaticParams`).

### Lint

```bash
npm run lint
```

## Before Going Live

1. **Replace placeholder imagery** — see `public/images/products/README.md`.
2. **Update contact details** in `src/lib/data/site.ts` (phone, WhatsApp
   number, email, address, social links, payment link).
3. **Review all written copy** in `src/lib/data/*.ts` — product
   descriptions, FAQs, testimonials, and legal text are original drafts
   intended as a starting point, not verified legal/technical text.
4. **Set the real domain** in `src/app/layout.tsx` (`metadataBase`),
   `src/app/sitemap.ts`, and `src/app/robots.ts`.
5. **Wire the contact form to a real backend** — `ContactForm` currently
   simulates submission with a timeout; connect it to an email/API endpoint
   for production use.

## Notes on Fidelity

Colors, font families (Barlow / Teko / Lato), spacing scale, and section
ordering were matched against the production site's own stylesheet and
sitemap. Body copy, testimonials, FAQs, and legal text are original writing
structured to match each section's purpose rather than copied verbatim.
