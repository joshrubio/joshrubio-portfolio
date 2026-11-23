import type { ReactNode } from "react"

import { OrbitSystem } from "@/components/molecules/OrbitSystem"

export interface HeroStageProps {
	photo: ReactNode
	children: ReactNode
}

export function HeroStage({ photo, children }: HeroStageProps) {
	return (
		<div className="relative isolate grid gap-10 pb-12 pt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:py-28 xl:grid-cols-[minmax(0,1fr)_minmax(0,24rem)]">
			<div className="relative z-10">{children}</div>
			<div className="relative z-0 mx-auto w-full max-w-xs lg:absolute lg:-right-4 lg:top-8 lg:mx-0 lg:w-[26rem] lg:max-w-none xl:w-[36rem]"><OrbitSystem /><div className="relative z-[1]">{photo}</div></div>
		</div>
	)
}
