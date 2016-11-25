import React, {Component, PropTypes} from 'react';
import autobind from 'autobind-decorator';
import {Match, Link} from 'react-router';
import {spring} from 'react-motion';
import MatchWithFade from '../../components/MatchWithFade';
import s from './navigation.styl';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';
import TemplateForm from '../../components/TemplateForm';
const Test = text => <h2>{text}</h2>;
const activities = pathname => [
  {
    title: 'first',
    routes: [
      {
        to: `${pathname}/template`,
        text: '简历模板',
      }, {
        to: `${pathname}/component`,
        text: '自定义组件',
      }, {
        to: `${pathname}/login`,
        text: '登陆',
      }, {
        to: `${pathname}/register`,
        text: '注册',
      }, {
        to: `${pathname}/profile`,
        text: '关于我',
      }, {
        to: `${pathname}/setting`,
        text: '设置',
      },
    ],
  }, {
    title: 'second',
    routes: [
      {
        pattern: `${pathname}/template`,
        component: TemplateForm,
      }, {
        pattern: `${pathname}/component`,
        component: Test.bind(null, 'cad'),
      }, {
        pattern: `${pathname}/login`,
        component: LoginForm,
      }, {
        pattern: `${pathname}/register`,
        component: RegisterForm,
      },
    ],
  },
];
// 类似这样的数组
class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      stageState: 0,
    };
  }
  // componentDidMount() {
  //   if (location.pathname.match(`${this.props.pathname}`) && location.pathname !== `${this.props.pathname}`) {
  //     this.navForward();
  //   }
  // }
  handleClick(direction) {
    if (direction === 'fore') {
      return this.navForward;
    } else if (direction === 'back') {
      return this.navBackward;
    }
  }
  @autobind
  navForward() {
    this.setState({stageState: (this.state.stageState - 20)}, console.log('I have been forword'));
  }
  @autobind
  navBackward() {
    this.setState({stageState: (this.state.stageState + 20)});
  }
  @autobind
  renderActivity(activity, index) {
    return (
      <Activity
        position={index === 0 ? 'first' : 'after'}
        back={this.navBackward}
        fore={this.navForward}
        title={activity.title}
        routes={activity.routes}
        pathname={this.props.pathname}
        />
    );
  }

  render() {
    const {pathname} = this.props;
    return (
      <nav className={s.nav}>
        <Stage stageState={this.state.stageState}>
          {activities(pathname).map(this.renderActivity)}
        </Stage>
      </nav>
    );
  }
}

Navigation.propTypes = {

};

export default Navigation;

const Activity = ({children, position, fore, back, title, routes, pathname}) => {
  const renderLink = ({to, text}, i) =>
    to ? <li><Link to={to} key={`link-${i}`}>{text}</Link></li> : null;
  const fadeStyle = {
    enter: {
      opacity: spring(1),
    },
    leave: {
      opacity: spring(0),
    },
  };
  const renderMatch = ({pattern, component}, i) =>
    pattern ?
      <MatchWithFade
        fore={fore}
        back={back}
        pattern={pattern}
        key={`match-${i}`}
        component={component}
        fadeStyle={fadeStyle}
        /> : null;
  return (
    <div className={s.activity}>
      {position === 'first' ?
        <h3 className={s.indicationFirst}>导航栏</h3> :
          <h3 className={s.indication}>
            <Link to={`${pathname}`}>返回</Link>
          </h3>
      }
      <hr/>
      <h2 className={s.title}>{title}</h2>
      <navigation>
        <ul>
          {routes.map(renderLink)}
        </ul>
      </navigation>
      {routes.map(renderMatch)}
    </div>
  );
};
const Stage = ({children, stageState}) =>
  <div
    className={s.stage}
    style={{left: `${stageState}%`}}
    >{children}</div>;




