import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Link,Switch,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from "../css/Navbar.css";

class NavBar extends Component{


	render() {

		const portfolio = [
			{name: "Nvidia - Production", link: "/nvidia"}, 
			{name: "Test - Fashion", link: "/fashion"},
			{name: "Lure + Till - Food", link: "/lure-till"},
			{name: "Content Magazine - Event", link: "/content-magazine"},
			{name: "ScreenPrintShowDown - Camera Operator", link: "/screenprintshowdown"},
			{name: "Osmo - Photo and Grip", link: "/osmo"},
			{name: "GoPanache - Photo", link: "/gopanache"},
			{name: "Adobe Founders bts - Photo and Grip", link: "/adobe"}
		]

		const portfolioMap = portfolio.map((portfolios, i) => {
			return (
				<ul key={i}>
					<Link to={portfolios.link} key={i}>{portfolios.name}</Link>
				</ul>
			)
		})

		return (
			<div>
				<h1 className="navLeft">
					<b><Link to="/">VISUALS BY DAVID HO</Link></b>
				</h1>

				<div className="navRight">
					<ul>

						<div className="dropdown">
							<li className="dropbtn">+ Portfolio</li>
								<div className="dropdown-content">
									{portfolioMap}
								</div>
						</div>

						<div className="dropdown">
							<li className="dropbtn">+ About Me & Links</li>
								<div className="dropdown-content">
									<a>Bye</a>
								</div>
						</div>
						<li>+ Instagram</li>
						<li>+ Contact Me</li>
					</ul>
				</div>
			</div>
		)
	}
}
export default NavBar
