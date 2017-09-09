
import React,{ Component } from 'react';
import { request } from '../../../services/NetService';

export default class ContributorManageApproaches extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentWillMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if(status) {
				this.setState({
					loading: false,
					leads: content.leads
				});
			}
		});
	}

	render () {
		return (
			<div className="row">
				{(this.state.loading)?'Chargement en cours...':
				<div className="col-12">
					<table className="table">
						<tr>
							<th>Nom de l'entreprise</th><th>Date de prise de contact</th>
						</tr>
						{this.state.leads.map((lead) => {
							var date = new Date(lead.createdAt);
							return (<tr><td>{lead.company_name}</td><td>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td></tr>)
						})}
					</table>
				</div>
				}
			</div>
		);
	}
}
