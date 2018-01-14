import React from 'react';
import TaskFilter from './TaskFilter';
import TaskList from './TaskList';
import '../../styles/task.css';

export default () => (
  <div className="task-page">
    <div className="task-page__header">
      <h2 className="task-page__title">
        Tasks
      </h2>
      <TaskFilter />
    </div>
    <br/>
    <TaskList tasks={[{},{},{},{},{},{},{},{}]}/>
  </div>
);