import React, { PropTypes } from 'react';
import Section from './components/Section';
import Skill from './components/Skill';
const Skills = props => {
  const {skills, name} = props;
  const renderSkill = skill =>
    <Skill skill={skills}/>;
  return (
    <Section iteminitem section={name}>
      {props.skills.map(renderSkill)}
    </Section>
  );
};

// Skills.propTypes = {
//   section_names: PropTypes.object,
//   skills: PropTypes.array,
// };

export default Skills;