import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TaskList from './TaskList';
import '../styles/task.css';

const TaskPage = ({ dispatch }) => (
  <div className="task-page">

    <div className="task-page__header">
      <h2>Tasks</h2>
    </div>

    <button
      className="task-page__add-button"
      onClick={() => dispatch(push('/tasks/new'))}
    >
      Add new task
    </button>

    <div className="task-page__body">
      <TaskList />
    </div>

  </div>
);

export default connect()(TaskPage);