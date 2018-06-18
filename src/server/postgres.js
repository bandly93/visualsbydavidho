import { Client } from 'pg';
import { DB_NAME,DB_USERNAME,DB_PASSWORD } from '../../config.json';

let config = {
	user : DB_USERNAME,
	database : DB_NAME,
	password : DB_PASSWORD,
	host : 'localhost',
	port :'5432',
}

let client = new Client(config);

client.connect()
client.query('SELECT * FROM "testing"', (err,res) => {
	if(err) throw err
	console.log(res.rows);
	client.end();
});


/*
	.then(() => console.log('connected'))
	.catch(e => console.error('connection error',err.stack))
*/
