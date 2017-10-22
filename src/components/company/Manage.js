import React, { Component } from 'react';
import request from '../../services/Net';
import CompanyManageDashboard from './manage/Dashboard';
import CompanyManageInfos from './manage/Infos.js';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			user : '',
			loading: true
		}
	}

	componentDidMount() {
		request({
			url : '/user',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.onBoard(res);
			this.setState({
				user : res,
				loading : false
			});
		})
		.catch((err) => {});
	}

	onBoard(user) {
		console.log(user);
		switch (user.onboard) {
			case 1:
				this.setState({
					redirect: 'identity'
				});
				break;
			case 2:
				this.setState({
					redirect: 'address'
				});
				break;
			default:
				break;
		}
	}

	render () {
		return (
				<div className="container py-4">
					<NotificationSystem ref="notif" />
					<div className="row">
						<div className="col-3">
							<img src={imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
							<br /><br />
							<ul className="list-group">
								<Link to="/company/manage"><li className="list-group-item active">Tableau de bord</li></Link>
								<Link to="/company/manage/infos"><li className="list-group-item">Mes informations</li></Link>
								<Link to="/company/manage/mypage"><li className="list-group-item">Ma page dediee</li></Link>
								<Link to="/company/manage/customize"><li className="list-group-item">Personnalisation</li></Link>
								<Link to="/company/manage/dashboard"><li className="list-group-item">Mes factures</li></Link>
								<Link to="/company/manage/dashboard"><li className="list-group-item">Deconnexion</li></Link>
							</ul>
						</div>
						<div className="col-9">
							<div className="row">
								<div className="col-12">
									{(this.state.loading)?'':
										(this.state.user && this.state.user.bundles[0] && !this.state.user.bundles[0].paid)?
										<p className="alert alert-danger">Vous n'avez pas encore reglé votre parrainage. <Link to="/company/checkout">Cliquez ici</Link> pour le faire maintenant</p>:
										(this.state.user && this.state.user.bundles[0])?
										<p>Nous parrainons {this.state.user.bundles[0].hives} ruches</p>
									:<Redirect to="/company/wish" />}
								</div>
							</div>
							<div className="row py-4">
								<div className="col-6 text-center"><Link to="#"><button className="btn btn-secondary">Ma page</button></Link></div>
								<div className="col-6 text-center"><Link to="#"><button className="btn btn-secondary">Personnaliser ma page</button></Link></div>
							</div>
							<div className="row">
								<div className="col-12">
									<Route exact path="/company/manage" component={CompanyManageDashboard} />
									<Route exact path="/company/manage/infos" component={CompanyManageInfos} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
