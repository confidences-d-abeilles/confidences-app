import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';

import { contributorOnly } from '../services/AuthService'
import { individualOnly } from '../services/AuthService'
import { adminOnly } from '../services/AuthService'
import { companyOnly } from '../services/AuthService'

import MyAccount from './MyAccount';
import Logout from './Logout';

//AA

import ContributorPresentation from './contributor/Presentation';
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

import IndividualPresentation from './individual/Presentation';
import IndividualAddress from './individual/Address';
import IndividualWish from './individual/Wish';
import IndividualCheckout from './individual/Checkout';
import IndividualPayement from './individual/Payment';
import IndividualEnd from './individual/End';
import IndividualManage from './individual/Manage';
import IndividualMore from './individual/More';

//company

import CompanyPresentation from './company/Presentation';
import CompanyIdentity from './company/Identity';
import CompanyAddress from './company/Address';
import CompanyWish from './company/Wish';
import CompanyCheckout from './company/Checkout';
import CompanyPayement from './company/Payment';
import CompanyEnd from './company/End';
import CompanyManage from './company/Manage';
import CompanyMore from './company/More';


//public

import RuchesList from './ruches/List';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Signup from './Signup';
import Presignup from './Presignup';
import Cgv from './Cgv';
import Mentions from './Mentions';
import About from './About';
import Team from './Team';
import Contact from './Contact';
import Jobs from './Jobs';
import JobsReact from './JobsReact';
import JobsDesigner from './JobsDesigner';
import JobsMarketing from './JobsMarketing';
import JobsBusinessDev from './JobsBusinessDev';
import JobsEvent from './JobsEvent';
import Faq from './Faq';
import Prices from './Prices';
import Hives from './Hives';
import Hive from './Hive';
import Forgot from './Forgot';
import Reset from './Reset';
import Apply from './Apply';
import RequestLabel from './RequestLabel';
import Present from './Present';
import Confirm from './Confirm';
import NotFound from './utils/NotFound';

import Pay from './Pay';

//admin

import AdminManage from './admin/Manage';

export default class MyRouter extends Component {

	render() {
		return (
			<div id="wrapper">
				<div id="noFooter">
					<Header />
						<div className="container-fluid">
							<Route path="/contributor/wish" component={contributorOnly} />
							<Route path="/contributor/lead" component={contributorOnly} />
							<Route path="/contributor/manage" component={contributorOnly} />
							<Route path="/admin" component={adminOnly} />
							<Route path="/individual/wish" component={individualOnly} />
							<Route path="/individual/manage" component={individualOnly} />
							<Route path="/company/wish" component={companyOnly} />
							<Route path="/company/manage" component={companyOnly} />
							<Switch>
								<Route exact path="/" component={Home} />
								<Route exact path="/forgot" component={Forgot} />
								<Route exact path="/reset/:token" component={Reset} />
								<Route exact path="/login" component={Login} />
								<Route exact path="/contributor/presentation" component={ContributorPresentation} />
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
								<Route exact path="/individual/presentation" component={IndividualPresentation} />
								<Route exact path="/individual/more" component={IndividualMore} />
								<Route exact path="/individual/address" component={IndividualAddress} />
								<Route exact path="/individual/wish" component={IndividualWish} />
								<Route exact path="/individual/checkout" component={IndividualCheckout} />
								<Route exact path="/individual/payment" component={IndividualPayement} />
								<Route exact path="/individual/end" component={IndividualEnd} />
								<Route path="/individual/manage" component={IndividualManage} />
								<Route exact path="/company/presentation" component={CompanyPresentation} />
								<Route exact path="/company/more" component={CompanyMore} />
								<Route exact path="/company/identity" component={CompanyIdentity} />
								<Route exact path="/company/address" component={CompanyAddress} />
								<Route exact path="/company/wish" component={CompanyWish} />
								<Route exact path="/company/checkout" component={CompanyCheckout} />
								<Route exact path="/company/payment" component={CompanyPayement} />
								<Route exact path="/company/end" component={CompanyEnd} />
								<Route path="/company/manage" component={CompanyManage} />
								<Route exact path="/presignup" component={Presignup} />
								<Route exact path="/signup/:type" component={Signup} />
								<Route path="/admin/manage" component={AdminManage} />
								<Route exact path="/ruches/list" component={RuchesList} />
								<Route exact path="/present" component={Present} />
								<Route exact path="/faq" component={Faq} />
								<Route exact path="/about" component={About} />
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
								<Route exact path="/cgv" component={Cgv} />
								<Route exact path="/mentions_legales" component={Mentions} />
								<Route exact path="/tarifs" component={Prices} />
								<Route exact path="/prices" component={Prices} />
								<Route exact path="/hives" component={Hives} />
								<Route exact path="/hive/:id" component={Hive} />
								<Route exact path="/confirm/:token" component={Confirm} />
								<Route exact path="/logout" component={Logout} />
								<Route exact path="/account" component={MyAccount} />
								<Route exact path="/pay" component={Pay} />
								<Route component={NotFound} />
							</Switch>
						</div>
					</div>
				<Footer />
			</div>
		)
	}
}
