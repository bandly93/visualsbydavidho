import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { handleRender } from './render.js'
import expressStaticGzip from 'express-static-gzip';
import { syncModelsOnLoad,syncMasterTable } from './database.js';

const app = express();
const port = 3000;

//sync models to database
syncModelsOnLoad();
syncMasterTable();

app.use(bodyParser.urlencoded({
	extended:false,
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

