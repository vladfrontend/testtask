import React from 'react';
import { Header, Button, Form, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from './common/FormField';
import { signin } from '../actions/auth';

import '../styles/auth.css';


const SigninForm = ({ handleSubmit, submitting, error }) => (
  <div className="signin-form">
    <Header as='h4' attached='top'>
      Sign in
    </Header>

    <Segment attached>
      <Form onSubmit={handleSubmit} error={!!error}>
        <Field
          name="username"
          type="text"
          component={FormField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={FormField}
          label="Password"
        />
        <Message
          error
          header='Error'
          content={error}
        />
        <Button primary fluid disabled={submitting} type='submit'>Sign in</Button>
      </Form>
    </Segment>

    <Message warning attached='bottom'>
      Don't have an account? <Link to='/signup'>Sign up</Link> here.
    </Message>
  </div>
);

export default reduxForm({
  form: 'signin',
  onSubmit: (values, dispatch) =>
    dispatch(signin(values))
})(SigninForm);