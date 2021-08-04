module.exports = {
	rules: {
		'prettier/prettier': [
			2,
			{
				printWidth: 100,
				tabWidth: 4,
				useTabs: true,
				semi: true,
				singleQuote: true,
				trailingComma: 'all',
				bracketSpacing: true,
				jsxBracketSameLine: false,
				arrowParens: 'always',
				rangeStart: 0,
				parser: 'babel',
				requirePragma: false,
				insertPragma: false,
				proseWrap: 'preserve',
			},
			{
				usePrettierrc: false,
			},
		],
	},
};
