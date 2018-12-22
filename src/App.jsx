import React, { Fragment } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import initAnalytics from './services/analytics/init';
import logAnalytics from './services/analytics/logAnalytics';
import CompanyPage from './components/company/Page';
import MyRouter from './components/Router';

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const App = () => (
  <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
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
  </StripeProvider>
);

export default initAnalytics(App);
