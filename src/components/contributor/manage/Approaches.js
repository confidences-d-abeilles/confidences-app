
import React,{ Component } from 'react';
import request from '../../../services/Net';
import NotificationSystem from 'react-notification-system'

export default class ContributorManageApproaches extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ leads : res.leads, loading: false })
		});
	}

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				{(this.state.loading)?'Chargement en cours...':
				<div className="col-12">
					<table className="table">
						<tbody>
							<tr>
								<th>Nom de l'entreprise</th><th>Date de prise de contact</th>
							</tr>
							{this.state.leads.map((lead) => {
								var date = new Date(lead.createdAt);
								return (<tr><td>{lead.company_name}</td><td>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</td></tr>)
							})}
						</tbody>
					</table>
				</div>
				}
			</div>
		);
	}
}
