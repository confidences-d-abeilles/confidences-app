import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import { Elements } from 'react-stripe-elements';
import PayForm from '../utils/PayForm'
import { handleChange, handleTick } from '../../services/FormService';

export default class CompanyCheckout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			billing_name: '',
			billing_firstname: '',
			baddress1: '',
			baddress2: '',
			bzip: '',
			bcity: '',
			bill_number: '',
			redirect: false,
			hives: 0,
			paytype: '0',
			price: 0,
			different: false,
			saved: false,
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				hives: res.bundles[0].hives,
				price: res.bundles[0].price,
				bundle_id: res.bundles[0].id,
				duplicate: true
			});
			request({
				url: '/bill/bundle/'+res.bundles[0].id,
				method: 'get'
			}, this.refs.notif).then((res) => {
				this.setState({
					bill_number: res.number
				});
			});
			res.addresses.map((address) => {
				if (address.type == 1) {
					this.setState({
						baddress1 : address.line1,
						baddress2 : address.line2,
						baddress3 : address.line3,
						baddress4 : address.line4,
						bcity: address.city,
						bzip: address.zipcode,
						bcountry: address.country
					})
				}
				if (address.type == 2) {
					this.setState({
						did: address.id,
						daddress1 : address.line1,
						daddress2 : address.line2,
						daddress3 : address.line3,
						daddress4 : address.line4,
						dcity: address.city,
						dzip: address.zipcode,
						dcountry: address.country
					})
				}
			})
		});

	}

	setWaitingPayment() {
		request({
			url: '/bundle/'+this.state.bundle_id,
			method: 'put',
			data : {
				state: 1
			}
		}, this.refs.notif).then((res) => {
			this.setState({ redirect : true })
		})
	}

	saveDaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.did,
			method: 'put',
			data: {
				line1: this.state.daddress1,
				line2: this.state.daddress2,
				line3: this.state.daddress3,
				line4: this.state.daddress4,
				zipcode: this.state.dzip,
				city: this.state.dcity,
				country: this.state.dcountry
			}
		}, this.refs.notif).then((res) => {
			this.setState({ saved : true })
		})
	}

	changeBundle() {
		request({
			url: '/bundle/'+this.state.bundle_id,
			method: 'delete'
		}, this.refs.notif). then((res) => {
			this.setState({ redirect : true });
		})
	}

    render () {
        return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				{(this.state.redirect)?<Redirect to="/account" />:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '100%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h2 className="text-center my-4">Confirmation et paiement</h2>
						<h3 className="text-center">Résumé</h3>
						<p>
							Nous parrainons {this.state.hives} ruches qui seront marquées au couleur de notre entreprise. En
							contrepartie nous recevrons {this.state.hives * 80} pots de miel de 125g produit par nos abeilles.
							Nous bénéficions en plus d’une page internet dédiée à notre entreprise et aux
							actions qu’elle mène en faveur de l’environnement. Des actualités de nos ruches y
							seront régulièrement postées, accessibles au grand public et à nos partenaires.
							<br /><br />
							Le coût total est de {this.state.price} euros par an.
						</p>
						<p className="text-center">
							<button className="btn btn-primary" onClick={this.changeBundle.bind(this)}>Changer d'offre</button>
						</p>
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-10 col-sm-12">
								<h3 className="text-center">Adresse de facturation</h3>
								<p>
									{(this.state.baddress1)?<span>{this.state.baddress1}<br/></span>:''}
									{(this.state.baddress2)?<span>{this.state.baddress2}<br/></span>:''}
									{(this.state.baddress3)?<span>{this.state.baddress3}<br/></span>:''}
									{(this.state.baddress4)?<span>{this.state.baddress4}<br/></span>:''}
									{this.state.bzip} {this.state.bcity}<br/>
									{this.state.bcountry}
								</p>
							</div>
							<div className="col-lg-6 col-md-10 col-sm-12">
								<h3 className="text-center">Adresse de livraison différente {!this.state.saved && <input type="checkbox" name="different" checked={this.state.different} onChange={handleTick.bind(this) }/>}</h3>
								{this.state.different && !this.state.saved &&
									<form className="text-center">
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress1} name="daddress1" placeholder="Nom et prénom" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress2} name="daddress2" placeholder="Entreprise" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress3} name="daddress3" placeholder="Ligne 1" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress4} name="daddress4" placeholder="Ligne 2" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group row">
											<div className="col-4">
												<input type="text" className="form-control" value={this.state.dzip} name="dzip" onChange={handleChange.bind(this)} />
											</div>
											<div className="col-8">
												<input type="text" className="form-control" value={this.state.dcity} name="dcity" onChange={handleChange.bind(this)} />
											</div>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.dcountry} name="dcountry" onChange={handleChange.bind(this)} />
										</div>
										<button className="btn btn-primary my-2" onClick={this.saveDaddress.bind(this)}>Enregistrer</button>
									</form>
								}
								{this.state.saved &&
									<div>
										{(this.state.daddress1)?<span>{this.state.daddress1}<br /></span>:null}
										{(this.state.daddress2)?<span>{this.state.daddress2}<br /></span>:null}
										{(this.state.daddress3)?<span>{this.state.daddress3}<br /></span>:null}
										{(this.state.daddress4)?<span>{this.state.daddress4}<br /></span>:null}
										{this.state.dzip} {this.state.dcity}<br/>
										{this.state.dcountry}
									</div>
								}
							</div>
						</div>
						<h3 className="text-center my-2">Paiement sécurisé</h3>
						<div className="row justify-content-center">
							<form className="col-lg-6 col-md-10 col-sm-12">
								<div className="form-group">
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="paytype" value="0" onChange={handleChange.bind(this)} checked={(this.state.paytype === '0')?true:false} />
											<span>Carte bancaire</span>
										</label>
									</div>
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="paytype" value="1" onChange={handleChange.bind(this)} checked={(this.state.paytype === '1')?true:false} />
											<span>Virement bancaire</span>
										</label>
									</div>
									<div className="form-check">
										<label className="form-check-label">
											<input type="radio" className="form-check-input" name="paytype" value="2" onChange={handleChange.bind(this)} checked={(this.state.paytype === '2')?true:false} />
											<span>Payer plus tard</span>
										</label>
									</div>
								</div>
							</form>
							<div className="col-lg-6 col-md-10 col-sm-12">
								{this.state.paytype === '0' &&
									<Elements locale="fr">
										<PayForm price={this.state.price} bundle={this.state.bundle_id} for={this.state.company_name} redirect="/account" />
									</Elements>
								}

								{this.state.paytype === '1' &&
									<div>
										<p>Veuillez trouver nos coordonnées bancaires pour procéder au virement</p>
										<p>
											<strong>Domiciliation : </strong>OLKYPAY GRENOBLE<br />
											<strong>IBAN : </strong>FR36 1973 3000 01LU 3121 1050 436<br/>
											<strong>BIC : </strong>OPSPFR21OKL<br/><br />
											<strong>Numéro de facture à indiquer dans la référence du virement : </strong>{this.state.bill_number}
										</p>
										<p>S’il ne vous est pas possible de procéder de suite au virement nous vous invitions à
										choisir l’option « Payer plus tard » et à ajouter Confidences d’Abeilles comme un
										nouveau bénéficiaire sur votre compte. Une fois le bénéficiaire ajouté et le
										virement réalisé, vous serrez invité à revenir sur cette page et à confirmer votre
										virement.
										De notre côté, la validation prend entre 2 et 3 jours. Un mail vous informera de la
										bonne prise en compte de votre parrainage.</p>
										<button onClick={this.setWaitingPayment.bind(this)} className="btn btn-primary">Virement effectué</button>
									</div>
								}

								{this.state.paytype === '2' &&
									<div>
										<p>
											Vous pouvez choisir de régler votre parrainage quand bon vous semble. En cliquant
											sur « Payer plus tard » vous serez redirigé vers votre tableau de bord. Les
											fonctionnalités sont quelque peu bridées et <strong>votre page dédiée ne peut être
											publiquement consultée.</strong><br /><br />
											N’oubliez pas que pour un parrainage effectué entre :
											<ul><li>Le 1er juillet et le 31 décembre, vous recevez le miel de vos abeilles à partir du
											mois de mai de l’année suivante.</li>
											<li>Le 1er janvier et le 30 juin, vous recevez le miel de vos abeilles à partir du mois
											d’octobre.</li></ul>
											Bonne visite sur notre plateforme !
										</p>
										<Link to="/account" className="btn btn-primary">Payer plus tard</Link>
									</div>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
