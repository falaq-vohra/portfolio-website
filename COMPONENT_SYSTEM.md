# Component System

## Current Structure

The application currently has one root application component and three extracted reusable components.

### `App`

`App` currently owns:

- The fixed loading timer
- Global custom-cursor setup and cleanup
- Loading-screen and hero mount sequencing
- Navigation markup
- Hero name and avatar composition
- Animated role content
- Supporting biography content

It is the page-level composition root, but it also contains behaviors and interface regions that may become separate responsibilities during future approved work.

### `WordLoader`

A configurable rotating-word component. It accepts a word list, optional class name and text color, then uses GSAP to animate individual characters.

### `LoadingScreen`

A full-screen Framer Motion overlay that composes `WordLoader` with supporting loading copy.

### `GenerativeMountainScene`

A self-contained Three.js scene that owns WebGL creation, shader animation, pointer interaction, resizing and most resource cleanup.

## Component Principles

1. A component should have one clear reason to change.
2. Page-level components should compose sections and data rather than own unrelated low-level behavior.
3. Extract a component when it represents a stable interface pattern, isolates complex behavior or has demonstrated reuse.
4. Do not create speculative abstractions for one-off markup.
5. Prefer composition and explicit props over copied markup or deeply conditional components.
6. Keep browser-global effects and resource lifecycles isolated and fully cleaned up.
7. Preserve semantic HTML and accessible behavior inside the component contract.
8. Keep performance characteristics visible for components that run continuous animation or WebGL.

## Future Component Architecture

The following are architectural directions, not instructions to refactor immediately:

- Keep `App` focused on application-level composition.
- Represent each substantial page or section with a focused component when additional approved content makes that useful.
- Move reusable behavior into hooks only when it has a stable, testable contract.
- Separate data/content from presentation as described in `CONTENT_SYSTEM.md`.
- Keep visual-effect components independent from semantic content so fallbacks remain possible.
- Build small interface primitives only when repeated patterns justify them.

Potential boundaries already visible in the current hero include navigation, hero identity, supporting hero copy and custom cursor. Extraction should occur only as part of an approved change, not solely to increase file count.

## Naming Conventions

### Components

- Use `PascalCase` for component names and component filenames.
- Use descriptive nouns or noun phrases: `LoadingScreen`, `WordLoader` and `GenerativeMountainScene` are current examples.
- Avoid vague names such as `Wrapper`, `Thing`, `NewComponent` or numbered variants.

### Hooks and utilities

- Prefix React hooks with `use`.
- Use `camelCase` for functions, variables and non-component modules.
- Name event handlers with `handle` plus the event or intent.
- Name refs for the element or resource they contain.

### Props

- Use clear, domain-relevant names.
- Use boolean names that read as conditions, such as `isLoading`.
- Avoid unexplained abbreviations.
- Keep default behavior predictable and document props when the contract is not obvious.

## Folder Organization

Current organization:

```text
src/
├── assets/
├── components/
├── App.jsx
├── globals.css
└── index.jsx
```

This remains appropriate for the current project size. New folders should be introduced only when the repository gains enough files or responsibilities to justify them.

If future growth requires it, organize by clear responsibility, for example:

- `components/` for reusable UI and visual components
- `sections/` for page-level compositions
- `hooks/` for reusable React behavior
- `content/` for structured local content
- `styles/` for shared tokens or style layers
- `utils/` for framework-independent helpers

Do not reorganize existing files merely to match this possible structure.

## Component Responsibilities

Every component should define:

- What it renders
- What data it receives
- What state it owns
- What side effects it creates
- What resources it must clean up
- What responsive behavior it guarantees
- What accessibility behavior it guarantees

Page components may coordinate several components. Reusable components should not contain portfolio-specific copy unless that copy is an explicit default required by the component contract.

## Styling Responsibilities

- Use the shared visual rules in `DESIGN_SYSTEM.md`.
- Prefer existing Tailwind tokens and utilities for standard layout and appearance.
- Avoid repeating inline values when a stable shared token exists.
- Keep highly component-specific styles close to the component.
- Avoid broad global selectors for behavior that belongs to one component.
- Do not add new design tokens without documenting their purpose.

## Accessibility Responsibilities

Components must:

- Use the correct semantic element for their action or content.
- Support keyboard interaction when interactive.
- Expose a visible focus state.
- Provide appropriate labels, alternative text and assistive-technology behavior.
- Remain understandable with animation disabled.
- Avoid hiding or clipping content during zoom and reflow.
- Avoid requiring hover or precise pointer input.

## Validation Expectations

No automated component test system currently exists. Until one is approved, changes should be checked through the available build and targeted manual verification. Validation must cover the component's rendering, interaction, cleanup, responsive states and accessibility-sensitive behavior.
