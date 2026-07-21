# About Page Specification

## Overview

- **Target files:** `src/app/about/page.tsx`, `src/components/about-page.tsx`
- **Reference:** `https://www.flerdesign.com/studio`
- **Interaction model:** static editorial sections, with a route-enter transition originating from the homepage card.

## Adapted page topology

1. Fixed project navigation, reusing `SiteNav`.
2. Introductory statement: Chinese exhibition-style title paired with two short archive-note paragraphs.
3. Five practice modules: visual, motion, digital, research, and personal practice.
4. Personal profile: existing `shure-about.mp4` alongside the existing metal-texture card language.
5. Cross-media directions list.
6. Shared `#contact` footer, reusing `ContactFooter` unchanged.

## Project tokens

- **Page gutter:** `px-4`
- **Content width:** `max-w-[100rem]`
- **Section spacing:** `py-10 lg:py-16`, final section `pb-20 lg:pb-32`
- **Module gap:** `gap-5`
- **Borders:** `border-ink/30`
- **Corner radius:** `rounded-[0.4rem]`
- **Chinese title/body:** `font-taipei`; desktop body `18px / 1.6`
- **English labels:** `font-montserrat`

## Route transition

- **Trigger:** left click on the homepage grey About card, only when the current pathname is `/`.
- **Cover:** `#C9CACA`, rises from `translateY(105%)` using the same `0.68s cubic-bezier(0.76, 0, 0.18, 1)` cover-in timing as the existing `/works/dynamic → /` return.
- **Arrival state:** centered `Me`; cover reveal and word fade use the existing `1.85s cubic-bezier(0.22, 0.61, 0.36, 1)` timing.
- **Reduced motion:** navigate directly without the staged transition.

## Responsive behavior

- **Desktop:** intro and profile use two columns; practice modules use a two-column split grid.
- **Mobile:** all sections stack; labels remain visible and cards preserve the project’s 0.4rem corners.
