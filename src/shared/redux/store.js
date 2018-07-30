import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import view from './viewModule.js';
import upload from './uploadModule.js';
import imageCarousel from './reducers/imageCarouselReducer.js';
import imageSlider from './reducers/imageSliderReducer.js';

const reducers = combineReducers({
  view,
  upload,
  imageSlider,
  imageCarousel,
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
