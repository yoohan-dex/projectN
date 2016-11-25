import React, {Component, PropTypes} from 'react';
import Section from './components/Section';
class Education extends Component {
  render() {
    const {education, name} = this.props;
    console.log('here is education:', name);
    const renderHonor = honor =>
      <dd className="education-honor">{honor}</dd>;
    const honers = education.honor ? education.honor.map(renderHonor) : null;
    const renderEducation = education => (
      <Section startTime={education.start} endTime={education.end} section={name.education}>
        <dl className="education-description">
          <dt className="education-school">{education.school}</dt>
          <dd className="education-major">{education.major}</dd>
          {education.honor.map(renderHonor)}
        </dl>
      </Section>
    );
    return (
      <div>
        {education.map(renderEducation)}
      </div>
    );
  }
}

Education.propTypes = {

};

export default Education;
