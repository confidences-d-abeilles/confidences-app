import React, { Component } from 'react';
import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService'
import NotificationSystem from 'react-notification-system'

export default class Account extends Component {

	constructor(props){
		super(props)
		this.state = {
			password: '',
			conf: ''
		}
	}

	changePassword(e) {
		e.preventDefault()
		if (this.state.password === this.state.conf) {
			request({
				url: '/user',
				method: 'put',
				data: {
					password: this.state.password
				}
			}, this.refs.notif)
		} else {
			this.refs.notif.addNotification({
				message: 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
				level: 'warning'
			})
		}
	}

	render() {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<form className="col-6" onSubmit={this.changePassword.bind(this)}>
					<h3 className="text-center my-4">Modifier mon mot de passe</h3>
					<div className="form-group">
						<input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
					</div>
					<div className="form-group">
						<input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
					</div>
					<button className="btn btn-primary">Enregistrer</button>
				</form>
			</div>
		)
	}
}
