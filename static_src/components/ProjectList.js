import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { fetchProjects, deleteProject } from '../actions/project';

class ProjectList extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    items: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects, isLoading, deleteProject } = this.props;
    return (
      <ul className="project-list">
        {projects.map(project => 
          <ProjectItem
            project={project}
            key={project.id}
            deleteProject={() => deleteProject(project.id)}
          />
        )}
        {projects.length === 0 && isLoading && <h2 className="helper">Loading...</h2>}
        {projects.length === 0 && !isLoading && <h2 className="helper">No projects</h2>}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.items,
  isLoading: state.projects.isLoading
});

const mapDispatchToProps = {
  fetchProjects,
  deleteProject
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectList);