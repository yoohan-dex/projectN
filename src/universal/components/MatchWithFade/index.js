import React, {PropTypes} from 'react';
import {Match} from 'react-router';
import {TransitionMotion} from 'react-motion';
import Fade from './Fade';
const MatchWithFade = ({component: Component, fadeStyle, back, fore, ...rest}) => {
  const willEnter = () => fadeStyle.enter;
  const willLeave = () => fadeStyle.leave;
  return (
    <Match
      {...rest}
      children={({matched, ...props}) =>
        <TransitionMotion
          willEnter={willEnter}
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
                  <Fade matched={matched} back={back} fore={fore} pathname={props.location.pathname}>
                    <Component/>
                  </Fade>
                </div>
                ))}
            </div>
          )}
        </TransitionMotion>
    }
      />
  );
};

MatchWithFade.propTypes = {
  
};

export default MatchWithFade;
