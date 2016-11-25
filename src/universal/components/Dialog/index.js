import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

import s from './style.styl';
import DataForm from '../DataForm';



@observer(['UIstate'])
@CSSModules(s)
class Dialog extends Component {
  @autobind
  returnOrigin() {
    const {UIstate} = this.props;
    UIstate.toCenter();
    UIstate.updateDialogTop(0);
  }
  render() {
    const {UIstate} = this.props;
    return (
      <div
        styleName="dialog"
        style={{
          top: `${UIstate.dialog.top}px`,
          left: `${UIstate.dialog.left}%`,
        }}
        >
        <DataForm returnOrigin={this.returnOrigin}/>
      </div>
    );
  }
}

Dialog.propTypes = {

};

export default Dialog;
