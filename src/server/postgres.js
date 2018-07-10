import { models,sequelize } from './database.js';






export const queryFunc = async (query,req,res) => {
	let data = await sequelize.query(query);
}

//one query most optimal
export const clientQuery = (query,req,res) => {
	client.connect()	
	client.query(query, (error,data) => {
		if(err){
			console.error(err.stack);
		}else{
			res.json(data.rows[0])
		}
		client.end()
	})
}

//multiple query in one request
export const poolQuery = (query,req,res) => {
	pool.query(query,(err,data) => {
		console.log(err? err.stack : data.rows[0])
		pool.end()
	})
}

module.exports = {
	queryFunc,
	clientQuery,
	poolQuery,
}
