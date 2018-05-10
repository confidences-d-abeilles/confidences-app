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
			loading: true
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ leads : res.leads, loading: false })
			res.leads.forEach((lead, index) => {
				console.log(lead.owner);
				request({
					url: '/getUser/',
					method: 'GET',
					data: {
						idUser: lead.owner
					}
				}, this.refs.notif). then((res) => {
					console.log(res);
					res.leads[index].append();
				})
			})
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
								<th>Nom de l'entreprise</th><th>Statut</th><th>Date</th><th>Ruches parrainées</th><th>Commission perçue</th>
							</tr>
							{this.state.leads.map((lead) => {
								return (<tr><td>{lead.company_name}</td><td>{lead.converted?'Parrain':'Démarchée'}</td><td>{moment(lead.createdAt).format("DD/MM/YYYY")}</td></tr>)
							})}
						</tbody>
					</table>
				</div>
				}
			</div>
		);
	}
}
