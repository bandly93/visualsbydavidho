import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Client } from 'pg';
import { handleRender } from './render.js'
import db from './postgres.js';

const app = express();
const port = 3000;
const client = new Client();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(morgan('dev'));

app.use(handleRender);

app.listen(port, () => {
  console.log(`Server is listening on port : ${port}`);
});

