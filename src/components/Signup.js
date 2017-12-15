import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { handleChange } from '../services/FormService'
import { login, isLoggedIn } from '../services/AuthService'
import request from '../services/Net.js'
var NotificationSystem = require('react-notification-system');

export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstname: '',
			name: '',
			email: '',
			phone: '',
			school: '',
			password: '',
			confirmation: '',
			user_type: this.getType(this.props.match.params.type),
			message: '',
			redirect: false,
			error: null
		}
	}

	componentDidMount() {
		if (isLoggedIn(true)) {
			this.setState({ redirect : true })
		}
	}

	getType(type) {
		switch (type) {
			case 'individual':
				return 1;
			case 'company':
				return 2;
			case 'contributor':
				return 3;
			default:
				return 0;
		}
	}

	register(e) {
		e.preventDefault();
		if (this.state.password !== this.state.confirmation) {
			this.refs.notificationSystem.addNotification({
				message: "Le mot de passe et sa confirmation ne sont pas identiques",
				level: 'error'
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
					school : this.state.school,
					password : this.state.password,
					user_type : this.state.user_type
				}
			}, this.refs.notificationSystem).catch((err) => {
			})
			.then((res) => {
				request({
					url: '/authenticate',
					method : 'post',
					data : {
						email : this.state.email,
						password : this.state.password
					}
				}, this.refs.notificationSystem).then((res) => {
					login(res.id, res.token, res.user_type);
					if (res.user_type === 2) {
						this.setState({
							redirect : 'company/identity'
						})
					} else if (res.user_type === 1) {
						this.setState({
							redirect : 'individual/address'
						})
					} else if (res.user_type === 3) {
						this.setState({
							redirect : 'contributor/address'
						})
					}
				})
			})
			.catch((err) => {
			});
		}
	}

	render () {
		return (
			<div className="container py-4">
				{(this.state.redirect)?<Redirect to={'/'+this.state.redirect} />:''}
				<NotificationSystem ref="notificationSystem" />
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '25%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<form className="text-center">
							<h2 className="text-center my-4">Créer votre compte</h2>
							{(this.state.message)?
								<p className="alert alert-danger">{this.state.message}</p>
							:null}
							<div className="form-group">
								<input type="text" name="firstname" className="form-control" placeholder="Prénom *" onChange={handleChange.bind(this)}/>
							</div>
							<div className="form-group">
								<input type="text" name="name" className="form-control" placeholder="Nom *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="email" name="email" className="form-control" placeholder="Adresse email *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type={(this.state.user_type === 3)?'text':'phone'} name={(this.state.user_type === 3)?'school':'phone'} className="form-control" placeholder={(this.state.user_type === 3)?'Ecole ou établissement':'Numéro de telephone *'} onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="password" className="form-control" placeholder="Mot de passe *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="confirmation" className="form-control" placeholder="Confirmation du mot de passe *" onChange={handleChange.bind(this)} />
							</div>
							<p>Vous avez déjà un compte ? <Link to="/login">Connectez vous</Link></p>
							<input type="submit" value="Valider" className="btn btn-primary" onClick={this.register.bind(this)} />
						</form>
					</div>
				</div>
			</div>
		);
	}
}
