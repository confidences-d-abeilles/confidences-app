import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

const config = require("../../../config.js");

export default class CompanyManageBills extends Component {

	constructor(props) {
		super (props)
		this.state = {
			user : null,
			bills: []
		}
	}

	componentDidMount() {
		request({
			url: '/bill/mine',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bills: res
			})
		})
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col">
						<h2 className="text-center my-4">Mes factures</h2>
						<table className="table">
							<tbody>
								<tr><th>Numero de facture</th><th>Prix de la facture</th><th>Date de la facture</th><th>Actions</th></tr>
								{this.state.bills.map((bill) => {
									return (
										<tr><td>{bill.number}</td><td>{bill.price} €</td><td>{moment(bill.date).format('DD/MM/YYYY')}</td><td><a href={config.cdn_url+'/bills/'+bill.number+'.pdf'} download><FontAwesome name="cloud-download" /></a></td></tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}
