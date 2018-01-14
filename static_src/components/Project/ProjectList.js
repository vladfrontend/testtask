import React from 'react';
import ProjectListItem from './ProjectListItem';

export default ({ projects = [] }) => (
  <ul className="project-list">
    {projects.map(project => 
      <ProjectListItem title={project.name} key={project.id} />
    )}
  </ul>
);