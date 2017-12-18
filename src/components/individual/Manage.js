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
import Bundle from './manage/Bundle'

export default class IndividualManage extends Component {

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(!isLoggedIn)?<Redirect to="/" />:null}
				<div className="row">
					<div className="col-3">
						<img src={profile} alt="Default profile" className="img-fluid" />
						<ul className="list-group">
							<li className="list-group-item"><Link to="/individual/manage">Mon parrainage</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/customize">Mes pots de miel</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/infos">Mes informations</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/bills">Mes factures</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/account">Mon compte</Link></li>
							<li className="list-group-item"><Link to="/logout">Deconnexion</Link></li>
						</ul>
					</div>
					<div className="col-9">
						<Route exact path="/individual/manage" component={Bundle} />
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
