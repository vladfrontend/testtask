import React from 'react';
import { Form } from 'semantic-ui-react';

const FormField = ({ input, label, type, meta: { error } }) => (
  <Form.Field>
    <label>{label}</label>
    <input {...input} type={type} placeholder={label} />
    {error && <span className="help-block">{error}</span>}
  </Form.Field>
);

export default FormField;