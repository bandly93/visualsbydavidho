import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import view from './viewModule.js';
import upload from './uploadModule.js';
import gallery from './galleryModule.js';

const reducers = combineReducers({
  view,
	upload,
	gallery,
});

export default function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    compose(
      applyMiddleware(thunk),
      typeof window !== 'undefined' &&
				window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
}
