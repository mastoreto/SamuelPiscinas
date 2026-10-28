---
target_identity: "file:/home/masto/github/SamuelPiscinas/src/components/sections/Hero.astro"
target_fingerprint: "sha256:4c87df18a64a903b53e135edbaf823046f2e4ae38906125e5688f6fc2415ae48"
target_path: /home/masto/github/SamuelPiscinas/src/components/sections/Hero.astro
timestamp: 2026-10-28T22-18-07Z
slug: src-components-sections-hero-astro
---
Method: dual-agent (A: design review, B: detector). No browser available: source-only review; contrast values are estimates.

Score: 19/32 (heuristics 7 and 10 n/a, Persuade surface).
Detector: 1 advisory — design-system-font-size, Hero.astro:35, text-[11.5px] outside DESIGN.md type ramp.

Priority issues:
- [P0] White h1/nav/Instagram/ghost button fail contrast on light water (est. 1.5-2.6:1). Fix: navy text + soft white glow, or grade the video. (colorize, audit)
- [P0] WhatsApp gets the weakest button; cyan primary camouflages on water. Fix: navy solid primary, filled WhatsApp. (polish)
- [P1] Seal (480px/256px) outweighs headline and pushes CTAs near the fold on 360x640. (layout, adapt)
- [P1] No pause control / data-saver handling for video and rotating seal; no poster. (optimize, harden)
- [P2] Cyan underline nearly invisible; hero never names Samuel/zone/free quote. (clarify, typeset)

Docs/code drift: DESIGN.md says Plus Jakarta Sans, pill buttons, navy #0b2347; code ships Barlow Condensed, rounded-xl, #071a2e.
