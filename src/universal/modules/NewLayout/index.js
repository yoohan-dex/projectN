import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import Sidebar from './Sidebar';
import Activity from './Activity';
import {Link} from 'react-router';
// import Main from './Main';
// import Footer from './Footer';

/*
  @param Sidebar
  @param sidebarPathname
*/

const Test = () => <div style={{width: '300px', height: '300px'}}><Link to="options/template"> YES !!!@!!</Link></div>;

class Layout extends Component {
  constructor({pathname, sidebarPathname}) {
    super();
    this.state = {
      previousPathname: `${pathname}/${sidebarPathname}`,
    };
  }
  @autobind
  savePreviousPathname() {
    this.setState({
      previousPathname: location.pathname,
    });
  } // for saving the sidebar state before close the sidebar
  render() {
    return (
      <div>
        <Sidebar>
          <Activity
            pattern="options"
            component={Test}
            >
            <Activity
              pattern="options/template"
              component={Test}
              />
          </Activity>
        </Sidebar>
      </div>
    );
  }
}

Layout.propTypes = {
  pathname: PropTypes.string.isRequired,
  sidebarPathname: PropTypes.string.isRequired,
};

export default Layout;
