import React,{Component} from 'react';
import { connect } from 'react-redux';
import { sendData,getData } from '../redux/fetchThunk.js';
import { updateFolder,getAllFolders,updatePhotoBatch,updatePage,addPhotoToDelete } from '../redux/galleryModule.js';
import styles from '../css/Gallery.css';

class Gallery extends Component{	
	componentDidMount(){
		const { getData,getAllFolders,sendData } = this.props;	
		getData('/postgres',getAllFolders);
	}

	handleFolderFetch = (e) => {
		const { type } = e.currentTarget;
		const { sendData,updatePhotoBatch,updateFolder } = this.props;
		const { currentFolder } = this.props.gallery;
		//prevent fetching the same folder
		if (type !== currentFolder){
			updateFolder({currentFolder:type});
			updatePhotoBatch({currentPhotos:[]});
			this.handlePageFetch({type});
		}
	}

	folders = () => {
		const { allFolders } = this.props.gallery;	
		if(allFolders.length > 0){
			return <ul>
				{
					allFolders.map((folder,i) => (
						<li
							type = {folder}	
							onClick = {this.handleFolderFetch}
							key = {i}> 
							{folder} 
						</li>)
					)
				}
			</ul>
		}
	}
	
	handlePageFetch = ({value,type}) => {
		const { sendData,updatePhotoBatch,updatePage } = this.props;
		const { currentPage,batchSize,currentFolder } = this.props.gallery;
		
		if(value){
			updatePage({currentPage:value});
		}
		
		let dataPacket = {
			currentFolder : type ? type : currentFolder,
			currentPage : value ? value : currentPage, 
			batchSize,
		}

		if(value !== currentPage){		
			sendData('/postgres','POST',dataPacket,updatePhotoBatch);
		}
	}
	
	pagination = () => {
		const { tableCount,batchSize,currentPhotos } = this.props.gallery;
		const { updatePage } = this.props;
		if(tableCount&&currentPhotos) {
			let numOfPages = tableCount / batchSize;
			numOfPages = Math.ceil(numOfPages);
			return <ul>
				{
					[...Array(numOfPages).keys()].map(i=>{
						return <li 
							key = {i+1}
							value = {i+1}
							onClick = {(e)=>this.handlePageFetch({value:e.currentTarget.value})}> 
								{i+1} 
						</li>
					})
				}
			</ul>
		}
	}
	
	handleDelete = () => {
		const { currentFolder,filesToDelete } = this.props.gallery;
		const { sendData,updatePhotoBatch } = this.props;
		let data = {filesToDelete,currentFolder}
		sendData('/postgres','DELETE',data,updatePhotoBatch);
	}
	
	photos = () => {
		const { currentPhotos,currentFolder } = this.props.gallery;
		const { addPhotoToDelete } = this.props;
		if(currentPhotos){	
			return currentPhotos.map(photo => <img
				key = {photo.id}
				alt = {photo.name}
				onClick = {(e) => addPhotoToDelete(e.currentTarget.alt)}
				src = {require('../assets/' + currentFolder + '/' + photo.name)}	
			/>)
		}else{
			return <p> Click on a folder to see images!</p>
		}
	}
	
	render(){
		return<div className = 'gallery'>
			<p>Welcome to the gallery page!</p>
			<div className = 'folder'>{this.folders()}</div>
			<div className = 'photos'>{this.photos()}</div>
			<div className = 'pagination'>{this.pagination()}</div>
			<button onClick = {this.handleDelete}> DELETE </button>
		</div>
	}
}

const mapStateToProps = state => ({
	view : state.view,
	gallery : state.gallery,
})

const mapDispatchToProps = {
	sendData,
	getData,
	updateFolder,
	getAllFolders,
	updatePhotoBatch,
	updatePage,
	addPhotoToDelete,
}

export default{
	component: connect(mapStateToProps,mapDispatchToProps)(Gallery)
}
