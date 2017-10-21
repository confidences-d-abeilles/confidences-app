import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { handleChange } from '../services/FormService'
import { login } from '../services/AuthService'
import request from '../services/Net.js'
var NotificationSystem = require('react-notification-system');

var config = require('../config.js');

export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			name: '',
			email: '',
			phone: '',
			password: '',
			confirmation: '',
			user_type: this.getType(this.props.match.params.type),
			message: '',
			redirect: false
		}
	}

	getType(type) {
		switch (type) {
			case 'individual':
				return 1;
			case 'contributor':
				return 2;
			case 'company':
				return 3;
			default:
				return 0;
		}
	}

	register(e) {
		e.preventDefault();
		this.setState({
			message: ''
		});
		if (0) {
			this.setState({
				message: 'Veillez a bien renseigner tous les champs.'
			});
		} else {
			if (this.state.password !== this.state.confirmation) {
				this.setState({
					message: 'Le mot de passe et sa confirmation ne sont pas identiques.'
				});
			} else {
				request({
					method: 'post',
					url: '/user',
					data : {
						firstname : this.state.firstname,
						name : this.state.name,
						email : this.state.email,
						phone : this.state.phone,
						password : this.state.password,
						user_type : this.state.user_type
					}
				}, this.refs.notificationSystem)
				.then((res) => {
				})
				.catch((err) => {
				});
				// then((data) => {
				// 	if (!data.status) {
				// 		this.setState({
				// 			message: data.message
				// 		});
				// 	} else {
				// 		fetch(config.server_url+'/user/auth', {
				// 			method: 'POST',
				// 			body: JSON.stringify({
				// 				email: this.state.email,
				// 				password: this.state.password
				// 			})
				// 		}).then((data) => {
				//             return data.json();
				//         }).then((data) => {
				// 			login(data.content.id, data.content.token, data.content.user_type);
				// 			this.setState({
				// 				redirect: true
				// 			});
				// 		});
				// 	}
		        // });
			}
		}
	}

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notificationSystem" />
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '25%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="text-center">
							<h2 className="text-center my-4">Créer votre compte</h2>
							{(this.state.message)?
								<p className="alert alert-danger">{this.state.message}</p>
							:null}
							<div className="form-group">
								<input type="text" name="firstname" className="form-control" placeholder="Prenom" onChange={handleChange.bind(this)}/>
							</div>
							<div className="form-group">
								<input type="text" name="name" className="form-control" placeholder="Nom" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="email" name="email" className="form-control" placeholder="Adresse email" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="phone" name="phone" className="form-control" placeholder="Numero de telephone" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="password" className="form-control" placeholder="Mot de passe" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="confirmation" className="form-control" placeholder="Confirmation du mot de passe" onChange={handleChange.bind(this)} />
							</div>
							<p>Vous avez deja un compte ? <Link to="/login">Connectez vous</Link></p>
							<input type="submit" value="Valider" className="btn btn-primary" onClick={this.register.bind(this)} />
						</form>
					</div>
				</div>
				{(this.state.redirect)?
					<Redirect to="/individual/address" />:null}
			</div>
		);
	}
}
