import React, { Component,Fragment } from 'react';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { hamburgerActive } from '../redux/actions/actions.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "../css/Navbar.css";
const navbarData = require('../data/navbarData.js');

class NavBar extends Component{

	toggleClass = () => {
		const hamburger = this.props.hamburgerActive.hamburgerActive;
		const newHamburger = !hamburger
		console.log(newHamburger)
		
		this.props.toggle(newHamburger)
	}

	render() {
		const { navbarLabelMap } = navbarData;
		return (
			<div className="navbar">

				<h1 className="navLeft">
					<b><Link to="/" className={this.props.hamburgerActive.hamburgerActive ? 'inactive' : 'active'}>VISUALS BY DAVID HO</Link></b>
				</h1>

				<div className='navRight'>
					{navbarLabelMap}
					<li><Link to="/contact-me">+ Contact Me</Link></li>
				</div>

				<div className="icon" onClick={this.toggleClass}>
					<i className="fa fa-bars">
						<div className={this.props.hamburgerActive.hamburgerActive ? 'active' : 'inactive'}>
							{navbarLabelMap}
							<div className="dropdown">
								<li className="dropbtn">
									<Link to="/contact-me">+ Contact Me</Link>
								</li>
							</div>
						</div>
					</i>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		hamburgerActive : state.imageCarousel
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggle: (data) => {
			dispatch(hamburgerActive(data))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
