import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { request } from '../../services/NetService';
import { isLoggedIn } from '../../services/AuthService';
import { Redirect, Route, Link } from 'react-router-dom';
import IndividualManageInfos from './manage/Infos'

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
			<div className="container-fluid py-4">
				{(!isLoggedIn)?<Redirect to="/" />:null}
				<div className="row">
					<div className="col-2">
						<img src={imgPlaceholder} alt="Logo" className="img-fluid img-thumbnail" />
						<br /><br />
						<ul className="list-group">
							<li className="list-group-item active">Mon parrainage en cours</li>
							<li className="list-group-item"><Link to="/individual/manage/infos">Mes informations</Link></li>
							<li className="list-group-item">Ma page dediee</li>
							<li className="list-group-item">Personnalisation</li>
							<li className="list-group-item">Mes factures</li>
							<li className="list-group-item">Deconnexion</li>
						</ul>
					</div>
					<div className="col-10">
						<Route exact path="/individual/manage/infos" component={IndividualManageInfos} />
					</div>
				</div>
			</div>
		);
	}
}
