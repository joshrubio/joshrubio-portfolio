'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter() {
	// Isotope
	const isotope = useRef<Isotope | null>(null)
	const [filterKey, setFilterKey] = useState<string>("*")

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				masonry: {
					columnWidth: ".filter-item",
				},
			})
		}, 1000)

		// Cleanup on unmount
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` })
		}
	}, [filterKey])

	const handleFilterKeyChange = useCallback((key: string) => () => {
		setFilterKey(key)
	}, [])

	const activeBtn = (value: string) => (value === filterKey ? "active btn btn-md btn-filter mb-2 me-2 text-uppercase" : "btn btn-md btn-filter mb-2 me-2 text-uppercase")

	return (
		<>

			<div className="container">
				<div className="text-start">
					<div className="button-group filter-button-group filter-menu-active">
						<button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Projects</button>
						<button className={activeBtn("ecommerce")} onClick={handleFilterKeyChange("ecommerce")}>Ecommerce</button>
						<button className={activeBtn("elearning")} onClick={handleFilterKeyChange("elearning")}>E-learning</button>
						<button className={activeBtn("webapp")} onClick={handleFilterKeyChange("webapp")}>Web App</button>
						<button className={activeBtn("wordpress")} onClick={handleFilterKeyChange("wordpress")}>WordPress</button>
					</div>
				</div>
				<div className="row masonry-active justify-content-between mt-6">
					<div className="grid-sizer" />
					<div className="filter-item col-lg-6 col-12 webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/teller">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-teller.png" alt="Teller - AI Writing Assistant" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/teller" className="project-card-content">
									<h3 className="fw-semibold">Teller</h3>
									<p>AI Writing Assistant (UX/UI)</p>
								</Link>
								<Link href="/projects/teller" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/moods">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-moods.png" alt="MOODS - Social Music Platform" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/moods" className="project-card-content">
									<h3 className="fw-semibold">MOODS</h3>
									<p>Social Music Platform (UX/UI)</p>
								</Link>
								<Link href="/projects/moods" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/take-away">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-takeaway.png" alt="Take Away - Food Delivery App" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/take-away" className="project-card-content">
									<h3 className="fw-semibold">Take Away</h3>
									<p>Food Delivery App (UX/UI)</p>
								</Link>
								<Link href="/projects/take-away" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 ecommerce webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/the-sower-store">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-thesower.png" alt="The Sower Store" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/the-sower-store" className="project-card-content">
									<h3 className="fw-semibold">The Sower Store</h3>
									<p>MERN Ecommerce Platform</p>
								</Link>
								<Link href="/projects/the-sower-store" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 elearning webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/wissen">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-wissen.png" alt="Wissen" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/wissen" className="project-card-content">
									<h3 className="fw-semibold">Wissen</h3>
									<p>E-learning Platform</p>
								</Link>
								<Link href="/projects/wissen" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>

					<div className="filter-item col-lg-6 col-12 webapp">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/thinkboard">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-background.png" alt="Thinkboard" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/thinkboard" className="project-card-content">
									<h3 className="fw-semibold">Thinkboard</h3>
									<p>MERN Notes App</p>
								</Link>
								<Link href="/projects/thinkboard" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 wordpress">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/lifepoint-church">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/projects/lifepoint.png" alt="Lifepoint Church" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/lifepoint-church" className="project-card-content">
									<h3 className="fw-semibold">Lifepoint Church</h3>
									<p>WordPress Website</p>
								</Link>
								<Link href="/projects/lifepoint-church" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
					<div className="filter-item col-lg-6 col-12 wordpress">
						<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
							<Link href="/projects/carmen-zambrano">
								<img className="rounded-3 w-100 zoom-img" src="/assets/imgs/work/img-carmen.png" alt="Carmen Zambrano Portfolio" />
							</Link>
							<div className="d-flex align-items-center mt-4">
								<Link href="/projects/carmen-zambrano" className="project-card-content">
									<h3 className="fw-semibold">Carmen Zambrano</h3>
									<p>Journalist Portfolio (WordPress)</p>
								</Link>
								<Link href="/projects/carmen-zambrano" className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
									<i className="ri-arrow-right-up-line" />
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
