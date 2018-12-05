import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import Loadable from 'react-loadable';

const CompanyPresentation = Loadable({
    loader: () => import('../components/company/Presentation'),
    loading: () => 'Loading...',
});

const CompanyIdentity = Loadable({
    loader: () => import('../components/company/Identity'),
    loading: () => 'Loading...',
});

const CompanyAddress = Loadable({
    loader: () => import('../components/company/Address'),
    loading: () => 'Loading...',
});

const CompanyWish = Loadable({
    loader: () => import('../components/company/Wish'),
    loading: () => 'Loading...',
});

const CompanyCheckout = Loadable({
    loader: () => import('../components/company/Checkout'),
    loading: () => 'Loading...',
});

const CompanyPayment = Loadable({
    loader: () => import('../components/company/Payment'),
    loading: () => 'Loading...',
});

const CompanyEnd = Loadable({
    loader: () => import('../components/company/End'),
    loading: () => 'Loading...',
});

const CompanyManage = Loadable({
    loader: () => import('../components/company/Manage'),
    loading: () => 'Loading...',
});

const CompanyMore = Loadable({
    loader: () => import('../components/company/More'),
    loading: () => 'Loading...',
});


const CompanyRouter = () => (
  <Switch>
    <Route exact path="/company/presentation" component={CompanyPresentation} />
    <Route exact path="/company/more" component={CompanyMore} />
    <Route exact path="/company/identity" component={CompanyIdentity} />
    <Route exact path="/company/address" component={CompanyAddress} />
    <Route exact path="/company/wish" component={CompanyWish} />
    <Route exact path="/company/checkout" component={CompanyCheckout} />
    <Route exact path="/company/payment" component={CompanyPayment} />
    <Route exact path="/company/end" component={CompanyEnd} />
    <Route path="/company/manage" component={CompanyManage} />
  </Switch>  
);    
export default CompanyRouter;