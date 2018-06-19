import express from 'express';
const pgRouter = express.Router();
import { clientQuery, poolQuery } from '../postgres.js';
import { selectAllFrom, selectColFrom } from '../sqlQueries.js';

pgRouter.route('/')
.post((req,res) => {
	
})

.delete((req,res) => {
})

.put((req,res) => {


})

.get((req,res) => {


})

module.exports = pgRouter;
