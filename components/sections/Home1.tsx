'use client'
import { useLayoutEffect, useRef } from "react"
import Link from "@/components/elements/LocaleLink"
import gsap from "gsap"

import type { Dictionary } from "@/i18n/dictionaries"

export default function Home1({ t }: { t: Dictionary["home"]["hero"] }) {
	const containerRef = useRef(null)

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

			tl.from(".animate-text", {
				y: 30,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				delay: 0.2
			})

		}, containerRef)

		return () => ctx.revert()
	}, [])

	return (
		<>
			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3" ref={containerRef}>
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<span className="text-dark animate-text d-block">{t.greeting}</span>
							<h1 className="ds-2 mb-3 animate-text">{t.title} <span className="text-primary-1">{t.titleAccent}</span></h1>
							<p className="text-300 mb-6 animate-text">{t.body}</p>

							<div className="animate-text d-flex align-items-center mb-6">
								<Link href="https://drive.google.com/file/d/1J-FkOhU1cP-_04kxy6oPREKI4pbpieBq/view?usp=sharing" className="btn btn-gradient me-2" target="_blank">
									{t.cv}
									<i className="ri-download-line ms-2" />
								</Link>
								<Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
									<span>{t.connect}</span>
									<i className="ri-arrow-right-line ms-2" />
								</Link>
							</div>

							<p className="text-400 mb-3 animate-text">{t.technologies}</p>
							<div className="d-flex gap-3 flex-wrap">
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-1.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-2.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-3.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-4.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
									<img src="/assets/imgs/hero/hero-1/brand-5.png" alt="brand" />
								</div>
								<div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
									<img src="/assets/imgs/hero/hero-1/brand-6.png" alt="brand" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="man" />
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="/assets/imgs/hero/hero-1/background.png" />
			</section>
		</>
	)
}
