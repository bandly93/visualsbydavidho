import React,{Component} from 'react';
import { connect } from 'react-redux';


class Model extends Component{
		
	

	
	render(){
		return(
			


		)
	}
}

const mapStateToProps = state => ({
	gallery : state.gallery,
})

const mapDispatchToProps = {
	

}

export default connect(mapStateToProps,mapDispatchToProps)(Model)
