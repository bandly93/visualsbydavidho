const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
//a webpack for client side development
module.exports = merge(common,{
	entry : {
		client : ['./src/client/index.js'],
	},
	devtool : 'inline-source-map',
	devServer : {
		contentBase : 'dist',
		publicPath : '/',
		port : 8080,
		overlay:true,
		inline:true,
		proxy :{
			'**':{
				target: 'http://[::1]:3000',
				secure:false,
				changeOrigin:true
			}
		} 	
	},
});

