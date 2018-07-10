import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Navbar.css';

class NavBar extends Component{
	render() {
		return (
			<div>
				<h1 className="navLeft">
					VISUALS BY DAVID HO
				</h1>

				<div className="navRight">
					<ul>
						<li>+ Portfolio</li>
						<li>+ About Me & Links</li>
						<li>+ Instagram</li>
						<li>+ Contact Me</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default NavBar
