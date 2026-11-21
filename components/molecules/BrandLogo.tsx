import Image from "next/image"

import type { Logo } from "@/data/site"

export interface BrandLogoProps {
	logo: Logo
}

export function BrandLogo({ logo }: BrandLogoProps) {
	return <Image src={logo.src} width={147} height={83} alt={logo.name} className="h-14 w-auto max-w-none brightness-0 opacity-80" />
}
