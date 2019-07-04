module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: 'airbnb',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	rules: {
		semi: [ 2, 'always', { omitLastInOneLineBlock: true } ]
	}
};
