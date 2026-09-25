---
title: "CAPSLOCKED.DEV"
description: "My personal site — a brutalist portfolio and engineering journal. Static, dark by default, no client-side frameworks. Built to show that raw structure beats decorative bloat."
status: "ACTIVE"
dateRange: "2026 — PRESENT"
category: "PORTFOLIO"
highlighted: true
comingSoon: false
image:
  src: "/images/capslocked-screenshot.png"
  alt: "Screenshot of the capslocked.dev homepage"
tags: ["#ASTRO", "#TAILWIND", "#BRUTALISM"]
links:
  - href: "https://github.com"
    label: ">GITHUB"
    description: "Page source code"
    icon: "open_in_new"
    external: true
---

## 01 // OVERVIEW

capslocked.dev is my personal site — a portfolio, a blog, and a design manifesto rolled into one. Every pixel is on purpose. Every border is there for a reason. The look borrows from brutalist architecture: exposed structure, raw materials, no decoration just for decoration's sake.

The site is statically generated at build time. No client-side JavaScript framework. No hydration. No React, no Vue, no Svelte. Just pre-rendered HTML, a Tailwind stylesheet, and a few inline scripts for theme toggling, mobile menu, and reading progress. It loads fast, stays fast, and doesn't eat your bandwidth.

## 02 // TECH STACK

The stack is deliberately minimal. Every dependency earned its place — and just as importantly, every popular dependency that wasn't needed got left out.

```terminal title="TERMINAL // STACK.LOG" lang="deps"
$ cat package.json | grep -A20 dependencies

  astro ........................ ^5.7.10   // static site engine
  @astrojs/tailwind ............ ^6.0.2   // tailwind integration
  @astrojs/sitemap ............. ^3.7.2   // sitemap generation
  tailwindcss .................. ^3.4.17  // the actual CSS framework
  @fontsource-variable/geist ... ^5.2.8   // self-hosted body font
  @fontsource-variable/jetbrains-mono . ^5.2.8   // self-hosted headline font
  unist-util-visit ............. ^5.1.0   // remark plugin utility

  // Seven dependencies. No React. No client runtime. No regrets.

$ wc -c dist/**/*.html | tail -1
  47_FILES_CREATED  0_CLIENT_BUNDLE
```

- **Astro 5** — Static site generation with island architecture. Pages are pre-rendered at build time into pure HTML. Zero JavaScript shipped by default.
- **Tailwind CSS 3** — Utility-first styling with a custom Material Design 3 color token system. Dark and light themes via CSS custom properties, not filter hacks.
- **Inline scripts** — Theme persistence, mobile menu toggling, and reading progress. No build step, no bundler, no framework overhead. Just vanilla JS in script tags.
- **JetBrains Mono + Geist** — Monospace headlines for the terminal aesthetic, sans-serif body for readability. Self-hosted via @fontsource-variable. Material Symbols Outlined loaded from Google Fonts CDN.

## 03 // DESIGN DECISIONS

Brutalism in web design means structural honesty. The grid is visible. The borders are thick. The shadows are offset, not blurred. The palette is restricted — dark grays, white, and a single accent red (#d61132) that signals interactivity and state.

Border-radius differs between pages on purpose. The landing page uses rounded corners (0.25rem–0.75rem). Detail pages — blog, project, imprint — force every radius to 0px via a `.brutalist-radius` class — a deliberate choice to make long-form reading feel rawer, more archival. Not a bug. A statement.

> "No rounded corners where they don't belong. No shadows that pretend to be light. The structure is the style."

## 04 // VISIT

You're already here. But if you want to see how it's built, check the source.
