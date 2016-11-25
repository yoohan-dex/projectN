import React, {Component, PropTypes} from 'react';
import Header from './Header';
import Content from './Content';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import config from './config';

@observer(['userForm'])
class Index extends Component {
  render() {
    const {width, data, userForm} = this.props;
    return (
      <main>
        <Header width={width} title={data.getTitle} contact={data.getContact}/>
        <Content
          width={width}
          name={config.section}
          education={this.props.userForm.getEducation}
          project={this.props.userForm.getProject}
          language={this.props.userForm.getLanguage}
          skill={this.props.userForm.getSkill}
          experience={this.props.userForm.getExperience}
          />
      </main>
    );
  }
}

Index.propTypes = {

};

export default Index;
