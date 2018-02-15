import React, { Component } from 'react'
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../../services/FormService'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Create extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products : [],
			code: '',
			amount: '',
			min: '',
			max: '',
			designation: '',
			expire: moment(new Date())
		}
	}

	componentDidMount() {
		this.getProducts();
	}

	getProducts() {
		request({
			url : '/product',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				products: res
			})
		})
	}

	create(e) {
		e.preventDefault();
		this.props.refresh();
		request({
			url: '/coupon',
			method: 'post',
			data: {
				product: this.state.product,
				designation: this.state.designation,
				code: this.state.code,
				expire: this.state.expire,
				amount: this.state.amount,
				min: this.state.min,
				max: this.state.max
			}
		}, this.refs.notif)

	}

	handleExpire(date) {
		this.setState({
			expire: date
		})
	}

	render () {
		return (
			<form onSubmit={this.create.bind(this)}>
				<NotificationSystem ref="notif" />
				<div className="form-group">
					<select name="product" onChange={handleChange.bind(this)} className="form-control">
						<option value="">Produit éligible...</option>
						{this.state.products.map((product, key) => {
							return (
								<option key={key} value={product.id}>{product.designation}</option>
							)
						})}
					</select>
				</div>
				<div className="form-group">
					<input type="text" name="designation" onChange={handleChange.bind(this)}
						value={this.state.designation} className="form-control" placeholder="Désignation" />
				</div>
				<div className="form-group">
					<input type="text" name="code" className="form-control" value={this.state.code}
						placeholder="Code souhaité" onChange={handleChange.bind(this)} />
				</div>
				<div className="form-group">
					<input type="number" name="amount" value={this.state.amount} onChange={handleChange.bind(this)}
						placeholder="Montant de la promo en €" className="form-control" />
				</div>
				<div className="form-group">
					Date d'expiration
					<DatePicker
						dateFormat="DD/MM/YYYY"
						selected={this.state.expire}
						onChange={this.handleExpire.bind(this)}
						className="form-control"
						/>
				</div>
				<div className="form-group">
					Quantités éligibles
					<div className="row">
						<div className="col">
							<input type="number" name="min" className="form-control" onChange={handleChange.bind(this)}
								value={this.state.min} placeholder="min" />
						</div>
						<div className="col">
							<input type="number" name="max" className="form-control" onChange={handleChange.bind(this)}
								value={this.state.max} placeholder="max" />
						</div>
					</div>
				</div>
				<div className="form-group">
					<button className="btn btn-primary">Créer le coupon</button>
				</div>
			</form>
		)
	}
}
