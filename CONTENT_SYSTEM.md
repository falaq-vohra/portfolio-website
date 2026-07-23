# Content System

## Current State

Portfolio content is currently embedded directly in React components. Existing content includes:

- The portfolio owner's displayed name
- Professional role labels
- Availability and employment copy
- Location copy
- Navigation labels
- Primary call-to-action text
- Loading-screen words and supporting message
- Image imports and alternative text

This is manageable for the current single hero but couples editorial changes to presentation code.

## Principles

1. Content should describe what the interface says; components should describe how it is presented.
2. Repeated content should have one authoritative source.
3. Content structures should reflect real content needs rather than a speculative content-management system.
4. Components should receive data through clear props or page-level composition.
5. Content changes should not require knowledge of animation or layout internals.
6. User-facing text, URLs, labels and media metadata should be explicit and reviewable.
7. Accessibility content, such as alternative text and labels, is part of the content model.

## Separation Strategy

When content growth or editing frequency justifies a refactor, move stable portfolio data out of component bodies into structured local modules. Page or section components should select the required content and pass it to reusable presentation components.

Separation should be incremental:

1. Identify content that changes independently of presentation.
2. Define the smallest structure that represents the existing content accurately.
3. Move one coherent content group at a time.
4. Preserve current rendered output and behavior.
5. Avoid adding a CMS or data-fetching layer until an approved requirement needs one.

## Recommended Future Content Structure

The following is a recommendation for future growth, not the current folder structure:

```text
src/content/
├── site.js
├── navigation.js
└── hero.js
```

Possible responsibility boundaries:

- `site.js`: site-wide identity and shared external destinations
- `navigation.js`: navigation labels and destinations
- `hero.js`: displayed name, professional roles, supporting copy, CTA label and media metadata

If additional approved sections are introduced, each section should own a similarly focused content module. Do not create empty content files in anticipation of features that do not exist.

## Content Shape Guidelines

- Use named object properties instead of position-dependent arrays when items have distinct meaning.
- Use arrays for genuinely repeatable collections such as role labels or navigation items.
- Keep stable identifiers separate from display labels.
- Keep URLs with their associated labels and metadata.
- Store image alternative text alongside the content that determines its meaning.
- Do not store JSX, Tailwind classes, animation settings or component instances in content modules.
- Do not duplicate default content in both a component and a content file.

## Reusable Content Strategy

- Site-wide identity information should have one source.
- Shared link objects should be reusable across navigation, footer or contact surfaces if those surfaces are later approved.
- Repeated collections should be mapped into components rather than copied into markup.
- Components may provide generic behavioral defaults, but portfolio-specific copy should come from the content layer once separation is implemented.
- Loading copy should remain distinct from professional role content even if both use the same visual component.

## Voice and Tone

The existing voice is concise, professional and direct. Future content should preserve that baseline unless new editorial direction is provided.

- Prefer specific, plain language.
- Avoid unsupported claims or invented biography details.
- Keep calls to action clear about their destination or result.
- Preserve the owner's chosen spelling, location and professional terminology.
- Do not let an AI assistant invent projects, clients, employment, metrics, awards, testimonials or contact details.

## Media and Assets

- Keep runtime media imports separate from design-reference material.
- Use the most appropriate existing format and avoid duplicate runtime assets.
- Give content images meaningful alternative text; mark decorative visual effects as decorative.
- Record source, usage rights and intended purpose when new media is added.
- Do not rename, replace, recompress or delete assets without explicit approval.

## Localization and Formatting

Localization is not currently implemented. Content structures should avoid making future localization unnecessarily difficult, but no localization framework should be introduced without a requirement.

- Keep user-facing sentences out of styling logic.
- Preserve valid UTF-8 text and correct visible encoding issues deliberately.
- Avoid assembling grammatically meaningful sentences from disconnected fragments.
- Keep locale-sensitive dates, numbers and locations structured if they are introduced later.

## Accessibility

- Link labels and calls to action must make sense outside their visual context.
- Rotating or changing text must expose a stable, understandable experience to assistive technology.
- Loading messages must accurately describe state and must not promise progress that is not measured.
- Alternative text should communicate the purpose of an image, not merely its filename or visual appearance.
- Headings and labels must preserve a logical information hierarchy.
