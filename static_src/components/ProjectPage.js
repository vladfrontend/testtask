import React from 'react';
import ProjectForm from './ProjectForm';
import ProjectList from './ProjectList';
import '../styles/project.css';

export default () => (
  <div className="project-page">
    <div className="project-page__header">
      <h2 className="project-page__title">
        Projects
      </h2>
      <ProjectForm />
    </div>
    <div className="project-page__body">
      <ProjectList projects={[{name: 'one two three', id: 1}, {name: 'aoeuaoeu aoeua', id: 3}, {name: 'aoaoeuaou', id: 4}]}/>
    </div>
  </div>
);