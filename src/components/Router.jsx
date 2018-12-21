import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ManageRedirections from './utils/ManageRedirections';

import {
  contributorOnly,
  individualOnly,
  adminOnly,
  companyOnly,
} from '../services/AuthService';

import Header from './Header';
import Footer from './Footer';

// AA

import ContributorAddress from './contributor/Address';
import ContributorWish from './contributor/Wish';
import ContributorFinal from './contributor/Final';
import ContributorCheckout from './contributor/Checkout';
import ContributorManage from './contributor/Manage';
import ContributorApproach from './contributor/Approach';
import ContributorLead from './contributor/Lead';
import ContributorLeadOk from './contributor/LeadOk';
import ContributorPreLead from './contributor/PreLead';
import ContributorParrains from './contributor/Parrains';

// particulier

import IndividualRouter from '../services/IndividualRouter';

// Company

import CompanyRouter from '../services/CompanyRouter';

// public

import PublicRouter from '../services/PublicRouter';

// admin

import AdminManage from './admin/Manage';

export default () => (
  <div id="wrapper">
    <div id="noFooter">
      <Header />
      <div className="container-fluid">
        {/* Manage redirections, like 301 redirections */}
        <ManageRedirections />

        <Route path="/contributor/wish" component={contributorOnly} />
        <Route path="/contributor/lead" component={contributorOnly} />
        <Route path="/contributor/manage" component={contributorOnly} />
        <Route path="/admin" component={adminOnly} />
        <Route path="/individual/wish" component={individualOnly} />
        <Route path="/individual/payment" component={individualOnly} />
        <Route path="/individual/manage" component={individualOnly} />
        <Route path="/company/wish" component={companyOnly} />
        <Route path="/company/payment" component={companyOnly} />
        <Route path="/company/manage" component={companyOnly} />
        <Switch>
          <Route exact path="/contributor/checkout" component={ContributorCheckout} />
          <Route exact path="/contributor/wish" component={ContributorWish} />
          <Route exact path="/contributor/final" component={ContributorFinal} />
          <Route path="/contributor/approach" component={ContributorApproach} />
          <Route path="/contributor/parrains" component={ContributorParrains} />
          <Route exact path="/contributor/prelead" component={ContributorPreLead} />
          <Route exact path="/contributor/lead" component={ContributorLead} />
          <Route exact path="/contributor/leadok" component={ContributorLeadOk} />
          <Route exact path="/contributor/address" component={ContributorAddress} />
          <Route path="/contributor/manage" component={ContributorManage} />
          <Route path="/company" component={CompanyRouter} />
          <Route path="/individual" component={IndividualRouter} />
          <Route path="/admin/manage" component={AdminManage} />
          <Route path="/" component={PublicRouter} />
        </Switch>
      </div>
    </div>
    <Footer />
  </div>
);
