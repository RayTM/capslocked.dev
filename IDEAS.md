# IDEAS.md

Feature ideas for capslocked.dev, roughly ordered by impact.

---

## Implemented

### ~~Reading Progress Bar~~ ✓
3px red (#ff5540) sticky bar on blog pages. CSS `animation-timeline: scroll(root)` with JS fallback for Safari.

### ~~Estimated Reading Time (Auto-calculated)~~ ✓
Auto-calculated from word count at build time (~200 words/min). Localized: "3 MIN READ" / "3 MIN LESEZEIT".

### ~~Open Graph / Social Cards~~ ✓
og:title, og:description, og:image, og:url, og:locale, twitter:card meta tags on all pages.

### ~~Sitemap~~ ✓
`@astrojs/sitemap` — generates sitemap-index.xml with all pages.

### ~~View Transitions~~ ✓
Smooth page navigations. Theme persists via `astro:before-swap`.

### ~~Dark/Light Theme Persistence~~ ✓
`color-scheme: dark/light` CSS property for native browser hints.

### ~~Self-hosted Fonts~~ ✓
`@fontsource-variable` for JetBrains Mono + Geist. Material Symbols stays on CDN.

### ~~404 Page~~ ✓
"SIGNAL_LOST." brutalist 404 with terminal error lines.

---

## Skipped (not integrating)

- **RSS Feed** — `/rss.xml` from blog collection via `@astrojs/rss`
- **/uses Page** — dev setup listing
- **/now Page** — "what I'm working on" page
- **Tags / Categories for Blog Posts** — `/blog` index with category filters
- **Table of Contents** — auto-generated sticky sidebar TOC
- **Image Lightbox** — full-screen image viewer on click
- **Copy Button on Terminal Blocks** — clipboard copy for code
- **Animated Cursor** — custom crosshair/block cursor on hover
- **Print Stylesheet** — `@media print` for blog posts
- **Webmentions** — IndieWeb cross-site replies/likes
- **Analytics** — Plausible/Umami/GoatCounter

---

## New Ideas

### Keyboard Navigation / Command Palette
`Ctrl+K` opens a brutalist command palette — navigate pages, toggle theme, switch language. Styled as a terminal prompt. Small inline script, no framework.

### Blog Post Series / Multi-part Posts
Frontmatter field `series: "Building capslocked.dev"` + `part: 1`. Auto-generates "PREV_ENTRY / NEXT_ENTRY" navigation between parts and a series index.

### Scroll-to-Top Button
Appears after scrolling past the fold. Brutalist style — thick border, uppercase label "SCROLL_UP" or just an arrow. Fades in/out based on scroll position.

### Dynamic Greeting Based on Time
Hero section shows different messages based on visitor's local time: "GOOD_MORNING." / "GOOD_EVENING." / "LATE_NIGHT_SESSION." Small inline script in the hero.

### ~~Page Load Metrics Display~~ ✓
Footer shows "LOADED_IN: 0.3s // 47KB TRANSFERRED" via Performance API. Works with View Transitions via `astro:page-load`.

### Changelog / Version History
A `/changelog` page or section showing site updates: "v2.1 — Added content collections", "v2.0 — Migrated to Astro 5". Data-driven from a simple array. Documents the site's evolution.

### ~~External Link Indicator~~ ✓
Remark plugin appends ↗ to external links, adds `target="_blank" rel="noopener noreferrer"` and `.external-link` class (red underline, hover to white).

### Skeleton Loading States
When View Transitions navigate between pages, show brutalist skeleton placeholders — pulsing dark rectangles matching content layout. Better than a blank flash.

### ASCII Art Header
Replace or augment the "CAPSLOCKED.DEV" text logo with an ASCII art version on the home page hero. Generated at build time, responsive via `<pre>` with font-size scaling.

### Project Status Dashboard
If you add more projects, a `/status` page showing all projects as a grid with live status indicators: ACTIVE (green), IN_PROGRESS (yellow), ARCHIVED (gray). Data from content collections.

### Easter Egg / Konami Code
Hidden interaction — Konami code or typing "sudo" triggers a fun animation (CRT glitch, matrix rain, or theme inversion). Small inline script, no dependencies. Rewards curious visitors.

### Micro-interactions on Hover
Subtle CSS transitions on interactive elements beyond what exists: card tilt on hover (CSS perspective transform), link underline slide-in, button press depth increase. All pure CSS.

### Structured Data (JSON-LD)
Add `<script type="application/ld+json">` to blog posts and project pages — Article, Person, WebSite schemas. Improves search engine rich snippets (author, date, description shown directly in Google results).

### Canonical Language Alternates
Add `<link rel="alternate" hreflang="en" href="...">` and `hreflang="de"` to all pages. Tells search engines which page is the translation of which. Prevents duplicate content penalties and routes users to correct language.

### Performance Budget CI Check
GitHub Action that runs `npx astro build` and checks bundle size + page weight against a budget (e.g., <50KB HTML per page, <20KB CSS). Fails PR if budget exceeded. Keeps the site lean.

### Contact Form (Serverless)
A `/contact` page with a brutalist form — name, email, message. Submits to a serverless function (Cloudflare Workers, Netlify Functions, or a simple email API). No third-party form service needed. Terminal-styled input fields with monospace font.

### Breadcrumb Navigation
Show path on subpages: `ROOT > PROJECTS > CAPSLOCKED.DEV`. Renders above the page title. Improves navigation clarity and SEO (breadcrumb structured data).

### Related Posts
At the bottom of blog posts, show 2-3 related entries based on shared `category` or tags. Auto-queried from content collection. Keeps readers on the site.

### Image Optimization Pipeline
Integrate `@astrojs/image` or `sharp` to auto-optimize and serve images in WebP/AVIF format with responsive `srcset`. Currently all images are external — this would apply when self-hosting images.

### Site Search
Client-side full-text search over blog and project content. Build a search index at build time (e.g., Pagefind — zero-config static search). Command palette or dedicated search page.

### Estimated Scroll Depth Indicator
Alongside the reading progress bar, show a small label like "40%" or section name ("02 // THE PROCESS") that updates as you scroll. Sticky near the progress bar. Gives readers a sense of position in long articles.

### Draft Mode for Content
Add `draft: true` frontmatter field to blog/project schemas. Filter out drafts in production builds but show them in dev. Lets you work on posts without publishing them.

### Last Updated Date
Auto-derive from git commit history (`git log -1 --format=%cI -- <file>`) or add an optional `updated` frontmatter field. Display "LAST_MODIFIED: 2025.05.13" on detail pages below the date badge.

### Automated Lighthouse CI
GitHub Action running Lighthouse on every push. Track performance, accessibility, SEO, and best practices scores over time. Fail builds below threshold (e.g., 95+ on all categories).

### Content Linting
Pre-commit hook or CI step using `markdownlint` and `vale` to enforce writing style (no passive voice, consistent terminology, max sentence length). Keeps blog posts sharp.

### Footnotes in Blog Posts
Remark plugin (`remark-footnotes` or `remark-gfm`) to support `[^1]` footnote syntax in Markdown. Renders as superscript numbers linking to notes at the bottom. Useful for citations and asides.
