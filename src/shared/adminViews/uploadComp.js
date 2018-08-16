// import React,{Component,Fragment} from 'react';
// import Dropzone from 'react-dropzone';
// import { sendData,sendFile } from '../redux/fetchThunk.js';
// import { connect } from 'react-redux';
// import { updateView } from '../redux/viewModule.js';
// import { uploadFolder, uploadFiles,toggleIsCompressing } from '../redux/uploadModule.js';
// import '../css/Upload.css';
// import ImageCompressor from 'image-compressor.js';

// class UploadBox extends Component{

// 	onDrop = (acceptedFiles) => {
// 		const { uploadFiles,toggleIsCompressing} = this.props;
// 		uploadFiles(acceptedFiles)
// 	}
	
// 	sendFiles = (e) => {
// 		e.preventDefault();
// 		const { files,folder } = this.props.upload;
// 		const { uploadFiles,sendData,uploadFolder } = this.props;
// 		if(folder !== '' && files){
// 			this.constructPhotoArray(files);
// 		}else{
// 			//create redux action to show error
// 			console.log('please fill out the form');
// 		}
// 	}

// 	constructPhotoArray =  (photos) => {
// 		const { sendFile} = this.props;
// 		const { folder } = this.props.upload;
// 		let formData = new FormData();	
// 		photos.map(photo => {	
// 			let string = `${folder}---${photo.name}`;	
// 			formData.append('image',photo,string);
			
// 			/*
// 			let transformedPhoto = new ImageCompressor(photo,{
// 				quality:.5,
// 				maxWidth:3600,
// 				maxHeight:2250,
// 				minWidth:1600,
// 				minHeight:900,
// 				success(result){
// 					let string = `${folder}.${result.name}`;	
// 					formData.append('image',result,string);
// 				},
// 				error(e){
// 					console.log(e.message);
// 				}
// 			})
// 			*/
// 		})	
// 		sendFile('/postgres','POST',formData);
// 	}
	
// 	onFormChange = (e) => {
// 		this.props.uploadFolder({folder:e.currentTarget.value})
// 	}

// 	render(){
// 		const { files,folder,isCompressing } = this.props.upload;
// 		return<div className = 'upload'>
// 			<div className = 'dropzone'>
// 				<Dropzone onDrop = {(acceptedFiles) => this.onDrop(acceptedFiles)}>
// 					<p> Drop your files in here! </p>
// 				</Dropzone>	
// 				<form onSubmit = {this.sendFiles}>
// 					<input 
// 						type = 'text' 
// 						name = 'folder'
// 						value = {folder}
// 						placeholder = 'add folder'  
// 						onChange = {this.onFormChange}/>
// 					<input type = 'submit'/>
// 				</form>
// 				{files.length > 0 ? <p> {files.length} photos to be uploaded! </p> : null}
// 			</div>
// 		</div>
// 	}
// }

// const mapStateToProps = (state) => ({
// 	view : state.view,
// 	upload : state.upload,
// })

// const mapDispatchToProps = {
// 	sendFile,
// 	sendData,
// 	updateView,
// 	uploadFolder,
// 	uploadFiles,
// 	toggleIsCompressing,
// }

// export default {
// 	component:connect(mapStateToProps,mapDispatchToProps)(UploadBox)
// }
