import axios from 'axios';

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_DOMAIN,
});

export default (options, notificationSystem) => {
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
    } else {
      // eslint-disable-next-line no-console
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};
