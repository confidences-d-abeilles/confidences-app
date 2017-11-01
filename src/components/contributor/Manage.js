import React, { Component } from 'react';
import request from '../../services/Net';
import ContributorManageDashboard from './manage/Dashboard';
import ContributorManageInfos from './manage/Infos';
import ContributorManageApproaches from './manage/Approaches';
import ContributorManageConditions from './manage/Conditions';
import ContributorManageContract from './manage/Contract';
import ContributorManageHelp from './manage/Help';
import NotificationSystem from 'react-notification-system'

import {
	Route,
	Link,
	Redirect
} from 'react-router-dom';

import profile from '../../assets/img/profile.png';

export default class ContributorManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			balance : 0,
			leads: 0,
			contracts: [],
			loading : true
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				user : res,
				loading : false
			})
		})
	}

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(!this.state.loading && this.state.user.contracts.length === 0)?<Redirect to="/contributor/wish" />:''}
				{(!this.state.loading && !this.state.user.addresses.length)?<Redirect to="/contributor/address" />:''}
				{(!this.state.loading && this.state.user.contracts.length > 0 && !this.state.user.contracts[0].signed)?<Redirect to="/contributor/checkout" />:''}
				<div className="row">
					<div className="col-3">
						<img src={profile} alt="Logo entreprise" className="img-fluid" />
						<br />
						<ul className="list-group">
							<Link to="/contributor/manage"><li className="list-group-item">Tableau de bord</li></Link>
							<Link to="/contributor/manage/infos"><li className="list-group-item ">Mes informations</li></Link>
							<Link to="/contributor/manage/approaches"><li className="list-group-item">Mes demarches</li></Link>
							<Link to="/contributor/manage/contract"><li className="list-group-item">Mon contrat</li></Link>
							<Link to="/contributor/manage/conditions"><li className="list-group-item disabled">Conditions spécifiques</li></Link>
							<Link to="/contributor/manage/help"><li className="list-group-item disabled">Aide</li></Link>
						</ul>
					</div>
					<div className="col-9">
						<div className="row">
							<div className="col-8">
								Entreprises demarchees : {this.state.leads} / 10<br />
							Conversion : {this.state.cleads} / {this.state.leads}<br />
								Cagnotte : {this.state.balance} €<br />
							</div>
							<div className="col-4">
								<p className="text-center">
									<Link to="/contributor/approach" className="btn btn-secondary">Demarcher une entreprise</Link>
								</p>
								<p className="text-center">
									<button className="btn btn-secondary" disabled>Retirer ma cagnotte</button>
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
		);
	}
}
