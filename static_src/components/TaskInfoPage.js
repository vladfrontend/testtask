import React from 'react'
import { Table, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchOneTask, deleteTask } from '../actions/task';
import { push } from 'react-router-redux';

const statusToText = code => [null, 'Новый', 'В работе', 'Сделан'][code];

class TaskInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this._id = this.props.match.params.id;
    this.state = {
      isLoading: true
    };
  }

  setTaskToState = task => {
    this.setState({
      isLoading: false,
      task
    });
  }

  setErrorToState = () => {
    this.setState({
      isLoading: false,
      isError: true
    });
  }

  delete = () => {
    if (confirm('Are you sure?')) {
      this.props.deleteTask(this._id)
        .then(() => this.props.push('/tasks'));
    }
  }

  edit = () => {
    this.props.push(`/tasks/${this._id}/edit`);
  }

  componentDidMount() {
    const id = this._id;
    const { tasks } = this.props;
    let task = tasks.find(task => task.id === id);

    if (!task) {
      this.props.fetchOneTask(id)
        .then(this.setTaskToState)
        .catch(this.setErrorToState);
    } else {
      this.setTaskToState(task);
    }
  }

  _renderControlButtons() {
    return (
      <div className="control-buttons">
        <Button size="small" onClick={this.edit} color="green">Edit</Button>
        <Button size="small" onClick={this.delete} color="red">Delete</Button>
      </div>
    );
  }

  _renderTable(task) {
    return (
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Title</Table.Cell>
            <Table.Cell>{task.text}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>{task.description}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Project</Table.Cell>
            <Table.Cell>{task.project.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Author</Table.Cell>
            <Table.Cell>{task.author.username}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>{statusToText(task.status)}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }

  render() {
    const { isLoading, task, isError } = this.state;
    return (
      <div className="task-info-page">

        {!isLoading && !isError && this._renderControlButtons()}

        <h2>Task Info</h2>

        {!isLoading && !isError && this._renderTable(task)}

        {isLoading && <h2 className="helper">Loading...</h2>}
        {isError && <h2 className="helper">Error</h2>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks.items
});

const mapDispatchToProps = {
  fetchOneTask,
  deleteTask,
  push
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TaskInfoPage));