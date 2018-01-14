import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addTask, updateTask } from '../actions/task';
import { fetchProjects } from '../actions/project';

const status = [
  { text: 'Новый', value: 1 },
  { text: 'В работе', value: 2 },
  { text: 'Сделан', value: 3 },
];

class TaskEditPage extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      form: {},
      projects: this.props.projects
    };
    this._id = this.props.match.params.id;
  }

  componentDidMount() {
    const { isLoading, projects, dispatch } = this.props;
    if ( !isLoading && projects.length == 0 ) {
      dispatch(fetchProjects())
    }
  }

  handleChange = (e, { name, value }) => this.setState({ form: { [name]: value } })

  handleSubmit = () => {
     
    // this.props.dispatch(addTask(state))
    //   .then(() => )
  }

  render() {
    const { value } = this.state
    return (
      <div className="task-edit-page">
        <h2>{this._id ? "Update task" : "Create new task"}</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} fluid label='Title' placeholder='Title' name="text" />
          <Form.TextArea onChange={this.handleChange} label='Description' placeholder='Description' name="description" />
          <Form.Select onChange={this.handleChange} fluid label='Project' name="project_id" options={this.state.projects} placeholder='Project Id' />
          <Form.Select onChange={this.handleChange} fluid label='Status' name="status" options={status} placeholder='Status' />
          <Form.Button primary>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.items,
  isLoading: state.projects.isLoading
});

export default connect(mapStateToProps)(withRouter(TaskEditPage));