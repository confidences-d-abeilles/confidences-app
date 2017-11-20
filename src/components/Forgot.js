import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system';
import { handleChange } from '../services/FormService';

export default class Forgot extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: ''
		}
	}

	resetPassword(e) {
		e.preventDefault();
		request({
			url: '/user/ask',
			method: 'post',
			data: {
				email : this.state.email
			}
		}, this.refs.notif)
	}

	render () {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col-4">
						<h2 className="text-center my-4">Mot de passe oublié</h2>
						<form onSubmit={this.resetPassword.bind(this)} className="text-center">
							<div className="form-group">
								<input type="email" className="form-control" name="email" onChange={handleChange.bind(this)} placeholder="Adresse email"/>
							</div>
							<button className="btn btn-primary">Envoyer un email de récupération</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
