import React,{Component,Fragment} from 'react';
import Dropzone from 'react-dropzone';
import { sendData } from '../redux/fetchThunk.js';
import { connect } from 'react-redux';
import { updateView } from '../redux/viewModule.js';

class UploadBox extends Component{
	constructor(props){
		super(props);
		this.state = {
			files : []
		}
	}
	
	onDrop = (files) => {
		let newFiles = this.state.files.concat(files);
		this.setState({files:newFiles});
	}	
	
	sendFiles = async (e) => {
		e.preventDefault();
		await this.props.sendData('/postgres','POST',{data:this.state.files})
		await this.setState({files:[]});	
	}

	render(){
		return<Fragment>
			<div className = 'dropzone'>
				<Dropzone onDrop = {this.onDrop}>
					<p> Drop your files in here! </p>
				</Dropzone>
				<h1>Files to be uploaded</h1>
				<ul>
					{
						this.state.files.map(f => <li key = {f.name}> {f.name} - {f.size} bytes</li>)
					}
				</ul>
				<button onClick = {(e)=>this.sendFiles(e)}> Submit Files </button>
			</div>
		</Fragment>
	}
}

const mapStateToProps = (state) => {
	return {
		view : state.view
	}
}

const mapDispatchToProps = {
	sendData,
	updateView,
}

export default connect(mapStateToProps,mapDispatchToProps)(UploadBox);
