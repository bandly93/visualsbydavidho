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
	if(!checkPathExist(path)){
		writeFolderAndModel(path)
	}
	convertBase64ToImg(files,path);
})


let relPath = './src/shared/assets';

const checkPathExist = path => {
	return fs.existsSync(relPath+'/'+path) && sequelize.models[path];
}

const writeFolderAndModel = (path) => {
	fs.mkdir(relPath+'/'+path,(err)=>{
		if(err){
			console.log(err);
		}else{
			let model = createModel(path)
			model.sync()		
		}
	})
}	
//handle model and savePathTo DB

const convertBase64ToImg = (files,path) => {
	files.map((file,i) => {
		let data = file.data.replace(/^data:image\/\w+;base64,/,'');
		let buf = new Buffer(data,'base64');
		let newPath = relPath+'/'+path+'/'+file.name;
		//creates the image and save to folder
		fs.writeFile(newPath,buf,(error) => {
			console.log('------------------------------------------');
			if(error){
				console.error('Error from adding photos',error)
			}else{
				console.log('Successfully added '+file.name)
				console.log(`The model ${path} does exist.`);
				console.log('Attemping to save path to database');
				savePathToDB(sequelize.models[path],file.name,path,i);	
				console.log('------------------------------------------');
			}
		})
	})
}

const savePathToDB = (model,name,path,i) => {
	console.log(sequelize.models[path],i,'testing from here');
	sequelize.models[path].create({name,path})
	.then(()=> {
		console.log('Successfully saved item to database');
	})
	.catch((err) => {
		console.error('Error saving path to db function savePathToDB',err)
	})
}

module.exports = pgRouter;
