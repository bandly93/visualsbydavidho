import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NavBar from './components/NavBar';

/* uncomment	for google analytics */

// import ga from 'react-ga';
// import {GA_CODE} from '../../config.json';

class App extends Component {
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
    return<div>
			<NavBar />
      <h1> Welcome to Visuals by David Ho! </h1>
    </div>
  }
}

App.propTypes = {
	


}

export default App;
