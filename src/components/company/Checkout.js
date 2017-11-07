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
			redirect: false,
			hives: 0,
			paytype: '0',
			price: 0,
			different: false,
			saved: false
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				company_name: res.company_name,
				billing_name: res.name,
				billing_firstname: res.firstname,
				hives: res.bundles[0].hives,
				price: res.bundles[0].price,
				bundle_id: res.bundles[0].id,
				duplicate: true
			});
			res.addresses.map((address) => {
				if (address.type == 1) {
					this.setState({
						baddress1 : address.line1,
						baddress2: address.line2,
						bcity: address.city,
						bzip: address.zipcode,
						bcountry: address.country
					})
				}
				if (address.type == 2) {
					this.setState({
						did: address.id,
						daddress1 : address.line1,
						daddress2: address.line2,
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
				waiting: true
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
				zipcode: this.state.dzip,
				city: this.state.dcity,
				country: this.state.dcountry
			}
		}, this.refs.notif).then((res) => {
			this.setState({ saved : true })
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
					<div className="col-9">
						<h2 className="text-center my-4">Confirmation et paiement</h2>
						<h3 className="text-center">Résumé</h3>
						<p>
							Je parraine {this.state.hives} ruches qui seront marquées à nos couleurs et recevrais {this.state.hives * 80} pots de miel de 125g produit par mes abeilles.
							De plus, une page
							internet sera dédiée à notre entreprise et aux
							actions qu’elle mène en faveur de l’environnement.
							Des actualités de nos ruches y seront régulièrement
							postées et accessibles au grand public mais aussi à
							nos partenaires.
							<br /><br />
							Le coût total est de {this.state.price} euros par an.
						</p>
						<div className="row justify-content-center">
							<div className="col-6">
								<h3 className="text-center">Adresse de facturation</h3>
								<p>
									{this.state.company_name}<br />
									{this.state.billing_firstname} {this.state.billing_name}<br/>
									{this.state.baddress1}<br/>
									{(this.state.baddress2)?<span>{this.state.baddress2}<br/></span>:''}
									{this.state.bzip} {this.state.bcity}<br/>
									{this.state.bcountry}
								</p>
							</div>
							<div className="col-6">
								<h3 className="text-center">Adresse de livraison différente {!this.state.saved && <input type="checkbox" name="different" checked={this.state.different} onChange={handleTick.bind(this) }/>}</h3>
								{this.state.different && !this.state.saved &&
									<form>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress1} name="daddress1" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.daddress2} name="daddress2" onChange={handleChange.bind(this)} />
										</div>
										<div className="form-group row">
											<div className="col-4">
												<input type="text" className="form-control" value={this.state.dzip} name="daddress2" onChange={handleChange.bind(this)} />
											</div>
											<div className="col-8">
												<input type="text" className="form-control" value={this.state.dcity} name="daddress2" onChange={handleChange.bind(this)} />
											</div>
										</div>
										<div className="form-group">
											<input type="text" className="form-control" value={this.state.dcountry} name="dcountry" onChange={handleChange.bind(this)} />
										</div>
										<button className="btn btn-primary" onClick={this.saveDaddress.bind(this)}>Enregistrer</button>
									</form>
								}
								{this.state.saved &&
									<div>
										{this.state.company_name}<br />
										{this.state.billing_firstname} {this.state.billing_name}<br/>
										{this.state.daddress1}<br/>
										{(this.state.daddress1)?<span>{this.state.daddress2}<br /></span>:null}
										{this.state.dzip} {this.state.dcity}<br/>
										{this.state.dcountry}
									</div>
								}
							</div>
						</div>
						<h3 className="text-center">Paiement</h3>
						<div className="row justify-content-center">
							<form className="col-6">
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
							<div className="col-6">
								{this.state.paytype === '0' &&
									<Elements locale="fr">
										<PayForm price={this.state.price} bundle={this.state.bundle_id} for={this.state.company_name} redirect="/account" />
									</Elements>
								}

								{this.state.paytype === '1' &&
									<div>
										<p></p>
										<button onClick={this.setWaitingPayment.bind(this)} className="btn btn-primary">J'ai effectué le virement</button>
									</div>
								}

								{this.state.paytype === '2' &&
									<Link to="/account" className="btn btn-primary">Payer plus tard</Link>
								}
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
