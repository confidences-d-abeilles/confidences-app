import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompanyIdentity extends Component {

    render () {
        return (
			<div className="container py-4">
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
								<input type="text" className="form-control" placeholder="Raison sociale" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Numero de Siret" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Fonction dans la societe" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Site internet" />
							</div>
							<Link to="/company/address" className="btn btn-primary">Continuer</Link>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
