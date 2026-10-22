# Nuxt Portfolio Website

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Static Build

Generate the static site:

```bash
# npm
npm run generate
```

## Navigating the Project

If you're forking or reusing this site for your own project, here's the general layout and how content is organized.

### Top-level structure

```
app/
  assets/          # where the CSS lives for colors
  components/
  composables/
  data/            # generally one .ts file per page
  pages/           # one .vue file per route
  types/
  app.config.ts
  app.vue
public/            # store static assets here; generally per-page
  ...
  favicon.ico
  robots.txt
nuxt.config.ts
tsconfig.json
package.json
```

### Per-page pattern

Each page in `app/pages/` (e.g. `art.vue`, `books.vue`, `characters.vue`) generally has a matching `.ts` file of the same name in `app/data/`, plus a matching folder in `public/`:

- **`app/data/<page>.ts`** — manifest and text content for that page. You'll also need to point references to images in /public here.
- **`public/<page>/`** — the actual image assets for that page. Need to be referenced in /data somewhere.

So to update text or entries for a page, start in `app/data/<page>.ts`. To swap out or add images, drop them into `public/<page>/` and update the file path reference in the data file as-needed.

Each page in /pages also automatically routes and updates the header navigation.

### Quick reference

| What you want to change  | Where to look                                                       |
| ------------------------ | ------------------------------------------------------------------- |
| Page text / entries      | `app/data/<page>.ts`                                                |
| Images                   | `public/<page>/`, referenced from the matching `app/data/<page>.ts` |
| Site-wide footer content | `app/data/footer.ts`                                                |
| Homepage                 | `app/data/index.ts`, `app/pages/index.vue`                          |
| Page layout / components | `app/components/`, `app/pages/`                                     |
| Shared logic             | `app/composables/`                                                  |
| Types                    | `app/types/`                                                        |

## Look & Feel

- **Fonts:** Bricolage Grotesque (headings) and Hanken Grotesk (body), set in `--font-display` / `--font-sans` at the top of `app/assets/css/main.css`. `@nuxt/fonts` (included with Nuxt UI) downloads and self-hosts them at build time, so the first `npm run dev` / `generate` needs internet access.
- **Colors & surfaces:** palette plus light/dark surface tokens live in `app/assets/css/main.css`.
- **Motion:** page transitions are the `.page-*` classes; the load sequence is `.hero-in` (order set with `[--i:N]`); scroll-in is the `v-reveal` directive in `app/plugins/reveal.ts`. All of it switches off under `prefers-reduced-motion`.
