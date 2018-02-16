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
		this.refresh();
	}

	componentWillReceiveProps() {
		this.refresh();
	}

	refresh() {
		request({
			url: '/product',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				products: res,
				loading: false
			});
		}).catch((e) => {
			this.setState({
				loading: false
			})
		})
	}

	decode(type) {
		switch (type) {
			case 10:
				return "Parrainage entreprise"
				break;
			case 11:
				return "Produit suplémentaire entreprise"
				break;
			case 20:
				return "Parrainage particulier"
				break;
			case 21:
				return "Produit suplémentaire particulier"
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
						<tr><th>Designation</th><th>Type</th><th>Prix HT</th><th>TVA</th><th>Prix TTC</th></tr>
						{this.state.products.map((product) => {
							return (
								<tr>
									<td>{product.designation}</td>
									<td>{this.decode(product.type)}</td>
									<td>{product.price} €</td>
									<td>{product.duty} %</td>
									<td>{(product.price + (product.price / 100 * product.duty)).toFixed(2)} €</td>
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
