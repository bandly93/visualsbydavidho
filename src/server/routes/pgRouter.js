const express = require('express');
const pgRouter = express.Router();
import fs from 'fs-extra';
import { queryFunc } from '../postgres.js';
import { 
	selectAllFrom, 
	selectColFrom, 
	insertInto,
	selectRowFrom,
	addMaster,
	deleteMaster,
	selectFromMaster,
	deleteFromTable,
} from '../sqlQueries.js';
import { sequelize,models,createModel } from '../database.js';
import multer from 'multer';
let relPath = './src/shared/assets/';

const storage = multer.diskStorage({
	destination:(req,file,cb) => {
		let path = file.originalname.split('---')[0];
		let folderPath = relPath+path;

		if(!checkIfFolderExist(folderPath)){
			createFolder(folderPath)
		}
		cb(null,folderPath)
	},
	filename: (req,file,cb) => {
		let name = file.originalname.split('---')[1];
		cb(null,Date.now()+'-'+name);
	},
})

const upload = multer({storage});

pgRouter.route('/')

.get((req,res) => {		
	let folders = fs.readdirSync(relPath).slice(1);
	res.json({allFolders:folders});
})

.post(upload.array('image'),async(req,res) => {
	const {currentFolder,currentPage,batchSize} = req.body;
	//get photos from folder logic here.
	if(currentFolder){
		try { 
			let batch = await getPhotos(req)
			let size = await sequelize.query(selectFromMaster(currentFolder))
			res.json({currentPhotos:batch[0],tableCount:size[0][0].tableCount});
		}
		catch(error){
			console.log(error);
		}
	}else{
		//photo creation logic here.
		let files = req.files;
		let path = files[0].originalname.split('---')[0];
		if(!checkIfModelExist(path)){
			try {
				let model = await createModel(path).sync({force:false})	
				let master = await sequelize.models['Master'].create({tableName:path,tableCount:0})
				files.map(photo => savePathToDatabase(path,photo))
			}
			catch(err){
				console.log(err)
			}
		}else{
			files.map(photo => savePathToDatabase(path,photo))
		}
	}
})

.delete((req,res) => {
	const { currentFolder,filesToDelete } = req.body;
	// 3 steps;
	//remove photo from storage system.
	//remove photo name from database/
	//update master table.

	filesToDelete.map(photo => {
		fs.unlink(relPath+'/'+currentFolder+'/'+photo,(res,err)=>{
			if(err){
				console.log(err);
			}else{
				console.log('Successfully delete from from storage system');
				sequelize.query(deleteFromTable(cleanseString(currentFolder),photo))
			}
		})	
	})
	sequelize.query(deleteMaster(filesToDelete.length,currentFolder))
})


// a function that should return whether a folder exist or not.
const checkIfFolderExist = (folderPath) => {
	return fs.existsSync(folderPath);
}

//a function that should return whether a model exist or not.
const checkIfModelExist = (model) => {
	return sequelize.models.hasOwnProperty(model);
}

//a function that should accept a folderPath and create that folder in the system.
const createFolder = (folderPath) => {
	fs.mkdir(folderPath,(err) => {
		if(err){
			console.log(err)
		}else{
			console.log(`The folder ${folderPath} has been created`);
		}
	})
}

//a function that should accept a modelName and photoName then save that photoName to the database.
const savePathToDatabase = async (modelName,photo) => {
	let name = photo.filename
	try{
		let action = await sequelize.models[modelName].create({name,path:modelName})
		let action2 = await sequelize.query(addMaster(1,modelName))
	}
	catch(err){
		console.log(err)
	}
}

//a function that accepts a folderName and create a model with that name;
const cleanseString = (string) => {
	let length = string.length-1;
	if(string[length] === 's'){
		return string
	}else{
		return string+'s'
	}
}

const getPhotos = (req) => {
	const {currentPage,currentFolder,batchSize} = req.body
	let folder = cleanseString(currentFolder);	
	let offset = currentPage * batchSize - batchSize;
	return sequelize.query(selectRowFrom(folder,batchSize,offset,(err,res)=>{
		if(err){
			console.error(err,'from error')
		}else{
			console.log(res);
		}
	}))
}

module.exports = pgRouter;
