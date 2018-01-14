import React from 'react';
import { Link } from 'react-router-dom';

const statusToText = code => [null, 'Новый', 'В работе', 'Сделан'][code];

export default ({ id, text, description, project, author, status }) => (
  <div className="task-item">

    <div className="task-item__title">
      <Link to={`/tasks/${id}`}>{text}</Link>
    </div>

    <div className="task-item__description">{description}</div>
    <ul className="task-item__meta">
      <li className="task-item__field"><strong>Author:</strong> {author.username}</li>
      <li className="task-item__field"><strong>Project:</strong> {project.name}</li>
      <li className="task-item__field"><strong>Status:</strong> {statusToText(status)}</li>
    </ul>
  </div>
);