import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system'
import { Elements } from 'react-stripe-elements';
import PayForm from '../utils/PayForm'
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
		this.transferBank = false;
		this.transferBankDone = false;
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
				bundle_present: res.bundles[0].present,
				start_date: res.bundles[0].start_date,
				duplicate: true
			})
		})
	}

	setWaitingPayment = async transferDone => {
		this.transferBank = true;
		this.transferBankDone = transferDone;

		this.save().then((res) => {
			this.setState({ redirect : false })
		});
	}

	async save() {
		console.log('save bundle request');
		return new Promise(resolve => {
			request({
				url: '/bundle/'+this.state.bundle_id,
				method: 'put',
				data : {
					state : this.transferBank?1:this.state.bundleState,
					bankTransferDone: (this.transferBankDone?'true':'false'),
					present_date: (this.state.present)?this.state.start_date:new Date(),
				}
			}, this.refs.notif).then((res) => {
				resolve();
			})
		});
	}

	// setWaitingPayment() {
	// 	const data = new FormData();
	// 	data.append('state', 1);
	// 	if (this.state.present === false) {
	// 		data.append('present_date', new Date());
	// 		// data.append('present_end', new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
	// 	}
	// 	request({
	// 		url: '/bundle/'+this.state.bundle_id,
	// 		method: 'put',
	// 		data : data
	// 	}, this.refs.notif).then((res) => {
	// 		this.setState({ redirect : true })
	// 	})
	// }

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
							<PayForm price={this.state.price} before={this.save.bind(this)} bundle={this.state.bundle_id} date={(this.state.present)?this.state.start_date:new Date()} for={this.state.firstname+' '+this.state.name} endpoint="/individual/end" />
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
						<p>
						Si	votre	banque	vous	impose	un	délai	concernant	l’ajout	d’un	nouveau	compte	bénéficiaire,	nous	vous
						invitons	à	sélectionner	«	Virement	en	cours	».	Un	mail	vous	conviant	à	confirmer	votre	virement	vous	sera
						alors	adressé	3	jours	plus	tard. <br />
						De	notre	côté,	la	validation	de	votre	virement	sera	faite	sous	48h.
						</p>
					<p className="text-center">
						<button onClick={e => this.setWaitingPayment(false, e)} className="btn btn-primary">Virement en cours</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<button onClick={e => this.setWaitingPayment(true, e)} className="btn btn-primary">Virement effectué</button>
					</p>
					</div>
				</div>
			</div>
        );
    }
}
