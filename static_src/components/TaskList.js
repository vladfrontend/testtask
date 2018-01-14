import React from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { fetchTasks } from '../actions/task';

class TaskList extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }
  render() {
    const {tasks, isLoading, dispatch} = this.props;
    return (
      <ul className="task-list">
        {tasks.map(task =>
          <TaskItem {...task} key={task.id} />
        )}
        {tasks.length === 0 && isLoading && <h2 className="helper">Loading...</h2>}
        {tasks.length === 0 && !isLoading && <h2 className="helper">No tasks</h2>}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks.items,
  isLoading: state.tasks.isLoading
});

const mapDispatchToProps = {
  fetchTasks
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);