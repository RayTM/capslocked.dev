---
title: "Ich ließ eine Maschine das bauen"
description: "Ich habe diese Seite mit einem KI-Coding-Agenten im Terminal gebaut. Hier ist, was funktioniert hat, was nicht – und wo du als Mensch noch eingreifen musst."
date: "2026-08-20"
category: "ENTWICKLUNG"
icon: "arrow_forward"
heroImage:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByiEpb0lLdtldq3y0vDZJnEzQo4bXYHowU5tHUAdX2XGHNtTToLcV-Yf_TvHlqeU30xkDpFq3oMYkISWkadnyWN4e1_-HNYx5-S9oWUWSeTH11nZtDZlF6vYocHQGJWFbSun3Hf6iNIr_kaNIb56ksEWV_rVP_Hb0IZFHj_fGnzPtzhaVcmuRxSXgDMdhKN3JRMZss2RMqMO-lABCSFRwc9SKJInEP7QuenvoMdUqiGWroM2fleKePtdyeVGXUWxibV1hwehYt-g"
  alt: "Terminal-Oberfläche mit Code-Generierung"
---

## 01 // KONTEXT

OpenCode ist ein KI-Coding-Agent im Terminal. Du beschreibst, was du willst, und er schreibt den Code – Gerüstbau, Refactoring, Debugging, sogar Architektur. Er läuft lokal, liest deine Codebasis und liefert dir Änderungen, die du annehmen, ablehnen oder anpassen kannst.

Ich habe ihn genutzt, um diese Seite zu bauen. Nicht weil ich es nicht selbst könnte – sondern weil ich wissen wollte, was eine Maschine mit einer so sturen Designphilosophie wie dem Brutalismus anfängt. Würde sie die Kanten abrunden? Würde sie versuchen, die Ecken zu glätten?

```terminal title="TERMINAL // SESSION.LOG" lang="bash"
$ opencode "diese HTML-Templates in ein Astro-Projekt konvertieren"
$ opencode "den gemeinsamen Header und Footer in Komponenten auslagern"
$ opencode "einen pixellierten Hover-Effekt zur Projektkarte hinzufügen"
$ opencode "den Dark-Mode-Toggle zum Laufen bringen"
$ echo "SESSION_ABGESCHLOSSEN: 47_DATEIEN_ERSTELLT"
```

## 02 // PROZESS

Das Erste, was mir aufgefallen ist: Das Ding ist schnell. Was mir sonst den ganzen Abend gekostet hätte – gemeinsame Layouts auslagern, Tailwind konfigurieren, statische Pfade anlegen – hat er in unter einer Minute erledigt. Das Gerüst war solide, die Komponentenstruktur sauber. Er hat sogar die beabsichtigten Design-Inkonsistenzen (wie die unterschiedlichen Border-Radius-Werte zwischen den Seiten) einfach akzeptiert, ohne sie infrage zu stellen.

Dann wurde es interessant. Als ich den pixellierten Hover-Effekt für die Projektkarte angefordert habe, kam er zuerst mit einem JavaScript-Canvas-Ansatz. Schwer. Unnötig. Ich habe zurückgegeben: „Nur CSS." Er hat es mit einem Filter- und Grid-Overlay probiert. Besser. Noch nicht ganz. Wir haben iteriert. Drei Runden später hatten wir eine Lösung mit einem Pseudo-Element-Grid und Kontrastskalierung – pures CSS, keine Laufzeitkosten, brutalistisch durch und durch.

- Der Agent ist stark im Gerüstbau und bei Boilerplate. Komponenten auslagern, Config, Dateistruktur – in Sekunden erledigt.
- Designentscheidungen brauchen trotzdem einen Menschen. Er hat abgerundete Ecken auf der Blog-Seite vorgeschlagen. Ich musste die 0px-Radius-Regel durchziehen.
- Der Mehrwert steckt nicht im ersten Entwurf. Sondern im dritten oder vierten Anlauf, nachdem du ein paar Mal zurückgegeben hast.

## 03 // FAZIT

KI-gestützte Entwicklung ist kein Ersatz. Sie ist Hebel. Der Agent hat keinen Geschmack. Er hat keine Ästhetik. Er liegt nicht um 3 Uhr nachts wach und überlegt, ob ein 3px-Rand zu dick ist. Aber er setzt deinen Geschmack in einem Tempo um, das jedem Einzelentwickler schwindelig wird.

Das brutale Web braucht einen Menschen dahinter. Die Maschine macht die schwere Arbeit. Zusammen bauen sie etwas, das keiner allein hinbekommen hätte. Diese Seite ist der Beweis.
