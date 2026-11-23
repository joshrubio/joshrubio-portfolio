import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { Container, type ContainerProps } from "@/components/atoms/Container"

const sectionStyles = cva("relative", {
	variants: {
		tone: {
			paper: "text-ink",
			ink: "bg-paper-dark text-paper",
			accent: "bg-accent text-ink",
		},
		torn: {
			none: "",
			top: "torn-t",
			bottom: "torn-b",
			both: "torn-t torn-b",
		},
		overlap: {
				none: "",
				up: "-mt-6",
			},
			clip: {
			true: "overflow-clip",
			false: "",
		},
		spacing: {
			default: "py-20 md:py-28",
			tight: "py-12 md:py-16",
			none: "",
		},
	},
	defaultVariants: { tone: "paper", torn: "none", spacing: "default", clip: false, overlap: "none" },
})

export interface SectionProps extends VariantProps<typeof sectionStyles> {
	id?: string
	width?: ContainerProps["width"]
	children: ReactNode
}

export function Section({ id, tone, torn, spacing, clip, overlap, width, children }: SectionProps) {
	return (
		<section id={id} className={sectionStyles({ tone, torn, spacing, clip, overlap })}>
			<Container width={width}>{children}</Container>
		</section>
	)
}
