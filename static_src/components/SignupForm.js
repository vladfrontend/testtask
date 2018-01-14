import React from 'react';
import { Header, Button, Form, Segment, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import FormField from './common/FormField';
import { signup } from '../actions/auth';

import '../styles/auth.css';


const SigninForm = ({ handleSubmit, submitting, error }) => (
  <div className="signup-form">
    <Header as='h4' attached='top'>
      Sign up
    </Header>

    <Segment attached>
      <Form onSubmit={handleSubmit} error={error}>
        <Field
          name="username"
          type="text"
          component={FormField}
          label="Username"
        />
        <Field
          name="email"
          type="email"
          component={FormField}
          label="Email"
        />
        <Field
          name="first_name"
          type="text"
          component={FormField}
          label="Name"
        />
        <Field
          name="last_name"
          type="text"
          component={FormField}
          label="Last Name"
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
        <Button primary fluid disabled={submitting} type='submit'>Sign up</Button>
      </Form>
    </Segment>

    <Message warning attached='bottom'>
      Already signed up? <Link to='/signin'>Sign in</Link> here instead.
    </Message>
  </div>
);

export default reduxForm({
  form: 'signin',
  onSubmit: (values, dispatch) =>
    dispatch(signup(values))
})(SigninForm);