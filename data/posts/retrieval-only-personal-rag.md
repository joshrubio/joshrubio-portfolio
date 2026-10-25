---
title: Retrieval only, no generation: why my personal RAG returns chunks instead of chatting
description: The design of the search over my markdown vault in Siegfried, why it stops at ranked chunks, and where generation on top of retrieval makes sense.
category: AI & Retrieval
author: Josh D. Rubio
date: 2026-10-09
cover: /assets/imgs/projects/siegfried/architecture.png
coverAlt: Siegfried architecture, from markdown files to search and live project status
---

When people hear "RAG over my notes" they picture a chat box. You type a question, a model reads some of your documents and writes an answer. That is one shape of retrieval-augmented generation, and it is the shape I deliberately did not build for my own vault.

[Siegfried](/projects/siegfried) is the control plane I made to plan and track a series of five small products. One of its three parts is a vault of markdown notes with semantic search over it. The search returns ranked chunks of my own notes, with the note they came from, and stops there. No generated text. This post explains how it works and why I think that is the right call for this particular job.

## What the vault is

The vault is a folder of markdown files split into research, projects, decisions and docs. Every note has the same frontmatter: type, project, tags, status and dates. The files are the source of truth. The database only holds what has to be shared live. A `private/` folder with personal job-search research is gitignored and is never indexed, either locally or in the cloud.

I wrote the vault because lessons were getting lost between builds. The same Next.js traps, the same tooling surprises, cost me time again on the next project. Writing a gotcha down once is useful only if I can find it again later, by meaning and not just by the exact word I happened to use.

## The pipeline

There are only two moving parts.

**The indexer.** It splits each note by `##` heading, so a chunk is a section a person actually wrote under a title. Each chunk is embedded with Voyage (`voyage-4-lite`, 1024 dimensions), and the note's rows are replaced in a pgvector table in Supabase. Replacing the rows of a whole note on each run means re-indexing is safe to repeat; there is no growing pile of stale chunks. The script paces itself for the free tier and retries when it hits rate limits.

**The search route.** An API route embeds the question and calls a `match_vault_chunks` SQL function, with optional filters for project and note type. It returns the best chunks, ranked, with their sources. That is the whole response.

Using a hosted pgvector database instead of a local vector store was a deliberate choice as well. Local and production talk to one live database, so there is no sync step and no drift between what my laptop knows and what the deployed app knows.

## Why chunking by heading

A fixed window of, say, a few hundred tokens will happily cut a procedure in half. Headings are the boundaries I already chose when writing, so a chunk usually maps to one idea, such as a note on Cache Components and Suspense, or on MapLibre under Turbopack. Retrieval then returns something I can read on its own. It is not a clever technique. It works because the source material was written to be sectioned.

The cost is that very long sections become long chunks, and a note without headings is a single chunk. For a vault I author myself, that is a writing-habit problem I can fix at the source, which is not true of a pile of third-party PDFs.

## Why it stops at retrieval

There are four reasons, and the first matters most.

**I wrote the documents, and I want to read them.** The point of a note is what it says in my words, with its caveats. A summary of a note is a lossy copy of something I can open in two seconds. The result of the search is a pointer, and the useful action afterward is opening the note.

**Nothing to hallucinate.** If the system only returns existing text, it cannot invent a decision I never made. When it finds nothing relevant, the ranked list looks weak, and I can see that. A generated answer sounds equally confident whether the evidence was strong or thin.

**It is easy to judge.** A list of chunks with scores and filenames can be inspected. If a query returns the wrong notes, I can see which and why. Debugging a pipeline that ends in prose means first working out whether the retrieval or the generation was at fault.

**Cost and moving parts.** No generation call means no model to pick, no prompt to maintain and no per-answer spend. The only model involved is the embedding model.

I did not do an evaluation with numbers, and I will not pretend to. The vault currently holds sixteen notes. At that size the honest measure is simply whether I can find what I wrote.

## Where generation does earn its place

This is not an argument against answering questions with a model. It is an argument for choosing per use case. Siegfried's own satellite, [Janus](/projects/janus), is a developer-portal demo with an assistant that answers questions about its own documentation. There the reader did not write the docs and wants an answer, not a reading list, so the flow retrieves the top four chunks, sends them with the question to a hosted model, and shows the sources next to the answer.

Even there, the retrieval half is the same and the sources stay visible. Generation is a layer on top, and it is optional. Building Siegfried's search first as retrieval only made that layer easier to add, because I already trusted the part underneath it.

## Access, briefly

The app sits behind a cookie gate in `proxy.ts`, and the database uses Supabase's new secret-key format, used only on the server. A search tool over personal notes should not be public by default, and the index contains my own text.

## What I would add next

The project page lists one next step that I would still choose first: a check that warns when vault notes are newer than the last index. Search that silently misses this week's note is worse than search that says it is stale. That is a small piece of tooling, and it is the kind of thing that decides whether you keep using a personal system.

## The short version

If the corpus is yours and the goal is to find your own words again, retrieval is the product. Chunk along the structure you already wrote, keep the index replaceable by note, make the results inspectable, and add generation only for readers who really need an answer instead of a source. For a vault that only I read, the best interface turned out to be the one that sends me straight back to the file.
