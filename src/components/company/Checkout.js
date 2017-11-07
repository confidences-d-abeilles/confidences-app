import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import { Elements } from 'react-stripe-elements';
import PayForm from '../utils/PayForm'
import { handleChange } from '../../services/FormService';

export default class CompanyCheckout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			billing_name: '',
			billing_firstname: '',
			billing_address1: '',
			billing_address2: '',
			billing_zipcode: '',
			billing_city: '',
			redirect: false,
			hives: 0,
			paytype: '0',
			price: 0
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
						billing_address1 : address.line1,
						billing_address2: address.line2,
						billing_city: address.city,
						billing_zipcode: address.zipcode
					})
				}
				if (address.type == 2) {
					this.setState({
						billing_address1 : address.line1,
						billing_address2: address.line2,
						billing_city: address.city,
						billing_zipcode: address.zipcode
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
									{this.state.billing_address1}<br/>
									{(this.state.billing_address2)?this.state.billing_address2+'<br />':''}
									{this.state.billing_zipcode} {this.state.billing_city}<br/>
								</p>
							</div>
							<div className="col-6">
								<h3 className="text-center">Adresse de livraison</h3>
								<p>
									{this.state.company_name}<br />
									{this.state.billing_firstname} {this.state.billing_name}<br/>
									{this.state.billing_address1}<br/>
									{(this.state.billing_address2)?this.state.billing_address2+'<br />':''}
									{this.state.billing_zipcode} {this.state.billing_city}<br/>
								</p>
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
