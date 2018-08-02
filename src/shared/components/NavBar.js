import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from "../css/Navbar.css";
const navbarData = require('../data/navbarData.js');

class NavBar extends Component{
	render() {
		const { navbarLabelMap } = navbarData;
		return (
			<div className="navbar">
				<h1 className="navLeft">
					<b><Link to="/">VISUALS BY DAVID HO</Link></b>
				</h1>

				<div className="navRight">
					<ul>
						{navbarLabelMap}
						
						<li><Link to="/contact-me">+ Contact Me</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default NavBar
