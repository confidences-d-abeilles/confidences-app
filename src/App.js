import React, { Component } from 'react';
import ContributorSignup from './components/contributor/Signup';
import ContributorManage from './components/contributor/Manage';
import CompanySignup from './components/company/Signup';
import CompanyManage from './components/company/Manage';
import CompanyPage from './components/company/Page';
import AdminManage from './components/admin/Manage';
import RuchesList from './components/ruches/List';
import Home from './components/Home';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div>
                        <ul>
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/contributor/signup">Inscription AA</Link></li>
                            <li><Link to="/company/signup">Inscription Entreprise</Link></li>
                            <li><Link to="/contributor/manage">Dashboard AA</Link></li>
                            <li><Link to="/company/manage">Dashboard Entreprise</Link></li>
                            <li><Link to="/company/page">Page Entreprise</Link></li>
                            <li><Link to="/admin">Dashboard Admin</Link></li>
                            <li><Link to="/ruches/list">Liste des ruches</Link></li>
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contributor/signup" component={ContributorSignup} />
                        <Route exact path="/company/signup" component={CompanySignup} />
                        <Route exact path="/contributor/manage" component={ContributorManage} />
                        <Route exact path="/company/manage" component={CompanyManage} />
                        <Route exact path="/company/page" component={CompanyPage} />
                        <Route exact path="/admin" component={AdminManage} />
                        <Route exact path="/ruches/list" component={RuchesList} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
