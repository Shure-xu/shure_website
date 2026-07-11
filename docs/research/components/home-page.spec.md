# Home Page Specification

## Overview
- **Target file:** `src/app/page.tsx`
- **Interaction model:** anchor navigation, hover-driven cards, smooth scrolling
- **Goal:** Build a personal website inspired by Fler Design's editorial studio style.

## Visual Language
- Large compressed-feeling headlines.
- Paper background, ink typography, bright lime and blush accents.
- Rounded media blocks and project cards.
- Alternating light and dark bands for pacing.

## DOM Structure
- `main`
  - fixed `header > nav`
  - `Hero`
  - `SelectedWork`
  - `Services`
  - `Notes`
  - `ContactFooter`

## Assets
- `/images/portrait-workspace.png`
- `/images/project-field-notes.png`
- `/images/project-soft-lab.png`
- `/images/project-open-signal.png`

## Content
- Placeholder Chinese copy is used until the user provides real personal information.
- Email placeholder: `hello@example.com`

## Responsive Behavior
- Desktop: max-width `80rem`, multi-column layouts.
- Tablet/mobile: stacked layout, hidden nav section links, large text constrained with `clamp()`.
