import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../utils/Loading'
import ReactGA from 'react-ga'
import moment from 'moment'
import Meta from '../../utils/Meta'
import Confirm from '../../utils/Confirm'

export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			users : null,
			selectedUser: null
		}
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers() {
		request({
			url: '/user',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				users : res
			});
		})
	}

	deleteUser(id) {
		request({
			url : '/users/'+id,
			method : 'delete'
		}, this.refs.notif).then((res) => {
			this.getUsers();
		});
	}

	promoteUser(id) {
		request({
			url : '/users/'+id+'/promote',
			method : 'patch'
		}, this.refs.notif).then((res) => {
		});
	}

	selectUser(user) {
		this.setState({
			selectedUser: user
		})
	}

	renderType(type) {
		switch (type) {
			case 1:
				return ("P");
			case 2:
				return ("E");
			case 3:
				return ("AA");
			case 4:
				return ("A");
		}
	}

	sendCadeauMail() {
		request({
			url: '/mail/cadeau/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
	}

	sendHoustonMail() {
		request({
			url: '/mail/houston/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
	}

	sendEncoursMail() {
		request({
			url: '/mail/encours/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
	}

	getTag(state) {
		if (state === 0) {
			return (<span className="badge badge-info">Programmé</span>)
		}
		if (state === 1) {
			return (<span className="badge badge-danger">Annulé</span>)
		}
		if (state === 2) {
			return (<span className="badge badge-success">Envoyé</span>)
		}
	}

	getEmailType(type) {
		if (type === 1) {
			return ("Premiers pas (inscription)");
		}
		if (type === 2) {
			return ("Houston, we had a problem");
		}
		if (type === 3) {
			return ("Paiement en attente de validation (clic sur virement effectué)");
		}
		if (type === 4) {
			return ("Fin onboard avec payer plus tard");
		}
		if (type === 5) {
			return ("Confirmation parrainage (CB ok)");
		}
		if (type === 6) {
			return ("Virement OK");
		}
		if (type === 7) {
			return ("Échec paiement");
		}
		if (type === 8) {
			return ("Attribution ruche en cours");
		}
		if (type === 9) {
			return ("Bonne nouvelle (ruche attribuée)");
		}
		if (type === 10) {
			return ("Cadeau");
		}
		if (type === 11) {
			return ("Attribution longue");
		}
		if (type === 12) {
			return ("Relance 4 jours");
		}
		if (type === 13) {
			return ("Relance 2 semaines");
		}
		if (type === 14) {
			return ("Relance 4 semaines");
		}
		if (type === 15) {
			return ("Relance 8 semaines");
		}
		if (type === 16) {
			return ("Expedition miel");
		}
	}

	render () {
		return (
			<div className="container-fluid">
				<Meta title="Gestion des utilisateurs"/>
				<div className="row">
					<NotificationSystem ref="notif" />
					<h2 className="text-center my-4">Gérer les utilisateurs</h2>
				</div>
				<div className="row">
					<div className="col-3" style={{ maxHeight: '50vh', overflowY : 'scroll' }}>
						{this.state.users?
						<table className="table">
							<tbody>
								<tr><th>Denomination</th><th></th></tr>
								{this.state.users.map((user) => {
									return (<tr key={user.id}><td>({this.renderType(user.user_type)}) {(user.company_name)?user.company_name:user.firstname+' '+user.name}</td><td><button className="btn btn-sm btn-link" onClick={this.selectUser.bind(this, user)}>Manage</button></td></tr>)
								})}
							</tbody>
						</table>
						:<Loading />}
					</div>
						{(this.state.selectedUser)?
							<div className="col-lg-9 col-md-12">
								<div className="row">
									<div className="col-lg-6 col-md-12 my-2">
										<div className="card">
											<div className="card-block">
												<h3 className="card-title">Informations generales</h3>
												<p className="card-text">
													<strong>Date d'inscription :</strong> {moment(this.state.selectedUser.createdAt).format("DD/MM/YYYY HH:mm:ss")}<br />
													<strong>Nom et prenom :</strong> {this.state.selectedUser.firstname} {this.state.selectedUser.name}<br />
													{(this.state.selectedUser.company_name)?<span><strong>Nom de la societe :</strong> {this.state.selectedUser.company_name}<br /></span>:null}
													<strong>Adresse email :</strong> {this.state.selectedUser.email}<br />
													<strong>Téléphone :</strong> {this.state.selectedUser.phone}<br />
												</p>
											</div>
										</div>
									</div>
										{this.state.selectedUser.addresses && this.state.selectedUser.addresses[0] &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Adresse de facturation</h3>
														<p className="card-text">
															{this.state.selectedUser.addresses[0].line1}<br />
															{this.state.selectedUser.addresses[0].line2}<br />
															{this.state.selectedUser.addresses[0].line3}<br />
															{this.state.selectedUser.addresses[0].line4}<br />
															{this.state.selectedUser.addresses[0].zipcode} {this.state.selectedUser.addresses[0].city}<br />
															{this.state.selectedUser.addresses[0].country}
														</p>
													</div>
											</div>
										</div>
										}
										{this.state.selectedUser.addresses && this.state.selectedUser.addresses[1] &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Adresse de livraison :</h3>
														<p className="card-text">
															{this.state.selectedUser.addresses[1].line1}<br />
															{this.state.selectedUser.addresses[1].line2}<br />
															{this.state.selectedUser.addresses[1].line3}<br />
															{this.state.selectedUser.addresses[1].line4}<br />
															{this.state.selectedUser.addresses[1].zipcode} {this.state.selectedUser.addresses[0].city}<br />
															{this.state.selectedUser.addresses[1].country}<br />
															{this.state.selectedUser.addresses[1].phone}
														</p>
													</div>
												</div>
											</div>
										}
										<div className="col-lg-6 col-md-12 my-2">
											<div className="card">
												<div className="card-block">
													<h3 className="card-title">Envoi de mails</h3>
													<p className="card-text">
														<button className="btn btn-sm btn-info my-2" onClick={this.sendHoustonMail.bind(this)} >2 : Houston we had a problem</button><br />
														<button className="btn btn-sm btn-info my-2" onClick={this.sendEncoursMail.bind(this)} >8 : Attribution ruche en cours</button><br />
														<button className="btn btn-sm btn-info my-2" onClick={this.sendCadeauMail.bind(this)} >10 : Cadeau</button>
													</p>
												</div>
											</div>
											<div className="card my-2">
												<div className="card-block">
													<h3 className="card-title">Historique de mails</h3>
													<p className="card-text">
														1 : Premiers pas (inscription)<br />
														2 : Houston we had a problem<br />
														3 : Paiement en attente de validation (clic sur virement effectué)<br />
														4 : Fin onboard avec payer plus tard<br />
														5 : Confirmation parrainage (CB ok)<br />
														6 : Virement OK<br />
														7 : Échec paiement<br />
														8 : Attribution ruche en cours<br />
														9 : Bonne nouvelle (ruche attribuée)<br />
														10 : Cadeau<br />
														11 : Attribution longue<br />
														12 : Relance 4 jours<br />
														13 : Relance 2 semaines <br />
														14 : Relance 4 semaines <br />
														15 : Relance 8 semaines <br />
														16 : Expedition miel <br />
													</p>
													<p className="card-table">
														<table className="table table-sm">
															<tbody>
																<tr><th>Type de mail</th><th>Date</th><th>État</th></tr>
																{this.state.selectedUser.emails.map((elem) => {
																	return (
																		<tr><td>{this.getEmailType(elem.type_email)}</td><td>{moment(elem.time).format("DD/MM/YY HH:mm")}</td><td>{this.getTag(elem.state)}</td></tr>
																		);
																})}
															</tbody>
														</table>
													</p>
												</div>
											</div>
										</div>
							</div>
						</div>
						:<div className="col-lg-9 col-md-12 col-sm-12">
							Cliquer sur un utilisateur dans la liste
						</div>}
				</div>
			</div>
		)
	}
}
