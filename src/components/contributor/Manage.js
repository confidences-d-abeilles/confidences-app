import React, { Component } from 'react';
import { request } from '../../services/NetService';
import ContributorManageDashboard from './manage/Dashboard';
import ContributorManageInfos from './manage/Infos.js';
import ContributorManageApproaches from './manage/Approaches';

import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class ContributorManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			balance : 0,
			leads: 0,
			loading : true
		}
	}

	componentWillMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					balance: content.balance,
					leads: content.leads.length
				});
			}
		});
	}

	render () {
		return (
			<Router>
				<div className="container-fluid py-4">
					<div className="row">
						<div className="col-3">
							<img src={imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
							<br /><br />
							<ul className="list-group">
								<Link to="/contributor/manage"><li className="list-group-item">Tableau de bord</li></Link>
								<Link to="/contributor/manage/infos"><li className="list-group-item ">Mes informations</li></Link>
								<Link to="/contributor/manage/approaches"><li className="list-group-item">Mes demarches</li></Link>
								<Link to="/contributor/manage/c"><li className="list-group-item">Personnalisation</li></Link>
								<Link to="/contributor/manage/dashboard"><li className="list-group-item">Mes factures</li></Link>
								<Link to="/contributor/manage/dashboard"><li className="list-group-item">Deconnexion</li></Link>
							</ul>
						</div>
						<div className="col-9">
							<div className="row">
								<div className="col-8">
									Entreprises demarchees : {this.state.leads} / 10<br />
									Convertion : y / {this.state.leads}<br />
									Nombre de ruches vendues : z<br /><br />
									Cagnotte : {this.state.balance} €<br />
								</div>
								<div className="col-4">
									<p className="text-center">
										<Link to="/contributor/approach" className="btn btn-secondary">Demarcher une entreprise</Link>
									</p>
									<p className="text-center">
										<button className="btn btn-secondary">Retirer ma cagnotte</button>
									</p>
								</div>
							</div>
							<Route exact path="/contributor/manage" component={ContributorManageDashboard} />
							<Route path="/contributor/manage/infos" component={ContributorManageInfos} />
							<Route exact path="/contributor/manage/approaches" component={ContributorManageApproaches} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
