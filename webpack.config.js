const path = require('path')

module.exports = {
	watch: true,
	watchOptions: {
		ignored: [
			/node_modules/,
			/dist/
		]
	},
	entry: './src/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'script.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				include: __dirname + 'src',
				loader: 'babel-loader'
			},
			{
				test: /\.css?/,
				loader: 'css-loader'
			}
		]
	}

}