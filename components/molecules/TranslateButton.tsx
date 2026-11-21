"use client"

import { Button } from "@/components/atoms/Button"
import { Icon, type IconName } from "@/components/atoms/Icon"
import { useTranslate } from "@/components/providers/TranslateProvider"
import { useLocale } from "@/i18n/LocaleProvider"

export function TranslateButton() {
	const { available, phase, toggle } = useTranslate()
	const { t } = useLocale()
	if (!available) return null

	const working = phase === "working" || phase === "downloading"
	const done = phase === "done"
	const label = done ? t.translate.showOriginal : t.translate.button
	const icon: IconName = working ? "loader" : done ? "undo" : "translate"

	return (
		<Button size="sm" tone="paper" onClick={toggle} disabled={working} aria-label={label} aria-pressed={done} title={label} data-no-translate>
			<Icon name={icon} size="sm" />
			<span className="hidden 2xl:inline">{label}</span>
		</Button>
	)
}
