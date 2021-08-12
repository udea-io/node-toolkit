module.exports = {
	extends: [
		require.resolve('./packages/eslint-config/react-native'),
		require.resolve('./packages/eslint-config/mocha'),
	],
	rules: {
		'import/no-dynamic-require': [0],
		'global-require': [0],
	},
	globals: {
		module: true,
		process: true,
	},
};
