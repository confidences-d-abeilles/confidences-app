import React, { Component } from 'react';
import AdminManageUsers from './manage/Users'
import AdminManageFaq from './manage/Faq'
import AdminManageMails from './manage/Mails'
import AdminManageHives from './manage/Hives'
import AdminManageBundles from './manage/Bundles'
import AdminManageBundle from './manage/bundle/MainScreen'
import AdminManageBundleId from './manage/bundle/Uniq'
import AdminManageServer from './manage/Server'
import Products from './manage/Products'
import Coupons from './manage/Coupons'
import request from '../../services/Net'
import FontAwesome from 'react-fontawesome'
import NotificationSystem from 'react-notification-system'
import Meta from '../utils/Meta'

import {
	Route,
	Link,
	Switch
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
				<div className="container-fluid py-4 sticky-top">
					<Meta title="Dashboard"/>
					<NotificationSystem ref="notif" />
					<div className="row justify-content-center">
						<div className="col-lg-2 col-md-6">
							<ul className="list-group">
								<li className="list-group-item active">Gestion clients</li>
								<Link to="/admin/manage/users" className="list-group-item"><FontAwesome name="user" fixedWidth={true} />&nbsp;&nbsp;Utilisateurs</Link>
								<Link to="/admin/manage/hives" className="list-group-item"><FontAwesome name="archive" fixedWidth={true} />&nbsp;&nbsp;Ruches</Link>
								<Link to="/admin/manage/bundles" className="list-group-item"><FontAwesome name="folder" fixedWidth={true} />&nbsp;&nbsp;Parrainages</Link>
								<Link to="/admin/manage/bundle" className="list-group-item"><FontAwesome name="folder" fixedWidth={true} />&nbsp;&nbsp;Parrainages</Link>
								<Link to="/admin/manage/bundle" className="list-group-item disabled"><FontAwesome name="envelope" fixedWidth={true} />&nbsp;&nbsp;Emailing</Link>
								<li className="list-group-item active">Gestion du contenu</li>
								<Link to="/admin/manage/products" className="list-group-item"><FontAwesome name="shopping-basket" fixedWidth={true} />&nbsp;&nbsp;Produits</Link>
								<Link to="/admin/manage/coupons" className="list-group-item"><FontAwesome name="tag" fixedWidth={true} />&nbsp;&nbsp;Coupons</Link>
								<Link to="/admin/manage/faq" className="list-group-item"><FontAwesome name="comment" fixedWidth={true} />&nbsp;&nbsp;FAQ</Link>
								<li className="list-group-item active">Administration plateforme</li>
								<Link to="/admin/manage/server" className="list-group-item disabled"><FontAwesome name="wrench" fixedWidth={true} />&nbsp;&nbsp;Espace technique</Link>
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
									<Switch>
										<Route exact path="/admin/manage/bundle/pending" component={AdminManageBundle} />
										<Route exact path="/admin/manage/bundle/:id" component={AdminManageBundleId} />
									</Switch>
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
