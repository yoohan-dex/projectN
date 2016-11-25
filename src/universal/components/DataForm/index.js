import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import s from './style.styl';

import HeaderInput from '../HeaderInput';
import ContentInput from '../ContentInput';

@observer(['userForm', 'UIstate', 'UIform'])
@CSSModules(s)
class DataForm extends Component {

  @autobind
  handleNameChange(e) {
    const {userForm} = this.props;
    userForm.setTitle('name', e.target.value);
  }
  @autobind
  handleJobChange(e) {
    const {userForm} = this.props;
    userForm.setTitle('jobDescription', e.target.value);
  }
  @autobind
  handleClickCancel() {
    const {userForm, UIstate} = this.props;
    this.props.returnOrigin();
    userForm.resetEdittingMoudle();
    UIstate.stopEditting();
  }
  @autobind
  handleClickConfirm() {
    const {userForm, UIstate} = this.props;
    this.props.returnOrigin();
    userForm.resetEdittingMoudle();
    UIstate.stopEditting();
  }
  @autobind
  renderInput(module) {
    switch (module) {
      case 'title':
      case 'contact':
        return <HeaderInput/>;
      case '':
        return <div/>;
      default:
        return <ContentInput pageCount={this.props.UIform.page[module].count}/>;
    }
  }
  @autobind
  handleClickPre() {
    const {edittingModule} = this.props.userForm;
    this.props.UIform.decreasePage(edittingModule);
  }
  @autobind
  handleClickNext() {
    const {edittingModule} = this.props.userForm;
    this.props.UIform.increasePage(edittingModule);
  }
  render() {
    const {edittingModule} = this.props.userForm;
    return (
      <div styleName="form">
        <div styleName="form-title">
          <h3>{edittingModule}</h3>
          <div styleName="title-button-group">
            <button onClick={this.handleClickPre}>pre</button>
            <button onClick={this.handleClickNext}>next</button>
          </div>
        </div>
        {this.renderInput(edittingModule)}
        <div styleName="button-group">
          <button onClick={this.handleClickConfirm}>完成</button>
          <button onClick={this.handleClickCancel}>下一步</button>
        </div>
      </div>
    );
  }
}

DataForm.propTypes = {

};

export default DataForm;
