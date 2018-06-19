import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { handleRender } from './render.js'
const pgRouter = require('./routes/pgRouter.js');

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(morgan('dev'));

app.use(handleRender);

//client api routes
app.use('/postgres',pgRouter);

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});

