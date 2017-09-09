import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { request } from '../../services/NetService';
import { handleChange } from '../../services/FormService';

export default class IndividualCheckout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			billing_name: '',
			billing_firstname: '',
			billing_address1: 'Chargement des informations en cours',
			billing_address2: '',
			billing_zipcode: '',
			billing_city: '',
			redirect: false,
			bees: 0
		}
		this.getBillingAddress();
	}

	getBillingAddress() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					billing_name: content.name,
					billing_firstname: content.firstname,
					billing_address1: content.baddress[0].line1,
					billing_address2: content.baddress[0].line2,
					billing_zipcode: content.baddress[0].zipcode,
					billing_city: content.baddress[0].city,
					duplicate: true,
					bees : content.bundles[0].bees
				})
			}
		});
	}

	proceed() {
		request('/user/daddress/create', 'POST', JSON.stringify({
			address1: this.state.billing_address1,
			address2: this.state.billing_address2,
			city: this.state.billing_city,
			zipcode: this.state.billing_zipcode
		}), 'json', (status, message, content) => {
			if (status) {
				this.setState({
					redirect: true
				});
			}
		});
	}

    render () {
        return (
			<div className="container py-4">
				{(this.state.redirect)?<Redirect to="/individual/manage" />:null}
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
							Je parraine {this.state.bees} abeilles d'une ruche sur laquelle sera marqué mon nom.
							Je recevrais {this.state.bees / 10000 * 8} pots de miel de 250g produit par mes abeilles.
							De plus, une page internet sera dédiée à ma ruche et je pourrais y retrouver des actualités sur mes abeilles.
							<br /><br />
							Le coût total est de Y euros par an.
						</p>
						<div className="row justify-content-center">
							<div className="col-6">
								<p className="lead">Adresse de facturation</p>
								<p>
									{this.state.billing_firstname} {this.state.billing_name}<br/>
								{this.state.billing_address1}<br/>
							{(this.state.billing_address2)?this.state.billing_address2+'<br />':''}
									{this.state.billing_zipcode} {this.state.billing_city}<br/>
								</p>
							</div>
							<div className="col-6">
								<p className="lead">Adresse de livraison</p>
								<input type="checkbox" name="duplicate" checked={this.state.duplicate} onChange={() => { this.setState({duplicate: !this.state.duplicate})}} /> L'adresse de livraison est identique à celle de facturation
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
												<input type="radio" className="form-check-input" name="optionsRadios" value="" />
												<span>Carte bancaire (3 mensualites sans frais)</span>
											</label>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" />
												<span>Virement bancaire</span>
											</label>
										</div>
										<div className="form-check">
											<label className="form-check-label">
												<input type="radio" className="form-check-input" name="optionsRadios" value="" />
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
							<button onClick={this.proceed.bind(this)} className="btn btn-primary">Valider et payer</button>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
