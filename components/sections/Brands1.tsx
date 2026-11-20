import Marquee from 'react-fast-marquee'

import type { Dictionary } from "@/i18n/dictionaries"


export default function Brands1({ t }: { t: Dictionary["home"]["brands"] }) {
	return (
		<>

			<section className="section-brands-1 section-padding">
				<div className="container">
					<div className="text-center">
						<h2>{t.title}</h2>
						<p className="text-300">
							{t.text}
						</p>
					</div>
				</div>
				<div className="container-fluid">
					{/* Carausel Scroll */}
					<Marquee className="carouselTicker carouselTicker-right mt-5 position-relative z-1" direction="right">
						<ul className="carouselTicker__list">
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-1.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-2.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-3.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-4.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-5.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-6.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-7.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-8.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-9.png" alt="infinia" />
							</li>
							<li className="carouselTicker__item">
								<img src="/assets/imgs/brands/brands-1/logo-10.png" alt="infinia" />
							</li>
						</ul>
					</Marquee>
				</div>
			</section>

		</>
	)
}
