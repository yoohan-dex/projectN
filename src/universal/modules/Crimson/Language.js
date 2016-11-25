import React, {PropTypes} from 'react';
import Section from './components/Section';
import Progress from './components/Progress';
const Language = props => {
  const {name, language} = props;
  console.log('here is language', language);
  const renderCertification = certification =>
    certification ? <Progress cert={certification}/> : null;
  const renderDescription = description =>
    description ? <dd className="language-desc-item">{description}</dd> : null;
  return (
    <Section section={name.language}>
      {language.map(renderCertification)}
      <dl className="language-description">
        {language.map(v => v.description).map(renderDescription)}
      </dl>
    </Section>
  );
};

// Language.propTypes = {
//   section_names: PropTypes.object,
//   language: PropTypes.object,
// };
export default Language;
