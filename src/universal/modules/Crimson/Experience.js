import React, {PropTypes} from 'react';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
const Experience = props => {
  const {name, experience} = props;
  console.log('here is experience', experience)
  const renderEperienceItem = exp =>
    <ExperienceItem exp={exp}/>;
  return (
    <Section iteminitem section={name.experience}>
      {experience.map(renderEperienceItem)}
    </Section>
  );
};

// Experience.propTypes = {
//   experience: PropTypes.array,
//   section_names: PropTypes.object,
// };

export default Experience;
