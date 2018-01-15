import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';
import { addTask, updateTask, fetchOneTask } from '../actions/task';
import { fetchProjects } from '../actions/project';

const status = [
  { text: 'Новый', value: 1 },
  { text: 'В работе', value: 2 },
  { text: 'Сделан', value: 3 },
];

const transformProjectsToOptions = projects =>
  projects.map(project => ({
    text: project.name,
    value: project.id
  }));

class TaskEditPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      projects: [],
      isLoading: true,
      isError: false
    };
    this._id = this.props.match.params.id;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.projects !== this.props.projects) {
      this.setProjectsToState();
    }
  }

  setProjectsToState() {
    const { projects } = this.props;

    this.setState({
      projects: transformProjectsToOptions(projects)
    });
  }

  setTaskToState = task => {
    this.setState({
      isLoading: false,
      ...task
    });
  }

  setErrorToState = () => {
    this.setState({
      isLoading: false,
      isError: true
    });
  }

  componentDidMount() {
    const { projects, dispatch, tasks } = this.props;
    if ( projects.length == 0 ) {
      dispatch(fetchProjects());
    } else {
      this.setProjectsToState();
    }

    if (!this._id) return this.setTaskToState({});

    let task = tasks.find(task => task.id === this._id);

    if (!task) {
      dispatch(fetchOneTask(this._id))
        .then(this.setTaskToState)
        .catch(this.setErrorToState);
    } else {
      this.setTaskToState(task);
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { dispatch } = this.props;

    let action;
    if (this._id) {
      action = updateTask(this.state, this._id);
    } else {
      action = addTask(this.state);
    }

    dispatch(action).then(() =>
      dispatch(push('/tasks'))
    );
  }

  render() {
    const { value, projects, isLoading, isError } = this.state;

    if (isLoading) {
      return (
        <div className="task-edit-page">
          <h2 className="helper">Loading...</h2>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="task-edit-page">
          <h2 className="helper">Error</h2>
        </div>
      );
    }

    return (
      <div className="task-edit-page">
        <h2>{this._id ? "Update task" : "Create new task"}</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input onChange={this.handleChange} defaultValue={this.state.text} fluid label='Title' placeholder='Title' name="text" />
          <Form.TextArea onChange={this.handleChange} defaultValue={this.state.description} label='Description' placeholder='Description' name="description" />
          <Form.Select onChange={this.handleChange} defaultValue={this.state['project_id']} fluid label='Project' name="project_id" options={projects} placeholder='Project Id' />
          <Form.Select onChange={this.handleChange} defaultValue={this.state.status} fluid label='Status' name="status" options={status} placeholder='Status' />
          <Form.Button primary>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.items,
  tasks: state.tasks.items
});

export default connect(mapStateToProps)(withRouter(TaskEditPage));