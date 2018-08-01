const express = require('express');
const pgRouter = express.Router();
import fs from 'fs';
import { queryFunc } from '../postgres.js';
import { selectAllFrom, selectColFrom, insertInto } from '../sqlQueries.js';
import { sequelize,models,createModel } from '../database.js';

pgRouter.route('/')
.get((req,res) => {
})

.post((req,res) => {
	const {files,path} = req.body;	
	if(checkPathExist(path)){
		convertBase64ToImg(files,path);
	}else{
		writeFolderAndModel(files,path)
	}
})

let relPath = './src/shared/assets';

const checkPathExist = path => {
	return fs.existsSync(relPath+'/'+path) && sequelize.models.hasOwnProperty(path);
}

const writeFolderAndModel = (files,path) => {
	fs.mkdir(relPath+'/'+path,(err)=>{
		if(err){
			console.log(err);
		}else{
			console.log(`The folder ${path} has been created`);
		}
	})
	createModel(path).sync().then(()=> {
		console.log('Model has been created');
		convertBase64ToImg(files,path)				
	}).catch(err => {
		console.log(err);
	})
}	
//handle model and savePathTo DB

const convertBase64ToImg = (files,path) => {
	files.map(file => {
		let data = file.data.replace(/^data:image\/\w+;base64,/,'');
		let buf = new Buffer(data,'base64');
		let newPath = relPath+'/'+path+'/'+file.name;
		//creates the image and save to folder
		fs.writeFile(newPath,buf,(error) => {
			console.log('------------------------------------------');
			if(error){
				console.error('Error from adding photos')
			}else{
				console.log('Successfully added '+file.name)
				//console.log(`The model ${path} does exist.`);
				savePathToDB(sequelize.models[path],file.name,path);	
				console.log('------------------------------------------');
			}
		})
	})
}

const savePathToDB = (model,name,path) => {
	console.log('Attemping to save path to database');
	sequelize.models[path].create({name,path})
	.then(()=> {
		console.log('Successfully saved '+name+' to database');
	})
	.catch((err) => {
		console.error('Error saving path to db function savePathToDB',err)
	})
}

module.exports = pgRouter;
