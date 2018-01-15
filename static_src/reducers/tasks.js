import { combineReducers } from 'redux';
import {
  TASK_LOADING_START,
  TASK_LOADING_SUCCESS,
  TASK_LOADING_ERROR,
  TASK_ADD,
  TASK_DELETE,
  TASK_UPDATE
} from '../actions/task';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case TASK_LOADING_START:
      return true;
    case TASK_LOADING_SUCCESS:
    case TASK_LOADING_ERROR:
      return false;
    default:
      return state;
  }
};

const items = (state = [], action) => {
  switch (action.type) {
    case TASK_LOADING_SUCCESS:
      return action.payload.results;
    case TASK_ADD:
      return [
        action.payload,
        ...state
      ];
    case TASK_DELETE:
      return state.filter(task =>
        action.id !== task.id);
    case TASK_UPDATE:
      return state.map(task =>
        action.payload.id === task.id ?
        action.payload : task
      );
    default:
      return state;
  }
};

export default combineReducers({
  isLoading,
  items
});