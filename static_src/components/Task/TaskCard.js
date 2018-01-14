import React from 'react';

export default ({ name = 'hello', description = 'no description'}) => (
  <div className="task-card">
    <div className="task-card__title">
      <a href="">{name}</a>
    </div>
    <div className="task-card__description">{description}</div>
    <div className="tast-card__meta">@evgeny</div>
    <div className="tast-card__meta">Project: name</div>
    <div className="tast-card__meta">Status: open</div>
  </div>
);