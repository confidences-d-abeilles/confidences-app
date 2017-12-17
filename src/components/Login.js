import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { handleChange } from '../services/FormService';
import { login } from '../services/AuthService';
import request from '../services/Net.js'
import Loading from './utils/Loading'

var NotificationSystem = require('react-notification-system');

export default class Signup extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: '',
			email: '',
			password: '',
			redirect: false,
			loading: false
		}
	}

	login(e) {
		e.preventDefault();
		this.setState({
			message: '',
			loading: true
		});
		if (!this.state.email || !this.state.password) {
			this.refs.notificationSystem.addNotification({
	      		message: "Merci de renseigner tous les champs",
	      		level: 'warning'
      	  });
		  this.setState({
			  loading: false
		  })
		} else {
			request({
				url : '/authenticate',
				method : 'POST',
				data : {
					email : this.state.email,
					password : this.state.password
				}
			}, this.refs.notificationSystem).then((res) => {
				login(res.id, res.token, res.user_type);
				this.setState({
					redirect: true
				})
			}).catch((err) => {
				this.setState({
					 loading: false
				 })
			});
		}
	}

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notificationSystem" />
				<div className="row justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-12">
						<h2 className="text-center my-4">Connexion</h2>
						{(this.state.loading)?
							<Loading />

						:<form className="text-center">
							<div className="form-group">
								<input type="email" name="email" className="form-control" placeholder="Adresse email" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="password" name="password" className="form-control" placeholder="Mot de passe" onChange={handleChange.bind(this)} />
							</div>
							<Link to="/forgot">Mot de passe oublié ?</Link><br/>
							<input type="submit" className="btn btn-primary my-2" value="Se connecter" onClick={this.login.bind(this)} />
						</form>}
					</div>
				</div>
				{(this.state.redirect)?
					<Redirect to="/account" />
					:null}
			</div>
		);
	}
}
