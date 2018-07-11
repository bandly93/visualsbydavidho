const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

//a webpack for server development
module.exports = merge(common,{
	entry : {
		server : ['babel-polyfill', './src/server/server.js'],
	},
	target : 'node',
	externals : [nodeExternals()],
});
