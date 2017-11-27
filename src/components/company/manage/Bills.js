import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

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
								<tr><th>Numero de facture</th><th>Prix de la facture</th><th>Actions</th></tr>
								{this.state.bills.map((bill) => {
									return (
										<tr><td>{bill.number}</td><td>{bill.price}</td></tr>
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
