var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + '/app/index.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		],
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader']
			}
		]
	},
	output: {
		filename: 'app.js',
		path: __dirname + '/build'
	},
	devServer: {
		hot: true
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			disable: true,
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};