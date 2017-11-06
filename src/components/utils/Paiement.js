import React, { Component } from 'react';
import { Elements } from 'react-stripe-elements';
import PayForm from './PayForm'

export default class Paiement extends Component {

	render () {
		return (
			<Elements locale="fr">
				<PayForm />
			</Elements>
		)
	}
}
