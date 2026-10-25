---
title: Designing an AI-assisted workflow you can audit
description: Gated stages, plain files and a human decision at every judgement: what I learned building a documentary production pipeline and a markdown story bible.
category: AI Workflows
author: Josh D. Rubio
date: 2026-10-21
cover: /assets/imgs/projects/conquest-brain/thumbnail.png
coverAlt: The Conquest Brain production pipeline dashboard
---

Most of the AI tooling I find trustworthy has one thing in common: when something goes wrong, I can find out where. Not "the model got it wrong", but which step, on which input, who approved it and what changed. If a workflow cannot answer that, it is a demo, however good the output looks.

I have built two systems around that idea, for very different material. [Conquest Brain](/projects/conquest-brain) is the production pipeline behind a Spanish-language documentary YouTube channel. [Teller Framework](/projects/teller-framework) is a story bible for long-form fiction that an AI can work from. Both are built from plain files, explicit stages and approvals. This post is about the patterns they share.

## Files as the database

Conquest Brain keeps its state in markdown, CSV, TSV and JSON. A master status table is a markdown file, so the state of the whole channel is one file that I can read, diff and version in git. Teller is the same: each concept in the story is a markdown node with YAML frontmatter, and the project's current position is a `state.md`.

This is not nostalgia for text files. An agent and a person can both read these files, and git gives you history for free: what the AI changed is a diff, and undoing it is a revert. The price is real, and I paid it in hand-written parsers and some awkward column names. For a system whose main job is to be inspected, I would pay it again.

## Stages with gates, and who closes them

Conquest Brain has thirteen stages, from ideation to a retrospective, and each has a gate with three states: open, exported and signed. Moving an episode forward requires a signed gate. Then the gate resets, the next stage is queued, and the stale task is removed, so an old task can never run twice.

What I find most useful is that each gate declares how it gets closed. There are four ways: mechanically in Python, by verifying that an artifact exists, by queuing a task for an AI agent, or by a person marking it done. Only the agent stages ever spend model tokens. Anything that Python can decide never reaches an LLM, which also keeps the running cost low. It also means the question "which decisions did a model make?" has a short answer: the ones in the agent stages, and nothing else.

## Let the model edit, not invent

The fact-check stage shows how I use AI inside a gate. It has two layers.

Layer one is deterministic. Every citation tag in the script must resolve to a row in the source log. Every source needs a reliability tier and a rights status. Sentences that contain a number, a date, a name or a quote without a tag are flagged, and claims that rest only on weak sources are called out. The worked example from a real script: 53 citation tags pointing to 12 distinct sources, with 13 rows in the source log split as 7 top-tier, 5 second-tier and 1 third-tier. It passed layer one.

Layer two is an AI edit pass, and its permissions are narrow. It may tighten, hedge, attribute or cut. It may never add a fact. It also writes a changelog, so I can see exactly what it touched. Legal and ethical questions are deferred to a single human tick at publication, and the documentation states plainly what risk remains after all that. Layers like these do not make a script correct. They make its weak points visible and its edits reviewable.

The same principle holds for AI-generated images: one style per episode, a permanent label burned in on screen, never presented as archival material, with the rule enforced by the tooling and not by memory.

## Warn, do not block

My rule is that warnings beat walls. Audits that block tend to get bypassed, and then no one reads their output. The audit before a final render reports out-of-order beats, low sync, rights still pending and AI images without a label, and it warns loudly. Only genuinely uncovered work blocks a render.

The same preference shows up in how long jobs run. The master renders in chunks of ten beats, each encoded once and kept, so a crash or a sleeping laptop loses at most one chunk. Edits are queued rather than rendered immediately, and every cut is journalled so undo and redo are exact even after a reload. An audit trail is not only for compliance. It is what makes it safe to try something.

## The same ideas in fiction

Fiction looks like the opposite of a production pipeline, but the problem is the same: a long story outgrows any context window, and chat memory drifts between sessions. Teller solves it with structure instead of memory.

- **Nodes declare their dependencies.** A `load-with` field in the frontmatter says which other files must come along. Open a character and the right world rules and voice files come with it, one level deep and no further, because more context is more noise.
- **Bundles are task presets.** Writing, planning, editing and continuity checking each load a different set of files. At session start only each project's state file is read, never the whole bible.
- **The AI flags, it does not rewrite.** The continuity check loads the relevant arcs, rules and characters, compares a chapter against them and raises flags. A session cannot close while a flag is unresolved.
- **Canon updates are a reviewed diff.** Closing a session walks through nine steps and asks for confirmation before every write. The proposed changes to the canon come as a list, and I approve or reject them one by one. Nothing is applied without a yes.
- **Editing the past is isolated.** An edit to an old chapter never touches the project state, so a late fix cannot corrupt the progress of the active book.

The universe it was built for spans two books and more than 115 tracked chapters, which is the scale where "just paste the background again" stops working. The conversations shown on the project page are illustrative, with placeholder story content, and I say so there for the same reason I am telling you here.

## What the two have in common

Looking at both together, five habits repeat:

1. **Write the process down as files**, so there is something to audit.
2. **Make every stage name what it produces**, who closes it and what closes it.
3. **Limit what the model can do at each step**: edit but not invent, flag but not rewrite, propose but not apply.
4. **Spend model calls only where judgement is needed**, and let ordinary code do the rest.
5. **Say what remains uncertain**, in the docs, next to the tool.

None of this makes an AI more accurate. It makes the system answerable. When something is wrong, the log shows which gate it passed through, who signed it, and what the model was allowed to change.

## Where it falls short

Conquest Brain is local only, with everything bound to localhost and no authentication, which is fine for one person and wrong for a team. The timeline is authored and not derived, so a re-recorded take needs an explicit re-sync, and the planned fix is a three-way merge. Hand-rolled parsers are a maintenance burden. And a gate that one person can sign is only as good as that person's attention. The structure does not replace the judgement; it makes sure the judgement happens at a known place, and leaves a record of it.
