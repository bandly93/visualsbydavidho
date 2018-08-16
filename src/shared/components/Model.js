import React,{Component} from 'react';
import { connect } from 'react-redux';


class Model extends Component{
		
	

	
	render(){
		return(
			<h1></h1>


		)
	}
}

const mapStateToProps = state => ({
	gallery : state.gallery,
})

const mapDispatchToProps = {
	

}

export default connect(mapStateToProps,mapDispatchToProps)(Model)
