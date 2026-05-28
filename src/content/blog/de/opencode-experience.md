---
title: "Bauen mit Silizium"
description: "Meine erste Session beim Bau von capslocked.dev mit OpenCode — einem KI-Coding-Agenten, der Code schreibt, reviewt und alongside Ihnen ausliefert. Eine Reflexion über Mensch-Maschine-Kollaboration und die Zukunft des Handwerks."
date: "2025.05.10"
category: "ENTWICKLUNG"
icon: "arrow_forward"
heroImage:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByiEpb0lLdtldq3y0vDZJnEzQo4bXYHowU5tHUAdX2XGHNtTToLcV-Yf_TvHlqeU30xkDpFq3oMYkISWkadnyWN4e1_-HNYx5-S9oWUWSeTH11nZtDZlF6vYocHQGJWFbSun3Hf6iNIr_kaNIb56ksEWV_rVP_Hb0IZFHj_fGnzPtzhaVcmuRxSXgDMdhKN3JRMZss2RMqMO-lABCSFRwc9SKJInEP7QuenvoMdUqiGWroM2fleKePtdyeVGXUWxibV1hwehYt-g"
  alt: "Terminal-Oberfläche mit Code-Generierung"
---

## 01 // KONTEXT

OpenCode ist ein terminalbasierter KI-Coding-Agent. Sie beschreiben, was Sie wollen, und er schreibt den Code — Gerüstbau, Refactoring, Debugging, sogar Architektur. Er läuft lokal, liest Ihre Codebasis und schlägt Änderungen vor, die Sie akzeptieren, ablehnen oder modifizieren können.

Ich habe beschlossen, ihn für den Bau dieser Seite zu nutzen. Nicht weil ich es nicht selbst könnte — ich schreibe seitdem HTML, als Tabellen-Layouts modern waren — sondern weil ich sehen wollte, was die Maschine mit einer so meinungsstarken Designphilosophie wie dem Brutalismus anfangen würde. Würde sie die Kanten abrunden? Würde sie versuchen, die Ecken zu runden?

```terminal title="TERMINAL // SITZUNG.LOG" lang="bash"
$ opencode "diese HTML-Templates in ein Astro-Projekt konvertieren"
$ opencode "den gemeinsamen Header und Footer in Komponenten extrahieren"
$ opencode "einen pixellierten Hover-Effekt zur Projektkarte hinzufügen"
$ opencode "den Dark-Mode-Toggle zum Laufen bringen"
$ echo "SITZUNG_ABGESCHLOSSEN: 47_DATEIEN_ERSTELLT"
```

## 02 // PROZESS

Das Erste, was mir auffiel: Der Agent ist schnell. Was mich einen Abend gekostet hätte — gemeinsame Layouts extrahieren, Tailwind konfigurieren, statische Pfade einrichten — erledigte er in unter einer Minute. Das Gerüst war solide. Die Komponentenstruktur war sauber. Er bewahrte sogar die beabsichtigten Design-Inkonsistenzen (wie die unterschiedlichen Border-Radius-Werte zwischen Seiten), ohne sie infrage zu stellen.

Aber hier wurde es interessant. Als ich den pixellierten Hover-Effekt für das Projektkartenbild anforderte, schlug er zunächst einen JavaScript-Canvas-basierten Ansatz vor. Schwer. Unnötig. Ich widersprach: „Nur CSS." Er kam mit einer Filter- und Grid-Overlay-Technik zurück. Besser. Noch nicht ganz richtig. Wir iterierten. Drei Runden später hatten wir eine Lösung, die ein Pseudo-Element-Grid-Muster mit Kontrastskalierung verwendete — reines CSS, keine Laufzeitkosten, brutalistisch wie die Hölle.

- Der Agent glänzt beim Gerüstbau und bei Boilerplate. Komponentenextraktion, Konfiguration, Dateistruktur — in Sekunden erledigt.
- Designentscheidungen brauchen immer noch ein menschliches Auge. Er schlug abgerundete Ecken auf der Blog-Seite vor. Ich musste die 0px-Radius-Regel durchsetzen.
- Das Hin und Her ist der Ort des Mehrwerts. Nicht der erste Entwurf, sondern die dritte oder vierte Überarbeitung nach Ihrem Widerspruch.

## 03 // FAZIT

KI-gestützte Entwicklung ist kein Ersatz. Sie ist Verstärkung. Der Agent hat keinen Geschmack. Er hat keine ästhetische Philosophie. Er steht nicht um 3 Uhr nachts auf und überlegt, ob ein 3px-Rand zu dick oder nicht dick genug ist. Aber er kann Ihren Geschmack in einer Geschwindigkeit umsetzen, die jedem Einzelentwickler schwindelig würde.

Das brutale Web braucht menschliche Absicht. Die Maschine liefert die Arbeit. Zusammen bauen sie etwas, das keiner allein bauen könnte. Diese Seite ist der Beweis.

> „Das Raster ist die Struktur. Die Maschine ist der Beschleuniger. Der Mensch ist der Architekt."
