import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';

export const notificationContext = React.createContext();
const { Provider, Consumer } = notificationContext;

export const NotificationProvider = ({ children }) => {
  const notificationRef = useRef();
  return (
    <Provider value={notificationRef}>
      <NotificationSystem ref={notificationRef} data-cy="notification" />
      {children}
    </Provider>
  );
};

export const withNotification = Component => props => (
  <Consumer>
    {({ current }) => <Component notification={current} {...props} />}
  </Consumer>
);
