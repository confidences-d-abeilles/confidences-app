
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContributorManageInfosSocial from './infos/Social';
import ContributorManageInfosBank from './infos/Bank';
import Account from './infos/Account';


export default class ContributorManageInfos extends Component {
  render() {
    return (
      <Router>
        <div>
          <h2>Informations</h2>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link" to="/contributor/manage/infos/account">Mon compte</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contributor/manage/infos">Mes coordonnees</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contributor/manage/infos/bank">Mes informations bancaires</Link>
            </li>
          </ul>
          <div>
            <Route exact path="/contributor/manage/infos" component={ContributorManageInfosSocial} />
            <Route exact path="/contributor/manage/infos/bank" component={ContributorManageInfosBank} />
            <Route exact path="/contributor/manage/infos/account" component={Account} />

          </div>
        </div>
      </Router>
    );
  }
}
