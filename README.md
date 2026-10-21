# Artist Portfolio — Vue 3 + TypeScript

A clean, editorial-aesthetic portfolio site for an artist/product creator. Built with Vue 3, TypeScript, and Vue Router. No backend, no Pinia, no payment processing.

## Tech Stack

- **Vue 3** (Composition API + `<script setup>`)
- **TypeScript** — fully typed throughout
- **Vue Router 4** — client-side routing with lazy-loaded views
- **Vite** — fast dev server and build tool
- **No state management** — static data via plain `.ts` files
- **No backend** — all content is in `src/data/`

## Getting Started

```bash
npm install
npm run dev       # dev server at http://localhost:5173
npm run build     # production build to dist/
npm run preview   # preview production build
```

## Project Structure

```
src/
├── assets/
│   └── main.css          # Design tokens, global styles
├── components/
│   ├── SiteNav.vue        # Fixed top nav with mobile drawer
│   └── SiteFooter.vue     # Footer
├── data/
│   ├── about.ts           # Bio, skills, timeline, contact/socials
│   ├── artwork.ts         # Gallery collections + artwork items
│   └── products.ts        # Product listings
├── router/
│   └── index.ts           # Vue Router config
├── types/
│   └── index.ts           # TypeScript interfaces
├── views/
│   ├── HomeView.vue        # Hero landing + featured works
│   ├── AboutView.vue       # Bio, skills, timeline, contact links
│   ├── ArtworkView.vue     # Multi-gallery with lightbox
│   └── ProductsView.vue    # Filterable product grid + detail modal
├── App.vue
└── main.ts
```

## Customising Content

All content lives in `src/data/`. You never need to touch the components or views for basic content updates.

### Your info (`src/data/about.ts`)
- `artistName` — your display name (used in nav, footer, page titles)
- `artistTitle` — tagline under your name
- `artistBio` — multi-paragraph bio (separate paragraphs with a blank line)
- `skillGroups` — grouped skill cards for the Expertise section
- `timeline` — experience/education entries (most recent first)
- `contactInfo` — email + social links with platform icons

### Artwork galleries (`src/data/artwork.ts`)
Each entry in `artworkGalleries` becomes a full section on the Artwork page with its own grid. Add/remove galleries and items freely. Fields: `id`, `title`, `description`, `coverImageUrl`, `items[]`.

### Products (`src/data/products.ts`)
Each entry in `products` is a product card. Key fields:
- `buyUrl` — if present, shows a **"Buy Here ↗"** link (external shop)
- `soldOut: true` — shows a "Sold Out" badge and suppresses the buy link
- `price` — display string, e.g. `"$12.00"`
- `category` — used for the filter bar: `'pin' | 'print' | 'sticker' | 'bundle' | 'other'`

### Images
Replace the `placehold.co` URLs with real image paths. You can:
- Put images in `public/images/` and reference them as `/images/myfile.jpg`
- Use absolute URLs to a CDN or image host

## Design System

Defined in `src/assets/main.css` via CSS custom properties:

| Variable | Value | Use |
|---|---|---|
| `--ink` | `#0e0c0a` | Dark background |
| `--paper` | `#f5f0e8` | Primary text |
| `--rust` | `#c0512b` | Accent / CTA |
| `--rust-light` | `#d96b42` | Hover accent |
| `--gold` | `#c8922a` | Secondary accent |
| `--ash` | `#5a524a` | Body text |
| `--mist` | `#8a8078` | Subdued / labels |

Fonts loaded from Google Fonts: **Playfair Display** (display/headings) · **DM Sans** (body) · **DM Mono** (labels, UI).

## Deployment

This is a static site — `npm run build` outputs to `dist/`. Deploy to any static host:
- **Netlify**: drag-and-drop the `dist/` folder or connect git
- **Vercel**: `vercel --prod` from the project root
- **GitHub Pages**: use the `gh-pages` package or GitHub Actions

For history-mode routing (no `#` in URLs) you may need a redirect rule on your host so all routes serve `index.html`. Netlify: add a `_redirects` file; Vercel: add a `vercel.json`.
