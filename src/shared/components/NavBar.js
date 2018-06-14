import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component{
	render(){
		return<Fragment>
			<h1>NavBar!!</h1>
		</Fragment>
	}
}

const mapStateToProps = (state) => {
	
}

const mapDispatchToProps = {
	
}

NavBar.propTypes = {	
	
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));
