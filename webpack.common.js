const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

//A common webpack file that all other webpack share.
module.exports = {
	mode :'development',
	output : {
		filename: 'bundle.js',
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
						options:{ 
							babelrc : false,
							presets : ['react','env','stage-3'],
							plugins : ['transform-class-properties']
						}
					},
				],	
			},
			{
				test: /\.css$/, 
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					] 
			},
			{
				test: /\.(jpg|png|gif|svg|jpeg|JPG)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[name].[ext]',		
						},
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name]-styles.css",
			chunkFilename : "[id].css",
		}),
	],
	stats: {
		entrypoints: true,
		children: true
	}
}
