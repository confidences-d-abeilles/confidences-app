import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system';
import { handleChange } from '../services/FormService';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class Reset extends Component {

	constructor(props) {
		super(props)
		this.state = {
			password: '',
			confirmation: '',
			ok: false,
			redirect: false
		}
		ReactGA.pageview(this.props.location.pathname);
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
			}, this.refs.notif).then((res) => {
				this.setState({
					ok: true
				})
				setTimeout(() => {
					this.setState({
						redirect: true
					})
				}, 5000)
			})
		}
	}

	render () {
		return (
			<div className="container">
				<Meta title="Définir un nouveau mot de passe"/>
				<NotificationSystem ref="notif" />
				{this.state.redirect && <Redirect to="/login" />}
				<div className="row justify-content-center">
					<div className="col-4">
						<h2 className="text-center my-4">Définir un nouveau mot de passe</h2>
						{(this.state.ok)?
							<p className="alert alert-success">
								Le mot de passe a bien été enregistré. Vous allez etre redirigé dans 5 secondes vers la page de connexion.
							</p>
						:<form onSubmit={this.resetPassword.bind(this)} className="text-center">
							<div className="form-group">
								<input type="password" className="form-control" name="password" onChange={handleChange.bind(this)} placeholder="Nouveau mot de passe"/>
							</div>
							<div className="form-group">
								<input type="password" className="form-control" name="confirmation" onChange={handleChange.bind(this)} placeholder="Confirmation du nouveau mot de passe"/>
							</div>
							<button className="btn btn-primary">Définir</button>
						</form>}
					</div>
				</div>
			</div>
		)
	}
}
