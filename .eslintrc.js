module.exports = {
  "extends": [
    "prettier/vue",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
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
}
