import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import {AsideLay, Stage} from './components';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      sidebarPosition: 0,
    };
  }
  getChildContext() {
    return {
      forward: this.forward,
      backward: this.backward,
    };
  }
  @autobind
  forward() {
    this.setState({sidebarPosition: (this.state.sidebarPosition - 20)});
  }
  @autobind
  backward() {
    this.setState({sidebarPosition: (this.state.sidebarPosition + 20)});
  }
  render() {
    return (
      <AsideLay>
        <Stage>
          {this.props.children}
        </Stage>
      </AsideLay>
    );
  }
}

Sidebar.propTypes = {
  children: PropTypes.node,
};

Sidebar.childContextTypes = {
  forward: PropTypes.func,
  backward: PropTypes.func,
};

export default Sidebar;
