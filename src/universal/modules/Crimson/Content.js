import React, {Component, PropTypes} from 'react';
import Module from '../../components/Module';
import Article from './components/Article';
import Education from './Education';
import Project from './Project';
import Language from './Language';
import Experience from './Experience';
import Skills from './Skills';
class Content extends Component {

  checkExist(module) {
    const keys = Object.keys(module);
    let exist = false;
    keys.forEach(key => {
      if (typeof module[key] === 'object' && module[key].length >= 1 && module[key][0] !== '') {
        exist = true;
      }
      if (typeof module[key] === 'string' && module[key]) {
        exist = true;
      }
    });
    console.log(exist);
    return exist;
  }
  render() {
    const {width, education, project, language, experience, skill, name} = this.props;
    console.log('here is content', education[0]);
    console.log(skill);
    return (
      <article
        className="content row"
        style={
        width === 'mobile' ? {
          margin: '0 0 5px',
          padding: '10px 10px',
        } : {}
      }
        >
        <Article>
          <Module
            haveData={this.checkExist(education[0])}
            position="left"
            type="education"
            >
            <Education
              name={name}
              education={education}
              />
          </Module>
          <Module
            haveData={this.checkExist(language[0])}
            position="left"
            type="language"
            >
            <Language
              name={name}
              language={language}
              />
          </Module>
          <Module
            haveData={this.checkExist(experience[0])}
            position="left"
            type="experience"
            >
            <Experience
              name={name}
              experience={experience}
              />
          </Module>
        </Article>
        <Article>
          <Module
            haveData={this.checkExist(project[0])}
            position="right"
            type="project"
            >
            <Project
              name={name}
              projects={project}
              />
          </Module>
          <Module
            haveData={this.checkExist(skill[0])}
            position="right"
            type="skill"
            >
            <Skills
              name={name}
              skills={skill}
              />
          </Module>
        </Article>
      </article>
    );
  }
}

Content.propTypes = {

};

export default Content;
