# capslocked.dev

Astro-based portfolio/blog site with brutalist design.

## Structure

```
src/
├── layouts/
│   └── BaseLayout.astro      — shared HTML shell (head, fonts, body wrapper)
├── components/
│   ├── Header.astro           — nav bar (accepts logo, activePage, variant props)
│   └── Footer.astro           — footer (accepts logo, copyright, links, variant props)
├── pages/
│   ├── index.astro            — landing page (hero, projects grid, blog list)
│   ├── about.astro            — about + contact page
│   └── blog/[slug].astro      — blog post detail page
└── styles/
    └── global.css             — shared utility classes & Tailwind imports
```

Original HTML templates preserved at project root: `STARTPAGE.html`, `ABOUT.html`, `BLOG_DETAIL.html`.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Key constraints

- **Astro static site.** No client-side JS framework. Pages are pre-rendered at build time.
- **Tailwind via `@astrojs/tailwind`.** Config lives in `tailwind.config.mjs` — single source of truth (no more duplication across files).
- **Border-radius differs intentionally between pages.** `index.astro` and `about.astro` use rounded radii (0.25rem/0.5rem/0.75rem). `blog/[slug].astro` uses `0px` for all radii via the `brutalist-radius` CSS class — this is a deliberate brutalist design choice, not a bug.
- **Design system uses Material Design 3 color tokens** mapped as Tailwind custom colors (e.g., `surface-container-low`, `on-surface-variant`, `secondary-container`). These are not standard Tailwind names.
- **Fonts:** JetBrains Mono (headlines, labels), Geist (body), Material Symbols Outlined (icons). All loaded from Google Fonts CDN.
- **Images are external.** Hosted on `lh3.googleusercontent.com`. The `data-alt` attributes contain long AI-generated descriptions; the `alt` attributes have shorter human-readable text.

## Editing

- Tailwind theme changes go in `tailwind.config.mjs` only — no more per-file duplication.
- Custom CSS utility classes (`.hard-shadow`, `.brutalist-shadow`, `.active-shift`, `.scanline`, `.border-b-thick`, `.border-t-thick`, `.grid-bg`, `.brutalist-radius`) are in `src/styles/global.css`.
- Header/Footer variants controlled via props (`variant`, `activePage`, `logo`, `copyright`, `links`).
- Blog posts are static routes defined in `getStaticPaths()` inside `blog/[slug].astro`.