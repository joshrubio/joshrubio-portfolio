import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

export function Label({ className, ...props }: ComponentPropsWithoutRef<"label">) {
	return <label className={cn("font-mono text-label uppercase text-ink", className)} {...props} />
}
