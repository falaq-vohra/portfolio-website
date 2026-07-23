# AI Contribution Rules

## Purpose

These rules are mandatory for every AI assistant working in this repository, including Codex, ChatGPT, Claude and future systems. They protect the project's behavior, design intent, maintainability and owner control.

User instructions for a task take precedence over recommendations in project documentation. An assistant must never interpret a broad goal as permission for unrelated redesigns, architecture changes, dependency changes or destructive operations.

## Before Any Change

1. Read the user's complete request and identify the exact authorized scope.
2. Inspect the relevant repository files before proposing or making edits.
3. Read the documentation governing the affected area.
4. Check for repository-specific instruction files and existing uncommitted work.
5. Treat all pre-existing changes as user-owned; do not overwrite, revert, stage or clean them without permission.
6. Identify current behavior, dependencies and component boundaries before editing.
7. Ask for direction when a missing decision would materially affect architecture, design, content or behavior.

## Scope and Decision Authority

- Do not make architecture, design, content or product decisions that the user has not authorized.
- Make reasonable implementation choices only within the boundaries of an approved task.
- Do not expand a focused request into a general refactor.
- Do not redesign the interface while fixing behavior.
- Do not invent portfolio content, biography details, links, projects or features.
- Clearly distinguish existing behavior from recommendations and future goals.

## Editing Rules

1. Make the smallest coherent change that satisfies the request.
2. Never rewrite working code unnecessarily.
3. Preserve established behavior unless the requested outcome explicitly changes it.
4. Preserve the local code style unless a style migration is approved.
5. Do not perform broad formatting or import reordering unrelated to the task.
6. Do not replace a library, pattern or subsystem merely because another approach is preferred.
7. Do not delete files, assets, dependencies or functionality without explicit authorization.
8. Do not modify generated output unless the task specifically requires it.
9. Keep comments accurate and focused on reasoning that is not evident from the code.
10. Avoid leaving dead code, temporary diagnostics or unexplained constants in completed work.

## Architecture and Components

- Keep components focused and reusable where real reuse or behavioral isolation exists.
- Prefer composition over duplicated markup and behavior.
- Avoid speculative abstractions and premature folder expansion.
- Keep page composition separate from reusable low-level behavior when an approved change creates that boundary.
- Keep global browser effects isolated and clean them up correctly.
- Preserve existing public component contracts unless a breaking change is explicitly approved.
- Follow `COMPONENT_SYSTEM.md` for naming, responsibilities and organization.
- Follow `CONTENT_SYSTEM.md` when separating content from presentation.

## Design, Responsive Behavior and Accessibility

- Preserve the established visual language unless a redesign is requested.
- Use the existing design system before adding arbitrary visual values.
- Preserve or improve responsive behavior across narrow, short and wide viewports.
- Do not solve one viewport while knowingly breaking another.
- Preserve semantic HTML, keyboard access, focus visibility, readable contrast and assistive-technology behavior.
- Respect reduced-motion requirements when changing animation.
- Never remove native accessible behavior without providing an equivalent or better experience.
- Follow `DESIGN_SYSTEM.md` and `ANIMATION_SYSTEM.md` for all visual and motion changes.

## Dependencies and Packages

Before adding, removing or replacing a package, the assistant must:

1. Explain why the current stack cannot reasonably satisfy the requirement.
2. State the package's purpose, expected bundle/runtime impact and maintenance implications.
3. Identify any overlap with existing dependencies.
4. Obtain user approval when installation was not already explicitly requested.
5. Use the project's package manager and update the lockfile consistently.

Never install a package merely for convenience when a small, maintainable implementation already exists in the repository or platform.

## Validation

- Validate every change in proportion to its risk.
- Prefer targeted checks first, followed by the relevant broader build or test command.
- Check responsive and accessibility-sensitive behavior when UI changes are made.
- Check animation cleanup and performance when changing continuous effects.
- Do not claim a test, build or visual check passed unless it was actually run successfully.
- If validation cannot be run, state exactly what remains unverified.
- Do not suppress errors or weaken checks to make validation pass without approval.

## Git and Change Management

- Keep changes small, focused and reviewable.
- Keep commits small and focused when the user authorizes committing.
- Do not stage, commit, amend, rebase, push or create branches unless requested or clearly included in the workflow.
- Do not mix unrelated cleanup with feature or bug work.
- Never use destructive Git commands against user work without explicit approval.
- Review the final diff and confirm that only authorized files changed.
- Update `CHANGELOG.md` when a meaningful user-facing or architectural change warrants it.

## Communication

- Explain assumptions that materially influence the result.
- Report blockers and tradeoffs clearly instead of silently choosing a new direction.
- Lead final reports with the outcome, files changed and validation performed.
- Mention known limitations or unverified behavior.
- Do not exaggerate completeness, performance, accessibility or production readiness.

## Prohibited Actions

An AI assistant must not:

- Invent requirements, content or completed validation.
- Rewrite the application wholesale for a scoped request.
- Overwrite or discard user-owned changes.
- Install packages without the required explanation and authority.
- Commit secrets, credentials, environment files or private data.
- Add tracking, analytics, external services or network calls without approval.
- Disable accessibility, responsive behavior or error handling to simplify implementation.
- Modify files outside the requested scope without explaining why and obtaining any required authorization.
- Perform destructive filesystem or Git operations without explicit permission and verified targets.

## Completion Checklist

Before declaring a task complete, confirm:

- The requested scope is fully satisfied.
- No unrelated files were changed.
- Existing user work was preserved.
- Components remain focused and duplication was not introduced.
- Responsive and accessibility requirements were preserved.
- Relevant validation was run and reported accurately.
- Documentation and changelog updates are included when required.
