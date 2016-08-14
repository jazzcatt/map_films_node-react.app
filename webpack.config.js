var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './assets/main.js',
	watch: true,
	output: {
		path: __dirname+'/public/dist', 
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},

};