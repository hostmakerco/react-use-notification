import React, { Fragment, useReducer, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import Notification from './Notification';
import Context from './Context';
import reducer, { initialState } from './reducer';
import createActions from './actions';
import { notificationTypes as types, positions, TRANSITION_DURATION, initialNotificationPositions } from './constants';
import { isNumeric, getRandomID, getPlacementStyles } from './utils';
import Transition from './Transition';

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = createActions(dispatch);
  const root = useRef(null);
  const timeoutIDs = useRef([]);

  useEffect(() => {
    root.current = document.createElement('div');
    document.body.appendChild(root.current);

    return () => {
      timeoutIDs.current.map(id => clearTimeout(id));

      if (root.current) {
        document.body.removeChild(root.current);
      }
    };
  }, []);

  const removeNotification = (notification) => {
    actions.remove(notification);

    if (notification.options.onClose) {
      notification.options.onClose();
    }
  };

  const createNotification = (type, options = {}) => {
    const id = getRandomID();
    const notification = {
      id,
      options: {
        type,
        timeout: 2000,
        position: options.position || positions.TOP_RIGHT,
        ...options
      }
    };

    if (isNumeric(notification.options.timeout)) {
      const timeout = setTimeout(() => {
        removeNotification(notification);
        timeoutIDs.current = timeoutIDs.current.filter(tmId => tmId === timeout);
      }, notification.options.timeout);

      timeoutIDs.current.push(timeout);
    }

    actions.show(type, notification);

    if (notification.options.onOpen) {
      notification.options.onOpen();
    }

    return notification;
  };

  const success = (options = {}) => createNotification(types.SUCCESS, options);
  const warning = (options = {}) => createNotification(types.WARNING, options);
  const error = (options = {}) => createNotification(types.ERROR, options);
  const info = (options = {}) => createNotification(types.INFO, options);
  const show = (options = {}) => createNotification(types.DEFAULT, options);
  const loading = (options = {}) => createNotification(types.LOADING, options);
  const remove = (notification) => removeNotification(notification);

  const value = { state, dispatch, success, error, info, show, warning, remove, loading };
  const notificationsByPosition = state.notifications.reduce((obj, notification) => ({
    ...obj,
    [notification.options.position]: [...(obj[notification.options.position] || {}), notification]
  }), initialNotificationPositions);

  return (
    <Context.Provider value={value}>
      {children}
      {root.current && (
        createPortal(
          <Fragment>
            {Object.keys(notificationsByPosition).map((position) => (
              <TransitionGroup style={getPlacementStyles(position)} key={position}>
                {notificationsByPosition[position].map(notification => (
                  <Transition
                    duration={notification.transitionDuration || TRANSITION_DURATION}
                    key={notification.id}
                    position={position}
                  >
                    <Notification
                      {...notification}
                      close={() => removeNotification(notification)}
                    />
                  </Transition>
                ))}
              </TransitionGroup>
            ))}
          </Fragment>,
          root.current
        )
      )}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
};

export default Provider;
