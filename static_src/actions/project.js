import { RSAA } from 'redux-api-middleware';
import axios from 'axios';

export const PROJECT_LOADING_START = 'PROJECT_LOADING_START';
export const PROJECT_LOADING_SUCCESS = 'PROJECT_LOADING_SUCCESS';
export const PROJECT_LOADING_ERROR = 'PROJECT_LOADING_ERROR';
export const PROJECT_DELETE = 'PROJECT_DELETE';
export const PROJECT_ADD = 'PROJECT_ADD';

export const fetchProjects = () => ({
  [RSAA]: {
    endpoint: '/api/projects/?ordering=-created_at',
    method: 'GET',
    types: [
      PROJECT_LOADING_START,
      PROJECT_LOADING_SUCCESS,
      PROJECT_LOADING_ERROR
    ],
    headers: {
      Authorization: 'Token ' + localStorage.getItem('token')
    }
  }
});

export const deleteProject = id => dispatch =>
  axios.delete(`/api/projects/${id}/`).then(() =>
      dispatch({
        type: PROJECT_DELETE,
        id
      })
    );

export const addProject = data => dispatch =>
  axios.post('/api/projects/', data).then(({ data }) =>
      dispatch({
        type: PROJECT_ADD,
        payload: data
      })
    );