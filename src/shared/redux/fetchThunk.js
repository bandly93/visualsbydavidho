require('es6-promise').polyfill();
require('isomorphic-fetch');
import qs from 'qs';

export const sendData = (url,method,data,actFunc) => {
	return(dispatch) => {
		fetch(url, {
    	method,
    	credentials: 'same-origin',
    	headers: { 'Content-Type': 'application/json'},
    	body: JSON.stringify(data),
		})
   	.then(response => response.json())
		.then(data => actFunc?actFunc(data):console.log(data))
		.catch(err => console.error(err));
	}
}

