import { Sequelize } from 'sequelize';
import { DB_NAME,DB_USERNAME,DB_PASSWORD } from '../../config.json';

//sequelize config
export const sequelize = new Sequelize(
	DB_NAME,DB_USERNAME,DB_PASSWORD,{
		host : 'localhost',
		post : 5432,
		dialect : 'postgres',
		operatorAliases : Sequelize.Op,
		logging : false,
	}
);
//models
export const Photo = sequelize.define('Photo',{
	name : Sequelize.STRING,
	path : Sequelize.STRING,
});

export const Example = sequelize.define('Example',{
	name : Sequelize.STRING,
	path : Sequelize.STRING,
});

export const Testing = sequelize.define('Testing',{
	name : Sequelize.STRING,
});

//object that holds all models
export const models = {
	Photo,
	Example,
	Testing,
}

module.exports = {
	sequelize,
	Sequelize,
	models,
}

