import React, { Component } from 'react';
import { request } from '../../services/NetService';
import ContributorManageDashboard from './manage/Dashboard';
import ContributorManageInfos from './manage/Infos';
import ContributorManageApproaches from './manage/Approaches';
import ContributorManageConditions from './manage/Conditions';
import ContributorManageContract from './manage/Contract';
import ContributorManageHelp from './manage/Help';



import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import profile from '../../assets/img/profile.png';

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
							<img src={profile} alt="Logo entreprise" className="img-fluid" />
							<br />
							<ul className="list-group">
								<Link to="/contributor/manage"><li className="list-group-item">Tableau de bord</li></Link>
								<Link to="/contributor/manage/infos"><li className="list-group-item ">Mes informations</li></Link>
								<Link to="/contributor/manage/approaches"><li className="list-group-item">Mes demarches</li></Link>
								<Link to="/contributor/manage/contract"><li className="list-group-item">Mon contrat</li></Link>
								<Link to="/contributor/manage/conditions"><li className="list-group-item">Conditions spécifiques</li></Link>
								<Link to="/contributor/manage/help"><li className="list-group-item">Aide</li></Link>
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
							<Route exact path="/contributor/manage/conditions" component={ContributorManageConditions} />
							<Route exact path="/contributor/manage/contract" component={ContributorManageContract} />
							<Route exact path="/contributor/manage/help" component={ContributorManageHelp} />
							<Route path="/contributor/manage/infos" component={ContributorManageInfos} />
							<Route exact path="/contributor/manage/approaches" component={ContributorManageApproaches} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
