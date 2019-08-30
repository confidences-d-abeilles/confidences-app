import React, { Fragment } from 'react';
import { StripeProvider } from 'react-stripe-elements';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { ThemeProvider } from 'emotion-theming';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import theme from '@cda/theme';
import reducers from './modules/index.reducer';
import sagas from './modules/index.saga';
import initAnalytics from './services/analytics/init';
import { NotificationProvider } from './services/withNotification';
import logAnalytics from './services/analytics/logAnalytics';
import CompanyPage from './components/company/Page';
import MyRouter from './components/Router';
import Error from './services/Errors';


const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [
  sagaMiddleware,
];


const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(sagas);

const App = () => (
  <Error>
    <ThemeProvider theme={theme}>
      <NotificationProvider>
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
      </NotificationProvider>
    </ThemeProvider>
  </Error>
);

export default initAnalytics(App);
