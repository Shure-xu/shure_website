# AboutHero Specification

## Overview

- **Target file:** `src/components/about-hero.tsx`
- **Reference:** `https://www.flerdesign.com/studio` — `#animation` / “Hero Animation”
- **Visual reference:** user-provided `C:\Users\Shure\AppData\Local\Temp\codex-clipboard-d758e3d4-c469-4715-8dac-6dd30ee16d9a.png`
- **Interaction model:** time-driven entrance with continuous, subtle floating motion. The reference itself is a Framer component and uses positioned image cards plus separate labels.

## Reference Measurements (desktop capture)

- The source hero (`#animation`) is `1385px × 723px` at a `1440px` viewport and begins after the fixed navigation.
- Each artwork thumbnail is `132px × 99px`, `position: absolute`, `border-radius: 16px`.
- Each label is `40px` high, uses `border-radius: 9999px`, and is independently positioned so it overlaps the image edge.
- The reference title uses `130px`, weight `600`, letter-spacing `-0.03em`; this implementation adapts the scale to the project’s Chinese type rule (`52px` default desktop heading) while retaining the centred, exhibition-style composition.

## Project Adaptation

### Content

- Heading: `持续练习，保持开放。`
- Accent word: `持续`
- Cards use three existing project assets rather than third-party material:
  - `/images/project-open-signal-03.jpg` — `版式 / Open Signal`
  - `/images/project-mood-index-04.jpg` — `视觉 / Mood Index`
  - `/images/dynamic-hello-38.jpg` — `动态 / Hello`

### Layout

- Black hero surface with the existing fixed navigation layered above it.
- Desktop: hero minimum height about `46rem`; cards sit left-upper, right-upper and right-lower around the title.
- Mobile: cards remain visible, reduce to compact squares, and the title wraps without any card crossing the text.
- The next white editorial intro retains the existing body copy and is visually separated from the dark hero.

## States & Behaviors

- **Initial entrance:** heading fades upward; cards fade and translate in with a short stagger.
- **Scroll-triggered convergence:** from the hero’s top reaching the viewport top until its bottom reaches the viewport top, the cards move along separate paths towards the heading. The scroll value is passed through a spring (`stiffness: 210`, `damping: 22`, `mass: 0.5`) for a small, delayed follow-through.
  - Open Signal: `x: 0 → 22vw`, `y: 0 → 7.5rem`
  - Mood Index: `x: 0 → -20vw`, `y: 0 → 4rem`
  - Hello: `x: 0 → -14vw`, `y: 0 → -8rem`
- **Resting state:** each card retains a low-amplitude vertical drift inside its scroll-driven wrapper.
- **Reduced motion:** all elements remain immediately visible and no looping animation is run.
- **Hover:** no link or navigation behaviour is introduced; cards are decorative `aria-hidden` visual records.

## Accessibility

- The hero heading remains the page’s sole `h1`.
- Decorative artwork cards and their labels are excluded from the accessibility tree.
- All motion respects `prefers-reduced-motion` through Framer Motion’s `useReducedMotion` hook.
