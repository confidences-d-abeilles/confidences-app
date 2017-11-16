import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'
const config = require('../../config.js');

class PayForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
	}

	handleSubmit = (ev) => {
	ev.preventDefault();
	console.log(config.app_url)

	this.props.stripe.createSource({
		owner: {
			name: this.props.for
		},
		metadata : {
			bundle: this.props.bundle
		}
	}).then(({source}) => {
		request({
			url: '/payment/prepare',
			method: 'post',
			data: {
				source: source,
				redirect: config.app_url+'/company/final'
			}
		}, this.refs.notif).then((res) => {
			if (res) {
				window.location.replace(res.redirect.url);
			} else {
				setTimeout(() => {
					this.setState({
						redirect: true
					});
				}, 3000)
			}
		})
	});
  }

	render () {
		return (
			<form onSubmit={this.handleSubmit} className="text-center" style={{ border: 'solid 1px #00E676', padding: '10px', margin: '10px', backgroundColor: '#B9F6CA' }} >
				{(this.state.redirect)?<Redirect to='/company/final' />:null}
				<NotificationSystem ref="notif" />
				<label>Numéro de carte bancaire</label>
				<CardNumberElement style={{ base: { fontSize: '18px' }}} />
				<label>Date d'expiration</label>
				<CardExpiryElement style={{ base: { fontSize: '18px' }}} />
				<label>Code de sécurité</label>
				<CardCVCElement style={{ base: { fontSize: '18px' }}} />
				<button className="btn btn-primary">Payer {this.props.price} €</button>
				<p className="mt-4 small">Les paiements sont réalisés via le système sécurisé Stripe qui utilise le protocole
				SSL. Les informations transmises sont cryptées et le paiement est compatible 3D
				Secure, MasterCard SecureCode, Verified by VISA.
				Dans un soucis de sécurité, Confidences d'Abeilles ne conserve pas vos
				informations bancaires.</p>
			</form>
		)
	}
}

export default injectStripe(PayForm)
