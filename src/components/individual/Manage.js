import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import request from '../../services/Net';
import { isLoggedIn } from '../../services/AuthService';
import { Redirect, Route, Link } from 'react-router-dom';
import IndividualManageInfos from './manage/Infos'
import Bills from './manage/Bills'
import NotificationSystem from 'react-notification-system'
import Account from './manage/Account'
import Custom from './manage/Custom';
import profile from '../../assets/img/profile2.png';

export default class IndividualManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'GET'
		}, this.refs.notif).then((res) => {
			this.setState({
					user: res
			});
		});
	}

	checkInfos() {
		if (this.state.user.addresses && !this.state.user.addresses[0]) {
			return (<Redirect to="/individual/address" />);
		}
		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 0 ) {
			return (
				<p className="alert alert-danger mt-4">Vous n'avez pas encore reglé votre parrainage. <Link to="/individual/checkout">Cliquez ici</Link> pour le faire maintenant</p>
			);
		}

		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 1 ) {
			return (
				<p className="alert alert-warning mt-4">La validation du règlement de votre parrainage est en cours</p>
			);
		}
		if (this.state.user && !this.state.user.bundles[0]) {
			return (<Redirect to="/individual/wish" />);
		}
		if (this.state.user && this.state.user.hive_id) {
			return (
				<p className="text-center my-5">
					<Link className="btn btn-secondary" to={'/hive/'+this.state.user.hive_id}>Voir la page de ma ruche</Link>
				</p>
			)
		}
	}

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(!isLoggedIn)?<Redirect to="/" />:null}
				<div className="row">
					<div className="col-3">
						<img src={profile} alt="Default profile" className="img-fluid" />
						<ul className="list-group">
							<li className="list-group-item"><Link to="/individual/manage/infos">Mes informations</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/bills">Mes factures</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/customize">Mes pots de miel</Link></li>
							<li className="list-group-item"><Link to="/logout">Deconnexion</Link></li>
						</ul>
					</div>
					<div className="col-9">
						<div className="row">
							<div className="col-12">
								{(this.state.user)?this.checkInfos():''}
							</div>
						</div>
						<Route exact path="/individual/manage/bills" component={Bills} />
						<Route exact path="/individual/manage/customize" component={Custom} />
						<Route exact path="/individual/manage/infos" component={IndividualManageInfos} />
						<Route exact path="/individual/manage/account" component={Account} />
					</div>
				</div>
			</div>
		);
	}
}
