import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';

const IndividualPresentation = Loadable({
  loader: () => import('../components/individual/Presentation'),
  loading: () => null,
});

const IndividualAddress = Loadable({
  loader: () => import('../components/individual/Address'),
  loading: () => null,
});

const IndividualWish = Loadable({
  loader: () => import('../components/individual/Wish'),
  loading: () => null,
});

const IndividualCheckout = Loadable({
  loader: () => import('../components/individual/Checkout'),
  loading: () => null,
});

const IndividualPayement = Loadable({
  loader: () => import('../components/individual/Payment'),
  loading: () => null,
});

const IndividualEnd = Loadable({
  loader: () => import('../components/individual/End'),
  loading: () => null,
});

const IndividualManage = Loadable({
  loader: () => import('../components/individual/Manage'),
  loading: () => null,
});

const IndividualMore = Loadable({
  loader: () => import('../components/individual/More'),
  loading: () => null,
});

const IndividualPrices = Loadable({
  loader: () => import('../components/individual/Prices'),
  loading: () => null,
});

export default () => (
  <Switch>
    <Route exact path="/individual/presentation" component={IndividualPresentation} />
    <Route exact path="/individual/prices" component={IndividualPrices} />
    <Route exact path="/individual/more" component={IndividualMore} />
    <Route exact path="/individual/address" component={IndividualAddress} />
    <Route exact path="/individual/wish" component={IndividualWish} />
    <Route exact path="/individual/checkout" component={IndividualCheckout} />
    <Route exact path="/individual/payment" component={IndividualPayement} />
    <Route exact path="/individual/end" component={IndividualEnd} />
    <Route path="/individual/manage" component={IndividualManage} />
  </Switch>
);
