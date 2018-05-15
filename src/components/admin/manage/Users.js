import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../utils/Loading'
import ReactGA from 'react-ga'
import moment from 'moment'
import Meta from '../../utils/Meta'
import Confirm from '../../utils/Confirm'
import Address from '../../utils/Address/Address'
import UserGeneral from './users/General'
import FontAwesome from 'react-fontawesome'

import { handleChange, handleTick } from '../../../services/FormService'
import { EventEmitter } from 'events';


export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			users : null,
			filteredUsers : null,
			selectedUser: null,
			bsexe_m: '', /* sexe bill */
			dsexe_m: '',  /* sexe delivery */
			feedback: '',
			stateFeedback: 0,
			supportLevel: null,
			filters : {
				p : true,
				e : true,
				aa : true,
				edit : true,
				admin : true
			}
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
			}, () => {
				this.filter();
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

	promoteUser = (e) => {
		this.setState({
			selectedUser: {
				...this.state.selectedUser,
				[e.target.name]: e.target.value
			}
		});
		request({
			url : '/users/'+this.state.selectedUser.id+'/promote/'+e.target.value,
			method : 'patch'
		}, this.refs.notif).then((res) => {
			this.getUsers();
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
		console.log(user);
		request({
			url: '/bundle/owner/'+user.id,
			method: 'GET'
		}, this.refs.notif).then((res) => {
			console.log(res);
				if (res) {
				this.setState({
					bundle_id: res.id
				})
			}
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
				return ("Editor");
			case 5:
				return ("Admin");

		}
	}

	sendMail16() {
		request({
			url: '/bill/bundle/'+this.state.bundle_id,
			method: 'get'
		}, this.refs.notif).then((res) => {
			request({
				url: '/mail/send_16',
				method: 'put',
				data : {
					owner: this.state.selectedUser,
					bill: res
				}
			}, this.refs.notif).then((res) => {
			 console.log("mail envoyer");
			})
		}, this.refs.notif).then((res) => {
		})
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

	updateGeneralSexe = (event) => {
		this.setState({
			selectedUser : {
				...this.state.selectedUser,
				[event.target.name]: (event.target.value === '1')?true:false
			}
		})
		console.log(event.target.value);
		request({
			url: '/user/' + this.state.selectedUser.id,
			method: 'put',
			data: {
				sexe_m: (event.target.value === '1')?true:false
			}
		}, this.refs.notif).then(() => {
				this.getUsers();
		});
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

	checkFilter = (e) => {
		this.setState({
			filters : {
				...this.state.filters,
				[e.target.name] : !this.state.filters[e.target.name]
			}
		}, () => { this.filter() });
	}
	filter = () => {
		const filteredUsers = this.state.users.filter((e) => (
			(e.user_type === 1 && this.state.filters.p)
			|| (e.user_type === 2 && this.state.filters.e)
			|| (e.user_type === 3 && this.state.filters.aa)
			|| (e.user_type === 4 && this.state.filters.edit)
			|| (e.user_type === 5 && this.state.filters.admin)
		));
		console.log(filteredUsers);
		this.setState({
			filteredUsers : filteredUsers
		});
	}

	order = () => {
		const ordered = this.state.filteredUsers.sort((a, b) => {
			const aCommonName = (a.company_name)?a.company_name:a.name;
			const bCommonName = (b.company_name)?b.company_name:b.name;
			if (aCommonName.toLowerCase() < bCommonName.toLowerCase()) return -1;
			if (aCommonName.toLowerCase() > bCommonName.toLowerCase()) return 1;
			return 0;
		});
		this.setState({
			filteredUsers : ordered
		});
	}

	render () {
		return (
			<div className="container-fluid">
				<Meta title="Gestion des utilisateurs"/>
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col">
						<h2 className="text-center my-4">Gérer les utilisateurs</h2>
					</div>
				</div>
				<div className="row mb-2">
					<div className="col">
						<label htmlFor="p"><input type="checkbox" name="p" id="p" checked={this.state.filters.p} onChange={this.checkFilter} /> Particuliers</label>&nbsp;&nbsp;
						<label htmlFor="e"><input type="checkbox" name="e" id="e" checked={this.state.filters.e} onChange={this.checkFilter} /> Entreprises</label>&nbsp;&nbsp;
						<label htmlFor="aa"><input type="checkbox" name="aa" id="aa" checked={this.state.filters.aa} onChange={this.checkFilter} /> Apporteurs d'Affaires</label>&nbsp;&nbsp;
						<label htmlFor="edit"><input type="checkbox" name="edit" id="edit" checked={this.state.filters.edit} onChange={this.checkFilter} /> Editors</label>&nbsp;&nbsp;
						<label htmlFor="admin"><input type="checkbox" name="admin" id="admin" checked={this.state.filters.admin} onChange={this.checkFilter} /> Admins</label>&nbsp;&nbsp;
						<button className="btn btn-link btn-sm" onClick={this.order}>Trier par noms</button>
					</div>
				</div>
				<div className="row">				
					<div className="col-3" style={{ maxHeight: '50vh', overflowY : 'scroll' }}>
						{this.state.filteredUsers?
						<table className="table table-sm">
							<tbody>
								{this.state.filteredUsers.map((user) => {
									return (<tr key={user.id}><td><span className="badge badge-info">{this.renderType(user.user_type)}</span> {(user.company_name)?user.company_name:user.name+' '+user.firstname}</td><td><button className="btn btn-sm btn-link" onClick={this.selectUser.bind(this, user)}><FontAwesome name="pencil" /></button></td></tr>)
								})}
							</tbody>
						</table>
						:<Loading />}
					</div>
						{(this.state.selectedUser)?
							<div className="col-lg-9 col-md-12">
								<div className="row">
									<div className="col-lg-6 col-md-12 my-2">
										<UserGeneral
											data={this.state.selectedUser}
											updateSexe={this.updateGeneralSexe}
											promote={this.promoteUser} />
									</div>
										{this.state.selectedUser.addresses && this.state.selectedUser.addresses[0] &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Adresse de facturation</h3>
														<div>
															<Address data={this.state.billing_address} company={this.state.selectedUser.user_type === 2?true:false}/>
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
															<div>
																<Address data={this.state.delivery_address} company={this.state.selectedUser.user_type === 2?true:false}/>
															</div>
													</div>
												</div>
											</div>
										}
										<div className="col-lg-6 col-md-12 my-2">
											<div className="card">
												<div className="card-block">
													<h3 className="card-title">Envoi de mails</h3>
													<p className="card-text">
														{this.state.bundle_id ? <button className="btn btn-sm btn-info my-2" onClick={this.sendMail16.bind(this)} >16 : Oups... </button>
														: null
														}
													</p>
												</div>
											</div>
											<div className="card my-2">
												<div className="card-block">
													<h3 className="card-title">Historique de mails</h3>
													<p className="card-text">
														16 : Oups... <br />
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
