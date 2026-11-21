---
name: update-portfolio
description: Add a new project (or rewrite an existing one) in Josh Rubio's portfolio, following the case-study model of the previous ones, with real screenshots, diagrams in the house style and the same tone. Use whenever the user wants to add, update or rework a project, case study, thumbnail or the project grid in this repo. Also use to update this skill itself after a pass.
---

# Update the portfolio

This repo is Josh's portfolio (Next.js 14, TypeScript, deployed at joshrubio.es). The recurring job is **adding new projects as case studies** that match the earlier ones in structure, visuals and tone. Everything this skill knows comes from the git history; keep it that way and keep it current.

Read these before writing anything:

- `references/page-style.md`: structure, tone, components, **which component for which images (layout cases)**, feature coverage and data entry of a case study
- `references/assets.md`: how to capture screenshots, draw diagrams and convert images
- `references/history.md`: what each earlier pass did and the lessons from it. **Append to it at the end of every pass.**
- `references/privacy.md`: what must never reach a public page
- `references/i18n.md`: how the two languages work and what to update when content changes

## Workflow

1. **Orient.** `git log --stat -15` shows the latest pass. Read `README.md` ("Adding a Project") and `data/projects.ts`. If git says "dubious ownership", do not touch global config: prefix commands with `git -c safe.directory=<path to this repo>`.
2. **Find the sources.** Each project has a GitHub repo under `joshrubio` (`gh repo list joshrubio`) and usually a local folder in the user's Coding folder. The folder name can differ from the repo name (see `references/history.md`). Ask if a project cannot be found. Never read `.env`, credential files or private data folders.
3. **Study each project properly** before writing: README and CLAUDE.md/AGENTS.md, `git log`, the main flow in code, tests, live site if there is one. State only what the code, docs or a live page confirm. If something is unclear or unverified, leave it out or say so on the page. **Make a feature inventory** from the routes, admin pages and API routes (see "Feature coverage" in `references/page-style.md`) and check every flow is on the page or consciously omitted; a flow that defines the product gets its own section.
4. **Decide the page shape.** UI project: real screenshots plus 2 or 3 diagrams. No UI (automation, plugin, library): diagrams, a `Terminal` walkthrough, and a thumbnail card. Replacing an older project: keep the slug and the URL, and use the Lifepoint/Carmen pattern (current version first, an Evolution section for the old one).
5. **Make the assets** (see `references/assets.md`): screenshots to WebP, diagrams to PNG, a 16:9 thumbnail. Redact personal data before capturing, never after.
6. **Write the page** at `app/(site)/[lang]/projects/<slug>/page.tsx` with the shared components, then the entry in `data/projects.ts` (newest first, at the top, unless the user orders the home grid differently) and its Spanish card text in `data/projects.es.ts`. Home grid, `/work` and the stats counters generate themselves from that file.
7. **Verify.** Look at every new page and component at desktop and phone width, not only that it loads. For anything in the navbar or header, measure it at 320, 360, 390, 768, 992 and 1440 px: items must stay on one row, not overlap and not widen the page (the user asked to shrink the navbar rather than let it stack on phones). `npx tsc --noEmit`; start `portfolio-dev` (`.claude/launch.json`); load every new page and check: no broken images, no console errors other than the known `footer-1/background.png` 404 that every `/projects/*` page has. Use headless Chrome if the Browser pane is hidden.
8. **Report and offer follow-ups**, never assume them: README touch-ups, a blog post in `data/posts`, a Resume/Skills update, commit and push.
9. **Update this skill**: append the pass to `references/history.md`, fix anything in these files that turned out to be wrong, and add new learnings. Keep SKILL.md short; details go in `references/`.

## Rules that earlier passes taught

- **Accuracy over polish.** Every claim on a page must be verifiable from the repo or a live page. Honest limits ("prototype", "untested interactively", "screenshots use fictional data") are part of the tone and make pages more credible.
- **Credit the team.** If the user did not do all of it, say who did what (Lifepoint). If they did it alone, say "designed and built end to end".
- **Private repos get no GitHub link**; when they become public, add the "View on GitHub" badge and button (`813be1a`).
- **Do not publish people's data.** See `references/privacy.md`.
- **Do not commit or push unless asked.** When committing: conventional prefix (`feat:`, `style:`, `chore:`), a body that explains the why, and the attribution trailer the session asks for. Do not leave temporary files in the repo.
- **Do not fix unrelated things** in a pass; mention them instead.
- **The site has two languages** (English default, Spanish under `/es`). Case studies and blog posts are English only, but every new project needs its Spanish card text, and any new chrome or home string goes in both dictionaries (`i18n/dictionaries/en.ts` and `es.ts`). Internal links use `LocaleLink`, never a bare `next/link` or `<a href="/...">`. See `references/i18n.md`.
