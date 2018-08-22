import React, { Component, Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from './components/NavBar';
import { withRouter } from 'react-router-dom';
import routes from './navigationRoutes/Routes.js';

class App extends Component {
	render() {
		return(
			<div className='app'>
				<Navbar />
				{renderRoutes(this.props.route.routes)}
			</div>
		)
	}
}

// const App = ({ route }) => {
// 	return(
// 		<div className="app">
// 			<Navbar />
// 			<div>
// 				{renderRoutes(route.routes)}
// 			</div>
// 		</div>
// 	)   
// }

export default {
	component: withRouter(App)
}

