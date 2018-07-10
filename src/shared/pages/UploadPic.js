import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Upload from '../adminViews/UploadComp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/* uncomment	for google analytics */
// import ga from 'react-ga';
// import {GA_CODE} from '../../config.json';

class UploadPic extends Component {
  /*
	componentDidMount(){
		ga.initialize(GA_CODE,{debug:false});
		ga.pageview(this.props.location.pathname);
	}
	componentWillUpdate(nextProps){
		if(nextProps.location.pathname !== this.props.location.pathname){
			ga.pageview(nextProps.location.pathname);
		}
	}
	*/
  render() {
    return(
			<div>
				<Upload />
				<h1> Welcome to Visuals by David Ho! </h1>
			</div>
		)
  }
}

const mapStateToProps = (state) => {
	return {
		view:state.view
	}
}

const mapDispatchToProps = {
	

}






UploadPic.propTypes = {
	


}

export default {
	component: withRouter(connect(mapStateToProps,mapDispatchToProps)(UploadPic))
}
