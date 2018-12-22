import React, { Fragment } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import initAnalytics from './services/analytics/init';
import CompanyPage from './components/company/Page';
import MyRouter from './components/Router';
import logAnalytics from './services/analytics/logAnalytics';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const WithAnalytics = () => logAnalytics(
  <Fragment>
    <Route component={ScrollToTop} />
    <Switch>
      <Redirect path="/perus" to="/parrains/perus" />
      <Route path="/parrains/:namespace" component={CompanyPage} />
      <Route component={MyRouter} />
    </Switch>
  </Fragment>
);

const App = () => (
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
    <Router>
      <WithAnalytics />
    </Router>
  </StripeProvider>
);

export default initAnalytics(App);
