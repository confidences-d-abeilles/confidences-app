import React, { Component } from 'react'
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../../utils/Loading'

export default class List extends Component {

	constructor(props) {
		super(props)
		this.state = {
			products : [],
			loading: true
		}
	}

	componentDidMount() {
		request({
			url: '/product',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				products: res
			});
		}).catch((e) => {
			this.setState({
				loading: false
			})
		})
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<table className="table table-sm">
					<tbody>
						<tr><th>Designation</th><th>Prix HT</th><th>TVA</th><th>Prix TTC</th></tr>
						{this.state.products.map((product) => {
							return (
								<tr>
									<td>{product.designation}</td>
									<td>{product.price}</td>
									<td>{product.duty}</td>
									<td>{product.price / 100 * product.duty}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
				{this.state.loading && <Loading />}
			</div>
		)
	}
}
