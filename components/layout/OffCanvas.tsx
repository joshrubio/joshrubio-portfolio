'use client'
import Link from "@/components/elements/LocaleLink"

import { useLocale } from "@/i18n/LocaleProvider"

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	const { t } = useLocale()
	return (
		<>
			{/* offCanvas-menu */}
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">{t.offcanvas.title}</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">{t.offcanvas.intro}</p>
						<div className="mb-3">
							<span className="text-400 fs-5">{t.offcanvas.email}</span>
							<p className="mb-0">joshuerubio@gmail.com</p>
						</div>
					</div>
					<div className="contact-list">
						<p className="text-400 fs-5 mb-2">{t.offcanvas.social}</p>
						<div className="d-md-flex d-none gap-3">
							<Link href="https://www.linkedin.com/in/joshuerubio/" target="_blank">
								<i className="ri-linkedin-fill fs-18" />
							</Link>
							<Link href="https://github.com/joshrubio" target="_blank">
								<i className="ri-github-fill fs-18" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
