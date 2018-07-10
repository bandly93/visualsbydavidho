import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/NavBar';
import './css/Navbar.css';

const App = ({ route }) => {
	return(
		<div>
			<NavBar />
			<div>
				{renderRoutes(route.routes)}
			</div>
		</div>
	)   
}

export default {
	component: App
}
