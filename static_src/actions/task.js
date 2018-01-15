import { RSAA } from 'redux-api-middleware';
import axios from 'axios';

export const TASK_LOADING_START = 'TASK_LOADING_START';
export const TASK_LOADING_SUCCESS = 'TASK_LOADING_SUCCESS';
export const TASK_LOADING_ERROR = 'TASK_LOADING_ERROR';
export const TASK_DELETE = 'TASK_DELETE';
export const TASK_ADD = 'TASK_ADD';
export const TASK_UPDATE = 'TASK_UPDATE';

export const fetchTasks = () => ({
  [RSAA]: {
    endpoint: '/api/tasks/?ordering=-created_at',
    method: 'GET',
    types: [
      TASK_LOADING_START,
      TASK_LOADING_SUCCESS,
      TASK_LOADING_ERROR
    ],
    headers: {
      Authorization: 'Token ' + localStorage.getItem('token')
    }
  }
});

export const fetchOneTask = id => dispatch =>
  axios(`/api/tasks/${id}/`)
    .then(({ data }) => data);

export const deleteTask = id => dispatch =>
  axios.delete(`/api/tasks/${id}/`);

export const addTask = data => dispatch =>
  axios.post('/api/tasks/', data).then(({ data }) =>
      dispatch({
        type: TASK_ADD,
        payload: data
      })
    );

export const updateTask = (data, id) => dispatch =>
  axios.put(`/api/tasks/${id}/`, data).then(({ data }) =>
      dispatch({
        type: TASK_UPDATE,
        payload: data
      })
    );