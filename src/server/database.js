import { Sequelize } from 'sequelize';
import { DB_NAME,DB_USERNAME,DB_PASSWORD } from '../../config.json';
import fs from 'fs';
let isProd = true;

export const sequelize = new Sequelize(
	DB_NAME,DB_USERNAME,DB_PASSWORD,{
		host : 'localhost',
		post : 5432,
		dialect : 'postgres',
		operatorAliases : Sequelize.Op,
		logging : false,
	}
);

export const syncModelsOnLoad = () => {
	let path = './src/shared/assets';
	let folders = fs.readdirSync(path).slice(1).map(folder => {
		models[folder] = createModel(folder);
	})
	sequelize.sync({force:false})
	.then(res => {
		console.log('Successfully synced models on load',res.models);
	})
	.catch((err) => {
		console.error('Error from syncing models on load function syncModelsOnLoad', err);
	})
}

export const createModel = (modelName) => {
	return sequelize.define(modelName,{
		name : Sequelize.STRING,
		path : Sequelize.STRING,
	})
} 

export const models = {
};

module.exports = {
	sequelize,
	Sequelize,
	models,
	createModel,
	syncModelsOnLoad,
}

