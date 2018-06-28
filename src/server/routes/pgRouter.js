const express = require('express');
const pgRouter = express.Router();
import { queryFunc } from '../postgres.js';
import { selectAllFrom, selectColFrom, insertInto } from '../sqlQueries.js';

pgRouter.route('/')
.get((req,res) => {
})

.post(async(req,res) => {
	console.log(queryFunc());
})

.put((req,res) => {
	console.log('hello from put');
})

module.exports = pgRouter;
