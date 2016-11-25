import React, {Component, PropTypes} from 'react';
import {Link, Match} from 'react-router';
import CSSModules from 'react-css-modules';
import {observer} from 'mobx-react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';
import {TransitionMotion, spring} from 'react-motion';
import {Header, Container, Content, Text} from 'semantic-ui-react';
import s from './style.styl';
import Topbar from './Topbar';
import Navigation from './Navigation';
import Dialog from '../../components/Dialog';

import Crimson from '../Crimson';

@observer(['UIstate', 'userForm', 'template'])
@CSSModules(s, {allowMultiple: true})
class Layout extends Component {
  constructor({pathname}) {
    super();
    this.state = {
      previousPathname: `${pathname}/options`,
      resumeResolustion: 1000,
    };
  }
  @autobind
  savePreviousPathname() {
    this.setState({
      previousPathname: location.pathname,
    }, console.log(location.pathname));
  }

  render() {
    const {routes, pathname, isExact, UIstate, userForm, template} = this.props;
    const mainStyle = classnames('main', {
      'main-to-right': !isExact,
    });
    return (
      <div>
        <Navigation pathname={`${pathname}/options`}/>
        <main styleName={mainStyle}>
          <div>

            {isExact ?
              null :
                <Topbar
                  pathname={pathname}
                  save={this.savePreviousPathname}
                  changeResolution={this.changeResolution}
                  />
            }
            <article>
              <section>
                <div styleName="resume-page">
                  {isExact ? <Link to={`${this.state.previousPathname}`}>OPEN!</Link> : null}
                  <Dialog/>
                  <div styleName="box-container">
                    <div
                      style={{
                        width: UIstate.deviceWidth,
                        transform: UIstate.getResumeTransform,
                      }} styleName="resume-box"
                         >
                      {template.getTemplate === 'crimson' ? <Crimson
                        width={UIstate.getDeviceWidth}
                        data={this.props.userForm}
                        /> : null }
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    );
  }
}

Layout.propTypes = {

};

const fadeOutStyle = {
  left: spring(-200, {stiffness: 90, damping: 7}),
};

export default Layout;

// <MatchWithFade
//           pattern={`${pathname}/open`}
//           component={Navigation}
//           />
