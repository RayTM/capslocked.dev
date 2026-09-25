---
title: "CAPSLOCKED.DEV"
description: "Meine persönliche Seite – ein brutalistisches Portfolio und Engineering-Journal. Statisch, standardmäßig dunkel, keine Client-Frameworks. Gebaut, um zu zeigen, dass rohe Struktur dekorativen Ballast schlägt."
status: "AKTIV"
dateRange: "2026 — HEUTE"
category: "PORTFOLIO"
highlighted: true
comingSoon: false
image:
  src: "/images/capslocked-screenshot.png"
  alt: "Screenshot der capslocked.dev Startseite"
tags: ["#ASTRO", "#TAILWIND", "#BRUTALISMUS"]
links:
  - href: "https://github.com"
    label: ">GITHUB"
    description: "Quellcode der Seite"
    icon: "open_in_new"
    external: true
---

## 01 // ÜBERBLICK

capslocked.dev ist meine persönliche Seite – Portfolio, Blog und Design-Manifest in einem. Jedes Pixel ist Absicht. Jeder Rahmen hat seinen Grund. Die Ästhetik lehnt sich an die brutalistische Architektur an: offene Struktur, rohe Materialien, keine Verzierung um der Verzierung willen.

Die Seite wird zur Build-Zeit statisch generiert. Kein client-seitiges JavaScript-Framework. Kein Hydration. Kein React, kein Vue, kein Svelte. Nur vorgerendertes HTML, ein Tailwind-Stylesheet und ein paar Inline-Scripts für Theme-Umschaltung, Mobile-Menü und Lesefortschritt. Sie lädt schnell, bleibt schnell und frisst nicht deine Bandbreite.

## 02 // TECH-STACK

Der Stack ist bewusst minimal. Jede Abhängigkeit hat sich ihren Platz verdient – und genauso wichtig: jede beliebte Abhängigkeit, die nicht nötig war, ist rausgeflogen.

```terminal title="TERMINAL // STACK.LOG" lang="deps"
$ cat package.json | grep -A20 dependencies

  astro ........................ ^5.7.10   // statische Seiten-Engine
  @astrojs/tailwind ............ ^6.0.2   // Tailwind-Integration
  @astrojs/sitemap ............. ^3.7.2   // Sitemap-Generierung
  tailwindcss .................. ^3.4.17  // das eigentliche CSS-Framework
  @fontsource-variable/geist ... ^5.2.8   // selbst gehosteter Body-Font
  @fontsource-variable/jetbrains-mono . ^5.2.8   // selbst gehosteter Headline-Font
  unist-util-visit ............. ^5.1.0   // Remark-Plugin-Utility

  // Sieben Abhängigkeiten. Kein React. Kein Client-Runtime. Keine Reue.

$ wc -c dist/**/*.html | tail -1
  47_DATEIEN_ERSTELLT  0_CLIENT_BUNDLE
```

- **Astro 5** — Statische Seitengenerierung mit Island-Architektur. Seiten werden zur Build-Zeit in reines HTML vorgerendert. Standardmäßig wird null JavaScript ausgeliefert.
- **Tailwind CSS 3** — Utility-First-Styling mit einem eigenen Material-Design-3-Farbtoken-System. Dunkle und helle Themes über CSS-Custom-Properties, keine Filter-Hacks.
- **Inline-Scripts** — Theme-Persistenz, Mobile-Menü-Umschaltung und Lesefortschritt. Kein Build-Schritt, kein Bundler, kein Framework-Overhead. Nur Vanilla JS in Script-Tags.
- **JetBrains Mono + Geist** — Monospace-Überschriften für die Terminal-Ästhetik, Sans-Serif-Fließtext für Lesbarkeit. Selbst gehostet via @fontsource-variable. Material Symbols Outlined vom Google-Fonts-CDN.

## 03 // DESIGN-ENTSCHEIDUNGEN

Brutalismus im Webdesign bedeutet strukturelle Ehrlichkeit. Das Raster ist sichtbar. Die Rahmen sind dick. Die Schatten sind versetzt, nicht verschwommen. Die Farbpalette ist eingeschränkt – dunkle Grautöne, Weiß und ein einziges Akzentrot (#d61132), das Interaktivität und Zustand signalisiert.

Border-radius unterscheidet sich absichtlich zwischen Seiten. Die Startseite nutzt abgerundete Ecken (0.25rem–0.75rem). Detailseiten – Blog, Projekt, Impressum – zwingen jeden Radius auf 0px über eine `.brutalist-radius`-Klasse – eine bewusste Entscheidung, damit langes Lesen roher, archivartiger wirkt. Kein Bug. Ein Statement.

> „Keine abgerundeten Ecken, wo sie nicht hingehören. Keine Schatten, die Licht vortäuschen. Die Struktur ist der Stil."

## 04 // BESUCHEN

Du bist schon hier. Aber wenn du sehen willst, wie es gebaut ist, schau dir den Quellcode an.
