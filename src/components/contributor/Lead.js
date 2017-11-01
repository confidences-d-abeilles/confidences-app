
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';

export default class ContributorLead extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect : false,
			company_name: '',
			siren: ''
		}
	}

	addLead(e) {
		e.preventDefault();
		request({
			url : '/lead',
			method: 'post',
			data : {
				company_name : this.state.company_name,
				siren : this.state.siren
			}
		}, this.refs.notif).then((res) => {
			this.setState({
				redirect : true
			})
		});
	}

	render () {
		return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(this.state.redirect)?
				<Redirect to="/account" />
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
							<h2 className="text-center my-4">Ajouter une entreprise</h2>
							{(this.state.message)?
								<p className="alert alert-danger">{this.state.message}</p>
								:null}
							<div className="form-group">
								<input type="text" name="company_name" className="form-control" placeholder="Raison sociale de l'entreprise" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="siren" className="form-control" placeholder="Numero de SIREN" onChange={handleChange.bind(this)} />
							</div>
							<input type="submit" className="btn btn-primary" value="Continuer" onClick={this.addLead.bind(this)} />
						</form>
					</div>
				</div>

			</div>
		);
	}
}
