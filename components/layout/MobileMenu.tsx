'use client'
import Link from "@/components/elements/LocaleLink"
import PerfectScrollbar from 'react-perfect-scrollbar'

import { useLocale } from "@/i18n/LocaleProvider"

const items = [
	{ key: "home", href: "/" },
	{ key: "services", href: "/services" },
	{ key: "portfolio", href: "/work" },
	{ key: "pricing", href: "/pricing" },
	{ key: "blog", href: "/blog-list" },
	{ key: "contact", href: "/#contact" },
] as const

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const { t } = useLocale()
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="/assets/imgs/footer-1/logo.svg" alt="Josh D. Rubio" />
							<span className="fs-4 ms-2 text-dark">Josh D. Rubio</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										{items.map((item, i) => (
											<li key={item.key} className="nav-item">
												<Link className={i === 0 ? "nav-link active" : "nav-link"} href={item.href}>{t.nav[item.key]}</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}
