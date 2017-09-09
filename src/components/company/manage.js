import React, { Component } from 'react';
import { request } from '../../services/NetService';
import CompanyManageDashboard from './maage/Dashboard';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hives : 0
		}
	}

	componentWillMount() {
		request ('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					hives : content.bundles[0].hives
				});
			}
		});
	}

	render () {
		return (
			<div className="container py-4">
				<div className="row">
					<div className="col-3">
						<img src={imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
						<br /><br />
						<ul className="list-group">
							<li className="list-group-item active">Tableau de bord</li>
							<li className="list-group-item">Mes informations</li>
							<li className="list-group-item">Ma page dediee</li>
							<li className="list-group-item">Personnalisation</li>
							<li className="list-group-item">Mes factures</li>
							<li className="list-group-item">Deconnexion</li>
						</ul>
					</div>
					<div className="col-6">
						<CompanyManageDashboard hives={this.state.hives} />
					</div>
				</div>
			</div>
		);
	}
}
