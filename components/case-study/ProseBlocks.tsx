import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import { Text } from "@/components/atoms/Text"

export const sectionId = (title: string): string =>
	title.replace(/^\d+\.\s*/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")

export function CaseSection({ title, children, id }: { title: string; children: ReactNode; id?: string }) {
	return (
		<Stack gap="md" className="mt-14">
			<Heading as="h2" size="heading" width="condensed" id={id ?? sectionId(title)} className="scroll-mt-28">
				{title}
			</Heading>
			{children}
		</Stack>
	)
}

export function TableOfContents({ items, label = "On this page" }: { items: string[]; label?: string }) {
	return (
		<nav aria-label={label} className="my-6 border-2 border-ink bg-white p-4 shadow-sticker">
			<Text as="span" size="label" tone="accent" weight="bold" className="mb-3 block">
				{label}
			</Text>
			<Stack as="ul" direction="row" gap="sm" wrap>
				{items.map((title) => (
					<li key={title}>
						<a
							href={`#${sectionId(title)}`}
							className="inline-flex border-2 border-ink px-3 py-1 font-mono text-label uppercase text-ink transition-colors duration-snap hover:bg-ink hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
						>
							{title}
						</a>
					</li>
				))}
			</Stack>
		</nav>
	)
}

export function Paragraph({ children }: { children: ReactNode }) {
	return <Text tone="soft">{children}</Text>
}

export function BulletList({ children }: { children: ReactNode }) {
	return (
		<ul className="my-2 space-y-2 font-body text-body text-ink-soft [&>li]:relative [&>li]:pl-6 [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:top-2.5 [&>li]:before:size-2 [&>li]:before:bg-accent [&>li]:before:content-['']">
			{children}
		</ul>
	)
}

export function SubHeading({ children }: { children: ReactNode }) {
	return (
		<Heading as="h3" size="subhead" width="condensed" className="mt-6">
			{children}
		</Heading>
	)
}

export function FeatureList({ items }: { items: { title: string; text: string }[] }) {
	return (
		<Stack as="ul" gap="md">
			{items.map((item) => (
				<li key={item.title} className="flex gap-3">
					<span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-accent" />
					<Text as="span">
						<Text as="span" weight="bold">
							{item.title}:
						</Text>{" "}
						<Text as="span" tone="soft">
							{item.text}
						</Text>
					</Text>
				</li>
			))}
		</Stack>
	)
}

const calloutStyles = cva("my-8 border-2 border-l-8 border-ink bg-white p-6 shadow-sticker", {
	variants: {
		tone: {
			danger: "border-l-accent-hot",
			success: "border-l-ink",
			info: "border-l-chrome-line",
		},
	},
})

const calloutTitleTones = { danger: "accent", success: "ink", info: "ink" } as const

export interface CalloutProps extends VariantProps<typeof calloutStyles> {
	tone: "danger" | "success" | "info"
	title: string
	children: ReactNode
}

export function Callout({ tone, title, children }: CalloutProps) {
	return (
		<div className={calloutStyles({ tone })}>
			<Stack gap="md">
				{title ? (
					<Heading as="h3" size="subhead" width="condensed" tone={calloutTitleTones[tone]}>
						{title}
					</Heading>
				) : null}
				{children}
			</Stack>
		</div>
	)
}

export function ProcessSteps({ steps }: { steps: { label: string; hint: string }[] }) {
	return (
		<Grid columns={4} gap="md" className="my-8">
			{steps.map((step, index) => (
				<Stack key={step.label} gap="xs" className="h-full border-2 border-ink bg-white p-4 text-center shadow-sticker">
					<Heading as="p" size="heading" width="condensed" tone="accent">
						{String(index + 1).padStart(2, "0")}
					</Heading>
					<Text as="span" weight="bold">
						{step.label}
					</Text>
					<Text as="span" size="label" tone="soft">
						{step.hint}
					</Text>
				</Stack>
			))}
		</Grid>
	)
}

export function Quote({ children, cite }: { children: ReactNode; cite?: string }) {
	return (
		<blockquote className="my-8 border-2 border-ink bg-ink p-6 text-paper shadow-sticker-accent">
			<Text tone="paper" weight="bold" className="text-heading leading-tight">
				{children}
			</Text>
			{cite ? (
				<Text as="span" size="label" tone="paper" className="mt-3 block opacity-75">
					{cite}
				</Text>
			) : null}
		</blockquote>
	)
}

export function StatTiles({ items }: { items: { value: string; label: string }[] }) {
	return (
		<Stack direction="row" gap="md" justify="center" wrap className="my-8">
			{items.map((item) => (
				<Stack key={item.label} gap="xs" align="center" className="border-2 border-ink bg-white px-6 py-4 text-center shadow-sticker">
					<Heading as="p" size="heading" width="condensed" tone="accent">
						{item.value}
					</Heading>
					<Text as="span" size="label" tone="soft">
						{item.label}
					</Text>
				</Stack>
			))}
		</Stack>
	)
}

export function DataTable({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
	return (
		<div className="my-8 overflow-x-auto border-2 border-ink bg-white shadow-sticker">
			<table className="w-full border-collapse text-left">
				<thead>
					<tr className="border-b-2 border-ink bg-chrome">
						{head.map((heading) => (
							<th key={heading} scope="col" className="px-4 py-3 font-mono text-label font-normal uppercase text-paper">
								{heading}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, rowIndex) => (
						<tr key={rowIndex} className="border-b border-chrome-line last:border-b-0">
							{row.map((cell, cellIndex) => (
								<td key={cellIndex} className={cellIndex === 0 ? "px-4 py-3 font-body text-small font-bold text-ink" : "px-4 py-3 font-body text-small text-ink-soft"}>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export interface TakeawaysProps {
	title?: string
	items: { title: string; text: ReactNode }[]
	next?: ReactNode
}

export function Takeaways({ title = "Key Takeaways", items, next }: TakeawaysProps) {
	return (
		<div className="mt-16 border-2 border-ink bg-ink p-6 text-paper shadow-sticker-accent md:p-8">
			<Stack gap="md">
				<Heading as="h3" size="heading" width="condensed" tone="paper">
					{title}
				</Heading>
				<Stack as="ul" gap="md">
					{items.map((item) => (
						<li key={item.title} className="flex gap-3">
							<span aria-hidden="true" className="mt-2.5 size-2 shrink-0 bg-accent" />
							<Text as="span" tone="paper">
								<Text as="span" tone="paper" weight="bold">
									{item.title}:
								</Text>{" "}
								{item.text}
							</Text>
						</li>
					))}
				</Stack>
				{next ? (
					<Text size="small" tone="paper" className="border-t-2 border-chrome-line pt-4">
						<Text as="span" size="small" tone="paper" weight="bold">
							Next steps:
						</Text>{" "}
						{next}
					</Text>
				) : null}
			</Stack>
		</div>
	)
}

export function NumberedFeatures({ items }: { items: { title: string; text: string }[] }) {
	return (
		<Grid as="ul" columns={2} gap="md" className="my-4">
			{items.map((item, index) => (
				<li key={item.title} className="flex gap-3">
					<span className="flex size-7 shrink-0 items-center justify-center border-2 border-ink bg-accent font-mono text-label text-white">{index + 1}</span>
					<Stack gap="xs">
						<Text as="span" weight="bold">
							{item.title}
						</Text>
						<Text as="span" size="small" tone="soft">
							{item.text}
						</Text>
					</Stack>
				</li>
			))}
		</Grid>
	)
}

export function TagList({ items }: { items: string[] }) {
	return (
		<Stack as="ul" direction="row" gap="sm" justify="center" wrap className="my-6">
			{items.map((item) => (
				<li key={item}>
					<Tag tone="ink">{item}</Tag>
				</li>
			))}
		</Stack>
	)
}

export function Columns({ children }: { children: ReactNode }) {
	return (
		<Grid columns={2} gap="lg" align="start" className="my-6">
			{children}
		</Grid>
	)
}

export function Column({ children }: { children: ReactNode }) {
	return <Stack gap="sm">{children}</Stack>
}
