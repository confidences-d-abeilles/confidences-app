import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import { handleChange } from '../../services/FormService'

export default class ContributorParrains extends Component {

	constructor(props) {
		super(props);
		this.state = {
			leads : []
		}
	}

	componentDidMount() {
		request({
			url: '/lead',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ leads : res })
		});
	}

	render () {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<h2 className="text-center my-2">Liste des entreprises déjà démarchées</h2>
				<div className="row my-2">
					<div className="col-lg-6">
						<input type="text" className="form-control" onChange={handleChange.bind(this)} name="filter" placeholder="Rechercher une raison sociale ou un numéro de SIRET" />
					</div>
				</div>
				<table className="table">
					<tbody>
						<tr><th>Raison sociale</th><th>Numéro de Siret</th></tr>
						{this.state.leads.map((lead) => {
							if (this.state.filter) {
								if (lead.siret.indexOf(this.state.filter) >= 0 || lead.company_name.indexOf(this.state.filter) >= 0) {
									return (
										<tr key={lead.id}><td>{lead.company_name}</td><td>{lead.siret}</td></tr>
									)
								} else {
									return null;
								}
							} else {
								return (
									<tr key={lead.id}><td>{lead.company_name}</td><td>{lead.siret}</td></tr>
								)
							}
						})}
					</tbody>
				</table>
			</div>
		);
	}
}
