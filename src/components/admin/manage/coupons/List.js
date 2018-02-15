import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import Loading from '../../../utils/Loading'
import request from '../../../../services/Net'
import moment from 'moment'

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			coupons : [],
			loading: true
		}
	}

	componentDidMount() {
		request({
			url: '/coupon',
			method: 'get'
		}, this.refs.notif).then((res) => {
			console.log(res)
			this.setState({
				coupons: res,
				loading: false
			})
		});
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<table className="table table-sm">
					<tbody>
						<tr><th>Produit</th><th>Code</th><th>Montant</th><th>Expiration</th><th>Qt min.</th><th>Qt max.</th></tr>
						{this.state.coupons.map((e, key) => {
							return (
								<tr key={key}>
									<td>{e.product.designation}</td><td>{e.code}</td><td>{e.amount} €</td><td>{moment(e.expire).format("DD/MM/YYYY")}</td><td>{e.min}</td><td>{e.max}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	}
}
