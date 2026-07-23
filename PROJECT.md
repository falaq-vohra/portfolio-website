# Project Documentation

## Purpose

This repository contains a personal portfolio website for Hafiz Muhammad. Its current purpose is to present an immersive, full-screen introduction featuring the owner's name, professional roles, location and availability, supported by an animated visual identity.

The implemented experience is currently centered on a single hero view. It includes a loading screen, fixed navigation, an animated role label, an avatar treatment, a custom cursor and a generative Three.js background.

## Current Development Stage

The project is in an early foundation stage:

- The initial hero experience is implemented.
- The application is a single React view with no routing or additional portfolio pages.
- Core visual and motion experiments are present.
- The first repository audit and documentation baseline are complete.
- Production engineering systems such as automated tests, linting, continuous integration and formal accessibility validation are not yet configured.

Existing behavior is the baseline. Future work must preserve it unless a requested change explicitly replaces it.

## High-Level Roadmap

The roadmap describes direction, not currently implemented features. Changes within it require explicit approval and should be delivered incrementally.

1. **Stabilize the foundation**
   - Resolve documented accessibility, responsive and performance issues.
   - Establish validation and repository-hygiene practices.
   - Preserve the current hero while reducing unnecessary coupling.
2. **Formalize shared systems**
   - Consolidate design tokens and motion conventions.
   - Extract reusable interface primitives only when real reuse is established.
   - Separate editable content from presentation components.
3. **Support portfolio growth**
   - Introduce page, section or routing architecture only when required by approved content.
   - Keep visual experiences modular so they can be loaded and optimized independently.
4. **Production readiness**
   - Validate accessibility, responsive behavior, browser compatibility and performance.
   - Add appropriate automated quality checks when authorized.

## Long-Term Architecture Goals

- Keep the application shell, content, presentation and visual effects clearly separated.
- Keep page-level components responsible for composition rather than low-level behavior.
- Build reusable components around stable interface patterns, not speculative abstractions.
- Centralize shared design and motion values instead of repeating arbitrary values.
- Move global browser behaviors, such as the custom cursor, behind focused components or hooks when refactoring is approved.
- Give resource-intensive experiences, such as the Three.js scene, explicit lifecycle, fallback and accessibility behavior.
- Allow future content growth without coupling content changes to component internals.
- Add routing only when the approved information architecture requires it.

## Current Tech Stack

### Application

- React 18
- React DOM 18
- JavaScript and JSX

### Build and styling

- Vite 4
- `@vitejs/plugin-react`
- Tailwind CSS 3
- PostCSS
- Autoprefixer
- Global CSS and component-level inline styles

### Motion and graphics

- Framer Motion
- GSAP
- `@gsap/react`
- Three.js
- Browser `requestAnimationFrame`

The project currently has no router, state-management library, TypeScript setup or automated test framework.

## Development Principles

1. Inspect the relevant implementation and documentation before editing.
2. Treat working behavior as intentional until evidence or an approved requirement says otherwise.
3. Make the smallest change that fully satisfies the requested outcome.
4. Do not make unrequested architecture or design decisions.
5. Prefer clear composition and focused responsibilities over duplication or large components.
6. Preserve accessibility, responsive behavior and progressive enhancement.
7. Keep performance proportional to the visual value delivered, especially for animation and WebGL.
8. Reuse the existing stack before introducing a new dependency.
9. Validate changes in proportion to their risk and document meaningful decisions.
10. Keep generated output, dependencies and source responsibilities distinct.

## Source of Truth

- `PROJECT.md` defines project direction and development principles.
- `DESIGN_SYSTEM.md` defines visual standards.
- `ANIMATION_SYSTEM.md` defines motion standards.
- `COMPONENT_SYSTEM.md` defines component boundaries and organization.
- `CONTENT_SYSTEM.md` defines content separation and reuse.
- `AI_RULES.md` defines mandatory rules for AI-assisted work.
- `CHANGELOG.md` records meaningful project changes.

When documentation and implementation differ, record the discrepancy and ask for direction before making a broad or irreversible change.
