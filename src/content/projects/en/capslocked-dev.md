---
title: "CAPSLOCKED.DEV"
description: "A brutalist portfolio and engineering journal. Static-rendered, dark-by-default, zero client frameworks. Built to prove that raw structure beats decorative bloat."
status: "ACTIVE"
dateRange: "2024 — PRESENT"
category: "PORTFOLIO"
highlighted: true
comingSoon: false
image:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9hdDkWcogM3Ra6O2MBdgoVOJUlLg6G-sr6EAvbFiMGxY_yW_mgmTQ7y5nLIwzAUMVM2CaOgEbcCLRRmUE-fRnIO_6RycgydbnxReJ0N8MZaT26eBQNlHlDI4wGhaqYw11MLb_RgtcLWKcW1CkixQTJ9UolD7a2TKnsxsOKO4AMA13zDazYjJnuiV6W9Xa3P-hdr5qQwEIgaJRXkiNP4YGCXqKiK5-vChsjMzOshaQmO04fcuR88vfagifcg-3JnlINhi0BsaY8w"
  alt: "Terminal interface with brutalist design elements"
tags: ["#ASTRO", "#TAILWIND", "#BRUTALISM"]
links:
  - href: "https://github.com"
    label: ">GITHUB"
    description: "Page source code"
    icon: "open_in_new"
    external: true
---

## 01 // OVERVIEW

Capslocked.dev is my personal site — a portfolio, a blog, and a design manifesto in one. Every pixel is intentional. Every border has a reason. The aesthetic draws from brutalist architecture: exposed structure, raw materials, no ornamentation for its own sake.

The site is statically generated at build time. No client-side JavaScript framework. No hydration. No React, no Vue, no Svelte. Just pre-rendered HTML, a Tailwind stylesheet, and a handful of inline scripts for theme toggling, language switching, and the occasional time display. The result loads fast, stays fast, and respects the visitor's bandwidth.

## 02 // TECH STACK

The stack is deliberately minimal. Every dependency was chosen for a reason, and just as importantly, every popular dependency that wasn't needed was left out.

```terminal title="TERMINAL // STACK.LOG" lang="deps"
$ cat package.json | grep -A20 dependencies

  astro ................. ^5.7.10   // static site engine
  @astrojs/tailwind ..... ^6.0.2   // utility-first CSS
  tailwindcss ........... ^3.4.17  // the actual CSS framework

  // That's it. Three dependencies.
  // No React. No client runtime. No regrets.

$ wc -c dist/**/*.html | tail -1
  47_FILES_CREATED  0_CLIENT_BUNDLE
```

- **Astro 5** — Static site generation with island architecture. Pages are pre-rendered at build time into pure HTML. Zero JavaScript shipped by default.
- **Tailwind CSS 3** — Utility-first styling with a custom Material Design 3 color token system. Dark and light themes via CSS custom properties, not filter hacks.
- **Inline scripts** — Theme persistence, client-side i18n, and mobile menu toggling. No build step, no bundler, no framework overhead. Just vanilla JS in script tags.
- **JetBrains Mono + Geist** — Monospace headlines for the terminal aesthetic, sans-serif body for readability. Loaded from Google Fonts CDN.

## 03 // DESIGN DECISIONS

Brutalism in web design means structural honesty. The grid is visible. The borders are thick. The shadows are offset, not blurred. The color palette is restricted — dark grays, white, and a single accent red (#ff5540) that signals interactivity and state.

Border-radius differs between pages intentionally. The landing page and about page use rounded corners (0.25rem–0.75rem). The blog detail page forces all radii to 0px via a `.brutalist-radius` class — a deliberate choice to make long-form reading feel rawer, more archival. This isn't a bug. It's a statement.

> "No rounded corners where they don't belong. No shadows that pretend to be light. The structure is the style."

## 04 // VISIT

You're already here. But if you want to see how it's built, check the source.
