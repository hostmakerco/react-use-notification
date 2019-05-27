import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { notificationTypes as types } from './constants';
import styles from './Notification.css';
import { ReactComponent as SuccessIcon } from './assets/icons/success.svg';
import { ReactComponent as InfoIcon } from './assets/icons/info.svg';
import { ReactComponent as WarningIcon } from './assets/icons/warning.svg';
import { ReactComponent as LoadingIcon } from './assets/icons/loading.svg';
import { ReactComponent as DefaultIcon } from './assets/icons/default.svg';
import { ReactComponent as ErrorIcon } from './assets/icons/error.svg';

const icons = {
  warning: WarningIcon,
  error: ErrorIcon,
  success: SuccessIcon,
  info: InfoIcon,
  loading: LoadingIcon,
  default: DefaultIcon
};

const Notification = ({ options, close, style }) => {
  const IconComponent = icons[options.type] || icons.default;

  return (
    <div
      className={classNames(styles.useNotification, styles[options.type])}
      style={{ margin: '10px', ...style }}
    >
      <span><IconComponent /></span>
      <main>
        {options.title && <h2>{options.title}</h2>}
        <p>{options.content}</p>
      </main>
      {options.type !== types.LOADING && (
        <a onClick={close}><ErrorIcon /></a>
      )}
    </div>
  );
};

Notification.defaultProps = {
  style: {}
};

Notification.propTypes = {
  style: PropTypes.object,
  close: PropTypes.func.isRequired,
  options: PropTypes.object.isRequired
};

export default Notification;
