---
title: "I Let a Machine Build This"
description: "I built this site with an AI coding agent in the terminal. Here's what worked, what didn't, and where the human still has to show up."
date: "2026-08-20"
category: "DEVELOPMENT"
icon: "arrow_forward"
heroImage:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByiEpb0lLdtldq3y0vDZJnEzQo4bXYHowU5tHUAdX2XGHNtTToLcV-Yf_TvHlqeU30xkDpFq3oMYkISWkadnyWN4e1_-HNYx5-S9oWUWSeTH11nZtDZlF6vYocHQGJWFbSun3Hf6iNIr_kaNIb56ksEWV_rVP_Hb0IZFHj_fGnzPtzhaVcmuRxSXgDMdhKN3JRMZss2RMqMO-lABCSFRwc9SKJInEP7QuenvoMdUqiGWroM2fleKePtdyeVGXUWxibV1hwehYt-g"
  alt: "Terminal interface showing code generation"
---

## 01 // THE CONTEXT

OpenCode is a terminal-based AI coding agent. You describe what you want, and it writes the code — scaffolding, refactoring, debugging, even architecture. It runs locally, reads your codebase, and hands you changes you can accept, reject, or tweak.

I used it to build this site. Not because I couldn't do it myself — but because I wanted to see what a machine would do with a design philosophy as stubborn as brutalism. Would it soften the edges? Try to round the corners?

```terminal title="TERMINAL // SESSION.LOG" lang="bash"
$ opencode "convert these HTML templates to an Astro project"
$ opencode "extract the shared header and footer into components"
$ opencode "add a pixelated hover effect to the project card"
$ opencode "make the dark mode toggle actually work"
$ echo "SESSION_COMPLETE: 47_FILES_CREATED"
```

## 02 // THE PROCESS

First thing I noticed: the thing is fast. What would've eaten my whole evening — pulling out shared layouts, configuring Tailwind, wiring up static paths — it knocked out in under a minute. The scaffolding was solid. Component structure was clean. It even kept the intentional design inconsistencies (like the different border-radius values between pages) without second-guessing them.

Then it got interesting. When I asked for the pixelated hover effect on the project card, it came back with a JavaScript canvas-based approach. Heavy. Unnecessary. I pushed back: "CSS only." It tried a filter + grid overlay. Better. Still not quite there. We went back and forth. Three rounds later we landed on a pseudo-element grid pattern with contrast scaling — pure CSS, zero runtime cost, brutalist as hell.

- The agent is great at scaffolding and boilerplate. Component extraction, config, file structure — done in seconds.
- Design decisions still need a human. It proposed rounded corners on the blog page. I had to hold the line on the 0px radius.
- The value isn't in the first draft. It's in the third or fourth pass, after you've pushed back a few times.

## 03 // THE VERDICT

AI-assisted development isn't replacement. It's leverage. The agent doesn't have taste. It doesn't have an aesthetic. It doesn't lie awake at 3am wondering if a 3px border is too thick. But it can execute on your taste at a speed that'd make any solo developer dizzy.

The brutalist web needs a human behind it. The machine does the heavy lifting. Together they build something neither could pull off alone. This site is the proof.
