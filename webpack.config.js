var HTMLWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: __dirname + '/app/index.js',
	output: {
		filename: 'app.js',
		path: __dirname + '/build'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					use: ['css-loader', 'sass-loader']
				}))
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	devServer: {
    hot: true,
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
};
