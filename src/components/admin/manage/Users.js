import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../utils/Loading'
import ReactGA from 'react-ga'
import moment from 'moment'
import Meta from '../../utils/Meta'
import Confirm from '../../utils/Confirm'
import Address from '../../utils/Address/Address'
import { handleChange, handleTick } from '../../../services/FormService'

export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			users : null,
			selectedUser: null,
			usexe_m: '', /* sexe user */
			bsexe_m: '', /* sexe bill */
			dsexe_m: '',  /* sexe delivery */
			feedback: '',
			stateFeedback: 0,
			supportLevel: null
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
			url : '/user/'+id,
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
			selectedUser: user,
			usexe_m: user.sexe_m?'1':'0',
			bsexe_m: user.addresses[0]?user.addresses[0].sexe_m?'1':'0':'',
			billing_address: user.addresses[0],
			dsexe_m: user.addresses[1]?user.addresses[1].sexe_m?'1':'0':'',
			delivery_address: user.addresses[1],
			feedback: (user.comment)?user.comment:'',
			supportLevel: (user.support_lvl)?user.support_lvl.toString():'',
			userType: user.user_type
		});
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

	sendMail202() {
		request({
			url: '/mail/202/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
	}

	sendMail203() {
		request({
			url: '/mail/203/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
	}

	sendMail205() {
		request({
			url: '/mail/205/user/'+this.state.selectedUser.id,
			method: 'get'
		}, this.refs.notif)
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

	sendLaterMail() {
		request({
			url: '/mail/later/user/'+this.state.selectedUser.id,
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

	updateSupportLevel(e) {
		this.setState({
			supportLevel: e.target.value
		});
		const data = new FormData();
		data.append('content', e.target.value);
		data.append('userId', this.state.selectedUser.id);
		request({
			url: '/user/supportLvl/',
			method: 'PUT',
			data: data
		}, this.refs.notif).then((res) => {
			this.getUsers();
		});
	}

	updateFeedback(event) {
		let objState = {};
		objState[event.target.name] = event.target.value;
		this.setState(objState);
		this.setState({
			stateFeedback: 1
		})
	}

	saveFeedback(event) {
		console.log(this.state.selectedUser.id);
		const data = new FormData();
		data.append('content', this.state.feedback);
		data.append('userId', this.state.selectedUser.id);
		request({
			url:'/user/comment/',
			method: 'PUT',
			data: data
		}, this.refs.notif).then((res) => {
			this.setState({
				stateFeedback: 0
			});
			this.getUsers();
		})
	}

	updateSexe(event) {
		event.preventDefault();
		let objState = {};
		objState[event.target.name] = event.target.value;
		this.setState(objState);
		if (event.target.name === 'usexe_m') {
			request({
				url: '/user/' + this.state.selectedUser.id,
				method: 'put',
				data: {
					sexe_m: (event.target.value === '0')?false:true
				}
			}, this.refs.notif).then(() => {
					this.getUsers();
			});
		/* Update bill address */
		} else if (event.target.name === 'bsexe_m') {
			let copy = Object.assign({}, this.state.selectedUser.addresses[0]);
			copy.sexe_m = (event.target.value === '0')?false:true;
			request({
				url: '/address/' + this.state.selectedUser.addresses[0].id,
				method: 'put',
				data: copy
			}, this.refs.notif).then(() => {
					this.getUsers();
			});
		/* Update delivery address */
		} else if (event.target.name === 'dsexe_m') {
			let copy = Object.assign({}, this.state.selectedUser.addresses[1]);
			copy.sexe_m = (event.target.value === '0')?false:true;
			request({
				url: '/address/' + this.state.selectedUser.addresses[1].id,
				method: 'put',
				data: copy
			}, this.refs.notif).then(() => {
					this.getUsers();
			});
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
		if (type === 202) {
			return ("Paiement attente");
		}
		if (type === 203) {
			return ("Attribution ruche en cours");
		}
		if (type === 205) {
			return ("Virement ok");
		}
	}

	synchro (address) {
		console.log(address);

		if (address.line1) {
			console.log('je split');
			const splitAddress = address.line1.split(' ').reverse();
			console.log(splitAddress[0]);
			console.log(splitAddress.slice(1).join(' '));
			console.log(address.line2);
			console.log(address.line3);
			request({
				url: '/address/'+address.id,
				method: 'PUT',
				data: { ...address, ['firstname'] : splitAddress[0], ['name'] : splitAddress.slice(1).join(' '), ['company_name'] : address.line2, ['address_line1'] : address.line3 }
			}, this.refs.notif).then((res) => {
				this.setState({ edit : false });
			})
		} else {
			console.log('pas de besoinde split');
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
													<div className="form-group d-flex">
											      <label className="radio-inline form-check-label">
											        <input type="radio" className="form-check-input" name="usexe_m" value="1" onChange={this.updateSexe.bind(this)} checked={this.state.usexe_m === '1'}/>
											        &nbsp;M
											      </label>
												    <label className="radio-inline form-check-label ml-4">
											        <input type="radio" className="form-check-input" name="usexe_m" value="0" onChange={this.updateSexe.bind(this)} checked={this.state.usexe_m === '0'}/>
											        &nbsp;Mme
											      </label>
													</div>
													<strong>Nom et prenom :</strong> {this.state.selectedUser.firstname} {this.state.selectedUser.name}<br />
													{(this.state.selectedUser.company_name)?<span><strong>Nom de la societe :</strong> {this.state.selectedUser.company_name}<br /></span>:null}
													<strong>Adresse email :</strong> {this.state.selectedUser.email}<br />
													<strong>Téléphone :</strong> {this.state.selectedUser.phone}<br />
													<Confirm class="btn btn-secondary btn-sm my-2" action={this.deleteUser.bind(this, this.state.selectedUser.id)} text="Supprimer l'utilisateur" />
													<button className="btn btn-secondary btn-sm my-2" onClick={this.promoteUser.bind(this, this.state.selectedUser.id)}>Promouvoir l'utilisateur</button>
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
															<div className="form-group d-flex">
													      <label className="radio-inline form-check-label">
													        <input type="radio" className="form-check-input" name="bsexe_m" value="1" onChange={this.updateSexe.bind(this)} checked={this.state.bsexe_m === '1'}/>
													        &nbsp;M
													      </label>
														    <label className="radio-inline form-check-label ml-4">
													        <input type="radio" className="form-check-input" name="bsexe_m" value="0" onChange={this.updateSexe.bind(this)} checked={this.state.bsexe_m === '0'}/>
													        &nbsp;Mme
													      </label>
															</div>
															{this.state.selectedUser.addresses[0].line1}<br />
															{this.state.selectedUser.addresses[0].line2}<br />
															{this.state.selectedUser.addresses[0].line3}<br />
															{this.state.selectedUser.addresses[0].line4}<br />
															{this.state.selectedUser.addresses[0].zipcode} {this.state.selectedUser.addresses[0].city}<br />
															{this.state.selectedUser.addresses[0].country}
														</p>
														<div>
															<h3 className="text-center my-4"><small>Adresse de facturation</small></h3>
															<Address data={this.state.billing_address} company={this.state.selectedUser.user_type == 2?true:false}/>
														</div>
														<div className="card-block">
															<h3 className="card-title">Synchronisation des donnees user</h3>
															<button class="btn btn-secondary btn-sm my-2" onClick={this.synchro.bind(this, this.state.billing_address)} >Synchronisation des donnees de l'utilisateur</button>
														</div>
													</div>
											</div>
										</div>
										}
										{this.state.selectedUser &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">informations supplementaire</h3>
														<div className="form-group">
															<textarea rows="5" className="form-control" name="feedback" onChange={this.updateFeedback.bind(this)} value={this.state.feedback} placeholder="Informations complémentaires concernant l'utilisateur" />
															{this.state.stateFeedback ? <button onClick={this.saveFeedback.bind(this)} className="btn btn-primary">Sauvegarder</button>
															:null}
														</div>
													</div>
												</div>
											</div>

										}
										{this.state.selectedUser &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Support Level</h3>
														<div className="card-text">
														<div className="form-group d-flex">
															<label className="radio-inline form-check-label">
																<input type="radio" className="form-check-input" name="supportLevel" value="1" onChange={this.updateSupportLevel.bind(this)} checked={this.state.supportLevel === '1'}/>
																&nbsp;1
															</label>
															<label className="radio-inline form-check-label ml-4">
																<input type="radio" className="form-check-input" name="supportLevel" value="2" onChange={this.updateSupportLevel.bind(this)} checked={this.state.supportLevel === '2'}/>
																&nbsp;2
															</label>
															<label className="radio-inline form-check-label ml-4">
																<input type="radio" className="form-check-input" name="supportLevel" value="3" onChange={this.updateSupportLevel.bind(this)} checked={this.state.supportLevel === '3'}/>
																&nbsp;3
															</label>
															<label className="radio-inline form-check-label ml-4">
																<input type="radio" className="form-check-input" name="supportLevel" value="4" onChange={this.updateSupportLevel.bind(this)} checked={this.state.supportLevel === '4'}/>
																&nbsp;4
															</label>
															<label className="radio-inline form-check-label ml-4">
																<input type="radio" className="form-check-input" name="supportLevel" value="5" onChange={this.updateSupportLevel.bind(this)} checked={this.state.supportLevel === '5'}/>
																&nbsp;5
															</label>
															</div>
														</div>
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
															<div className="form-group d-flex">
													      <label className="radio-inline form-check-label">
													        <input type="radio" className="form-check-input" name="dsexe_m" value="1" onChange={this.updateSexe.bind(this)} checked={this.state.dsexe_m === '1'}/>
													        &nbsp;M
													      </label>
														    <label className="radio-inline form-check-label ml-4">
													        <input type="radio" className="form-check-input" name="dsexe_m" value="0" onChange={this.updateSexe.bind(this)} checked={this.state.dsexe_m === '0'}/>
													        &nbsp;Mme
													      </label>
															</div>
															{this.state.selectedUser.addresses[1].line1}<br />
															{this.state.selectedUser.addresses[1].line2}<br />
															{this.state.selectedUser.addresses[1].line3}<br />
															{this.state.selectedUser.addresses[1].line4}<br />
															{this.state.selectedUser.addresses[1].zipcode} {this.state.selectedUser.addresses[1].city}<br />
															{this.state.selectedUser.addresses[1].country}<br />
															{this.state.selectedUser.addresses[1].phone}
														</p>
													</div>
													<div className="card-block">
														<h3 className="text-center my-4"><small>Adresse de livraison</small></h3>
														<Address data={this.state.delivery_address} company={this.state.selectedUser.user_type == 2?true:false}/>
													</div>
													<div className="card-block">
														<h3 className="card-title">Synchronisation des donnees user</h3>
														<button class="btn btn-secondary btn-sm my-2" onClick={this.synchro.bind(this, this.state.delivery_address)} >Synchronisation des donnees de l'utilisateur</button>
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
														<button className="btn btn-sm btn-info my-2" onClick={this.sendLaterMail.bind(this)} >4 : Fin onboard avec payer plus tard</button><br />
														<button className="btn btn-sm btn-info my-2" onClick={this.sendEncoursMail.bind(this)} >8 : Attribution ruche en cours</button><br />
														<button className="btn btn-sm btn-info my-2" onClick={this.sendCadeauMail.bind(this)} >10 : Cadeau</button><br />
														<button className="btn btn-sm btn-warning my-2" onClick={this.sendMail202.bind(this)} >202 : Paiement attente</button><br />
														<button className="btn btn-sm btn-warning my-2" onClick={this.sendMail203.bind(this)} >203 : Attribution ruche en cours</button><br />
														<button className="btn btn-sm btn-warning my-2" onClick={this.sendMail205.bind(this)} >205 : Virement ok</button><br />
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
														202 : Paiement attente<br />
														203 : Attribution ruche en cours<br />
														205 : Virement ok
													</p>
													<p className="card-table">
														<table className="table table-sm">
															<tbody>
																<tr><th>Type de mail</th><th>Date</th><th>État</th></tr>
																{this.state.selectedUser.emails.map((elem) => {
																	return (
																		<tr><td>{elem.type_email} : {this.getEmailType(elem.type_email)}</td><td>{moment(elem.time).format("DD/MM/YY HH:mm")}</td><td>{this.getTag(elem.state)}</td></tr>
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
