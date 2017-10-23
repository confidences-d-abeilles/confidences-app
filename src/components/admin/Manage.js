import React, { Component } from 'react';
import request from '../../services/Net';
import AdminManageUsers from './manage/Users'
import AdminManageNews from './manage/News'

import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
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
				<div className="container py-4">
					<NotificationSystem ref="notif" />
					<div className="row">
						<div className="col-3">
							<ul className="list-group">
								<Link to="/admin/manage/users"><li className="list-group-item">Gerer les utilisateurs</li></Link>
								<Link to="/admin/manage/news"><li className="list-group-item">Gerer les news</li></Link>
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
									<Route exact path="/admin/manage/news" component={AdminManageNews} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
