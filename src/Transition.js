import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { getTransionName } from './utils';

const TransitionWrapper = ({ children, duration, in: inProp, position }) => {
  const defaultStyle = {
    transition: `${duration}ms ease-in`,
    transitionProperty: 'opacity, transform'
  };

  const transitionStyles = {
    slide: {
      entering: {
        opacity: 0,
        transform: 'translateX(100%)'
      },
      entered: {
        opacity: 1,
        transform: 'translateX(0)'
      },
      exiting: {
        opacity: 0,
        transform: 'translateX(100%)'
      }
    },
    fade: {
      entering: {
        opacity: 0
      },
      entered: {
        opacity: 1
      },
      exiting: {
        opacity: 0
      }
    }
  };

  return (
    <Transition in={inProp} timeout={{ enter: 0, exit: duration }} appear>
      {(status) => {
        if (status === 'exited') {
          return null;
        }
        const transitionName = getTransionName(position);
        return React.cloneElement(children, {
          style: { ...defaultStyle, ...transitionStyles[transitionName][status] }
        });
      }}
    </Transition>
  );
};

TransitionWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  duration: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  in: PropTypes.bool
};

export default TransitionWrapper;
