import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component{
	
	navbar = () => {
		<div className = 'navbar'>
			<div>
				<Link to = '/'>VISUALS BY DAVID HO</Link>
			</div>
			<div>
				
			</div>
		</div>
	}
	

	
	render(){
		return<Fragment>
			<h1>NavBar</h1>
		</Fragment>
	}
}

/*
const mapStateToProps = (state) => {
	
}

const mapDispatchToProps = {
	
}

NavBar.propTypes = {	
	
}
*/

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));

export default NavBar;
