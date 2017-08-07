import React, { Component } from 'react';

//AA

import ContributorSignup from './components/contributor/Signup';
import ContributorManage from './components/contributor/Manage';

//particulier

import IndividualSignup from './components/individual/Signup';
import IndividualPresentation from './components/individual/Presentation';

//company

import CompanyPresentation from './components/company/Presentation';
import CompanySignup from './components/company/Signup';
import CompanyManage from './components/company/Manage';
import CompanyPage from './components/company/Page';

//admin

import AdminManage from './components/admin/Manage';
import RuchesList from './components/ruches/List';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Home} />
						<Route exact path="/contributor/signup" component={ContributorSignup} />
						<Route exact path="/contributor/manage" component={ContributorManage} />

						<Route exact path="/individual/signup" component={IndividualSignup} />
						<Route exact path="/individual/presentation" component={IndividualPresentation} />

						<Route exact path="/company/presentation" component={CompanyPresentation} />
						<Route exact path="/company/signup" component={CompanySignup} />
						<Route exact path="/company/manage" component={CompanyManage} />
						<Route exact path="/company/page" component={CompanyPage} />

                        <Route exact path="/admin" component={AdminManage} />
                        <Route exact path="/ruches/list" component={RuchesList} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;
