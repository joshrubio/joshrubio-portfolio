import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/cn"

const fieldStyles =
	"w-full border-2 border-ink bg-white px-4 py-3 font-body text-body text-ink transition-transform duration-snap ease-snap placeholder:text-ink-soft focus:-translate-x-0.5 focus:-translate-y-0.5 focus:shadow-sticker-accent focus:outline-none"

export function Input({ className, ...props }: ComponentPropsWithoutRef<"input">) {
	return <input className={cn(fieldStyles, className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentPropsWithoutRef<"textarea">) {
	return <textarea className={cn(fieldStyles, "min-h-36 resize-y", className)} {...props} />
}
