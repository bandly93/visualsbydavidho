const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path from 'path';
const devMode = process.env.NODE_ENV !== 'production';


//A common webpack file that all other webpack share.
module.exports = {
	output : {
		filename : '[name]-bundle.js',
		path : path.resolve(__dirname,'dist'),
	},
	module : {
		rules : [
			{
				test : /\.(js|jsx)?$/,
				exclude : /node_modules/,
				use : [
					{ 
						loader : 'babel-loader',
					},
				],	
			},
			{
				test : /\.css$/,
				use : [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test : /\.(jpg|png|gif|svg)$/,
				use : [
					loader : 'file-loader',
					options : {
						name : 'images/[name].[ext]',		
					},
				],
			},
		],
	},
	plugins : [
		new MiniCssExtractPlugin({
			filename : devMode ? '[name].css' : '[name].[hash].css',
			chunkFilename : devMode ? '[id].css' : '[id].[hash].css',
		}),
	],
}
