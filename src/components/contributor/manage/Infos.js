
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContributorManageInfosSocial from './infos/Social';
import ContributorManageInfosBank from './infos/Bank';



export default class ContributorManageInfos extends Component {

	render () {
		return (
			<Router>
			<p>
				Mes informations
				<ul className="nav nav-tabs">
					<li className="nav-item">
						<Link className="nav-link" to="/contributor/manage/infos">Mes coordonnees</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/contributor/manage/infos/bank">Mes informations bancaires</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Modifier mon mot de passe</a>
					</li>
				</ul>
				<div>
					<Route exact path="/contributor/manage/infos" component={ContributorManageInfosSocial} />
					<Route exact path="/contributor/manage/infos/bank" component={ContributorManageInfosBank} />
				</div>
			</p>
		</Router>
		);
	}
}
