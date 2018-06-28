import { DB_NAME,DB_USERNAME,DB_PASSWORD } from '../../config.json';
import { Sequelize } from 'sequelize';
import { photoModel } from './model.js';

let isProd = !true;

const sequelize = new Sequelize(
	DB_NAME,DB_USERNAME,DB_PASSWORD,{
		host:'localhost',
		port:5432,
		dialect:'postgres',
		operatorAliases:Sequelize.Op,
		logging: isProd? true : false,	
	}
);

sequelize.authenticate()
	.then( async () => {
		console.log('Successfully connected to the database');
		let model = await photoModel(sequelize).sync({force:false})
		model.create({name: 'hello',path :'pathtohell'})
	})	
	.catch((err) => {
		console.log(err, 'Error connecting to the database!');
})

export const queryFunc = async (query,req,res) => {
	
	/*
	try {
		let data = await sequelize.query(query);
		return data;
	}	catch(e) {
		console.log(e,'Error')
	}
	*/
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
