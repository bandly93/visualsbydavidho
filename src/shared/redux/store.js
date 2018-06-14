import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import view from './viewModule.js';

const reducers = combineReducers({
	view,
});

export default function configureStore(preloadedState){
	return createStore(
		reducers,
		preloadedState,
		compose(
			applyMiddleware(thunk),
			typeof window !== 'undefined' &&
				window.devToolsExtension? window.devToolsExtension():f => f
		)
	)
}
