import fs from "fs"
import path from "path"

/**
 * Blog posts: one markdown file per post in this folder (data/posts/<id>.md). The file name is the
 * post's id and URL (/blog/<id>). Server-side only: it reads the files at build time.
 *
 * File format:
 *
 *   ---
 *   title: ...
 *   description: ...        (one sentence; used on the cards and as the meta description)
 *   category: ...
 *   author: Josh D. Rubio
 *   date: 2026-10-25        (ISO, YYYY-MM-DD)
 *   cover: /assets/imgs/projects/<slug>/thumbnail.png   (a file under /public)
 *   coverAlt: ...
 *   ---
 *   Body in the small markdown subset that components/blog/PostBody.tsx renders.
 */

export interface PostMeta {
	/** File name without extension; also the URL segment. */
	id: string
	title: string
	description: string
	category: string
	author: string
	/** ISO date, YYYY-MM-DD. */
	date: string
	/** Display date, e.g. "25 October 2026". */
	displayDate: string
	/** Path under /public. */
	cover: string
	coverAlt: string
	readingMinutes: number
}

export interface Post extends PostMeta {
	body: string
}

const POSTS_DIR = path.join(process.cwd(), "data", "posts")
const WORDS_PER_MINUTE = 200
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function formatDate(iso: string): string {
	const [y, m, d] = iso.split("-").map(Number)
	return `${d} ${MONTHS[m - 1]} ${y}`
}

function parsePost(id: string, raw: string): Post {
	const match = raw.replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
	if (!match) throw new Error(`[posts] ${id}.md has no frontmatter block`)
	const fields: Record<string, string> = {}
	for (const line of match[1].split("\n")) {
		const colon = line.indexOf(":")
		if (colon > 0) fields[line.slice(0, colon).trim()] = line.slice(colon + 1).trim()
	}
	for (const key of ["title", "description", "category", "author", "date", "cover", "coverAlt"]) {
		if (!fields[key]) throw new Error(`[posts] ${id}.md is missing "${key}" in its frontmatter`)
	}
	if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date)) throw new Error(`[posts] ${id}.md: date must be YYYY-MM-DD`)
	const body = match[2].trim()
	return {
		id,
		title: fields.title,
		description: fields.description,
		category: fields.category,
		author: fields.author,
		date: fields.date,
		displayDate: formatDate(fields.date),
		cover: fields.cover,
		coverAlt: fields.coverAlt,
		readingMinutes: Math.max(1, Math.round(body.split(/\s+/).length / WORDS_PER_MINUTE)),
		body,
	}
}

let cache: Post[] | null = null

/** All posts, newest first. */
export function getAllPosts(): Post[] {
	if (cache && process.env.NODE_ENV === "production") return cache
	const posts = fs
		.readdirSync(POSTS_DIR)
		.filter((file) => file.endsWith(".md"))
		.map((file) => parsePost(file.replace(/\.md$/, ""), fs.readFileSync(path.join(POSTS_DIR, file), "utf8")))
		.sort((a, b) => (a.date === b.date ? a.id.localeCompare(b.id) : b.date.localeCompare(a.date)))
	cache = posts
	return posts
}

export function getPost(id: string): Post | undefined {
	return getAllPosts().find((post) => post.id === id)
}

/** Newest posts first, without their bodies. */
export function getLatestPosts(limit?: number): PostMeta[] {
	const all = getAllPosts().map(({ body: _body, ...meta }) => meta)
	return limit ? all.slice(0, limit) : all
}
