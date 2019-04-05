import React, { useRef } from 'react';
import NotificationSystem from 'react-notification-system';

export const notificationContext = React.createContext();
const { Provider, Consumer } = notificationContext;

export const NotificationProvider = ({ children }) => {
  const notificationRef = useRef();
  return (
    <Provider value='test'>
      <NotificationSystem ref={notificationRef} />
      {children}
    </Provider>
  );
};

export const withNotification = Component => props => (
  <Consumer>
    {notification => <Component notification={notification} {...props} />}
  </Consumer>
);
