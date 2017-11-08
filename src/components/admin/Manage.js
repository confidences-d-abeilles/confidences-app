import React, { Component } from 'react';
// import request from '../../services/Net';
import AdminManageUsers from './manage/Users'
import AdminManageNews from './manage/News'
import AdminManageFaq from './manage/Faq'
import AdminManageMails from './manage/Mails'
import AdminManageHives from './manage/Hives'
import AdminManageBundles from './manage/Bundles'

import {
	// BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
	}


	render () {
		return (
				<div className="container-fluid py-4">
					<NotificationSystem ref="notif" />
					<div className="row">
						<div className="col-2">
							<ul className="list-group">
								<li className="list-group-item"><Link to="/admin/manage/users">Gerer les utilisateurs</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/news">Gerer les news</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/faq">Gerer la FAQ</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/hives">Gerer les ruches</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/bundles">Gerer les parrainages</Link></li>
								<li className="list-group-item"><Link to="/admin/manage/mails">Gerer les envois</Link></li>
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
									<Route exact path="/admin/manage/users" component={AdminManageUsers} />
									<Route exact path="/admin/manage/mails" component={AdminManageMails} />
									<Route exact path="/admin/manage/hives" component={AdminManageHives} />
									<Route exact path="/admin/manage/news" component={AdminManageNews} />
									<Route exact path="/admin/manage/bundles" component={AdminManageBundles} />
									<Route exact path="/admin/manage/faq" component={AdminManageFaq} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
