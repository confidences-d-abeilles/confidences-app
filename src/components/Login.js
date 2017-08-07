import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col-4">
						<form className="text-center">
							<h2 className="text-center my-4">Connexion</h2>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Adresse email" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Mot de passe" />
							</div>
							<Link to="/individual/manage" className="btn btn-primary">Se connecter (particulier)</Link><br />
							<Link to="/company/manage" className="btn btn-primary">Se connecter (entreprise)</Link><br />
							( deux boutons juste pour simulation )
						</form>
					</div>
				</div>
			</div>
		);
	}
}
