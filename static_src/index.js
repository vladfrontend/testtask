import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import { Route } from 'react-router';

import configureStore from './utils/configureStore';
import Root from './components/Root';
import { extractUserData } from './actions/auth';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = configureStore([middleware]);

store.dispatch(extractUserData());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);