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

### Data files for listing pages

`src/data/` TypeScript files power the **home page and the listing pages** (`/projects`, `/blog`):
- `projects.ts` — project card data (`highlighted`, `active`, image, tags, translations) plus `homeTeasers()` and `projectTags(lang)` helpers
- `posts.ts` — blog post listing data (slug, date, title translations) plus the `formatDate()` helper
- `links.ts` — social/contact links
- `i18n.ts` — shared UI strings; use `t(key, lang)` helper

### Project listings

- **Home page** shows exactly three teasers via `homeTeasers()`: the `highlighted` project in the wide split card, then the next two in a 2-column grid. Everything beyond that only appears on `/projects`.
- **`/projects`** renders all projects as equal `grid` cards in one 3-column grid — the wide split card is a home-page-only treatment, so filter results stay uniform. Adds `ProjectFilter` — a row of tag buttons (single-select, `ALL` resets) plus an independent `ACTIVE_ONLY` toggle. Filtering is client-side over `data-project-card` attributes emitted by `ProjectCard filterable`; without JS all projects stay visible. `data-project-group` wrappers collapse when all their cards are filtered out.
- `active` drives the status filter and is deliberately separate from the translated `status` label.

### i18n via file-based routing

English pages at `src/pages/`, German at `src/pages/de/`. Content translations are separate `.md` files per language. UI strings use `i18n.ts`.

**Internal links always end with `/`** (`/blog/`, `/de/imprint/`, `postHref()`/`projectHref()` included) — that is the form canonical tags and the sitemap use. The sitemap pairs `/x/` ↔ `/de/x/` as hreflang alternates via its `i18n` option in `astro.config.mjs`, so a page without its counterpart at the same path gets no alternate.

### Dynamic routes

- `src/pages/blog/[slug].astro` + `src/pages/de/blog/[slug].astro` — blog detail pages from content collections
- `src/pages/project/[slug].astro` + `src/pages/de/project/[slug].astro` — project detail pages from content collections

### Component props pattern

`Header`, `Footer`, `ProjectCard`, `PostRow`, `LinkRow` accept `lang` + `variant` props. `SubpageLayout` provides shared structure for detail pages with badges, hero image, and back-to-home link.

## Design constraints

- **MD3 color tokens as CSS custom properties.** Colors like `surface-container-low`, `on-surface-variant`, `secondary-container` are defined in `src/styles/global.css` as `--c-*` vars and mapped in `tailwind.config.mjs`. Dark theme is default; light theme via `html.light` class.
- **Border-radius differs by page intentionally.** Index uses rounded radii. Blog/project detail pages use `brutalist-radius` class (forces `border-radius: 0px !important`) — deliberate design choice.
- **Tailwind theme is single source of truth.** All spacing, font, color, and border tokens live in `tailwind.config.mjs`. Custom CSS utilities in `src/styles/global.css`.
- **Markdown prose styling** via `.prose-brutalist` class in `global.css` — styles h2, lists (with `>>` prefix via `::before`), blockquotes, code, strong. Vertical rhythm tightens below `768px` via a media query at the end of the file.
- **Vertical spacing is responsive.** `xl` (80px) is a desktop-only step: sections use `py-lg md:py-xl`, wrappers `mt-lg md:mt-xl`, and so on. Never ship a bare `py-xl`/`mt-xl` — it doubles into 160px gaps on phones.
- **Project card hover:** images sit at `grayscale` and return to full color on `group-hover`. No color overlay — the desaturation *is* the hover state.
- **Project card images are `object-cover`, never `object-contain`** — real screenshots letterbox in the middle of the frame otherwise. Mobile crops to a flat `aspect-[2/1]` band; desktop is `md:aspect-square` (highlight) / `md:aspect-[4/3]` (grid).
- **Mobile project card** keeps the title on its own line and moves the status badge into the tag row (`md:hidden` / `hidden md:inline-block` pair) — a wrapping title next to a right-aligned badge looked ragged.
- **Detail-page watermark** (`SubpageLayout`) auto-fits: the header is a `container-type: inline-size` context and the span's `font-size` is `clamp(24px, 100cqw / (--wm-len * 0.62), 88px)`, with `--wm-len` set inline from the category's character count. That is what lets it stay visible on phones instead of being hidden below `md`.
- **Fonts:** JetBrains Mono (headlines/labels), Geist (body), Material Symbols Outlined (icons). Google Fonts CDN.
- **Images live in `public/images/`** and fall back to `/images/placeholder.svg` via an inline `onerror` handler.

## Adding content

- **New blog post:** Create `src/content/blog/en/<slug>.md` and `src/content/blog/de/<slug>.md` with required frontmatter (title, description, date, readTime, category, heroImage). Add listing entry to `src/data/posts.ts`.
- **Dates:** stored ISO (`YYYY-MM-DD`) in both the frontmatter and `posts.ts`, displayed as `DD.MM.YYYY` in both languages. Always render via `formatDate()` from `src/data/posts.ts` — never format a date inline in a page. The blog schema rejects non-ISO dates at build time. Project `dateRange` is a free-text year span (`2026 — PRESENT`) and stays outside this rule.
- **New project:** Create `src/content/projects/en/<slug>.md` and `src/content/projects/de/<slug>.md`. Add listing entry to `src/data/projects.ts` (including `active`, which the `/projects` filter reads).
- **Terminal blocks in Markdown:** Use ` ```terminal title="TITLE" lang="bash" ` fenced code blocks.
- **New i18n string:** Add to `translations` object in `i18n.ts` with both `en` and `de` values.
