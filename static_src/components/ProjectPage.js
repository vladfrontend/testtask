import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';

import '../styles/project.css';

export default () => (
  <div className="project-page">

    <div className="project-page__header">
      <h2>Projects</h2>
      <ProjectForm />
    </div>

    <div className="project-page__body">
      <ProjectList />
    </div>

  </div>
);