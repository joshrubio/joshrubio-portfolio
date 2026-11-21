import { Input, Textarea } from "@/components/atoms/Input"
import { Label } from "@/components/atoms/Label"
import { Stack } from "@/components/atoms/Stack"

export interface FieldProps {
	name: string
	label: string
	placeholder: string
	type?: "text" | "email" | "tel"
	multiline?: boolean
}

export function Field({ name, label, placeholder, type = "text", multiline = false }: FieldProps) {
	return (
		<Stack gap="xs">
			<Label htmlFor={name}>
				{label} <span className="text-accent">*</span>
			</Label>
			{multiline ? <Textarea id={name} name={name} placeholder={placeholder} required /> : <Input id={name} name={name} type={type} placeholder={placeholder} required />}
		</Stack>
	)
}
