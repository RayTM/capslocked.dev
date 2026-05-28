# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Astro dev server (localhost:4321)
npm run build     # Production build → dist/
npm run preview   # Preview production build
```

No test runner or linter configured. TypeScript checking via `astro/tsconfigs/strict`.

## Architecture

Astro static site with Tailwind CSS. No client-side JS framework — pages are pre-rendered at build time.

### Content Collections (Astro Content Layer)

Blog posts and project pages are written as **Markdown files** in `src/content/`, with schemas defined in `src/content.config.ts`. Astro generates pages from these via dynamic `[slug].astro` routes.

```
src/content/
├── blog/en/*.md        — English blog posts
├── blog/de/*.md        — German blog posts
├── projects/en/*.md    — English project pages
└── projects/de/*.md    — German project pages
```

Each `.md` file has frontmatter (title, description, heroImage, etc.) and body content. The schemas enforce required fields via Zod.

**Custom remark plugins** in `src/plugins/`:
- `remark-terminal.mjs` — Transforms ` ```terminal ` fenced code blocks into styled terminal box HTML. Accepts `title` and `lang` meta params.

### Data files for home page listings

`src/data/` TypeScript files power the **home page only**:
- `projects.ts` — project card data (highlighted flag, image, tags, translations)
- `posts.ts` — blog post listing data (slug, date, title translations)
- `links.ts` — social/contact links
- `i18n.ts` — shared UI strings; use `t(key, lang)` helper

### i18n via file-based routing

English pages at `src/pages/`, German at `src/pages/de/`. Content translations are separate `.md` files per language. UI strings use `i18n.ts`.

### Dynamic routes

- `src/pages/blog/[slug].astro` + `src/pages/de/blog/[slug].astro` — blog detail pages from content collections
- `src/pages/project/[slug].astro` + `src/pages/de/project/[slug].astro` — project detail pages from content collections

### Component props pattern

`Header`, `Footer`, `ProjectCard`, `PostRow`, `LinkRow` accept `lang` + `variant` props. `SubpageLayout` provides shared structure for detail pages with badges, hero image, and back-to-home link.

## Design constraints

- **MD3 color tokens as CSS custom properties.** Colors like `surface-container-low`, `on-surface-variant`, `secondary-container` are defined in `src/styles/global.css` as `--c-*` vars and mapped in `tailwind.config.mjs`. Dark theme is default; light theme via `html.light` class.
- **Border-radius differs by page intentionally.** Index uses rounded radii. Blog/project detail pages use `brutalist-radius` class (forces `border-radius: 0px !important`) — deliberate design choice.
- **Tailwind theme is single source of truth.** All spacing, font, color, and border tokens live in `tailwind.config.mjs`. Custom CSS utilities in `src/styles/global.css`.
- **Markdown prose styling** via `.prose-brutalist` class in `global.css` — styles h2, lists (with `>>` prefix via `::before`), blockquotes, code, strong.
- **Fonts:** JetBrains Mono (headlines/labels), Geist (body), Material Symbols Outlined (icons). Google Fonts CDN.
- **Images are external** — hosted on `lh3.googleusercontent.com`.

## Adding content

- **New blog post:** Create `src/content/blog/en/<slug>.md` and `src/content/blog/de/<slug>.md` with required frontmatter (title, description, date, readTime, category, heroImage). Add listing entry to `src/data/posts.ts`.
- **New project:** Create `src/content/projects/en/<slug>.md` and `src/content/projects/de/<slug>.md`. Add listing entry to `src/data/projects.ts`.
- **Terminal blocks in Markdown:** Use ` ```terminal title="TITLE" lang="bash" ` fenced code blocks.
- **New i18n string:** Add to `translations` object in `i18n.ts` with both `en` and `de` values.
