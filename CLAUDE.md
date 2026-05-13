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

### Data-driven content

Content is defined in TypeScript data files (`src/data/`), not Markdown or a CMS:
- `projects.ts` — project entries with `highlighted` flag (featured vs grid layout)
- `posts.ts` — blog post metadata; actual post content lives in page files
- `links.ts` — social/contact links
- `i18n.ts` — shared UI strings; use `t(key, lang)` helper

### i18n via file-based routing

English pages live at `src/pages/` (e.g., `index.astro`, `blog/opencode-experience.astro`).
German pages mirror structure under `src/pages/de/`. Each page sets `const lang = 'en'|'de'` and passes it through components. Content translations live in data files' `translations` record, keyed by language code.

### Component props pattern

`Header`, `Footer`, `ProjectCard`, `PostRow`, `LinkRow` all accept `lang` + `variant` props. `SubpageLayout` provides shared structure for detail pages (project/blog) with badges, hero image, and back-to-home link.

## Design constraints

- **MD3 color tokens as CSS custom properties.** Colors like `surface-container-low`, `on-surface-variant`, `secondary-container` are defined in `src/styles/global.css` as `--c-*` vars and mapped in `tailwind.config.mjs`. Dark theme is default; light theme via `html.light` class.
- **Border-radius differs by page intentionally.** Index/subpages use rounded radii. Blog detail pages use `brutalist-radius` class (forces `border-radius: 0px !important`) — this is a deliberate design choice.
- **Tailwind theme is single source of truth.** All spacing, font, color, and border tokens live in `tailwind.config.mjs`. Custom CSS utilities (`.brutalist-shadow`, `.hard-shadow`, `.scanline`, `.grid-bg`, `.pixelate-hover`, `.hover-fill-accent`, etc.) are in `src/styles/global.css`.
- **Fonts:** JetBrains Mono (headlines/labels via `font-headline-*`/`font-label-*`), Geist (body via `font-body-*`), Material Symbols Outlined (icons). Loaded from Google Fonts CDN.
- **Images are external** — hosted on `lh3.googleusercontent.com`.
- **CRT theme wipe animation** exists in global.css for theme switching (`#theme-wipe`).

## Adding content

- **New blog post:** Add entry to `posts.ts`, create page files at `src/pages/blog/<slug>.astro` and `src/pages/de/blog/<slug>.astro`. Use `SubpageLayout` component.
- **New project:** Add entry to `projects.ts`, create page files at `src/pages/project/<slug>.astro` and `src/pages/de/project/<slug>.astro`.
- **New i18n string:** Add to `translations` object in `i18n.ts` with both `en` and `de` values.
