import express from 'express';
const pgRouter = express.Router();
import { clientQuery, poolQuery } from '../postgres.js';

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
