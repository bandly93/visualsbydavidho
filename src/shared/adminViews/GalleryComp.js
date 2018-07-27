import React,{Component} from 'react';
import { connect } from 'react-redux';
import { sendData,getData } from '../redux/fetchThunk.js';
import { updateFolder,getAllFolders,currentPhotos } from '../redux/galleryModule.js';
import styles from '../css/Gallery.css';
class Gallery extends Component{
	
	componentDidMount(){
		const { getData,getAllFolders } = this.props;	
		getData('/postgres',getAllFolders);	
	}

	handleCurrentFolder = (e) => {
		const { type } = e.currentTarget;
		const { sendData,currentPhotos,updateFolder } = this.props;
		const { currentFolder } = this.props.gallery;
		//prevent fetching the same folder
		if (type !== currentFolder){
			updateFolder({currentFolder:type,currentPhotos:[]});
			sendData('/postgres','POST',{currentFolder:type},currentPhotos);
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
							onClick = {this.handleCurrentFolder}
							key = {i}> 
							{folder} 
						</li>)
					)
				}
			</ul>
		}
	}

	photos = () => {
		const { currentPhotos, currentFolder } = this.props.gallery;
		if(currentPhotos){	
			return currentPhotos.map(photo => <img
				width = '50'
				height = '50'
				key = {photo.id}
				src = {require('../assets/' + currentFolder + '/' + photo.name)}	
			/>)
		}else{
			return <p> Click on a folder to see images!!!!!!!</p>
		}
	}
	
	render(){
		return<div className = 'gallery'>
			<p>Welcome to the gallery page</p>
			<div className = 'folder'>{this.folders()}</div>
			<div className = 'photos'>{this.photos()}</div>
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
	currentPhotos,
}

export default{
	component: connect(mapStateToProps,mapDispatchToProps)(Gallery)
}
