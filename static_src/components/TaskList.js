import React from 'react';
import TaskItem from './TaskItem';

export default ({ tasks = [] }) => (
  <ul className="task-list">
    {tasks.map((task, i) =>
      <TaskItem task={task} key={i} />
    )}
  </ul>
);