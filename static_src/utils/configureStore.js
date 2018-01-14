import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import middlewares from '../middlewares';

export default (additionalMiddlewares = []) => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...additionalMiddlewares, ...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
