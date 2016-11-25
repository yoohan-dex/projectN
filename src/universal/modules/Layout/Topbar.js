import React, {Component, PropTypes} from 'react';
import {observer} from 'mobx-react';
import s from './topbar.styl';
import CSSModules from 'react-css-modules';
import {Link} from 'react-router';
import autobind from 'autobind-decorator';

@observer(['UIstate'])
@CSSModules(s)
class Topbar extends Component {
  constructor({pathname}) {
    super();
    this.state = {
      previousPathname: `${pathname}/options`,
    };
  }
  @autobind
  handlePC() {
    this.props.UIstate.toPC();
  }
  @autobind
  handleTablet() {
    this.props.UIstate.toTablet();
  }
  @autobind
  handleMobile() {
    this.props.UIstate.toMobile();
  }
  @autobind
  handleClick() {
    const {save} = this.props;
    save();
    this.props.UIstate.stopEditting();
  }
  render() {
    const {links, pathname, UIstate} = this.props;

    return (
      <ul styleName="ul">
        <Link to={pathname} onClick={this.handleClick}><li>关闭导航栏</li></Link>
        <a onClick={this.handlePC}>
          <li>PC尺寸</li>
        </a>
        <a onClick={this.handleTablet}>
          <li>平板尺寸</li>
        </a>
        <a onClick={this.handleMobile}>
          <li>手机尺寸</li>
        </a>
        <a><li>保存并预览</li></a>
      </ul>
    );
  }
}

Topbar.propTypes = {

};

export default Topbar;
