import axios from 'axios';

var config = require('../config.js');

export const client = axios.create({
  baseURL: config.server_url
});

const request = function(options, notificationSystem) {
  	const onSuccess = function(response) {
		if (response.data.message) {
			notificationSystem.addNotification({
				message: response.data.message,
				level: 'success'
			});
		}
		return response.data.payload;
	}

  const onError = function(error) {
    if (error.response) {
      if (error.response.status === '400') {
		  notificationSystem.addNotification({
    		message: error.response.data,
    		level: 'warning'
    	  });
	  } else {
		  notificationSystem.addNotification({
			message: error.response.data,
			level: 'error'
		  });
	  }
    } else {
      // Something else happened while setting up the request
      // triggered the error
      console.error('Error Message:', error.message);
    }

    return Promise.reject(error.response || error.message);
  }

  return client(options)
            .then(onSuccess)
            .catch(onError);
}

export default request;
