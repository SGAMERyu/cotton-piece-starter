const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
	env: {
		es2021: true,
		browser: true,
		node: true,
	},
	reportUnusedDisableDirectives: true,
	globals: {
		document: "readonly",
		window: "readonly",
		navigator: "readonly",
	},
	extends: [
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
	],
	ignorePatterns: [
		"*.d.ts",
		"dist",
		"package-lock.json",
		"pnpm-lock.yaml",
		"coverage",
	],
	plugins: [
		"@typescript-eslint",
		"prettier",
		"import",
		"promise",
		"unicorn",
		"unused-imports",
	],
	settings: {
		"import/resolver": {
			node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
		},
	},
	overrides: [
		{
			files: ["*.vue"],
			parser: "vue-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
		{
			files: ["*.ts", "*.tsx"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				tsconfigRootDir: process.cwd(),
			},
		},
	],
	rules: {
		// TS
		"@typescript-eslint/ban-ts-comment": [
			"error",
			{ "ts-ignore": "allow-with-description" },
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{ multiline: { delimiter: "none" } },
		],
		"@typescript-eslint/type-annotation-spacing": ["error", {}],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{ prefer: "type-imports", disallowTypeAnnotations: false },
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "interface"],
		"@typescript-eslint/prefer-ts-expect-error": "error",
		"@typescript-eslint/no-require-imports": "error",
		"@typescript-eslint/no-unused-vars": "off",
		// import
		"import/export": "error",
		"import/first": "error",
		"import/no-duplicates": "error",
		"import/no-absolute-path": "error",
		"import/no-named-default": "error",
		"import/no-webpack-loader-syntax": "error",
		'import/no-unresolved': 'off',
		// promise
		"promise/param-names": "error",
	},
});
