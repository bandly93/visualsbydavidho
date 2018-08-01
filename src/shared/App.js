import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config';
import NavBar from './components/NavBar';
import { hot } from 'react-hot-loader';
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
	component: hot(module)(App)
}

