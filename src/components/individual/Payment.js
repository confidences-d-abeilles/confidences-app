import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import request from '../../services/Net';
import { handleChange, handleTick } from '../../services/FormService'
import NotificationSystem from 'react-notification-system'
import { Elements } from 'react-stripe-elements';
import PayForm from '../utils/PayForm'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class IndividualPayement extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bees: null,
			redirect: false
		}
		ReactGA.pageview(this.props.location.pathname);
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				bees: res.bundles[0].bees,
				price: res.bundles[0].price,
				bundle_id: res.bundles[0].id,
				duplicate: true
			});
			request({
				url: '/bill/bundle/'+res.bundles[0].id,
				method: 'get'
			}, this.refs.notif).then((res) => {
				this.setState({
					bill_number: res.number,
					present: res.present
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
		const data = new FormData();
		data.append('state', 1);
		if (this.state.present == false) {
			data.append('present_date', new Date());
			data.append('present_end', new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
		}
		request({
			url: '/bundle/'+this.state.bundle_id,
			method: 'put',
			data : data
		}, this.refs.notif).then((res) => {
			this.setState({ redirect : true })
		})
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Paiement"/>
				<NotificationSystem ref="notif" />
				{(this.state.redirect)?<Redirect to="/individual/end" />:null}
				<div className="row">
					<div className="col-lg-12">
						<h2 className="text-center">Régler mon parrainage</h2>
					</div>
					<div className="col-lg-6">
						<h3 className="text-center my-4"><small>Paiement sécurisé par carte bancaire</small></h3>
						<Elements locale="fr">
							<PayForm price={this.state.price} before={() => {}} bundle={this.state.bundle_id} for={this.state.company_name} endpoint="/individual/end" />
						</Elements>
					</div>
					<div className="col-lg-6" style={{ borderStyle: 'solid', borderColor: '#E49C00', borderWidth: '0 0 0 4px'}}>
						<h3 className="text-center my-4"><small>Paiement par virement bancaire</small></h3>
						<p>Veuillez trouver nos coordonnées bancaires pour procéder au virement</p>
						<p>
							<strong>Domiciliation : </strong>OLKYPAY GRENOBLE<br />
							<strong>IBAN : </strong>FR36 1973 3000 01LU 3121 1050 436<br/>
							<strong>BIC : </strong>OPSPFR21OKL<br/><br />
							<strong>Numéro de facture à indiquer dans la référence du virement : </strong>{this.state.bill_number}
						</p>
						<p>Une fois le bénéficiaire ajouté et le
						virement réalisé, merci de confirmer le virement ci-dessous.
						De notre côté, la validation prend entre 2 et 3 jours. Un mail vous informera de la
						bonne prise en compte de votre parrainage.</p>
					<p className="text-center">
						<button onClick={this.setWaitingPayment.bind(this)} className="btn btn-primary">Virement effectué</button>
					</p>
					</div>
				</div>
			</div>
        );
    }
}
