import React from 'react';
import useNotification from './useNotification';

const withUseNotification = () => WrappedComponent => {
  const WithUseNotification = (props) => {
    const notification = useNotification();

    return (
      <WrappedComponent
        {...props}
        notification={{ ...notification }}
      />
    );
  };

  WithUseNotification.displayName = `withUseNotification(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithUseNotification;
};

export default withUseNotification;
