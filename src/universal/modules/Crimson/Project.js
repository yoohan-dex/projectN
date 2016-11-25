import React, {Component, PropTypes} from 'react';
import Section from './components/Section';
import ProjectItem from './components/ProjectItem';
class componentName extends Component {
  render() {
    const {projects, name} = this.props;
    const renderProjectItem = project =>
      <ProjectItem project={project}/>;
    return (
      <Section iteminitem section={name.project}>
        {projects.map(renderProjectItem)}
      </Section>
    );
  }
}

componentName.propTypes = {

};

export default componentName;
