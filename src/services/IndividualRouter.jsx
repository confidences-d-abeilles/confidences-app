import React from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';
import Loadable from 'react-loadable';

const IndividualPresentation = Loadable({
    loader: () => import( '../components/individual/Presentation'),
    loading: () => 'Loading...',
});

const IndividualAddress = Loadable({
    loader: () => import( '../components/individual/Address'),
    loading: () => 'Loading...',
});

const IndividualWish = Loadable({
    loader: () => import( '../components/individual/Wish'),
    loading: () => 'Loading...',
});

const IndividualCheckout = Loadable({
    loader: () => import( '../components/individual/Checkout'),
    loading: () => 'Loading...',
});

const IndividualPayement = Loadable({
    loader: () => import( '../components/individual/Payment'),
    loading: () => 'Loading...',
});

const IndividualEnd = Loadable({
    loader: () => import( '../components/individual/End'),
    loading: () => 'Loading...',
});

const IndividualManage = Loadable({
    loader: () => import( '../components/individual/Manage'),
    loading: () => 'Loading...',
});

const IndividualMore = Loadable({
    loader: () => import( '../components/individual/More'),
    loading: () => 'Loading...',
});

const CompanyRouter = () => (
    <Switch>
        <Route exact path="/individual/presentation" component={IndividualPresentation} />
        <Route exact path="/individual/more" component={IndividualMore} />
        <Route exact path="/individual/address" component={IndividualAddress} />
        <Route exact path="/individual/wish" component={IndividualWish} />
        <Route exact path="/individual/checkout" component={IndividualCheckout} />
        <Route exact path="/individual/payment" component={IndividualPayement} />
        <Route exact path="/individual/end" component={IndividualEnd} />
        <Route path="/individual/manage" component={IndividualManage} />
    </Switch>  
);    
export default CompanyRouter;