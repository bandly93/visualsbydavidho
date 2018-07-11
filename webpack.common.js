const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';

//A common webpack file that all other webpack share.
module.exports = {
	output : {
		filename: '[name]-bundle.js',
		path: path.resolve(__dirname,'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)?$/,
				exclude: /node_modules/,
				use: [
					{ 
						loader: 'babel-loader',
					},
				],	
			},
			{
				test: /\.css$/,
				use: [	
					MiniCssExtractPlugin.loader,
					{ loader : 'css-loader', options : {sourceMap:true}}
				],
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',		
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			// filename: devMode ? '[name].css' : '[name].[hash].css',
			// chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			filename: "[name]-styles.css",
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
}
