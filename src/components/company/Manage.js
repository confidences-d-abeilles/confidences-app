import React, { Component } from 'react';
import request from '../../services/Net';
import CompanyManageDashboard from './manage/Dashboard';
import CompanyManageInfos from './manage/Infos';
import CompanyManageMyPage from './manage/MyPage';
import CompanyManageBills from './manage/Bills'
import CompanyManageCustomize from './manage/Customize'

import {
	Route,
	Link,
	Redirect
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import imgPlaceholder from '../../assets/img/img-placeholder.gif';

const config = require('../../config.js');

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			user : null
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				user : res
			});
		})
		.catch((err) => {});
	}

	checkInfos() {
		if (!this.state.user.company_name) {
			return (<Redirect to="/company/identity" />);
		}
		if (this.state.user.addresses && !this.state.user.addresses[0]) {
			return (<Redirect to="/company/address" />);
		}
		if (this.state.user && this.state.user.bundles[0] && !this.state.user.bundles[0].paid) {
			return (
				<p className="alert alert-danger">Vous n'avez pas encore reglé votre parrainage. <Link to="/company/checkout">Cliquez ici</Link> pour le faire maintenant</p>
			);
		}
		if (this.state.user && !this.state.user.bundles[0]) {
			return (<Redirect to="/company/wish" />);
		}
	}

	render () {
		return (
				<div className="container py-4">
					<NotificationSystem ref="notif" />
					<div className="row">
						<div className="col-3">
							<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.logo:imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
							<br /><br />
							<ul className="list-group">
								<Link to="/company/manage"><li className="list-group-item">Tableau de bord</li></Link>
								<Link to="/company/manage/infos"><li className="list-group-item">Mes informations</li></Link>
								<Link to="/company/manage/mypage"><li className="list-group-item">Ma page dediee</li></Link>
								<Link to="/company/manage/customize"><li className="list-group-item">Personnalisation</li></Link>
								<Link to="/company/manage/bills"><li className="list-group-item">Mes factures</li></Link>
								<Link to="/logout"><li className="list-group-item">Deconnexion</li></Link>
							</ul>
						</div>
						<div className="col-9">
							<div className="row">
								<div className="col-12">
									{(this.state.user)?this.checkInfos():''}
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<Route exact path="/company/manage" component={CompanyManageDashboard} />
									<Route exact path="/company/manage/infos" component={CompanyManageInfos} />
									<Route exact path="/company/manage/mypage" component={CompanyManageMyPage} />
									<Route exact path="/company/manage/customize" component={CompanyManageCustomize} />
									<Route exact path="/company/manage/bills" component={CompanyManageBills} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
