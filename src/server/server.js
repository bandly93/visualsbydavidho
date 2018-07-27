import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { handleRender } from './render.js'
import expressStaticGzip from 'express-static-gzip';
import fs from 'fs';
import { syncModelsOnLoad } from './database.js';
//import webpack from 'webpack';

//import serverConfig from '../../webpack.server.js';
//let compiler = webpack(serverConfig);

const app = express();
const port = 3000;



/*
app.use(require('webpack-dev-middleware')(compiler,{
	HotModuleReplacement : 'true',
	HotModuleReplacementEndPoint :'/dist/__webpack_hmr'
}))


app.use(require('webpack-hot-middleware')(compiler,{
	path:'/dist/__webpack_hmr',
	heartbeat : 10*1000,	
}));

*/


//sync models to database
syncModelsOnLoad();

app.use(bodyParser.urlencoded({
	extended:true,
	limit:'50mb',
	parameterLimit:5000000,
}));

app.use(bodyParser.json({limit:'50mb'}));
app.use(morgan('dev'));
app.use(expressStaticGzip('dist',{enableBrotli:true}));

//client api routes

const pgRouter = require('./routes/pgRouter.js');

app.use('/postgres',pgRouter);


app.use(handleRender);



app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});

