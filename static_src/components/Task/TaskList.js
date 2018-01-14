import React from 'react';
import TaskCard from './TaskCard';

export default ({ tasks = [] }) => (
  <div className="task-list">
    <ul>
      {tasks.map((task, i) =>
        <TaskCard task={task} key={i} />
      )}
    </ul>
  </div>
);