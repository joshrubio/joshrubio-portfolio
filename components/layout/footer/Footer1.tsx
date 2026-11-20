'use client'
import Link from "@/components/elements/LocaleLink"

import { useLocale } from "@/i18n/LocaleProvider"

const items = [
	{ key: "home", href: "/" },
	{ key: "services", href: "/services" },
	{ key: "portfolio", href: "/work" },
	{ key: "pricing", href: "/pricing" },
	{ key: "blog", href: "/blog-list" },
	{ key: "contact", href: "/#contact" },
] as const

export default function Footer1() {
	const { t } = useLocale()
	return (
		<>
			<footer>
				<div className="section-footer position-relative pt-60 pb-60 bg-secondary-1">
					<div className="container position-relative z-1">
						<div className="text-center">
							<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
								<img src="/assets/imgs/footer-1/logo.svg" alt="Josh D. Rubio" />
								<span className="fs-4 ms-2 text-white-keep">Josh D. Rubio</span>
							</Link>
							<div className="navigation d-none d-md-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								{items.map((item) => (
									<Link key={item.key} href={item.href} className="fs-5">
										{t.nav[item.key]}
									</Link>
								))}
							</div>
						</div>
						<div className="row text-center py-4">
							<span className="fs-6 text-white-keep">© {new Date().getFullYear()} {t.footer.rights} <span><Link href="/#" className="text-primary-1">Josh D. Rubio</Link></span>
							</span></div>
					</div>
					<div className="position-absolute top-0 start-0 w-100 h-100 z-0" data-background="/assets/imgs/footer-1/background.png" />
				</div>
			</footer>
		</>
	)
}
