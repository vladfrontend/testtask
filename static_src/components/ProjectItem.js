import React from 'react';
import { Link } from 'react-router-dom';

export default ({
  project,
  deleteProject
}) => (
  <li className="project-item">
    {project.name}
    <div
      className="project-item__close"
      onClick={deleteProject}
    ></div>
  </li>
);