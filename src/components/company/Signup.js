import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompanySignup extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '20%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="text-center">
							<h2 className="text-center my-4">Créer votre compte</h2>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Prenom" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" placeholder="Nom" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" placeholder="Adresse email" />
							</div>
							<div className="form-group">
								<input type="phone" className="form-control" placeholder="Numero de telephone" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Mot de passe" />
							</div>
							<div className="form-group">
								<input type="password" className="form-control" placeholder="Confirmation du mot de passe" />
							</div>
							<p>Vous avez deja un compte ? <Link to="/login">Connectez vous</Link></p>
							<Link to="/company/identity" className="btn btn-primary">Continuer</Link>
						</form>
					</div>
				</div>
			</div>
        );
    }
}
