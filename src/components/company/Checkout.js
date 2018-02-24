import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import { Elements } from 'react-stripe-elements';
import PayForm from '../utils/PayForm'
import { handleChange, handleTick } from '../../services/FormService';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta';
import moment from 'moment';

export default class CompanyCheckout extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			bsexe_m: '',
			dsexe_m: '',
			billing_name: '',
			billing_firstname: '',
			baddress1: '',
			baddress2: '',
			bzip: '',
			bcity: '',
			bill_number: '',
			redirect: false,
			hives: 0,
			paytype: '',
			price: 0,
			different: false,
			saved: false,
			dash: false,
			feedback: '',
			present_date: moment()
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
				duplicate: true,
				feedback: res.bundles[0].feedback
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
						bsexe_m : address.sexe_m?'1':'0',
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
						dsexe_m : address.sexe_m?'1':'0',
						daddress1 : address.line1,
						daddress2 : address.line2,
						daddress3 : address.line3,
						daddress4 : address.line4,
						dcity: address.city,
						dzip: address.zipcode,
						dcountry: address.country,
						dphone: address.phone
					})
				}
			})
		});

	}

	handleDateChange(date) {
		this.setState({
			present_date: date
		});
	}


	async setWaitingPayment() {
		await this.save();
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

	async save() {
		return new Promise(async resolve => {
			await this.saveFeedback();
			if (this.state.different) {
				await this.saveDaddress();
			}
			await this.handlePresent();
			resolve();
		})
	}

	async saveFeedback() {
		return new Promise(resolve => {
			request({
				url: '/bundle/'+this.state.bundle_id,
				method: 'put',
				data: {
					feedback: this.state.feedback
				}
			}, this.refs.notif).then((res) => {
				resolve();
			})
		})
	}

	async noAction() {
		await this.save();
		await request({
			url: '/user/later',
			method: 'put'
		}, this.refs.notif);
		this.setState({
			dash: true
		})
	}

	async saveDaddress(e) {
		e.preventDefault();
		if (!this.state.dsexe_m || !this.state.daddress3 || !this.state.dcity || !this.state.dzip ||
			!this.state.dphone) {
			this.refs.notif.addNotification({
				message : "Merci de renseigner tous les champs",
				level : 'warning'
			})
		} else {
			request({
				url: '/address/'+this.state.did,
				method: 'put',
				data: {
					sexe_m : (this.state.dsexe_m === '0')?false:true,
					line1: this.state.daddress1,
					line2: this.state.daddress2,
					line3: this.state.daddress3,
					line4: this.state.daddress4,
					zipcode: this.state.dzip,
					city: this.state.dcity,
					country: this.state.dcountry,
					phone: this.state.dphone
				}
			}, this.refs.notif).then((res) => {
				this.setState({ saved : true })
			});
		}
	}

	changeBundle() {
		request({
			url: '/bundle/'+this.state.bundle_id,
			method: 'delete'
		}, this.refs.notif). then((res) => {
			this.setState({ redirect : true });
		})
	}

	async handlePresent() {
		return new Promise(resolve => {
			request({
				url: '/bundle/'+this.state.bundle_id,
				method: 'put',
				data : {
					present: this.state.present,
					present_email: this.state.present_email,
					present_message: this.state.present_message,
					present_date: (this.state.present_date)?this.state.present_date:new Date(),
					present_name: this.state.present_name,
					present_firstname: this.state.present_firstname
				}
			}, this.refs.notif).then((res) => {
				resolve();
			})
		});
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Validation et paiement"/>
				<NotificationSystem ref="notif" />
				{(this.state.redirect)?<Redirect to="/company/end" />:null}
				{(this.state.dash)?<Redirect to="/company/manage" />:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '100%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-11 col-md-10 col-sm-12">
						<h2 className="text-center my-4">Confirmation et paiement</h2>
						<p>
							Nous parrainons {this.state.hives} ruches qui seront marquées au couleur de notre entreprise. En
							contrepartie nous recevrons {this.state.hives * 80} pots de miel de 125g produits par nos abeilles.
							Nous bénéficions en plus d’une page internet dédiée à notre entreprise et aux
							actions qu’elle mène en faveur de l’environnement. Des actualités de nos ruches y
							seront régulièrement postées, accessibles au grand public et à nos partenaires.
							<br /><br />
							<strong>Le coût total est de {this.state.price} euros par an.</strong>
							<br /><br />
							<button className="btn btn-primary" onClick={this.changeBundle.bind(this)}>Changer d'offre</button>
						</p>
						<div className="row justify-content-center">
							<div className="col-lg-6 col-md-10 col-sm-12">
								<h3 className="my-4">Adresse de facturation</h3>
								<p>
									{this.state.baddress1 && <span>{this.state.bsexe_m === '0'?'Mme. ':'M. '}</span>}
									{(this.state.baddress1)?<span>{this.state.baddress1}<br/></span>:''}
									{(this.state.baddress2)?<span>{this.state.baddress2}<br/></span>:''}
									{(this.state.baddress3)?<span>{this.state.baddress3}<br/></span>:''}
									{(this.state.baddress4)?<span>{this.state.baddress4}<br/></span>:''}
									{this.state.bzip} {this.state.bcity}<br/>
									{this.state.bcountry}
								</p>
								<h3 className="my-4">Message</h3>
								<div className="form-group">
									<textarea rows="5" className="form-control" name="feedback" onChange={handleChange.bind(this)} value={this.state.feedback} placeholder="Informations complémentaires concernant votre commande ou commentaires, laissez-nous un petit message, nous y prêterons grande attention :)" />
								</div>
							</div>
							<div className="col-lg-6 col-md-10 col-sm-12">
								<h3 className="my-4">Adresse de livraison différente {!this.state.saved && <input type="checkbox" name="different" checked={this.state.different} onChange={handleTick.bind(this) }/>}</h3>
								{this.state.different && !this.state.saved &&
									<form className="text-center">
										<div className="form-group d-flex">
								      <label className="radio-inline form-check-label">
								        <input type="radio" className="form-check-input" name="dsexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.dsexe_m === '1'}/>
								        &nbsp;M *
								      </label>
									    <label className="radio-inline form-check-label ml-4">
								        <input type="radio" className="form-check-input" name="dsexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.dsexe_m === '0'}/>
								        &nbsp;Mme *
								      </label>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress1} name="daddress1" placeholder="Nom et prénom" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress2} name="daddress2" placeholder="Entreprise" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress3} name="daddress3" placeholder="Ligne 1 *" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress4} name="daddress4" placeholder="Ligne 2" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group row">
											<div className="col-4">
												<input type="text" className="form-control" value={this.state.dzip} name="dzip" placeholder="Code postal *" onChange={handleChange.bind(this)} />
											</div>
											<div className="col-8">
												<input type="text" className="form-control" value={this.state.dcity} name="dcity" placeholder="Ville *" onChange={handleChange.bind(this)} />
											</div>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.dcountry} name="dcountry" placeholder="Pays *" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="tel" className="form-control" value={this.state.dphone} name="dphone" placeholder="Téléphone *" onChange={handleChange.bind(this)} />
										</div>
									</form>
								}
								{this.state.saved &&
									<div>
										{this.state.daddress1 && <span>{this.state.dsexe_m === '0'?'Mme. ':'M. '}</span>}
										{(this.state.daddress1)?<span>{this.state.daddress1}<br /></span>:null}
										{(this.state.daddress2)?<span>{this.state.daddress2}<br /></span>:null}
										{(this.state.daddress3)?<span>{this.state.daddress3}<br /></span>:null}
										{(this.state.daddress4)?<span>{this.state.daddress4}<br /></span>:null}
										{this.state.dzip} {this.state.dcity}<br/>
										{this.state.dcountry}<br/>
										{this.state.dphone}
									</div>
								}
							</div>
						</div>
						<h3 className="my-4">Paiement sécurisé</h3>
						<div className="row justify-content-center">
							<form className="col-lg-3 col-md-10 col-sm-12 my-4">
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
							<div className="col-lg-9 col-md-10 col-sm-12">
								{this.state.paytype === '0' &&
									<Elements locale="fr">
										<PayForm price={this.state.price} bundle={this.state.bundle_id} for={this.state.company_name} endpoint="/company/end" />
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
										<button onClick={this.noAction.bind(this)} className="btn btn-primary">Payer plus tard</button>
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
