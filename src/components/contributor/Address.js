import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { request } from '../../services/NetService';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';

export default class ContributorAddress extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			message: '',
			address1: '',
			address2: '',
			city: '',
			zipcode: ''
		}
	}

	addAddress(e) {
		e.preventDefault();
		if (!this.state.address1 || !this.state.city || !this.state.zipcode) {
			this.setState({
				message: 'Veuillez renseigner les champs obligatoires.'
			});
		} else {
			request('/user/baddress/create', 'POST', JSON.stringify(this.state), 'json', (status, message,content) => {
				if (status)
				{
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
				{(isLoggedIn())?null:<Redirect to="/" />}
				{(this.state.redirect)?
				<Redirect to="/contributor/wish" />
				:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '50%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="text-center">
							<h2 className="text-center my-4">Votre adresse</h2>
							{(this.state.message)?
								<p className="alert alert-danger">{this.state.message}</p>
								:null}
							<div className="form-group">
								<input type="text" name="address1" className="form-control" placeholder="Adresse ligne 1" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="address2" className="form-control" placeholder="Adresse ligne 2" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="city" className="form-control" placeholder="Ville" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="number" name="zipcode" className="form-control" placeholder="Code postal" onChange={handleChange.bind(this)} />
							</div>
							<input type="submit" className="btn btn-primary" value="Continuer" onClick={this.addAddress.bind(this)} />
						</form>
					</div>
				</div>

			</div>
        );
    }
}
