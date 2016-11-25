import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import s from './style.styl';
import autobind from 'autobind-decorator';
import {observer} from 'mobx-react';


@observer(['template'])
@CSSModules(s)
class TemplateForm extends Component {

  @autobind
  handleClick() {
    const {template} = this.props;
    template.updateTemplate('crimson');
  }
  @autobind
  handleDefault() {
    const {template} = this.props;
    template.updateTemplate('default');
  }
  render() {
    return (
      <div styleName="container">
        <ul>
          <li style={{backgroundImage: 'url("/build/crimson.png")'}}>
            <div onClick={this.handleClick}>
              <p>热情脉动</p>
            </div>
          </li>
          <li>
            <div onClick={this.handleDefault}>
              <p>暂未开放</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

TemplateForm.propTypes = {

};

export default TemplateForm;
