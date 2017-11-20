import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system';
import { handleChange } from '../services/FormService';

export default class Reset extends Component {

	constructor(props) {
		super(props)
		this.state = {
			password: '',
			confirmation: ''
		}
	}

	resetPassword(e) {
		e.preventDefault();
		if (this.state.confirmation !== this.state.password) {
			this.refs.notif.addNotification({
				message: 'Le mot de passe et la confirmation ne correspondent pas',
				level: 'warning'
			})
		} else if (this.state.password.length < 6) {
			this.refs.notif.addNotification({
				message: 'Le mot de passe doit contenir au moins 6 caractères',
				level: 'warning'
			})
		} else {
			request({
				url: '/user/reset',
				method: 'post',
				data: {
					password : this.state.password,
					token: this.props.match.params.token
				}
			}, this.refs.notif)
		}
	}

	render () {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col-4">
						<h2 className="text-center my-4">Définir un nouveau mot de passe</h2>
						<form onSubmit={this.resetPassword.bind(this)} className="text-center">
							<div className="form-group">
								<input type="password" className="form-control" name="password" onChange={handleChange.bind(this)} placeholder="Nouveau mot de passe"/>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="confirmation" onChange={handleChange.bind(this)} placeholder="Confirmation du nouveau mot de passe"/>
							</div>
							<button className="btn btn-primary">Définir</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
