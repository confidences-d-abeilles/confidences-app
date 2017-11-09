import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

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
import IndividualEnd from './individual/End';
import IndividualManage from './individual/Manage';

//company

import CompanyPresentation from './company/Presentation';
import CompanyIdentity from './company/Identity';
import CompanyAddress from './company/Address';
import CompanyWish from './company/Wish';
import CompanyCheckout from './company/Checkout';
import CompanyEnd from './company/End';
import CompanyManage from './company/Manage';
import CompanyFinal from './company/Final';

//admin

import AdminManage from './admin/Manage';
import RuchesList from './ruches/List';
import Home from './Home';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';


// other

import Signup from './Signup';
import Cgv from './Cgv';
import Mentions from './Mentions';
import About from './About';
import Contact from './Contact';
import Jobs from './Jobs';
import Faq from './Faq';
import Tarifs from './Tarifs';
import Hives from './Hives'


export default class Wrapper extends Component {

	render () {
		return (
			<div id="wrapper">
				<div id="noFooter">
					<Header />
					<div className="container-fluid">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/logout" component={Logout} />
							<Route exact path="/account" component={MyAccount} />
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
							<Route exact path="/individual/address" component={IndividualAddress} />
							<Route exact path="/individual/wish" component={IndividualWish} />
							<Route exact path="/individual/checkout" component={IndividualCheckout} />
							<Route exact path="/individual/end" component={IndividualEnd} />
							<Route path="/individual/manage" component={IndividualManage} />

							<Route exact path="/company/presentation" component={CompanyPresentation} />
							<Route exact path="/company/identity" component={CompanyIdentity} />
							<Route exact path="/company/address" component={CompanyAddress} />
							<Route exact path="/company/wish" component={CompanyWish} />
							<Route exact path="/company/checkout" component={CompanyCheckout} />
							<Route exact path="/company/final" component={CompanyFinal} />
							<Route exact path="/company/end" component={CompanyEnd} />
							<Route path="/company/manage" component={CompanyManage} />

							<Route exact path="/signup/:type" component={Signup} />

							<Route path="/admin/manage" component={AdminManage} />
							<Route exact path="/ruches/list" component={RuchesList} />

							<Route exact path="/faq" component={Faq} />
							<Route exact path="/about" component={About} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/jobs" component={Jobs} />
							<Route exact path="/cgv" component={Cgv} />
							<Route exact path="/mentions_legales" component={Mentions} />
							<Route exact path="/tarifs" component={Tarifs} />
							<Route exact path="/hives" component={Hives} />
						</Switch>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
