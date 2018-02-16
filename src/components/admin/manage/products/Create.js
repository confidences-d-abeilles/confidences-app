import React, { Component } from 'react'
import { handleChange } from '../../../../services/FormService'
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
export default class Create extends Component {

	constructor(props) {
		super(props);
		this.state = {
			designation: '',
			type: '',
			price: '',
			duty: ''
		}
	}

	create(e) {
		e.preventDefault();
		request({
			url: '/product',
			method: 'post',
			data: {
				designation: this.state.designation,
				type: this.state.type,
				price: this.state.price,
				duty: this.state.duty
			}
		}, this.refs.notif).then((res) => {
			this.setState({
				designation: '',
				type: '',
				price: 0,
				duty: 0
			});
			this.props.refresh();
		})
	}

	render () {
		return (
			<form onSubmit={this.create.bind(this)}>
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col-lg-6">
						<div className="form-group">
							<input
								type="text" name="designation" className="form-control"
								placeholder="Designation du produit" value={this.state.designation}
								onChange={handleChange.bind(this)} />
						</div>
						<div className="form-group">
							<select name="type" onChange={handleChange.bind(this)} value={this.state.type}
								className="form-control">
								<option value="">Choisissez un type de produit</option>
								<option value="10">Parrainage entreprise</option>
								<option value="11">Produit suplémentaire entreprise</option>
								<option value="20">Parrainage particulier</option>
								<option value="21">Produit supplementaire particulier</option>
							</select>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-addon">€</div>
								<input type="number" name="price" min="0" step="0.1"
									className="form-control" placeholder="Prix du produit"
									value={this.state.price} onChange={handleChange.bind(this)} />
							</div>
						</div>
						<div className="form-group">
							<div className="input-group">
								<div className="input-group-addon">%</div>
								<input type="number" step="0.1" name="duty" min="0"
									className="form-control" placeholder="TVA" value={this.state.duty}
									onChange={handleChange.bind(this)} />
							</div>
						</div>
						<div className="form-group">
							<button className="btn btn-primary">Créer le produit</button>
						</div>
					</div>
				</div>
			</form>
		)
	}
}
