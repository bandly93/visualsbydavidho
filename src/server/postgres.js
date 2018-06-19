import { Client,Pool } from 'pg';
import { DB_NAME,DB_USERNAME,DB_PASSWORD } from '../../config.json';

let config = {
	user : DB_USERNAME,
	database : DB_NAME,
	password : DB_PASSWORD,
	host : 'localhost',
	port :'5432',
}

let client = new Client(config);
let pool = new Pool(config);

//one query most optimal
export const clientQuery = (query) => {
	client.connect()	
	client.query(query, (err,res) => {
		console.log(err? err.stack : res.rows[0])
		client.end()
	})
}

//multiple query in one request
export const poolQuery = (query) => {
	pool.query(query,(err,res) => {
		console.log(err? err.stack : res.rows[0])
		pool.end()
	})
}

module.exports = {
	clientQuery,
	poolQuery,
}
