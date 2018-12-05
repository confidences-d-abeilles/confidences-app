import React, { Component } from 'react';
import {
	Switch,
	Route
} from 'react-router-dom';

import ManageRedirections from './utils/ManageRedirections';

import { contributorOnly } from '../services/AuthService'
import { individualOnly } from '../services/AuthService'
import { adminOnly } from '../services/AuthService'
import { companyOnly } from '../services/AuthService'

import MyAccount from './MyAccount';
import Logout from './Logout';

//AA

import ContributorAddress from './contributor/Address';
import ContributorWish from './contributor/Wish';
import ContributorFinal from './contributor/Final';
import ContributorCheckout from './contributor/Checkout';
import ContributorManage from './contributor/Manage';
import ContributorApproach from './contributor/Approach';
import ContributorLead from './contributor/Lead';
import ContributorLeadOk from './contributor/LeadOk';
import ContributorPreLead from './contributor/PreLead';
import ContributorParrains from './contributor/Parrains'

//particulier

import IndividualRouter from '../services/IndividualRouter';

// Company

import CompanyRouter from '../services/CompanyRouter';


//public

import RuchesList from './ruches/List';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Signup from './Signup';
import Presignup from './Presignup';
import Cgv from './static/Cgv';
import Mentions from './static/Mentions';
import About from './static/About';
import Ourvalues from './static/Ourvalues';
import Team from './Team';
import Contact from './static/Contact';
import Jobs from './static/jobs/Jobs';
import JobsReact from './static/jobs/JobsReact';
import JobsDesigner from './static/jobs/JobsDesigner';
import JobsMarketing from './static/jobs/JobsMarketing';
import JobsBusinessDev from './static/jobs/JobsBusinessDev';
import JobsEvent from './static/jobs/JobsEvent';
import Faq from './static/Faq';
import Prices from './static/Prices';
import Hives from './Hives';
import Hive from './Hive';
import Forgot from './Forgot';
import Reset from './Reset';
import Apply from './static/Apply';
import RequestLabel from './RequestLabel';
import Present from './Present';
import Confirm from './Confirm';
import NotFound from './utils/NotFound';
import Newslettersignup from './static/Newslettersignup';
import Partners from './static/Partners';

//admin

import AdminManage from './admin/Manage';

export default class MyRouter extends Component {

	render() {
		return (
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
							<Route exact path="/" component={Home} />
							<Route exact path="/forgot" component={Forgot} />
							<Route exact path="/reset/:token" component={Reset} />
							<Route path="/login" component={Login} />
							<Route exact path="/partners" component={Partners} />
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
							<Route exact path="/presignup" component={Presignup} />
							<Route exact path="/signup/:type" component={Signup} />
							<Route path="/admin/manage" component={AdminManage} />
							<Route exact path="/ruches/list" component={RuchesList} />
							<Route exact path="/present" component={Present} />
							<Route exact path="/faq" component={Faq} />
							<Route exact path="/about" component={About} />
							<Route exact path="/ourvalues" component={Ourvalues} />
							<Route exact path="/team" component={Team} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/apply" component={Apply} />
							<Route exact path="/requestlabel" component={RequestLabel} />
							<Route exact path="/jobs" component={Jobs} />
							<Route exact path="/jobs/reactjs" component={JobsReact} />
							<Route exact path="/jobs/designer" component={JobsDesigner} />
							<Route exact path="/jobs/marketing" component={JobsMarketing} />
							<Route exact path="/jobs/businessdev" component={JobsBusinessDev} />
							<Route exact path="/jobs/event" component={JobsEvent} />
							<Route exact path="/newsletter/signup" component={Newslettersignup} />
							<Route exact path="/cgv" component={Cgv} />
							<Route exact path="/mentions_legales" component={Mentions} />
							<Route exact path="/tarifs" component={Prices} />
							<Route exact path="/prices" component={Prices} />
							<Route exact path="/hives" component={Hives} />
							<Route exact path="/hive/:id" component={Hive} />
							<Route exact path="/confirm/:token" component={Confirm} />
							<Route exact path="/logout" component={Logout} />
							<Route exact path="/account" component={MyAccount} />
							<Route component={NotFound} />
						</Switch>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}
