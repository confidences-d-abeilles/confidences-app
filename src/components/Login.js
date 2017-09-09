import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { handleChange } from '../services/FormService';
import { login } from '../services/AuthService';

import 'whatwg-fetch';

var config = require('../config.js');

export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: '',
			email: '',
			password: '',
			redirect: false
		}
	}

	login(e) {
		e.preventDefault();
		this.setState({
			message: ''
		});
		if (!this.state.email || !this.state.password) {
			this.setState({
				message: 'Merci de bien vouloir renseigner tous les champs.'
			})
		} else {
			fetch(config.server_url+'/user/auth', {
				method: 'POST',
				body: JSON.stringify(this.state)
			}).then((data) => {
				return data.json();
			}).then((data) => {
				if (!data.status) {
					this.setState({
						message: data.message
					});
				} else {
					login(data.content.id, data.content.token, data.content.user_type);
					this.setState({
						redirect: true
					});
				}
			});
		}
	}

	render () {
		return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col-4">
						<form className="text-center">
							<h2 className="text-center my-4">Connexion</h2>
							{(this.state.message)?<p className="alert alert-danger">{this.state.message}</p>:null}
							<div className="form-group">
								<input type="email" name="email" className="form-control" placeholder="Adresse email" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="password" className="form-control" placeholder="Mot de passe" onChange={handleChange.bind(this)} />
							</div>
							<input type="submit" className="btn btn-primary" value="Se connecter" onClick={this.login.bind(this)} />
						</form>
					</div>
				</div>
				{(this.state.redirect)?
					<Redirect to="/account" />
					:null}
			</div>
		);
	}
}
