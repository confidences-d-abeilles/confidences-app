import axios from 'axios';
import { notificationContext } from './withNotification';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export default (options) => {
  const onSuccess = (response) => {
    if (response.data.message) {
      notificationContext.valueOf().addNotification({
        message: response.data.message,
        level: 'success',
      });
    }
    return response.data.payload;
  };

  const onError = (error) => {
    console.log(notificationContext.valueOf());
    if (error.response) {
      if (error.response.status === '400') {
        notificationContext.valueOf().addNotification({
          message: error.response.data,
          level: 'warning',
        });
      } else {
        notificationContext.valueOf().addNotification({
          message: error.response.data,
          level: 'error',
        });
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};
