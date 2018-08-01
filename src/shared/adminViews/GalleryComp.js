import React,{Component} from 'react';
import { connect } from 'react-redux';
import { sendData,getData } from '../redux/fetchThunk.js';
import { updateFolder,getAllFolders,updatePhotoBatch,updatePage } from '../redux/galleryModule.js';
import styles from '../css/Gallery.css';

class Gallery extends Component{
	
	componentDidMount(){
		const { getData,getAllFolders } = this.props;	
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
		const { sendData,updatePhotoBatch } = this.props;
		const { currentPage,batchSize,currentFolder } = this.props.gallery;
		
		let dataPacket = {
			currentFolder:type?type:currentFolder,
			currentPage:value?value:currentPage,
			batchSize,
		}
		sendData('/postgres','POST',dataPacket,updatePhotoBatch);
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

	photos = () => {
		const { currentPhotos,currentFolder } = this.props.gallery;
		if(currentPhotos){	
			return currentPhotos.map(photo => <img
				key = {photo.id}
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
}

export default{
	component: connect(mapStateToProps,mapDispatchToProps)(Gallery)
}
