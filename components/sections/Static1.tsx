
'use client'
import { projects } from "@/data/projects"
import CountUp from 'react-countup'

import { useLocale } from "@/i18n/LocaleProvider"

const EXPERIENCE_START = new Date(2022, 0, 1)

function yearsSince(start: Date, now = new Date()) {
	let years = now.getFullYear() - start.getFullYear()
	const anniversary = new Date(now.getFullYear(), start.getMonth(), start.getDate())
	if (now < anniversary) years -= 1
	return Math.max(years, 0)
}

export default function Static1() {
	const { t } = useLocale()
	const labels = t.home.stats
	const yearsOfExperience = yearsSince(EXPERIENCE_START)
	const totalProjects = projects.length
	const automationProjects = projects.filter(p => p.categories.includes('automation')).length
	const webApps = projects.filter(p => p.categories.includes('uxui') || p.categories.includes('fullstack')).length
	const wordpressProjects = projects.filter(p => p.categories.includes('wordpress')).length

	return (
		<>
			<div className="section-static-1 position-relative overflow-hidden z-0 py-8 bg-900">
				<div className="container">
					<div className="inner">
						<div className="row align-items-center justify-content-center">
							<div className="col-xl col-lg-4 col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={yearsOfExperience} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">{labels.years[0]}</p>
											<p className="fs-5 mb-0 fw-bold">{labels.years[1]}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={totalProjects} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">{labels.projects[0]}</p>
											<p className="fs-5 mb-0 fw-bold">{labels.projects[1]}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={webApps} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">{labels.web[0]}</p>
											<p className="fs-5 mb-0 fw-bold">{labels.web[1]}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={automationProjects} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">{labels.automation[0]}</p>
											<p className="fs-5 mb-0 fw-bold">{labels.automation[1]}</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xl col-lg-4 col-md-6">
								<div className="counter-item-cover counter-item">
									<div className="content text-center mx-auto d-flex align-items-center">
										<span className="ds-3 count text-primary-1 fw-medium my-0">+<CountUp enableScrollSpy={true} end={wordpressProjects} className="odometer ds-1 text-dark fw-semibold" /></span>
										<div className="text-start ms-2">
											<p className="fs-5 mb-0 text-300">{labels.wordpress[0]}</p>
											<p className="fs-5 mb-0 fw-bold">{labels.wordpress[1]}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
