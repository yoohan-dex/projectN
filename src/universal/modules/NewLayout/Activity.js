import React, {Component, PropTypes} from 'react';
import {Match} from 'react-router';
import {TransitionMotion, spring} from 'react-motion';
import PositionController from './PositionController';
import {ActivityBox, Aside, Content} from './components';
/*
  @param backPath
  @param component
  @param first
  @param title
  @param pattern
*/
class Activity extends Component {
  render() {
    const {component: Component, ...rest} = this.props;
    const fadeStyle = {
      opacity: spring(0),
    };
    const willLeave = () => fadeStyle;
    return (
      <ActivityBox>
        <Aside>
          <Match
            {...rest}
            children={({matched, ...props}) => // eslint-disable-line react/jsx-no-bind
              <TransitionMotion
                willLeave={willLeave}
                styles={matched ? [{
                  key: props.location.pathname,
                  style: {
                    opacity: 1,
                  },
                  data: props,
                }] : []}
                >
                {interpolatedStyles => (
                  <div>
                    {interpolatedStyles.map(config => (
                      <div
                        key={config.key}
                        style={{...config.style}}
                        >
                        <PositionController matched={matched}>
                          <Component {...config.data}/>
                        </PositionController>
                      </div>
                      ))}
                  </div>
                )}
              </TransitionMotion>
        }
            />
        </Aside>
        <Content>
          {this.props.children}
        </Content>
      </ActivityBox>
    );
  }
}

Activity.propTypes = {
  children: PropTypes.node,
  pattern: PropTypes.string.isRequired,
  first: PropTypes.bool,
  title: PropTypes.string,
  backPath: PropTypes.string,
};

export default Activity;
