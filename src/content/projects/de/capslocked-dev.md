---
title: "CAPSLOCKED.DEV"
description: "Ein brutalistisches Portfolio und Engineering-Journal. Statisch gerendert, dunkel-als-Standard, null Client-Frameworks. Gebaut um zu beweisen, dass rohe Struktur dekorativen Ballast schlägt."
status: "AKTIV"
dateRange: "2024 — HEUTE"
category: "PORTFOLIO"
highlighted: true
comingSoon: false
image:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9hdDkWcogM3Ra6O2MBdgoVOJUlLg6G-sr6EAvbFiMGxY_yW_mgmTQ7y5nLIwzAUMVM2CaOgEbcCLRRmUE-fRnIO_6RycgydbnxReJ0N8MZaT26eBQNlHlDI4wGhaqYw11MLb_RgtcLWKcW1CkixQTJ9UolD7a2TKnsxsOKO4AMA13zDazYjJnuiV6W9Xa3P-hdr5qQwEIgaJRXkiNP4YGCXqKiK5-vChsjMzOshaQmO04fcuR88vfagifcg-3JnlINhi0BsaY8w"
  alt: "Terminal-Oberfläche mit brutalistischen Design-Elementen"
tags: ["#ASTRO", "#TAILWIND", "#BRUTALISMUS"]
links:
  - href: "https://github.com"
    label: ">GITHUB"
    description: "Quellcode der Seite"
    icon: "open_in_new"
    external: true
---

## 01 // ÜBERBLICK

Capslocked.dev ist meine persönliche Seite — ein Portfolio, ein Blog und ein Design-Manifest in einem. Jedes Pixel ist beabsichtigt. Jeder Rand hat einen Grund. Die Ästhetik orientiert sich an der brutalistischen Architektur: offene Struktur, rohe Materialien, keine Verzierung um ihrer selbst willen.

Die Seite wird zur Build-Zeit statisch generiert. Kein client-seitiges JavaScript-Framework. Kein Hydration. Kein React, kein Vue, kein Svelte. Nur vorgerendertes HTML, ein Tailwind-Stylesheet und eine Handvoll Inline-Scripts für Theme-Umschaltung, Sprachwechsel und gelegentliche Zeitanzeigen. Das Ergebnis lädt schnell, bleibt schnell und respektiert die Bandbreite des Besuchers.

## 02 // TECH-STACK

Der Stack ist bewusst minimal. Jede Abhängigkeit wurde aus einem Grund gewählt, und genauso wichtig: jede beliebte Abhängigkeit, die nicht benötigt wurde, wurde weggelassen.

```terminal title="TERMINAL // STACK.LOG" lang="deps"
$ cat package.json | grep -A20 dependencies

  astro ................. ^5.7.10   // statische Seiten-Engine
  @astrojs/tailwind ..... ^6.0.2   // Utility-First CSS
  tailwindcss ........... ^3.4.17  // das eigentliche CSS-Framework

  // Das war's. Drei Abhängigkeiten.
  // Kein React. Kein Client-Runtime. Keine Reue.

$ wc -c dist/**/*.html | tail -1
  47_DATEIEN_ERSTELLT  0_CLIENT_BUNDLE
```

- **Astro 5** — Statische Seitengenerierung mit Island-Architektur. Seiten werden zur Build-Zeit in reines HTML vorgerendert. Standardmäßig wird null JavaScript ausgeliefert.
- **Tailwind CSS 3** — Utility-First Styling mit einem benutzerdefinierten Material Design 3-Farbtoken-System. Dunkle und helle Themes über CSS-Custom-Properties, keine Filter-Hacks.
- **Inline-Scripts** — Theme-Persistenz, clientseitiges i18n und Mobile-Menü-Umschaltung. Kein Build-Schritt, kein Bundler, kein Framework-Overhead. Nur Vanilla JS in Script-Tags.
- **JetBrains Mono + Geist** — Monospace-Überschriften für die Terminal-Ästhetik, Sans-Serif-Fließtext für Lesbarkeit. Geladen vom Google Fonts CDN.

## 03 // DESIGN-ENTSCHEIDUNGEN

Brutalismus im Webdesign bedeutet strukturelle Ehrlichkeit. Das Raster ist sichtbar. Die Rahmen sind dick. Die Schatten sind versetzt, nicht verschwommen. Die Farbpalette ist eingeschränkt — dunkle Grautöne, Weiß und ein einzelnes Akzentrot (#ff5540), das Interaktivität und Zustand signalisiert.

Border-radius unterscheidet sich absichtlich zwischen Seiten. Die Startseite und die About-Seite verwenden abgerundete Ecken (0.25rem–0.75rem). Die Blog-Detailseite erzwingt alle Radii auf 0px über eine `.brutalist-radius`-Klasse — eine bewusste Entscheidung, um langformiges Lesen roher, archivartiger wirken zu lassen. Das ist kein Bug. Das ist ein Statement.

> „Keine abgerundeten Ecken, wo sie nicht hingehören. Keine Schatten, die Licht vortäuschen. Die Struktur ist der Stil."

## 04 // BESUCHEN

Sie sind bereits hier. Aber wenn Sie sehen möchten, wie es gebaut wurde, schauen Sie sich den Quellcode an.
