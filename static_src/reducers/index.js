import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer
});

