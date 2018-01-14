import React from 'react';
import { Route, Redirect } from 'react-router';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import ProjectPage from './ProjectPage';
import TaskPage from './TaskPage';
import App from './App';

import requireAuth from '../utils/requireAuth';

import '../styles/base.css';

export default () => (
  <App>
    <Route exact path="/" render={ () => <Redirect to="/projects" /> } />
    <Route path="/signin" component={ SigninForm } />
    <Route path="/signup" component={ SignupForm } />
    <Route path="/projects" component={ requireAuth(ProjectPage) } />
    <Route path="/tasks" component={ requireAuth(TaskPage) } />
  </App>
);