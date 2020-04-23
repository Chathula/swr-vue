module.exports = {
  "extends": [
    "prettier/vue",
    "prettier/@typescript-eslint",
		"plugin:prettier/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
  ],
  "parserOptions": {
		"ecmaVersion": 8,
		"sourceType": "module",
		"ecmaFeatures": {
			"impliedStrict": true,
			"experimentalObjectRestSpread": true
		},
		"allowImportExportEverywhere": true
	},
  "env": {
		"es6": true,
		"browser": true,
		"node": true,
		"jest": true
	},
	"rules": {
		"func-names": [
			"error",
			"as-needed"
		],
		"no-shadow": "error",
		"prefer-const": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-use-before-define": 0,
		"@typescript-eslint/camelcase": 0,
		"@typescript-eslint/no-var-requires": 0,
		"@typescript-eslint/no-explicit-any": 0
	}
}

