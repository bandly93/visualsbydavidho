import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/NavBar';
import { withRouter } from 'react-router-dom';

const App = ({ route }) => {
	return(
		<div className="app">
			<NavBar />
			<div>
				{renderRoutes(route.routes)}
			</div>
		</div>
	)   
}

export default {
	component: withRouter(App)
}