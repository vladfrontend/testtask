import React from 'react';
import { connect } from 'react-redux';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import '../styles/task.css';

class TaskPage extends React.Component {
  render() {
    console.log(this.props.router);
    return (
      <div className="task-page">
        <div className="task-page__header">
          <h2>Tasks</h2>
          <TaskFilter />
        </div>
        <button className="task-page__add-button">Add new task</button>
        <br/>
        <div className="task-page__body">
          <TaskList tasks={[{},{},{},{},{},{},{},{}]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  router: state.router
});

export default connect(mapStateToProps)(TaskPage);