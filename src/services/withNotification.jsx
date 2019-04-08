import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';
import PropTypes from 'prop-types';

export const notificationContext = React.createContext();
const { Provider, Consumer } = notificationContext;

const mockNotification = {
  addNotification: () => {
    // eslint-disable-next-line no-console
    console.warn('Could not find notification reference. Using mock instead.');
  },
};

export const NotificationProvider = ({ children }) => {
  const notificationRef = useRef(mockNotification);
  return (
    <Provider value={notificationRef}>
      <NotificationSystem ref={notificationRef} data-cy="notification" />
      {children}
    </Provider>
  );
};

NotificationProvider.propTypes = {
  children: PropTypes.node,
};

NotificationProvider.defaultProps = {
  children: null,
};

export const withNotification = Component => props => (
  <Consumer>
    {({ current }) => <Component notification={current} {...props} />}
  </Consumer>
);
