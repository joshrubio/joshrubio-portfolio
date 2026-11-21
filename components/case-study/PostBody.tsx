import type { ReactNode } from "react"

import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Text } from "@/components/atoms/Text"
import LocaleLink from "@/components/atoms/LocaleLink"

import { Callout, DataTable, Paragraph, Quote } from "./ProseBlocks"

const slugify = (text: string): string => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

function Inline({ text }: { text: string }) {
	const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g)
	return (
		<>
			{parts.map((part, index): ReactNode => {
				if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
					return <strong key={index}>{part.slice(2, -2)}</strong>
				}
				if (part.startsWith("`") && part.endsWith("`") && part.length > 2) {
					return (
						<code key={index} className="bg-paper-grid px-1.5 py-0.5 font-mono text-[0.9em] text-ink">
							{part.slice(1, -1)}
						</code>
					)
				}
				const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
				if (link) {
					const [, label, href] = link
					const className = "font-bold text-ink underline decoration-accent decoration-2 underline-offset-4 hover:decoration-wavy"
					return /^https?:/.test(href) ? (
						<a key={index} href={href} target="_blank" rel="noopener noreferrer" className={className}>
							{label}
						</a>
					) : (
						<LocaleLink key={index} href={href} className={className}>
							{label}
						</LocaleLink>
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

const cells = (line: string): string[] => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim())

function parse(source: string): Block[] {
	const lines = source.replace(/\r\n/g, "\n").split("\n")
	const blocks: Block[] = []
	let i = 0

	const isSpecial = (line: string) => /^(#{2,3} |[-*] |\d+\. |> |```|\||:::)/.test(line)

	while (i < lines.length) {
		const line = lines[i]
		if (!line.trim()) {
			i++
			continue
		}

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

		const paragraph: string[] = []
		while (i < lines.length && lines[i].trim() && !isSpecial(lines[i])) paragraph.push(lines[i++].trim())
		if (paragraph.length === 0) {
			paragraph.push(line.trim())
			i++
		}
		blocks.push({ type: "p", text: paragraph.join(" ") })
	}
	return blocks
}

function Blocks({ blocks }: { blocks: Block[] }) {
	return (
		<>
			{blocks.map((block, index): ReactNode => {
				switch (block.type) {
					case "h2":
						return (
							<Heading key={index} as="h2" size="heading" width="condensed" id={slugify(block.text)} className="mt-14 scroll-mt-28">
								{block.text}
							</Heading>
						)
					case "h3":
						return (
							<Heading key={index} as="h3" size="subhead" width="condensed" className="mt-6">
								<Inline text={block.text} />
							</Heading>
						)
					case "p":
						return (
							<Paragraph key={index}>
								<Inline text={block.text} />
							</Paragraph>
						)
					case "quote":
						return (
							<Quote key={index}>
								<Inline text={block.text} />
							</Quote>
						)
					case "ul":
						return (
							<Stack key={index} as="ul" gap="sm" className="my-2">
								{block.items.map((item, itemIndex) => (
									<li key={itemIndex} className="flex gap-3">
										<span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-accent" />
										<Text as="span" tone="soft">
											<Inline text={item} />
										</Text>
									</li>
								))}
							</Stack>
						)
					case "ol":
						return (
							<ol key={index} className="my-2 list-decimal space-y-2 pl-6 font-body text-body text-ink-soft marker:font-bold marker:text-accent">
								{block.items.map((item, itemIndex) => (
									<li key={itemIndex}>
										<Inline text={item} />
									</li>
								))}
							</ol>
						)
					case "code":
						return (
							<pre key={index} tabIndex={0} className="my-6 overflow-x-auto border-2 border-ink bg-term-bg p-4 font-mono text-sm leading-relaxed text-term-you shadow-sticker focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
								<code className={block.lang ? `language-${block.lang}` : undefined}>{block.text}</code>
							</pre>
						)
					case "table":
						return <DataTable key={index} head={block.head} rows={block.rows.map((row) => row.map((cell, cellIndex) => <Inline key={cellIndex} text={cell} />))} />
					case "callout":
						return (
							<Callout key={index} tone={block.tone} title={block.title}>
								<Blocks blocks={block.blocks} />
							</Callout>
						)
				}
			})}
		</>
	)
}

export function PostBody({ source }: { source: string }) {
	return (
		<Stack gap="md">
			<Blocks blocks={parse(source)} />
		</Stack>
	)
}
