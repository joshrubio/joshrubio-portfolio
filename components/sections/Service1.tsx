import Link from "@/components/elements/LocaleLink"
import type { Dictionary } from "@/i18n/dictionaries"

export default function Service1({ t }: { t: Dictionary["home"]["services"] }) {
	return (
		<>
			<section className="section-service-1 pt-120 pb-120">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-lg-7 me-auto">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">{t.title}</h3>
							<span className="fs-5 fw-medium text-200">{t.subtitle}</span>
						</div>
						<div className="col-lg-auto">
							<Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
								{t.quote}
								<i className="ri-arrow-right-up-line" />
							</Link>
						</div>
					</div>
					<div className="row mt-6 justify-content-between">
						{t.items.map((item, i) => (
							<div key={item.title} className="col-12">
								<div
									className={`single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3${i === t.items.length - 1 ? " border-bottom" : ""}`}
									data-fx={1}
									data-img={`/assets/imgs/services/services-1/img-${i + 1}.png`}
								>
									<div className="service-card-details d-lg-flex align-items-center">
										<h3 className="service-card-title w-lg-50 w-100 mb-0">
											<Link href="/work-single">
												<span className="service-number">{String(i + 1).padStart(2, "0")}.</span>
												{item.title}
											</Link>
										</h3>
										<Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
											<p className="service-card-text my-3">{item.text}</p>
											<div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
												<i className="ri-arrow-right-up-line" />
											</div>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
