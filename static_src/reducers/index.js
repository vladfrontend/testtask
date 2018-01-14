import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import projectReducer from './projects';
import taskReducer from './tasks';

export default combineReducers({
  auth: authReducer,
  router: routerReducer,
  form: formReducer,
  projects: projectReducer,
  tasks: taskReducer
});

