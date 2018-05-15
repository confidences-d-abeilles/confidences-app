import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../../services/Net'
import moment from 'moment'
import FontAwesome from 'react-fontawesome'

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			coupons : [],
			loading: true
		}
	}

	componentDidMount() {
		this.refresh();
	}

	componentWillReceiveProps() {
		this.refresh();
	}

	refresh() {
		request({
			url: '/coupon',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				coupons: res,
				loading: false
			})
		});
	}

	delete = (id) => {
		request({
			url: '/coupon/'+id,
			method: 'delete'
		}, this.refs.notif).then((res) => {
			this.refresh();
		});
	}

	decode(type) {
		switch (type) {
			case 0:
				return "Systématique";
				break;
			case 1:
				return "Option";
				break;
			case 2:
				return "Offre temporaire";
				break;
			default:
				return null;
				break;
		}
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<table className="table table-sm">
					<tbody>
						<tr><th>Produit</th><th>Designation</th><th>Type</th><th>Code</th><th>Montant</th><th>Pots en -</th><th>Expiration</th><th>Qt min.</th><th>Qt max.</th><th>Actions</th></tr>
						{this.state.coupons.map((e, key) => {
							return (
								<tr key={key}>
									<td>{e.product.designation}</td>
									<td>{e.designation}</td>
									<td>{this.decode(e.type)}</td>
									<td>{e.code}</td>
									<td>{e.amount} €</td>
									<td>{e.pots}</td>
									<td>{moment(e.expire).format("DD/MM/YYYY")}</td>
									<td>{e.min}</td>
									<td>{e.max}</td>
									<td style={{ cursor : 'pointer' }} onClick={this.delete.bind(this, e.id)}><FontAwesome name="trash" /></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}
