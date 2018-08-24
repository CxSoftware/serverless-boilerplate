const path = require ('path');

module.exports = {
	entry: './handler.js',
	target: 'node',
	resolve: {
		alias: { '@': path.resolve (__dirname, 'dist') }
	},
	output: {
		libraryTarget: 'commonjs',
		path: path.join (__dirname, '.webpack'),
		filename: 'handler.js'
	}
};
