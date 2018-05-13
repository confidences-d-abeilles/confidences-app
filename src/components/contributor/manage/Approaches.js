import moment from 'moment';
import React,{ Component } from 'react';
import request from '../../../services/Net';
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';

export default class ContributorManageApproaches extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			loading: true,
			leads: []
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif).then((res) => {
			res.leads.map((lead, index, initial_array) => {
				request({
					url: '/getUser/'+lead.owner,
					method: 'GET'
				}, this.refs.notif). then((res) => {
						console.log(res.bundles[0]);
						initial_array[index]['hive'] = res.bundles[0].hives;
						initial_array[index]['Commission'] = '';
						if (res.bundles[0].state == 0) {
							initial_array[index]['status'] = 'Inscrite';
						} else if (res.bundles[0].state == 1) {
							initial_array[index]['status'] = 'Marraine';
						} else if (res.bundles[0].state == 2) {
							initial_array[index]['status'] = 'Terminée';
							initial_array[index]['Commission'] = '0'+'€';
						} else {
							initial_array[index]['status'] = 'Démarchée';
						}
					this.setState({ leads : initial_array});
					return ;
				})
			})
			 this.setState({ loading: false })
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
								<th>Nom de l'entreprise</th>
								<th>Statut</th>
								<th>Date</th>
								<th>Ruches parrainées</th>
								<th>Commission perçue</th>
							</tr>
							{this.state.leads.map((lead) => {
								return (<tr>
									<td>{lead.company_name}</td>
									<td>{lead.status}</td>
									<td>{moment(lead.createdAt).format("DD/MM/YYYY")}</td>
									<td>{lead.hive}</td>
									</tr>)
							})}
						</tbody>
					</table>
				</div>
				}
			</div>
		);
	}
}
