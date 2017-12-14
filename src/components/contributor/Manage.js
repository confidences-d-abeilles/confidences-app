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

import profile from '../../assets/img/profile2.png';

export default class ContributorManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			balance : 0,
			leads: 0,
			cleads: 0,
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
				loading : false,
				leads : res.leads.length,
				balance: res.balance
			})
			res.leads.map((lead) => {
				if (lead.converted) {
					this.setState({
						cleads: this.state.cleads + 1
					})
				}
				return null;
			});
		})
	}

	money() {
		request({
			url: '/user',
			method: 'put',
			data: {
				money_back: true
			}
		}, this.refs.notif).then((res) => {
			this.refs.notif.addNotification({
				message: 'Votre demande a bien été prise en compte, votre virement sera effectué par nos équipes dans les plus brefs délais',
				level: 'success'
			});
		});
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
						<img src={profile} alt="Logo entreprise" className="py-4 img-fluid" />
						<br />
						<ul className="list-group">
							<li className="list-group-item"><Link to="/contributor/manage">Tableau de bord</Link></li>
							<li className="list-group-item"><Link to="/contributor/manage/infos">Mes informations</Link></li>
							<li className="list-group-item"><Link to="/contributor/manage/approaches">Mes entreprises</Link></li>
							<li className="list-group-item"><Link to="/contributor/manage/contract">Mon contrat</Link></li>
							<li className="list-group-item"><Link to="/contributor/manage/conditions">Conditions spécifiques</Link></li>
							<li className="list-group-item"><Link to="/contributor/manage/help">Aide</Link></li>
						</ul>
					</div>
					<div className="col-9">
						<div className="row">
							<div className="col-8">
								Entreprises demarchées : {this.state.leads} / 10<br />
								Conversion : {this.state.cleads} / {this.state.leads}<br />
								Mon solde : {this.state.balance} €<br />
							</div>
							<div className="col-4">
								<p className="text-center">
									<Link to="/contributor/approach" className="btn btn-secondary">Demarcher une entreprise</Link>
								</p>
								<p className="text-center">
									<button className="btn btn-secondary" onClick={this.money.bind(this)}>Récupérer mon solde</button>
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
