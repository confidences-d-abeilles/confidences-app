import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';

class Paiement extends Component {

	handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.stripe.createToken({name: 'Jenny Rosen'}).then(({token}) => {
      console.log('Received Stripe token:', token);
    });
  }

	render () {
		return (
			<form onSubmit={this.handleSubmit} className="text-center" style={{ border: 'solid 1px #00E676', padding: '10px', margin: '10px', backgroundColor: '#B9F6CA' }} >
				<label>Numéro de carte bancaire</label>
				<CardNumberElement style={{ base: { fontSize: '18px' }}} />
				<label>Date d'expiration</label>
				<CardExpiryElement style={{ base: { fontSize: '18px' }}} />
				<label>Code de sécurité</label>
				<CardCVCElement style={{ base: { fontSize: '18px' }}} />
				<button className="btn btn-primary">Payer</button>
			</form>
		)
	}
}

export default injectStripe(Paiement)
