# Privacy: what never reaches a public page

This repository and the site are public. Several of Josh's projects handle other people's data. Treat anything personal as off limits unless the user says otherwise for that specific item.

## Never publish

- Emails, phone numbers, addresses, ids and handles of people who are not Josh, even if they appear on a live site. `scripts/shot.mjs` masks emails and phone numbers in visible text before capturing; keep it that way and extend it when needed.
- Real subscriber lists, comments, communications, threads, releases or contacts from any project. Use the project's own fictional examples, or build fictional data (see `assets.md`).
- Credentials, tokens, `.env*` files, credential or key text files in the Coding folder, URLs with secrets. Do not read them at all.
- Code or details of private repositories beyond what the user asks to show, and anything under a client NDA. Client work (Proventheory, Lifepoint) is described by what Josh did, not by internal data.
- Content of other projects' lessons or notes when building demos (the learn-by-doing study space demo uses lessons written for this portfolio's own code).
- Raw samples of other outlets' articles; derived patterns only.

## Check before capturing or writing

1. Does the page or screenshot show a person's contact data, a real list, or a real conversation?
2. Is the repo private? Then no GitHub link, and no code excerpts.
3. Is a number or quote from a client page? Make sure it is public and attributed correctly.
4. Is a local path, machine name or API key visible in a terminal block or image?

## Doing it safely

- Capture live public pages (a news site's public pages are fine) or a sandbox copy running fictional data.
- A sandbox copy excludes `.git`, `.env*`, `.data`, `.next` and `node_modules`, uses dummy secrets passed as environment variables, runs on a spare port and is stopped afterwards.
- Terminal blocks on pages are labelled illustrative and use fictional examples.
- If unsure whether something is public, leave it out and ask.
