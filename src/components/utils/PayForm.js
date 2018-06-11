import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from './Loading'
import { getUserType } from '../../services/AuthService';

const config = require('../../config.js');

class PayForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			loading: false,
			monthlyPayment: false,
			priceFormat: this.props.price + ' €'
		}

		this.monthlyPrice = {
			'10000': 8,
			'20000': 14,
			'30000': 19,
			'40000': 23,
			'50000': 27
		};
	}

	monthlyPaymentChanged = (ev) => {
		let monthlyPayment = false;
		let priceFormat = this.props.price + ' €';

		if (ev.target.checked) {
			monthlyPayment = true;
			priceFormat = this.monthlyPrice[this.props.nbBees] + ' € / mois';
		}

		this.setState({
			monthlyPayment: monthlyPayment,
			priceFormat: priceFormat
		})
	}

	async handleSubmit (ev) {
		ev.preventDefault();
		if (this.props.before) {
			await this.props.before();
		}
		this.setState({
			loading: true
		})
		let price = this.props.price;
		if (this.state.monthlyPayment) {
			price = this.monthlyPrice[this.props.nbBees];
		}
		price = price * 100;
		this.props.stripe.createSource({
			owner: {
				name: this.props.for
			},
			amount: price,
			currency: 'eur',
			metadata : {
				bundle: this.props.bundle,
				monthlyPayment: this.state.monthlyPayment
			}
		}).then(({source}) => {
			request({
				url: '/payment/prepare',
				method: 'post',
				data: {
					source: source,
					dateStart: this.props.date,
					dateEnd: new Date(new Date(this.props.date).setFullYear(new Date().getFullYear() + 1)),
					redirect: config.app_url+this.props.endpoint
				}
			}, this.refs.notif).then((res) => {
				if (res) {
					window.location.replace(res.redirect.url);
				}
			}).catch((err) => {
				this.setState({
					loading: false
				})
			})
		}).catch((err) => {
			this.setState({
				loading: false
			})
		});
  }

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col-lg-6">
					<form onSubmit={this.handleSubmit.bind(this)} className="text-center" style={{ padding: '10px', margin: '10px'}} >
						{(getUserType() === '1')?
							<div className="form-group">
								<label><input type="checkbox" className="form-check-input" onChange={this.monthlyPaymentChanged} checked={this.state.monthlyPayment}/>Paiement mensuel</label>
							</div>
						:null}
						<label>Numéro de carte bancaire</label>
						<CardNumberElement style={{ base: { fontSize: '18px' }}} />
						<label>Date d'expiration</label>
						<CardExpiryElement style={{ base: { fontSize: '18px' }}} />
						<label>Code de sécurité</label>
						<CardCVCElement style={{ base: { fontSize: '18px' }}} />
						{this.state.fail && <p className="alert alert-danger">Echec du paiement	</p>}
						{(this.state.loading)?
							<div className="text-center">
								<Loading />
								Paiement en cours
							</div>:
							<button className="btn btn-primary mt-3">Payer {this.state.priceFormat}</button>
							}
					</form>
					</div>
					<div className="col-lg-6">
						<p className="mt-4" style={{  border: 'solid 1px #E49600', backgroundColor: 'rgba(228, 150, 0, 0.6)', padding: '10px', margin: '10px' }}>Les paiements sont réalisés via le système <strong>sécurisé</strong> Stripe qui utilise le <strong>protocole
						SSL</strong>. Les informations transmises sont <strong>cryptées</strong> et le paiement est compatible 3D
						Secure, MasterCard SecureCode, Verified by VISA.
						Dans un soucis de sécurité, Confidences d'Abeilles ne conserve pas vos
						informations bancaires.</p>
				</div>
			</div>
		)
	}
}

export default injectStripe(PayForm)
