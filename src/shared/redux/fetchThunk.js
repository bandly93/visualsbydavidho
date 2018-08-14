require('es6-promise').polyfill();
require('isomorphic-fetch');

export const sendData = (url,method,data,actFunc) => {
	return(dispatch) => {
		fetch(url, {
    	method,
    	credentials: 'same-origin',
    	headers: { 'Content-Type': 'application/json'},
    	body: JSON.stringify(data),
		})
   	.then(res => res.json())
		.then(data =>{ 
			if(actFunc){
				actFunc(data)
			}
		})
		.catch(err => console.error(err));
	}
}

export const sendFile = (url,method,data,actFunc) => {
	return(dispatch) => {
		fetch(url,{
			method,
			body:data,
			headers: {'Accept' : 'application/json'},	
		})
		.then(res => res.json())
		.then(data => {
			if(actFunc){
				dispatch(actFunc(data))
			}
		})
		.catch(err => console.log(err))
	}
}

export const getData = (url,actFunc) => {
	return(dispatch) => {
		fetch(url,{credentials: 'same-origin'})
		.then(res => res.json())
		.then(data => {
			if(actFunc){
				//console.log(data);
				actFunc(data)
			}
		})
		.catch(err => console.error(err));
	}
}

