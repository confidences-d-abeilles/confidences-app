import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { request } from '../../services/NetService';
import { isLoggedIn } from '../../services/AuthService';
import { Redirect, Route, Link } from 'react-router-dom';
import IndividualManageInfos from './manage/Infos'
import Bills from './manage/Bills'

export default class IndividualManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					user: content
				});
			}
		});
	}

	render () {
		return (
			<div className="container py-4">
				{(!isLoggedIn)?<Redirect to="/" />:null}
				<div className="row">
					<div className="col-3">
						<img src={imgPlaceholder} alt="Logo" className="img-fluid img-thumbnail" />
						<br /><br />
						<ul className="list-group">
							<li className="list-group-item"><Link to="/individual/manage/infos">Mes informations</Link></li>
							<li className="list-group-item"><Link to="/individual/manage/bills">Mes factures</Link></li>
							<li className="list-group-item">Deconnexion</li>
						</ul>
					</div>
					<div className="col-9">
						<Route exact path="/individual/manage/bills" component={Bills} />
						<Route exact path="/individual/manage/infos" component={IndividualManageInfos} />
					</div>
				</div>
			</div>
		);
	}
}
