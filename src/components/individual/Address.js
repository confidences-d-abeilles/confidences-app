import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IndividualAddress extends Component {

    render () {
        return (
			<div className="container py-4">
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
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Adresse ligne 1" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Adresse ligne 2" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Ville" />
							</div>
							<div className="form-group">
								<input type="number" className="form-control" placeholder="Code postal" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Pays" />
							</div>
							<Link to="/individual/wish" className="btn btn-primary">Continuer</Link>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
