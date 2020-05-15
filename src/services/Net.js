import axios from 'axios';
import * as Sentry from '@sentry/browser';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export default (options, notification, withPagination = false) => {
  const onSuccess = (response) => {
    if (response.data.message && notification) {
      notification.addNotification({
        message: response.data.message,
        level: 'success',
      });
    }
    return withPagination ? {
      payload: response.data.payload,
      pages: response.data.pages,
    } : response.data.payload;
  };

  const onError = (error) => {
    if (error.response && notification) {
      if (error.response.status === '400') {
        notification.addNotification({
          message: error.response.data,
          level: 'warning',
        });
      } else {
        notification.addNotification({
          message: error.response.data,
          level: 'error',
        });
      }
    } else {
      // eslint-disable-next-line no-console
      console.error('Error Message:', error.message);
    }

    Sentry.captureException(error);
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};
