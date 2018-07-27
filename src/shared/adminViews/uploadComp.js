import React,{Component,Fragment} from 'react';
import Dropzone from 'react-dropzone';
import { sendData } from '../redux/fetchThunk.js';
import { connect } from 'react-redux';
import { updateView } from '../redux/viewModule.js';
import { uploadFolder, uploadFiles } from '../redux/uploadModule.js';
import '../css/Upload.css';

class UploadBox extends Component{

	onDrop = (acceptedFiles) => {
		this.props.uploadFiles({files:photoArray(acceptedFiles)})
	}

	sendFiles = (e) => {
		e.preventDefault();
		const { files,folder } = this.props.upload;
		const { uploadFiles,sendData } = this.props;
		if(folder !== '' && files){
			sendData('/postgres','POST',{files,path:folder},uploadFiles({folder:'',files:null}))	
		}else{
			//create redux action to show error
			console.log('please fill out the form');
		}
	}
	
	onFormChange = (e) => {
		this.props.uploadFolder({folder:e.currentTarget.value})
	}

	render(){
		const { files } = this.props.upload
		return<div className = 'upload'>
			<div className = 'dropzone'>
				<Dropzone onDrop = {(acceptedFiles) => this.onDrop(acceptedFiles)}>
					<p> Drop your files in here! </p>
				</Dropzone>	
				<form onSubmit = {this.sendFiles}>
					<input 
						type = 'text' 
						name = 'folder'
						value = {this.props.upload.folder}
						placeholder = 'add folder'  
						onChange = {this.onFormChange}/>
					<input type = 'submit'/>	
				</form>
			</div>
		</div>
	}
}

const photoArray = (photos) => {
	let arr = [];
	for (let i = 0; i < photos.length; i++){
		let reader = new FileReader();
		reader.onload = function(event){
			arr.push({name:photos[i].name,data:event.target.result});
		}
		reader.readAsDataURL(photos[i]);
	}
	return arr;
}

const mapStateToProps = (state) => ({
	view : state.view,
	upload : state.upload,
})

const mapDispatchToProps = {
	sendData,
	updateView,
	uploadFolder,
	uploadFiles,
}

export default {
	component:connect(mapStateToProps,mapDispatchToProps)(UploadBox)
}


const photoArrayForm = (photos) => {
	let form = new FormData();	
	photos.map( photo => form.append(photo.name,photo));
	return form;	
}



const constructPhotoArray = (photos) => {
	let photoArray = [];
	for (let i = 0; i < photos.length; i++){
		let reader = new FileReader();
		let transformedPhoto = new ImageCompressor(photos[i],{
			quality:.5,
			maxWidth:3600,
			maxHeight:2250,
			minWidth:1600,
			minHeight:900,
			success(result){
				reader.onload = function(event){
					photoArray.push({name:photos[i].name,data:event.target.result});
				}
				reader.readAsDataURL(result);
			},
			error(e){
				console.log(e.message);
			}
		})
	}
	return photoArray;
}

