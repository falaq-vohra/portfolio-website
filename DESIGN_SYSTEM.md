# Design System

## Status

This document records the visual language already present in the repository and establishes goals for consistent future use. It does not authorize a redesign. Values marked as existing are derived from the current implementation; proposed consolidation requires a separately approved change.

## Existing Color Palette

### Core interface colors

| Role | Existing value | Current use |
|---|---|---|
| Dark background | `#0a0a0a` | Body background and Three.js fallback |
| Cream foreground | `#e4ded7` | Primary text, button border and loading background |
| White | `#ffffff` | Difference-blended custom cursor |
| Muted gray | Tailwind `gray-600` | Loading-screen supporting text |
| Mountain gold | `#c9a876` | Three.js shader and avatar glow |

### Configured Tailwind colors

| Token | Value |
|---|---|
| `accent` | `#00D9FF` |
| `accent-violet` | `#8B5CF6` |
| `surface` | `#1a1a1a` |
| `surface-border` | `rgba(255,255,255,0.08)` |
| `cream` | `#e4ded7` |

The configured accent and surface colors are not currently part of the rendered hero. Future work must not assume they are approved visual treatments merely because they exist in configuration.

## Typography

### Display and interface type

The current hero uses **Montserrat** at weights 600, 700 and 800, loaded from Google Fonts. It is used for:

- The hero name
- Navigation and primary call to action
- Animated role words
- Loading-screen text

The hero heading uses a heavy weight, tight `-0.04em` tracking and approximately `0.95` line height.

### Body type

The body fallback stack is the operating system sans-serif stack. Descriptive copy currently inherits this stack rather than Montserrat.

### Typography rules

- Preserve a clear display/body hierarchy.
- Use existing font families and weights unless a typography change is explicitly approved.
- Prefer reusable typography tokens or classes over repeated inline font declarations.
- Keep text readable under zoom, narrow viewports and font-loading failure.
- Do not use fixed display sizes without confirming small-screen and short-screen behavior.

## Spacing System

The implementation primarily uses Tailwind's default spacing scale. Existing examples include:

- Page and navigation padding: `2rem` (`px-8`)
- Navigation link gap: `2rem` (`gap-8`)
- Loading content gap: `2rem` (`gap-8`)
- Description column gap: `5rem` (`gap-20`)
- Hero description top margin: `8rem` (`mt-32`)
- Local fine adjustment: avatar top margin of `28px`

Future layout work should use the Tailwind spacing scale by default. One-off pixel values are acceptable only when they express a deliberate visual alignment that cannot be represented cleanly by an existing token. Responsive spacing must be considered alongside responsive type.

## Border Radius

Current radius treatments are:

- Buttons: Tailwind `rounded-lg` (`0.5rem`)
- Avatar: Tailwind `rounded-2xl` (`1rem`)
- Custom cursor: circular (`50%`)

These establish three current shape categories: control, featured media and circle. New radius values should not be introduced without a demonstrated need.

## Shadows and Overlays

Existing shadow treatments include:

- Tailwind `shadow-2xl` on the avatar
- A custom avatar shadow combining a deep black elevation shadow with a soft gold glow
- Configured but currently unused Tailwind `glow` and `card` shadows
- A radial overlay that keeps the hero center brighter while darkening the edges

Shadows should support hierarchy and depth, not compensate for insufficient contrast. Glow effects should remain restrained and tied to the existing atmospheric visual language.

## Visual Language

The current visual language is:

- Dark, cinematic and immersive
- Cream typography with warm gold environmental highlights
- Oversized, tightly tracked display type
- Layered depth created by WebGL, an edge vignette and an overlapping portrait
- Minimal interface chrome
- Subtle grayscale-to-color image interaction
- Smooth, staged motion rather than abrupt state changes

Future work should extend this language consistently. It must not introduce unrelated colors, decorative styles or interaction patterns without explicit design direction.

## UI Principles

1. Keep the content hierarchy immediately understandable despite the expressive background.
2. Preserve sufficient contrast between text, controls and animated imagery.
3. Use visual effects to support identity without obscuring content or interaction.
4. Keep controls recognizable and provide visible hover and keyboard-focus states.
5. Use consistent tokens for repeated color, type, spacing, radius and shadow decisions.
6. Design mobile and desktop states intentionally rather than relying on scaling alone.
7. Preserve native browser behavior unless a custom interaction provides an accessible equivalent.

## Responsive Design

The current implementation uses Tailwind's `sm`, `md`, `lg` and `xl` breakpoints primarily for heading and body-text sizing. This is a baseline, not a complete responsive system.

All future interface changes must be checked for:

- Narrow phone widths
- Short viewport heights
- Tablet and intermediate widths
- Desktop and wide screens
- Browser zoom and increased text size
- Touch, mouse and hybrid input
- Dynamic mobile viewport behavior

Fixed dimensions, full-screen overflow clipping and long unbroken display text require particular scrutiny.

## Accessibility Goals

- Meet WCAG 2.2 AA as the project target.
- Maintain readable contrast over all background states.
- Provide visible keyboard focus and logical tab order.
- Keep native cursor and interaction behavior available when custom behavior is unsuitable.
- Supply meaningful alternative text for content images and hide decorative imagery appropriately.
- Maintain semantic headings, landmarks, links and buttons.
- Support zoom, text resizing and reflow without loss of content.
- Respect reduced-motion preferences as defined in `ANIMATION_SYSTEM.md`.
- Ensure loading and rotating text are understandable to assistive technology.
- Never rely on hover, motion or color alone to communicate meaning.
