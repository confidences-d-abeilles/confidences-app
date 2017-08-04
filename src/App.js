import React, { Component } from 'react';
import ContributorSignup from './components/contributor/Signup';
import CompanySignup from './components/company/Signup';
import ContributorManage from './components/contributor/Manage';
import CompanyManage from './components/company/Manage';
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
                        </ul>
                    </div>
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contributor/signup" component={ContributorSignup} />
                        <Route exact path="/company/signup" component={CompanySignup} />
                        <Route exact path="/contributor/manage" component={ContributorManage} />
                        <Route exact path="/company/manage" component={CompanyManage} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
