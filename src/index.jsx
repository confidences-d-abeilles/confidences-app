import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://5d9a3bd8d34a44e9b6091409f38392e1@sentry.io/1412093',
});


ReactDOM.render(<App />, document.getElementById('root'));
