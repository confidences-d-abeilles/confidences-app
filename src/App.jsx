import React, { Fragment } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Sentry from '@sentry/browser';

import reducers from './modules';
import initAnalytics from './services/analytics/init';
import logAnalytics from './services/analytics/logAnalytics';
import CompanyPage from './components/company/Page';
import MyRouter from './components/Router';

Sentry.init({
  dsn: 'https://5d9a3bd8d34a44e9b6091409f38392e1@sentry.io/1412093',
});

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => (
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route component={ScrollToTop} />
          <Switch>
            <Redirect path="/perus" to="/parrains/perus" />
            <Route path="/parrains/:namespace" component={logAnalytics(CompanyPage)} />
            <Route component={logAnalytics(MyRouter)} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  </StripeProvider>
);

export default initAnalytics(App);
