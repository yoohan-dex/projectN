import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

@observer(['UIform', 'userForm'])
class Input extends Component {
  @autobind
  handleChange(type) {
    const {edittingModule} = this.props.userForm;
    return e => this.props.userForm.setSimpleValue(edittingModule, type, e.target.value);
  }

  @autobind
  renderInput({type, placeholder}) {
    const {getTitle, edittingModule, getContact} = this.props.userForm;
    const {inputType} = this.props.UIform[edittingModule];
    console.log(edittingModule);
    return (<input
      type={inputType}
      placeholder={placeholder}
      value={edittingModule === 'title' ? getTitle[type] : getContact[type]}
      onChange={this.handleChange(type)}
      />);
  }
  render() {
    const {edittingModule} = this.props.userForm;
    const {form} = this.props.UIform[edittingModule];
    return (
      <div>
        {form.map(this.renderInput)}
      </div>
    );
  }
}

Input.propTypes = {

};

export default Input;
