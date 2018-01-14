import { combineReducers } from 'redux';
import {
  PROJECT_LOADING_START,
  PROJECT_LOADING_SUCCESS,
  PROJECT_LOADING_ERROR,
  PROJECT_ADD,
  PROJECT_DELETE
} from '../actions/project';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case PROJECT_LOADING_START:
      return true;
    case PROJECT_LOADING_SUCCESS:
    case PROJECT_LOADING_ERROR:
      return false;
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case PROJECT_LOADING_SUCCESS:
      return action.payload.results;
    case PROJECT_ADD:
      return [
        action.payload,
        ...state
      ];
    case PROJECT_DELETE:
      return state.filter(project =>
        action.id !== project.id);
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  items
});