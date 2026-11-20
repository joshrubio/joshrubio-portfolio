'use client'
import { useTranslate } from "./TranslateProvider"
import { useLocale } from "@/i18n/LocaleProvider"

/** Navbar button: translates the page into the visitor's language and brings the original back. */
export default function TranslateButton() {
	const { available, phase, toggle } = useTranslate()
	const { t } = useLocale()
	if (!available) return null

	const working = phase === "working" || phase === "downloading"
	const done = phase === "done"
	const label = done ? t.translate.showOriginal : t.translate.button
	const icon = working ? "ri-loader-4-line translate-spin" : done ? "ri-arrow-go-back-line" : "ri-translate-2"

	return (
		<button
			type="button"
			className="translate-button d-inline-flex align-items-center border rounded-3 bg-transparent text-300 px-1 px-sm-2 py-1 me-1 me-md-2"
			onClick={toggle}
			disabled={working}
			aria-label={label}
			aria-pressed={done}
			title={label}
			data-no-translate
		>
			<i className={`${icon} fs-18`} aria-hidden="true" />
			<span className="d-none d-xxl-inline fs-7 ms-2 text-nowrap">{label}</span>
		</button>
	)
}
