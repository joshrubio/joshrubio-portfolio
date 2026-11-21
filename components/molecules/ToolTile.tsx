import Image from "next/image"

import { Text } from "@/components/atoms/Text"
import type { Logo } from "@/data/site"

export interface ToolTileProps {
	logo: Logo
	showName?: boolean
}

export function ToolTile({ logo, showName = false }: ToolTileProps) {
	return (
		<div className="flex flex-col items-center gap-2">
			<div className="flex size-16 items-center justify-center border-2 border-ink bg-white shadow-sticker">
				<Image src={logo.src} width={36} height={36} alt={showName ? "" : logo.name} className="size-9" />
			</div>
			{showName ? (
				<Text as="span" size="label" tone="soft">
					{logo.name}
				</Text>
			) : null}
		</div>
	)
}
