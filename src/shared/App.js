import React,{Component,Fragment} from 'react';


//import ga from 'react-ga';
//import {GA_CODE} from '../../config.json';

class App extends Component{
	/*
	componentDidMount(){
		ga.initialize(GA_CODE,{debug:false});
		ga.pageview(this.props.location.pathname);
	}
	componentWillUpdate(nextProps){
		if(nextProps.location.pathname !== this.props.location.pathname){
			ga.pageview(nextProps.location.pathname);
		}
	}
	*/
	render(){
		return<div>
			<h1>Welcome to Visuals by David Ho! </h1>
		</div>
	}	
}

export default App;
