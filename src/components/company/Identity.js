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
			siren: '',
			job: '',
			website: '',
			redirect : false
		}
	}

	identify(e) {
		e.preventDefault();
		if (!this.state.company_name || !this.state.siren || !this.state.job) {
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
					siren : this.state.siren,
					job : this.state.job,
					website : this.state.website,
					onboard : 2
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
					<div className="col-6">
						<form className="text-center">
							<h2 className="text-center my-4">Information sur l'entreprise</h2>
							<div className="form-group">
								<input type="text" className="form-control" name="company_name" placeholder="Raison sociale" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="siren" placeholder="Numero de SIREN" onChange={handleChange.bind(this)} />
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
