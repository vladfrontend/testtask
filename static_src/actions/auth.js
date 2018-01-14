import axios from 'axios';
import { SubmissionError } from 'redux-form';
import { push } from 'react-router-redux';
import setAuthorizationToken from '../utils/setAuthorizationToken';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

const handleError = ({ response }) => {
  if (response.status == 400 && typeof response.data === 'object') {
    const errors = Object.keys(response.data)
      .reduce((errors, key) => {
        const value = response.data[key][0];
        if (key === 'non_field_errors') {
          errors['_error'] = value;
        } else {
          errors[key] = value;
        }
        return errors;
      }, {});
    throw new SubmissionError(errors);
  }
};

export const signin = values => dispatch =>
  axios.post('/api/token-auth/', values)
    .then(response => {
      const { token } = response.data;
      setAuthorizationToken(token);
      localStorage.setItem('token', token);
      return dispatch(getUserData());
    })
    .catch(handleError);

export const signup = data => dispatch => {
  let formData = Object.keys(data).reduce(
    (formData, key) => {
      if (key === 'avatar') {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
      return formData
    },
    new FormData
  );

  if (!data['first_name']) {
    formData.append('first_name', '');
  }
  if (!data['last_name']) {
    formData.append('last_name', '');
  }

  const config = {
    headers: { 'content-type': 'multipart/form-data' }
  };

  return axios.post('/api/users/', formData, config)
    .then(response => { 
      dispatch(push('/'));
    })
    .catch(handleError);
};

const getUserData = () => dispatch =>
  axios.get('/api/users/current/')
    .then(({ data }) => {
      dispatch(setCurrentUser(data));
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(push('/'));
    });

export const logout = () => dispatch =>
  axios('/api/auth/logout/')
    .then(() => {
      dispatch(setCurrentUser({}));
      localStorage.removeItem('user');
      dispatch(push('/'));
    });

export const register = values => dispatch =>
  axios.post('/api/users/', values)
    .then(() => {
      dispatch(push('/signin'));
    })
    .catch(handleError);

export const extractUserData = () => dispatch => {
  const stringifiedData = localStorage.getItem('user');
  let token = localStorage.getItem('token');
  let user;
  try {
    user = JSON.parse(stringifiedData);
  } catch(e) { }
  if (user) {
    dispatch(setCurrentUser(user));
  }
  if (token) {
    setAuthorizationToken(token);
  }
}  