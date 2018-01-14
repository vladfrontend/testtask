import React from 'react';
import { Route } from 'react-router';
import SigninForm from './SigninForm';
import SignupForm from './SignupForm';
import Project from './Project/index';
import Task from './Task/index';
import App from './App';

import Test from './Test';

import '../styles/base.css';

export default () => (
  <App>
    <Route exact path="/" component={ () => null } />
    <Route path="/signin" component={ SigninForm } />
    <Route path="/signup" component={ SignupForm } />
    <Route path="/projects" component={ Project } />
    <Route path="/tasks" component={ Task } />
    <Route path="/test" component={ Test } />
  </App>
);