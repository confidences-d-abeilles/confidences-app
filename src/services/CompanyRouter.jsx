import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';

const CompanyPresentation = Loadable({
  loader: () => import('../components/company/Presentation'),
  loading: () => null,
});

const CompanyIdentity = Loadable({
  loader: () => import('../components/company/Identity'),
  loading: () => null,
});

const CompanyAddress = Loadable({
  loader: () => import('../components/company/Address'),
  loading: () => null,
});

const CompanyWish = Loadable({
  loader: () => import('../modules/wish/Wish'),
  loading: () => null,
});

const CompanyCheckout = Loadable({
  loader: () => import('../components/company/Checkout'),
  loading: () => null,
});

const Payment = Loadable({
  loader: () => import('../components/Payment'),
  loading: () => null,
});

const CompanyEnd = Loadable({
  loader: () => import('../components/company/End'),
  loading: () => null,
});

const CompanyManage = Loadable({
  loader: () => import('../components/company/Manage'),
  loading: () => null,
});

const CompanyMore = Loadable({
  loader: () => import('../components/company/More'),
  loading: () => null,
});

const CompanyPrices = Loadable({
  loader: () => import('../components/company/Prices'),
  loading: () => null,
});


export default () => (
  <Switch>
    <Route exact path="/company/presentation" component={CompanyPresentation} />
    <Route exact path="/company/prices" component={CompanyPrices} />
    <Route exact path="/company/more" component={CompanyMore} />
    <Route exact path="/company/identity" component={CompanyIdentity} />
    <Route exact path="/company/address" component={CompanyAddress} />
    <Route exact path="/company/wish" component={CompanyWish} />
    <Route exact path="/company/checkout" component={CompanyCheckout} />
    <Route exact path="/company/payment" render={() => <Payment redirect="/company/manage" />} />
    <Route exact path="/company/end" component={CompanyEnd} />
    <Route path="/company/manage" component={CompanyManage} />
  </Switch>
);
