# Animation System

## Status

The project currently combines several motion technologies. This document defines how they should be treated consistently without redesigning or replacing existing animation. Any library consolidation or major choreography change requires explicit approval.

## Existing Animation Libraries and Mechanisms

### Framer Motion

Currently responsible for:

- Loading-screen exit
- Hero and background fade-in
- Navigation entrance
- Hero heading entrance
- Avatar scale and fade
- Role-area and description entrances

### GSAP and `@gsap/react`

Currently responsible for the repeating, character-staggered `WordLoader` animation used in both the loading screen and hero role label.

### Three.js

Currently responsible for the continuously animated shader background and pointer-reactive lighting uniform.

### Browser and CSS motion

- A dedicated `requestAnimationFrame` loop updates the custom cursor.
- CSS transitions control cursor visibility, button states, link opacity and avatar grayscale.

## Motion Philosophy

Motion should communicate hierarchy, continuity, readiness or direct interaction. It should reinforce the existing cinematic identity without delaying access to content or competing with legibility.

Every animation should satisfy at least one of these purposes:

- Introduce hierarchy
- Clarify a state change
- Connect user input to a response
- Sustain the approved ambient visual experience

Decorative motion must remain optional, interruptible where appropriate and subordinate to usability.

## Timing System

The current implementation uses the following timing ranges:

| Category | Existing range or value |
|---|---|
| Hover and cursor CSS transitions | `0.2s` to `0.3s` |
| Character entrance/exit | `0.4s` |
| Hero element entrances | `0.6s` to `0.8s` |
| Background fade | `1s` |
| Full-screen fades | `1.8s` |
| Loading-state display timer | `2.8s` |
| GSAP character stagger | `0.07s` |

These values describe the existing implementation; they are not yet centralized tokens.

Future motion should use these categories:

- **Immediate feedback:** approximately 150-300ms
- **Element transition:** approximately 300-600ms
- **Composed entrance:** approximately 600-1000ms
- **Atmospheric transition:** longer durations only when they do not block interaction or content

Delays should be used sparingly. Long sequences must not make users wait to read or operate the interface.

## Easing Guidelines

Existing easing includes:

- Framer Motion `easeOut` for element entrances
- Framer Motion `easeInOut` for full-screen fades
- GSAP `power2.out` for character entrances
- GSAP `power2.in` for character exits
- CSS `ease` and `ease-in-out` for interaction transitions

Guidelines:

- Use ease-out when an element arrives or responds to input.
- Use ease-in when an element is intentionally leaving.
- Use ease-in-out for continuous state-to-state or full-scene transitions.
- Keep easing consistent among elements participating in the same sequence.
- Avoid introducing custom easing curves unless the existing curves cannot express the requested behavior.

## Choreography

- Parent and child entrances should read as one sequence.
- Order animation by visual hierarchy: environment, navigation, primary identity, supporting content.
- Prefer shared variants or named timing values when coordinated Framer Motion sequences are refactored.
- Avoid accumulating unrelated numeric delays across a page.
- Loading motion must reflect real readiness if it blocks the application; a decorative minimum delay alone is not a reliable loading contract.

## Scroll Animation Principles

No scroll-triggered animation is currently implemented. If future approved sections introduce it:

- Content must remain available without animation.
- Animate each element only when the behavior adds hierarchy or context.
- Do not animate every section by default.
- Avoid scroll hijacking and preserve native scrolling.
- Trigger conservatively and avoid repeated entrance animations that distract during normal navigation.
- Use transforms and opacity where possible.
- Ensure deep links, keyboard navigation and reduced motion reveal content correctly.

## Reduced-Motion Strategy

The current implementation does not yet handle `prefers-reduced-motion`; adding support is a documented goal.

The target behavior is:

- Remove or shorten nonessential entrance movement and stagger.
- Replace repeating word animation with a stable readable label.
- Stop or substantially reduce shader displacement animation.
- Disable pointer-following decorative motion where appropriate.
- Keep state changes understandable without relying on motion.
- Do not hide content while waiting for animation to complete.

Reduced motion must be implemented across Framer Motion, GSAP, Three.js and CSS as one coordinated policy.

## Performance Rules

1. Use `transform` and `opacity` for frequent DOM animation whenever possible.
2. Do not add an animation library when the existing stack can implement the requirement safely.
3. Limit persistent `requestAnimationFrame` loops and pause them when not visible or needed.
4. Avoid allocations and React state updates inside pointer or animation-frame hot paths.
5. Cap WebGL rendering cost according to device capability and viewport needs.
6. Clean up timelines, listeners, frames, textures, geometry, materials and renderers on unmount.
7. Avoid animating layout-affecting properties during continuous interaction.
8. Measure bundle and runtime impact before adding complex visual effects.
9. Lazy-load expensive motion or graphics code when it is not required for initial content.
10. Test motion on mobile hardware, not only desktop development machines.
