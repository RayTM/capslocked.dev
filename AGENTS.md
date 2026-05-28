# capslocked.dev

Astro-based portfolio/blog site with brutalist design.

## Structure

```
src/
├── content/
│   ├── config.ts                  — collection schemas (blog, projects)
│   ├── blog/{en,de}/*.md          — blog posts as Markdown
│   └── projects/{en,de}/*.md      — project pages as Markdown
├── layouts/
│   └── BaseLayout.astro           — shared HTML shell (head, fonts, body wrapper)
├── components/
│   ├── Header.astro               — nav bar (accepts activePage, variant, lang props)
│   ├── Footer.astro               — footer
│   ├── SubpageLayout.astro        — detail page layout (badges, hero, back link)
│   ├── SectionHeading.astro       — heading + divider bar
│   ├── ProjectCard.astro          — project card (highlighted/grid variants)
│   ├── PostRow.astro              — blog post row
│   └── LinkRow.astro              — link row
├── data/
│   ├── projects.ts                — project listing data (home page)
│   ├── posts.ts                   — blog listing data (home page)
│   ├── links.ts                   — social/contact links
│   └── i18n.ts                    — UI string translations
├── pages/
│   ├── index.astro                — landing page (hero, projects, blog, connect)
│   ├── blog/[slug].astro          — blog detail (EN, from content collection)
│   ├── project/[slug].astro       — project detail (EN, from content collection)
│   └── de/                        — German mirrors of all routes
├── plugins/
│   └── remark-terminal.mjs        — ```terminal fenced block → styled HTML
└── styles/
    └── global.css                 — theme tokens, utilities, prose styling
```

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Key constraints

- **Astro static site.** No client-side JS framework. Pages are pre-rendered at build time.
- **Content Collections** for blog/project detail pages. Markdown files with Zod-validated frontmatter.
- **Tailwind via `@astrojs/tailwind`.** Config lives in `tailwind.config.mjs` — single source of truth.
- **Border-radius differs intentionally between pages.** `index.astro` uses rounded radii. Detail pages use `0px` via `brutalist-radius` CSS class — deliberate design choice, not a bug.
- **Design system uses Material Design 3 color tokens** mapped as Tailwind custom colors (e.g., `surface-container-low`, `on-surface-variant`, `secondary-container`).
- **Fonts:** JetBrains Mono (headlines, labels), Geist (body), Material Symbols Outlined (icons). All loaded from Google Fonts CDN.
- **Images are external.** Hosted on `lh3.googleusercontent.com`.

## Editing

- Tailwind theme changes go in `tailwind.config.mjs` only.
- Custom CSS utility classes and `.prose-brutalist` Markdown styling in `src/styles/global.css`.
- Header/Footer variants controlled via props (`variant`, `activePage`, `lang`).
- Blog/project detail pages generated from `src/content/` Markdown via `[slug].astro` dynamic routes.
- Terminal code blocks in Markdown use ` ```terminal title="..." lang="..." ` syntax.
