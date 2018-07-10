const nodeExternals = require('webpack-node-externals');
const common = require('./webpack.common.js');
const merge = require('webpack-merge');

//a webpack for server development
module.exports = merge(common,{
	entry : {
		server : ['./src/server/server.js', './src/shared/css/Navbar.css'],
	},
	target : 'node',
	externals : [nodeExternals()],
});
