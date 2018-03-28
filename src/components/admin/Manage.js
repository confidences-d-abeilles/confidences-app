import React, { Component } from 'react';
import AdminManageUsers from './manage/Users'
import AdminManageFaq from './manage/Faq'
import AdminManageMails from './manage/Mails'
import AdminManageHives from './manage/Hives'
import AdminManageBundles from './manage/Bundles'
import AdminManageBundle from './manage/bundle/List'
import AdminManageServer from './manage/Server'
import Products from './manage/Products'
import Coupons from './manage/Coupons'
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import Meta from '../utils/Meta'

import {
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
					<Meta title="Dashboard"/>
					<NotificationSystem ref="notif" />
					<div className="row justify-content-center">
						<div className="col-lg-2 col-md-6">
							<ul className="list-group">
								<li className="list-group-item active">Gestion clients</li>
								<Link to="/admin/manage/users" className="list-group-item">Gerer les utilisateurs</Link>
								<Link to="/admin/manage/hives" className="list-group-item">Gerer les ruches</Link>
								<Link to="/admin/manage/bundles" className="list-group-item">Gerer les parrainages</Link>
								<Link to="/admin/manage/mails" className="list-group-item">Gerer les envois</Link>
								<li className="list-group-item active">Gestion du contenu</li>
								<Link to="/admin/manage/products" className="list-group-item">Gerer les produits</Link>
								<Link to="/admin/manage/coupons" className="list-group-item">Gerer les coupons</Link>
								<Link to="/admin/manage/faq" className="list-group-item">Gerer la FAQ</Link>
								<li className="list-group-item active">Administration plateforme</li>
								<Link to="/admin/manage/server" className="list-group-item">Espace technique</Link>
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
									<Route exact path="/admin/manage/bundle" component={AdminManageBundle} />
									<Route exact path="/admin/manage/faq" component={AdminManageFaq} />
									<Route exact path="/admin/manage/products" component={Products} />
									<Route exact path="/admin/manage/coupons" component={Coupons} />
									<Route exact path="/admin/manage/server" component={AdminManageServer} />
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
