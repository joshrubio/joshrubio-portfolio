import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

const composeOnlyFiles = ["app/(site)/**/*.{ts,tsx}", "components/organisms/**/*.{ts,tsx}"]

export default defineConfig([
	...nextVitals,
	...nextTypescript,
	globalIgnores([".next/**", "out/**", "node_modules/**", "next-env.d.ts"]),
	{
		rules: {
			"react/no-unescaped-entities": "off",
			"@next/next/no-img-element": "off",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
			"react/forbid-dom-props": ["error", { forbid: ["style"] }],
			"react/forbid-component-props": ["error", { forbid: ["style"] }],
		},
	},
	{
		files: composeOnlyFiles,
		ignores: ["app/(site)/**/layout.tsx"],
		rules: {
			"no-restricted-syntax": [
				"error",
				{
					selector: "JSXAttribute[name.name='className']",
					message: "Organisms and pages compose atoms and molecules through typed props. Styling lives in atoms and molecules.",
				},
			],
		},
	},
])
