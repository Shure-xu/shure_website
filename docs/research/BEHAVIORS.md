# Behaviors

## Navigation
- Fixed at the top with backdrop blur.
- Desktop displays section links.
- Mobile keeps the brand and email icon, hiding section links to avoid cramped text.

## Hover States
- Project images scale from `scale(1)` to `scale(1.05)` over `700ms`.
- Project arrows translate up and right on hover.
- Circular email and CTA buttons subtly scale down on hover.

## Responsive Behavior
- Desktop uses two-column hero and three-column work grid.
- Mobile stacks all sections vertically.
- Typography uses `clamp()` for hero and CTA headlines to keep long Chinese text inside the viewport.

## Known Gaps
- Reference screenshots could not be captured reliably through the current Chrome session because Chrome screenshot capture timed out.
- This is an inspired personal-site draft, not a pixel-perfect reconstruction.

## About Page Route Transition
- The homepage grey About card is a client-side link to `/about`.
- On a standard left click from `/`, the cover rises from below over `680ms` and navigation begins after the cover has filled the viewport.
- The cover and arrival overlay use `#C9CACA`; the centred arrival word is `Me`.
- The arrival phase keeps the same `1850ms` reveal timing as the established `/works/dynamic → /` transition, then clears both transition classes.
- Reduced-motion users navigate to `/about` without the staged cover.
