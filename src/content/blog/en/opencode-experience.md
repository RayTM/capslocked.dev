---
title: "Building with Silicon"
description: "My first session building capslocked.dev with OpenCode — an AI coding agent that writes, reviews, and ships code alongside you. A reflection on human-machine collaboration and the future of craft."
date: "2025.05.10"
category: "DEVELOPMENT"
icon: "arrow_forward"
heroImage:
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuByiEpb0lLdtldq3y0vDZJnEzQo4bXYHowU5tHUAdX2XGHNtTToLcV-Yf_TvHlqeU30xkDpFq3oMYkISWkadnyWN4e1_-HNYx5-S9oWUWSeTH11nZtDZlF6vYocHQGJWFbSun3Hf6iNIr_kaNIb56ksEWV_rVP_Hb0IZFHj_fGnzPtzhaVcmuRxSXgDMdhKN3JRMZss2RMqMO-lABCSFRwc9SKJInEP7QuenvoMdUqiGWroM2fleKePtdyeVGXUWxibV1hwehYt-g"
  alt: "Terminal interface showing code generation"
---

## 01 // THE CONTEXT

OpenCode is a terminal-based AI coding agent. You describe what you want, and it writes the code — scaffolding, refactoring, debugging, even architecting. It runs locally, reads your codebase, and proposes changes that you can accept, reject, or modify.

I decided to use it to build this site. Not because I couldn't do it myself — I've been writing HTML since table layouts were cutting edge — but because I wanted to see what the machine would do with a design philosophy as opinionated as brutalism. Would it soften the edges? Would it try to round the corners?

```terminal title="TERMINAL // SESSION.LOG" lang="bash"
$ opencode "convert these HTML templates to an Astro project"
$ opencode "extract the shared header and footer into components"
$ opencode "add a pixelated hover effect to the project card"
$ opencode "make the dark mode toggle actually work"
$ echo "SESSION_COMPLETE: 47_FILES_CREATED"
```

## 02 // THE PROCESS

The first thing I noticed: the agent is fast. What would have taken me an evening — extracting shared layouts, configuring Tailwind, setting up static paths — it did in under a minute. The scaffolding was solid. The component structure was clean. It even preserved the intentional design inconsistencies (like the different border-radius values between pages) without questioning them.

But here's where it got interesting. When I asked for the pixelated hover effect on the project card image, it first proposed a JavaScript canvas-based approach. Heavy. Unnecessary. I pushed back: "CSS only." It came back with a filter + grid overlay technique. Better. Still not quite right. We iterated. Three rounds later, we had a solution that used a pseudo-element grid pattern with contrast scaling — pure CSS, no runtime cost, brutalist as hell.

- The agent excels at scaffolding and boilerplate. Component extraction, config setup, file structure — done in seconds.
- Design decisions still need a human eye. It proposed rounded corners on the blog page. I had to enforce the 0px radius rule.
- The back-and-forth is where the value lives. Not the first output, but the third or fourth revision after you've pushed back.

## 03 // THE VERDICT

AI-assisted development is not replacement. It's amplification. The agent doesn't have taste. It doesn't have an aesthetic philosophy. It doesn't wake up at 3am thinking about whether a 3px border is too thick or not thick enough. But it can execute on your taste at a speed that would make any solo developer dizzy.

The brutalist web needs human intent. The machine provides the labor. Together, they build something neither could build alone. This site is proof.

> "The grid is the structure. The machine is the accelerator. The human is the architect."
