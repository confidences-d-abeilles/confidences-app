import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import ReactPixel from 'react-facebook-pixel';

import App from './App';

const options = {
	autoConfig: true, 	// set pixel's autoConfig
  debug: true, 		// enable logs
};

ReactPixel.init('281052689206911', {}, options);

Sentry.init({
  dsn: 'https://5d9a3bd8d34a44e9b6091409f38392e1@sentry.io/1412093',
  environment: process.env.NODE_ENV,
});

ReactDOM.render(<App />, document.getElementById('root'));
