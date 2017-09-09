import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { handleChange } from '../../services/FormService';
import { request } from '../../services/NetService';

export default class CompanyIdentity extends Component {

	constructor(props) {
		super(props);
		this.state = {
			company_name: '',
			siret: '',
			job: '',
			website: ''
		}
	}

	identify(e) {
		e.preventDefault();
		request('/user/identify', 'POST', JSON.stringify(this.state), 'json', (status, message, content) => {
			if (status) {
				this.setState({
					redirect: true
				})
			}
		});
	}

    render () {
        return (
			<div className="container py-4">
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
								<input type="text" className="form-control" name="siret" placeholder="Numero de Siret" onChange={handleChange.bind(this)} />
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
