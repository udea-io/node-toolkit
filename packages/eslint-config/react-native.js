module.exports = {
	extends: [
		'./index',
		'./react',
		'@react-native-community',
		'plugin:react-native/all',
		'plugin:prettier/recommended',
	],

	env: {
		'react-native/react-native': true,
		browser: true,
		node: true,
	},

	settings: {
		react: {
			version: 'detect',
		},
	},

	rules: {
		'react-native/no-raw-text': 0, // Avoid false positive, wait for fix
		'react-native/sort-styles': 0,
	},
};
