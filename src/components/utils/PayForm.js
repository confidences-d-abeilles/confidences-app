import React, { Component } from 'react';
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from './Loading'

const config = require('../../config.js');

class PayForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			loading: false
		}
	}

	async handleSubmit (ev) {
		ev.preventDefault();
		if (this.props.before) {
			await this.props.before();
		}
		this.setState({
			loading: true
		})
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
							<button className="btn btn-primary mt-3">Payer {this.props.price} €</button>
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
