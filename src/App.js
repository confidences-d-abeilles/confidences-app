import React, { Component } from 'react';

//AA

import ContributorSignup from './components/contributor/Signup';
import ContributorManage from './components/contributor/Manage';

//particulier

import IndividualPresentation from './components/individual/Presentation';
import IndividualSignup from './components/individual/Signup';
import IndividualAddress from './components/individual/Address';
import IndividualWish from './components/individual/Wish';
import IndividualCheckout from './components/individual/Checkout';
import IndividualEnd from './components/individual/End';
import IndividualManage from './components/individual/Manage';

//company

import CompanyPresentation from './components/company/Presentation';
import CompanySignup from './components/company/Signup';
import CompanyIdentity from './components/company/Identity';
import CompanyAddress from './components/company/Address';
import CompanyWish from './components/company/Wish';
import CompanyCheckout from './components/company/Checkout';
import CompanyEnd from './components/company/End';
import CompanyManage from './components/company/Manage';
import CompanyPage from './components/company/Page';

//admin

import AdminManage from './components/admin/Manage';
import RuchesList from './components/ruches/List';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div id="wrapper">
					<div id="noFooter">
						<Header />
						<div className="container">
							<Route exact path="/" component={Home} />
							<Route exact path="/login" component={Login} />

							<Route exact path="/contributor/signup" component={ContributorSignup} />
							<Route exact path="/contributor/manage" component={ContributorManage} />

							<Route exact path="/individual/presentation" component={IndividualPresentation} />
							<Route exact path="/individual/signup" component={IndividualSignup} />
							<Route exact path="/individual/address" component={IndividualAddress} />
							<Route exact path="/individual/wish" component={IndividualWish} />
							<Route exact path="/individual/checkout" component={IndividualCheckout} />
							<Route exact path="/individual/end" component={IndividualEnd} />
							<Route exact path="/individual/manage" component={IndividualManage} />

							<Route exact path="/company/presentation" component={CompanyPresentation} />
							<Route exact path="/company/signup" component={CompanySignup} />
							<Route exact path="/company/identity" component={CompanyIdentity} />
							<Route exact path="/company/address" component={CompanyAddress} />
							<Route exact path="/company/wish" component={CompanyWish} />
							<Route exact path="/company/checkout" component={CompanyCheckout} />
							<Route exact path="/company/end" component={CompanyEnd} />
							<Route exact path="/company/manage" component={CompanyManage} />

							<Route exact path="/company/page" component={CompanyPage} />

							<Route exact path="/admin" component={AdminManage} />
							<Route exact path="/ruches/list" component={RuchesList} />
						</div>
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
