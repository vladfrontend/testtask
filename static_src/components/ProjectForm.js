import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { addProject } from '../actions/project';

const ProjectForm = ({ handleSubmit, submitting, error }) => (
  <div className="project-form">
    <form onSubmit={handleSubmit}>
      <Field
        type="text"
        className="project-form__input"
        placeholder="Project Name"
        name="name"
        component="input"
        disabled={submitting}
      />
      <button
        className="project-form__button"
        type="submit"
        disabled={submitting}
      >Add</button>
    </form>
  </div>
);

const afterSubmit = (result, dispatch) =>
  dispatch(reset('ProjectForm'));

export default reduxForm({
  form: 'ProjectForm',
  onSubmit: (data, dispatch) =>
    dispatch(addProject(data)),
  onSubmitSuccess: afterSubmit
})(ProjectForm);