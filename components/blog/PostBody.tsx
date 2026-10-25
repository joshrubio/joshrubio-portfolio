import Link from "next/link"
import type { ReactNode } from "react"

/**
 * Renders a blog post body written in a small markdown subset (no dependency):
 *
 *   ## Heading           ### Subheading
 *   paragraphs           (consecutive lines join into one paragraph)
 *   - bullet list        1. numbered list
 *   > quote
 *   ```ts ... ```        fenced code
 *   | a | b |            table (first row is the header, second the |---| separator)
 *   | 1 | 2 |
 *   :::note Title        callout, closed by a line with only :::
 *   text
 *   :::                  (note = info, problem = danger, solution = success)
 *
 * Inline: **bold**, `code`, [label](/internal-or-https://external).
 * Class names match the project case studies (components/projects/ProjectPage.tsx).
 */

const slugify = (text: string) =>
	text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

function Inline({ text }: { text: string }) {
	const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
	return (
		<>
			{parts.map((part, i): ReactNode => {
				if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
					return <strong key={i}>{part.slice(2, -2)}</strong>
				}
				if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
					return <code key={i}>{part.slice(1, -1)}</code>
				}
				const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
				if (link) {
					const [, label, href] = link
					return /^https?:/.test(href) ? (
						<a key={i} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
					) : (
						<Link key={i} href={href}>{label}</Link>
					)
				}
				return part
			})}
		</>
	)
}

type Block =
	| { type: "h2" | "h3" | "p" | "quote"; text: string }
	| { type: "ul" | "ol"; items: string[] }
	| { type: "code"; lang: string; text: string }
	| { type: "table"; head: string[]; rows: string[][] }
	| { type: "callout"; tone: "info" | "danger" | "success"; title: string; blocks: Block[] }

const cells = (line: string) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim())

function parse(source: string): Block[] {
	const lines = source.replace(/\r\n/g, "\n").split("\n")
	const blocks: Block[] = []
	let i = 0

	const isSpecial = (line: string) =>
		/^(#{2,3} |[-*] |\d+\. |> |```|\||:::)/.test(line)

	while (i < lines.length) {
		const line = lines[i]
		if (!line.trim()) { i++; continue }

		if (line.startsWith("```")) {
			const lang = line.slice(3).trim()
			const code: string[] = []
			i++
			while (i < lines.length && !lines[i].startsWith("```")) code.push(lines[i++])
			i++
			blocks.push({ type: "code", lang, text: code.join("\n") })
			continue
		}

		if (line.startsWith(":::")) {
			const [, kind = "note", ...title] = line.slice(3).trim().split(/\s+/)
			const inner: string[] = []
			i++
			while (i < lines.length && lines[i].trim() !== ":::") inner.push(lines[i++])
			i++
			const tone = kind === "problem" ? "danger" : kind === "solution" ? "success" : "info"
			blocks.push({ type: "callout", tone, title: title.join(" "), blocks: parse(inner.join("\n")) })
			continue
		}

		const heading = line.match(/^(#{2,3}) (.+)$/)
		if (heading) {
			blocks.push({ type: heading[1].length === 2 ? "h2" : "h3", text: heading[2].trim() })
			i++
			continue
		}

		if (line.startsWith("> ")) {
			const quote: string[] = []
			while (i < lines.length && lines[i].startsWith("> ")) quote.push(lines[i++].slice(2))
			blocks.push({ type: "quote", text: quote.join(" ") })
			continue
		}

		if (/^[-*] /.test(line) || /^\d+\. /.test(line)) {
			const ordered = /^\d+\. /.test(line)
			const items: string[] = []
			const marker = ordered ? /^\d+\. / : /^[-*] /
			while (i < lines.length && marker.test(lines[i])) {
				items.push(lines[i++].replace(marker, ""))
				// continuation lines of the same item (indented)
				while (i < lines.length && /^\s{2,}\S/.test(lines[i])) items[items.length - 1] += " " + lines[i++].trim()
			}
			blocks.push({ type: ordered ? "ol" : "ul", items })
			continue
		}

		if (line.startsWith("|")) {
			const rows: string[][] = []
			while (i < lines.length && lines[i].startsWith("|")) rows.push(cells(lines[i++]))
			const [head, , ...body] = rows
			blocks.push({ type: "table", head, rows: body })
			continue
		}

		const para: string[] = []
		while (i < lines.length && lines[i].trim() && !isSpecial(lines[i])) para.push(lines[i++].trim())
		if (para.length === 0) { para.push(line.trim()); i++ }
		blocks.push({ type: "p", text: para.join(" ") })
	}
	return blocks
}

function Blocks({ blocks }: { blocks: Block[] }) {
	return (
		<>
			{blocks.map((block, i): ReactNode => {
				switch (block.type) {
					case "h2":
						return (
							<h2 key={i} id={slugify(block.text)} className="fs-5 fw-medium mt-5" style={{ scrollMarginTop: 110 }}>
								{block.text}
							</h2>
						)
					case "h3":
						return <h3 key={i} className="h6 mt-4 fw-semibold"><Inline text={block.text} /></h3>
					case "p":
						return <p key={i} className="text-300"><Inline text={block.text} /></p>
					case "quote":
						return (
							<blockquote key={i} className="my-4 p-4 bg-dark text-white rounded-3">
								<p className="mb-0 fs-5" style={{ color: "white" }}><Inline text={block.text} /></p>
							</blockquote>
						)
					case "ul":
						return (
							<ul key={i} className="text-300">
								{block.items.map((item, j) => <li key={j}><Inline text={item} /></li>)}
							</ul>
						)
					case "ol":
						return (
							<ol key={i} className="text-300">
								{block.items.map((item, j) => <li key={j}><Inline text={item} /></li>)}
							</ol>
						)
					case "code":
						return (
							<pre key={i} className="my-4 p-3 bg-light rounded-3 border" style={{ overflowX: "auto" }} tabIndex={0}>
								<code className={block.lang ? `language-${block.lang}` : undefined}>{block.text}</code>
							</pre>
						)
					case "table":
						return (
							<div key={i} className="table-responsive my-4 p-2 bg-light rounded-3">
								<table className="table table-borderless align-middle mb-0">
									<thead>
										<tr>
											{block.head.map((h) => (
												<th key={h} scope="col" className="text-dark small text-uppercase">{h}</th>
											))}
										</tr>
									</thead>
									<tbody>
										{block.rows.map((row, r) => (
											<tr key={r}>
												{row.map((cell, c) => (
													<td key={c} className={c === 0 ? "text-dark fw-semibold" : "text-300"}><Inline text={cell} /></td>
												))}
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)
					case "callout":
						return (
							<div key={i} className={`mt-6 mb-4 p-4 bg-light rounded-3 border-start border-${block.tone} border-4`}>
								{block.title && <h5 className={`fs-5 fw-medium text-${block.tone} mb-3`}>{block.title}</h5>}
								<Blocks blocks={block.blocks} />
							</div>
						)
				}
			})}
		</>
	)
}

export default function PostBody({ source }: { source: string }) {
	return <Blocks blocks={parse(source)} />
}
