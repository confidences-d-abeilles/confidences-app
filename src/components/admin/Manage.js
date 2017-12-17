import React, { Component } from 'react';
import AdminManageUsers from './manage/Users'
import AdminManageFaq from './manage/Faq'
import AdminManageMails from './manage/Mails'
import AdminManageHives from './manage/Hives'
import AdminManageBundles from './manage/Bundles'
import AdminManageServer from './manage/Server'
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'

import {
	// BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			notifications: null
		}
	}

	componentDidMount() {
		request({
			url: '/admin/notifications',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				notifications: res
			});
		})
	}


	render () {
		return (
				<div className="container-fluid py-4">
					<NotificationSystem ref="notif" />
					<div className="row justify-content-center">
						<div className="col-lg-2 col-md-6">
							<ul className="list-group">
								<li className="list-group-item"><Link to="/admin/manage/users">Gerer les utilisateurs</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/faq">Gerer la FAQ</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/hives">Gerer les ruches</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/bundles">Gerer les parrainages</Link>&nbsp;{this.state.notifications && this.state.notifications.bundle > 0 && <span className="badge badge-pill badge-danger">{this.state.notifications.bundle}</span>}</li>
								<li className="list-group-item"><Link to="/admin/manage/mails">Gerer les envois</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/server">Espace technique</Link></li>
							</ul>
						</div>
						<div className="col-lg-10 col-md-12">
							<div className="row">
								<div className="col-12">
									{(this.state.user)?this.checkInfos():''}
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<Route exact path="/admin/manage/users" component={AdminManageUsers} />
									<Route exact path="/admin/manage/mails" component={AdminManageMails} />
									<Route exact path="/admin/manage/hives" component={AdminManageHives} />
									<Route exact path="/admin/manage/bundles" component={AdminManageBundles} />
									<Route exact path="/admin/manage/faq" component={AdminManageFaq} />
									<Route exact path="/admin/manage/server" component={AdminManageServer} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
