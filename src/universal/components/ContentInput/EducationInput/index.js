import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import autobind from 'autobind-decorator';

@observer(['UIform', 'userForm'])
class ContentInput extends Component {
  renderInput(value) {
    const {edittingMoudle} = this.props.userForm;
    
    const module = this.props.UIform[edittingMoudle];
    for (const key in module) {
      if (module.hasOwnProperty(key)) {
        console.log(key);
      }
    }

  }
  render() {
    const {page} = this.props;
    return (
      <div>
        {page}
      </div>
    );
  }
}

ContentInput.propTypes = {

};

export default ContentInput;
