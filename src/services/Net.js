import axios from 'axios';

const config = require('../config.js');

export const client = axios.create({
  baseURL: config.server_url,
});

const request = (options, notificationSystem) => {
  const onSuccess = (response) => {
    if (response.data.message && notificationSystem) {
      notificationSystem.addNotification({
        message: response.data.message,
        level: 'success',
      });
    }
    return response.data.payload;
  };

  const onError = (error) => {
    if (error.response && notificationSystem) {
      if (error.response.status === '400') {
        notificationSystem.addNotification({
          message: error.response.data,
          level: 'warning',
        });
      } else {
        notificationSystem.addNotification({
          message: error.response.data,
          level: 'error',
        });
      }
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
