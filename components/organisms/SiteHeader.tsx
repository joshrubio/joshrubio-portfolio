"use client"

import { Button } from "@/components/atoms/Button"
import { Stack } from "@/components/atoms/Stack"
import { BrandMark } from "@/components/molecules/BrandMark"
import { HeaderBar } from "@/components/molecules/HeaderBar"
import { LanguageSwitch } from "@/components/molecules/LanguageSwitch"
import { MobileNav } from "@/components/molecules/MobileNav"
import { NavLink } from "@/components/molecules/NavLink"
import { TranslateButton } from "@/components/molecules/TranslateButton"
import { navItems } from "@/data/site"
import { useLocale } from "@/i18n/LocaleProvider"

export function SiteHeader() {
	const { t } = useLocale()
	const items = navItems.map((item) => ({ label: t.nav[item.key], href: item.href }))

	return (
		<HeaderBar
			brand={<BrandMark name="Josh D. Rubio" />}
			nav={
				<Stack as="nav" direction="row" gap="xs" aria-label="Main">
					{items.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}
				</Stack>
			}
			actions={
				<>
					<TranslateButton />
					<LanguageSwitch />
					<Button href="/#contact" size="sm">
						{t.home.hero.connect}
					</Button>
				</>
			}
			mobile={
				<MobileNav items={items} toggleLabel="Menu">
					<TranslateButton />
					<LanguageSwitch />
				</MobileNav>
			}
		/>
	)
}
