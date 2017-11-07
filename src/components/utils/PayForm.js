import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'

class PayForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false
		}
	}

	handleSubmit = (ev) => {
	ev.preventDefault();
	this.props.stripe.createToken({name: this.props.for }).then(({token}) => {
		if (token) {
			request({
				url: '/pay',
				method: 'post',
				data : {
					token: token,
					bundle: this.props.bundle
				}
			}, this.refs.notif).then((res) => {
				setTimeout(() => {
					this.setState({
						redirect: true
					})
				}, 3000);
			});
		}
	});
  }

	render () {
		return (
			<form onSubmit={this.handleSubmit} className="text-center" style={{ border: 'solid 1px #00E676', padding: '10px', margin: '10px', backgroundColor: '#B9F6CA' }} >
				{(this.state.redirect)?<Redirect to={this.props.redirect} />:null}
				<NotificationSystem ref="notif" />
				<label>Numéro de carte bancaire</label>
				<CardNumberElement style={{ base: { fontSize: '18px' }}} />
				<label>Date d'expiration</label>
				<CardExpiryElement style={{ base: { fontSize: '18px' }}} />
				<label>Code de sécurité</label>
				<CardCVCElement style={{ base: { fontSize: '18px' }}} />
				<button className="btn btn-primary">Payer {this.props.price} €</button>
			</form>
		)
	}
}

export default injectStripe(PayForm)
