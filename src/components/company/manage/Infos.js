
import React, { Component } from 'react'
import request from '../../../services/Net'

export default class CompanyManageInfos extends Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	componentWillMount() {
		this.get();
	}

	get() {
		request({
			url : '/user/me',
			method : 'get',
		}, this.refs.notif).then((res) => {
			this.setState({ user : res });
		});
	}

	render () {
		return (
			<div>
				<div className="row my-2">
					<div className="col">
						<h2 className="text-center">
							Mes informations
						</h2>
					</div>
				</div>
				{(this.state.user)?
					<div className="row">
						<div className="col">
							<h3 className="text-center">Mon entreprise</h3>
							<h4>{this.state.user.company_name}</h4>
							<p>
								<strong>SIREN :</strong> {this.state.user.siren}<br />
							</p>
						</div>
						<div className="col">
							<h3 className="text-center">Mes informations personnelles</h3>
							<p>
								<strong>Nom :</strong> {this.state.user.name}<br />
								<strong>Prénom :</strong> {this.state.user.firstname}<br />
								<strong>Poste dans l'entreprise :</strong> {this.state.user.job}<br />
								<strong>Numéro de téléphone :</strong> {this.state.user.phone}<br />
							</p>
						</div>
					</div>
					:'Chargement en cours...'}
			</div>
		);
	}
}
