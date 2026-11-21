import { Text } from "@/components/atoms/Text"

export interface CheckboxFieldProps {
	checked: boolean
	onChange: (checked: boolean) => void
	label: string
}

export function CheckboxField({ checked, onChange, label }: CheckboxFieldProps) {
	return (
		<label className="flex cursor-pointer items-start gap-3">
			<input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} className="mt-1 size-4 accent-accent" />
			<Text as="span" size="small">
				{label}
			</Text>
		</label>
	)
}
