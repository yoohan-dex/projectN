import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';
import CSSModules from 'react-css-modules';

import s from './style.styl';

@observer(['UIform', 'userForm'])
@CSSModules(s)
class ContentInput extends Component {
  @autobind
  getValue(module, pageCount, key, count) {
    console.log('pageCount', pageCount);
    console.log('count', count);
    const {userForm} = this.props;
    const value = this.props.userForm[module][pageCount];
    if (value && value[key] !== undefined) {
      if (count !== undefined) {
        if (userForm[module][pageCount][key][count]) {
          return userForm[module][pageCount][key][count];
        }
        // this.props.userForm.initialArray(module, pageCount, key); // maybe I don't need it!'
        return userForm[module][pageCount][key][count];
      }
      return userForm[module][pageCount][key];
    }
    if (count !== undefined) {
      this.props.userForm.initialModule(module, pageCount, key, true);
    } else {
      this.props.userForm.initialModule(module, pageCount, key);
    }
  }
  @autobind
  handleClick(module, pageCount, key, up) {
    return this.props.UIform.updateCount.bind(this.props.UIform, module, pageCount, key, up);
  }
  @autobind
  handleChange(module, pageCount, key, count) {
    if (count !== undefined) {
      return e => this.props.userForm.setValue(module, pageCount, key, e.target.value, count);
    }
    return e => this.props.userForm.setValue(module, pageCount, key, e.target.value);
  }
  @autobind
  renderChildrenInput(key) {
    const {page} = this.props.UIform;
    const {pageCount} = this.props;
    const {edittingModule} = this.props.userForm;
    const {children} = this.props.UIform[edittingModule];
    const placeholder = children[key];
    const arr = [];
    const keyCount = page[edittingModule].children[pageCount];
    if (keyCount && keyCount[key] !== undefined) {
      for (let i = 0; i <= keyCount[key]; i++) {
        if (i === keyCount[key]) {
          arr.push(
            <div styleName="dynamic">
              <input
                type="text"
                placeholder={placeholder}
                value={this.getValue(edittingModule, pageCount, key, i)}
                onChange={this.handleChange(edittingModule, pageCount, key, i)}
                />
              <button onClick={this.handleClick(edittingModule, pageCount, key, true)}> + </button>
              <button onClick={this.handleClick(edittingModule, pageCount, key, false)}> - </button>
            </div>
        );
        } else {
          arr.push(
            <input
              type="text"
              placeholder={placeholder}
              value={this.getValue(edittingModule, pageCount, key, i)}
              onChange={this.handleChange(edittingModule, pageCount, key, i)}
              />
            );
        }
      }
    } else {
      this.props.UIform.initialChildrenCount(edittingModule, pageCount, key);
      return this.renderChildrenInput(key);
    }
    return arr;
  }

  @autobind
  renderInput(key) {
    const {pageCount} = this.props;
    const {edittingModule} = this.props.userForm;
    const module = this.props.UIform[edittingModule];
    const placeholder = module[key];
    if (key === 'children') {
      const keys = Object.keys(module[key]);
      return keys.map(this.renderChildrenInput);
    }
    return (
      <input
        type="text"
        placeholder={placeholder}
        value={this.getValue(edittingModule, pageCount, key)}
        onChange={this.handleChange(edittingModule, pageCount, key)}
        />
    );
  }
  render() {
    const {page} = this.props;
    const {edittingModule} = this.props.userForm;
    const module = this.props.UIform[edittingModule];
    const keys = Object.keys(module);
    this.renderInput();
    return (
      <div>
        {keys.map(this.renderInput)}
      </div>
    );
  }
}

ContentInput.propTypes = {

};

export default ContentInput;
