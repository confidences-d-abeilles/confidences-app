import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompanyCheckout extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '100%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<h2 className="text-center my-4">Confirmation et paiement</h2>
						<p>
							Nous parrainons X ruche(s) qui seront marquées à nos couleurs et nous
							receverons X*40 pots de miel de 250g. Une page internet sera dédiée aux
							actions menées par notre entreprise en faveur des abeilles et des actualités des ruches y seront postées.
							<br /><br />
							Le coût total est de X*395 euros par an.
						</p>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="lead">Adresse de livraison</p>
								<p>
									Baptiste Claire, Société X<br/>
									40 avenue de la grande armée<br/>
									75017 Paris<br/>
									<a href="#">Modifier cette adresse</a>
								</p>
							</div>
							<div className="col-6">
								<p className="lead">Adresse de facturation</p>
								<input type="checkbox" checked/> L'adresse de facturation est identique à celle de livraison
							</div>
						</div>
						<p className="lead text-center">Paiement securise via Stripe</p>
							<form className="row justify-content-center">
								<div className="col-6">
									<div className="form-group">
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" checked />
												<span>Carte bancaire</span>
											</label>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" checked />
												<span>Carte bancaire (3 mensualites sans frais)</span>
											</label>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" checked />
												<span>Virement bancaire</span>
											</label>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" checked />
												<span>Valider et payer plus tard</span>
											</label>
										</div>
									</div>
								</div>
								<div className="col-6">
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Numero de carte" />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Date d'expiration (MM/AAAA)" />
									</div>
									<div className="form-group">
										<input type="text" className="form-control" placeholder="Code de securite" />
									</div>
								</div>
							</form>
						<p className="text-center">
							<Link to="/company/end" className="btn btn-primary">Valider et payer</Link>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
