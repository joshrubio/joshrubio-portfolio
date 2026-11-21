"use client"

import { useState, type FormEvent } from "react"

import { Button } from "@/components/atoms/Button"
import { Grid } from "@/components/atoms/Grid"
import { Heading } from "@/components/atoms/Heading"
import { Icon } from "@/components/atoms/Icon"
import { Reveal } from "@/components/atoms/Reveal"
import { Stack } from "@/components/atoms/Stack"
import { Tag } from "@/components/atoms/Tag"
import type { Dictionary } from "@/i18n/dictionaries"

import { Field } from "./Field"

export interface ContactFormProps {
	copy: Dictionary["home"]["contact"]
	recipient: string
}

const read = (data: FormData, key: string): string => String(data.get(key) ?? "").trim()

export function ContactForm({ copy, recipient }: ContactFormProps) {
	const [sent, setSent] = useState(false)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const data = new FormData(event.currentTarget)
		const details = [read(data, "email"), read(data, "phone")].filter(Boolean).join(", ")
		const body = `${read(data, "message")}\n\n${read(data, "name")} (${details})`
		setSent(true)
		window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(read(data, "subject"))}&body=${encodeURIComponent(body)}`
	}

	return (
		<form onSubmit={handleSubmit}>
			<Stack gap="lg">
				<Heading as="h3" size="heading" width="condensed">
					{copy.formTitle}
				</Heading>
				<Grid columns={2} gap="md">
					<Field name="name" label={copy.name} placeholder={copy.namePlaceholder} />
					<Field name="email" label={copy.email} placeholder={copy.emailPlaceholder} type="email" />
					<Field name="phone" label={copy.phone} placeholder={copy.phonePlaceholder} type="tel" />
					<Field name="subject" label={copy.subject} placeholder={copy.subjectPlaceholder} />
				</Grid>
				<Field name="message" label={copy.message} placeholder={copy.messagePlaceholder} multiline />
				<Stack direction="row" align="center" gap="lg" wrap>
					<Button type="submit" size="lg">
						{copy.send}
						<Icon name="arrow-up-right" />
					</Button>
					{sent ? (
						<Reveal direction="pop">
							<Tag tone="accent" wobble className="-rotate-3">
								✓ mailto
							</Tag>
						</Reveal>
					) : null}
				</Stack>
			</Stack>
		</form>
	)
}
