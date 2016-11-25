import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

import s from './style.styl';

@observer(['UIstate', 'userForm'])
@CSSModules(s)
class Module extends Component {
  @autobind
  handleClick(e) {
    const {position, UIstate, userForm, type} = this.props;
    UIstate.startEditting();
    console.log('I have been click');
    switch (position) {
      case 'left':
        console.log(position);
        UIstate.toLeft();
        break;
      case 'right':
        UIstate.toRight();
        console.log(position);
        break;
      case 'center':
        UIstate.toCenter();
        console.log(position);
        break;
      default:
        console.log(position);
        break;
    }
    const big = window.innerWidth > 1566;
    const mobile = UIstate.getDeviceWidth === 'mobile';
    userForm.updateEdittingModule(type);
    UIstate.updateDialogTop(e.clientY);
  }
  render() {
    const {styleTemp, styleForever, UIstate, position, type, userForm, haveData, children} = this.props;
    return (
      <div
        styleName={haveData ? 'hover' : 'module'}
        className={type === userForm.edittingModule ? s.highlight : ''}
        style={styleTemp && !haveData ? styleTemp : styleForever}
        onClick={this.handleClick}
        >
        {haveData ? children :
          <div styleName="plus">
            <span>+</span>
          </div>
        }
      </div>
    );
  }
}

Module.propTypes = {

};

export default Module;
