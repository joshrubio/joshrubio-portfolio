import type { ReactNode } from "react"

import { Scribble, type ScribbleProps } from "@/components/atoms/Scribble"

export interface ScribbledProps extends Pick<ScribbleProps, "shape" | "tone" | "delay"> {
	children: ReactNode
}

export function Scribbled({ children, shape, tone, delay }: ScribbledProps) {
	return (
		<span className="relative inline-block">
			{children}
			<Scribble shape={shape} tone={tone} delay={delay} />
		</span>
	)
}
