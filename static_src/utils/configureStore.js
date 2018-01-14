import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

const middlewares = [thunk, apiMiddleware];

export default (additionalMiddlewares = []) => {
  return createStore(
    rootReducer,
    applyMiddleware(...additionalMiddlewares, ...middlewares)
  );
};
