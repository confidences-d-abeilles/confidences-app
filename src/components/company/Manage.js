import React, { Component } from 'react';
import { request } from '../../services/NetService';
import CompanyManageDashboard from './manage/Dashboard';
import CompanyManageInfos from './manage/Infos.js';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';

import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<Router>
				<div className="container py-4">
					<div className="row">
						<div className="col-3">
							<img src={imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
							<br /><br />
							<ul className="list-group">
								<Link to="/company/manage/dashboard"><li className="list-group-item active">Tableau de bord</li></Link>
								<Link to="/company/manage/infos"><li className="list-group-item">Mes informations</li></Link>
								<Link to="/company/manage/mypage"><li className="list-group-item">Ma page dediee</li></Link>
								<Link to="/company/manage/c"><li className="list-group-item">Personnalisation</li></Link>
								<Link to="/company/manage/dashboard"><li className="list-group-item">Mes factures</li></Link>
								<Link to="/company/manage/dashboard"><li className="list-group-item">Deconnexion</li></Link>
							</ul>
						</div>
						<div className="col-6">
							<Route exact path="/company/manage/dashboard" component={CompanyManageDashboard} />
							<Route exact path="/company/manage/infos" component={CompanyManageInfos} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}
