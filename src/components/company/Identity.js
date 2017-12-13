import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { handleChange } from '../../services/FormService';
import  request from '../../services/Net';
import NotificationSystem from 'react-notification-system';

export default class CompanyIdentity extends Component {

	constructor(props) {
		super(props);
		this.state = {
			company_name: '',
			siret: '',
			job: '',
			website: '',
			namespace: '',
			redirect : false
		}
	}

	handlesiret(event) {
		const target = event.target;
	    const name = target.name;
	    const value = target.value.replace(/ /g,'');
	    this.setState({
	        [name]: value
	    });
	}

	identify(e) {
		e.preventDefault();
		if (!this.state.company_name || !this.state.siret || !this.state.job || !this.state.namespace) {
			this.refs.notif.addNotification({
				message: "Merci de renseigner tous les champs",
				level: 'warning'
			})
		} else {
			request({
				url : '/user',
				method : 'put',
				data : {
					company_name : this.state.company_name,
					siret : this.state.siret,
					namespace: this.state.namespace,
					job : this.state.job,
					website : this.state.website
				}}, this.refs.notif)
				.then((res) => {
					this.setState({
						redirect : true
					})
				})
				.catch((err) => {});
		}
	}

    render () {
        return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(this.state.redirect)?<Redirect to="/company/address" />:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '40%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<form className="text-center">
							<h2 className="text-center my-4">Information sur l'entreprise</h2>
							<div className="form-group">
								<input type="text" className="form-control" name="company_name" placeholder="Raison sociale" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<label htmlFor="namespace">Choisissez une adresse pour votre future page dédiée</label>
								<div className="input-group">
									<span className="input-group-addon" id="basic-addon3">https://parrainagederuches.fr/ </span>
									<input type="text" className="form-control" onChange={handleChange.bind(this)} name="namespace" id="namespace" />
								</div>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="siret" placeholder="Numero de siret" onChange={this.handlesiret.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="job" placeholder="Fonction dans la societe" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="website" placeholder="Site internet" onChange={handleChange.bind(this)} />
							</div>
							<button onClick={this.identify.bind(this)} className="btn btn-primary">Continuer</button>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
