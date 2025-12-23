'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

import { projects } from "@/data/projects"

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
					{projects.map((project) => (
						<div key={project.id} className={`filter-item col-lg-6 col-12 ${project.categories.join(" ")}`}>
							<div className="project-item rounded-4 overflow-hidden position-relative p-md-4 p-3 bg-white">
								<Link href={`/projects/${project.slug}`}>
									<img className="rounded-3 w-100 zoom-img" src={project.image} alt={project.title} />
								</Link>
								<div className="d-flex align-items-center mt-4">
									<Link href={`/projects/${project.slug}`} className="project-card-content">
										<h3 className="fw-semibold">{project.title}</h3>
										<p>{project.subtitle}</p>
									</Link>
									<Link href={`/projects/${project.slug}`} className="project-card-icon icon-shape ms-auto icon-md rounded-circle">
										<i className="ri-arrow-right-up-line" />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div >
		</>
	)
}
