import React from 'react'
import { Field, reduxForm } from 'redux-form'

let FileUpload = (props) => {
  const { handleSubmit } = props
  const onFormSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Name</label>
        <Field name="name" component="input" type="text" />
      </div>
      <div>
        <label>Profile Picture</label>
        <Field name="profile_pic" component="input" type="file" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

FileUpload = reduxForm({
  form: 'fileupload'
})(FileUpload);

export default () => (
  <div>
    <FileUpload />
  </div>
);