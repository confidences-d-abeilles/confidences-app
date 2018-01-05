
import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'
import Loading from '../../utils/Loading'
import { Redirect } from 'react-router-dom'
import { logout } from '../../../services/AuthService'
import Confirm from '../../utils/Confirm'
import ReactGA from 'react-ga';

export default class CompanyManageInfos extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			logout: false,
			password: '',
			conf: ''
		}
	}

	componentDidMount() {
		this.get();
	}

	get() {
		request({
			url : '/user/me',
			method : 'get',
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res,
				email: res.email,
				phone: res.phone
			});
			res.addresses.map((address) => {
				if (address.type === 1) {
					this.setState({
						bid: address.id,
						bsexe_m: address.sexe_m?'1':'0',
						baddress1: address.line1,
						baddress2: address.line2,
						baddress3: address.line3,
						baddress4: address.line4,
						bzip: address.zipcode,
						bcity: address.city,
						bcountry: address.country
					})
				}
				if (address.type === 2) {
					this.setState({
						did: address.id,
						dsexe_m: address.sexe_m?'1':'0',
						daddress1: address.line1,
						daddress2: address.line2,
						daddress3: address.line3,
						daddress4: address.line4,
						dzip: address.zipcode,
						dcity: address.city,
						dcountry: address.country,
						dphone: address.phone
					})
				}
			})
		});
	}

	deleteAccount() {
		request({
			url: '/user',
			method: 'delete'
		}, this.refs.notif).then((res) => {
			logout();
			this.setState({
				logout: true
			})
		})
	}

	updateBaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.bid,
			method: 'put',
			data : {
				sexe_m: this.state.bsexe_m === '0' ? 'false':'true',
				line1: this.state.baddress1,
				line2: this.state.baddress2,
				line3: this.state.baddress3,
				line4: this.state.baddress4,
				zipcode: this.state.bzip,
				city: this.state.bcity,
				country: this.state.bcountry
			}
		}, this.refs.notif);
	}

	updateDaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.did,
			method: 'put',
			data : {
				sexe_m: this.state.dsexe_m === '0' ? 'false':'true',
				line1: this.state.daddress1,
				line2: this.state.daddress2,
				line3: this.state.daddress3,
				line4: this.state.daddress4,
				zipcode: this.state.dzip,
				city: this.state.dcity,
				country: this.state.dcountry,
				phone: this.state.dphone
			}
		}, this.refs.notif);
	}

	changeInfos(e) {
		e.preventDefault()
		request({
			url: '/user',
			method: 'put',
			data: {
				phone: this.state.phone,
				email: this.state.email
			}
		}, this.refs.notif)
	}


	changePassword(e) {
		e.preventDefault()
		if (this.state.password === this.state.conf) {
			request({
				url: '/user',
				method: 'put',
				data: {
					password: this.state.password
				}
			}, this.refs.notif)
		} else {
			this.refs.notif.addNotification({
				message: 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
				level: 'warning'
			})
		}
	}

	render () {
		return (
			<div>
				{this.state.logout && <Redirect to="/" />}
				<NotificationSystem ref="notif" />
				<div className="row my-2">
					<div className="col">
						<h2 className="text-center">
							Mes informations
						</h2>
					</div>
				</div>
				{(this.state.user)?
					<div>
						<div className="row">
							<div className="col-lg-6 col-sm-12">
								<h3 className="text-center"><small>Mes informations</small></h3>
							</div>
							<div className="col-lg-6 col-sm-12">
								<h3 className="text-center"><small>Modifier mon mot de passe</small></h3>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-sm-12">
								<p>
									<strong>Entreprise :</strong> {this.state.user.company_name}<br />
									<strong>Siret :</strong> {this.state.user.siret}<br />
									<strong>Nom :</strong> {this.state.user.name}<br />
									<strong>Prénom :</strong> {this.state.user.firstname}<br />
									<strong>Poste dans l'entreprise :</strong> {this.state.user.job}
								</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-sm-12">
								<form onSubmit={this.changeInfos.bind(this)}>
									<div className="form-group">
										<input type="phone" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control" placeholder="Numéro de téléphone" />
									</div>
									<div className="form-group">
										<input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} className="form-control" placeholder="Email" />
									</div>
									<button className="btn btn-primary">Mettre à jour</button>
								</form>
							</div>
							<div className="col-lg-6 col-sm-12">
								<form onSubmit={this.changePassword.bind(this)}>
									<div className="form-group">
										<input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
									</div>
									<div className="form-group">
										<input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
									</div>
									<button className="btn btn-primary mb-4">Enregistrer</button>
								</form>
							</div>
						</div>
					</div>
					:null}
					<div className="row">
						{this.state.user &&
						<form className="col-lg-6 col-sm-12">
							<h3 className="text-center my-4"><small>Mon adresse de facturation</small></h3>
							<div className="form-group d-flex">
								<label className="radio-inline form-check-label">
									<input type="radio" className="form-check-input" name="bsexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.bsexe_m === '1'}/>
									&nbsp;M
								</label>
								<label className="radio-inline form-check-label ml-4">
									<input type="radio" className="form-check-input" name="bsexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.bsexe_m === '0'}/>
									&nbsp;Mme
								</label>
							</div>
							<div className="form-group">
								<input type="text" name="baddress1" onChange={handleChange.bind(this)} value={this.state.baddress1} className="form-control" placeholder="Nom et prénom"/>
							</div>
							<div className="form-group">
								<input type="text" name="baddress2" onChange={handleChange.bind(this)} value={this.state.baddress2} className="form-control" placeholder="Entreprise"/>
							</div>
							<div className="form-group">
								<input type="text" name="baddress3" onChange={handleChange.bind(this)} value={this.state.baddress3} className="form-control" placeholder="Adresse ligne 1"/>
							</div>
							<div className="form-group">
								<input type="text" name="baddress4" onChange={handleChange.bind(this)} value={this.state.baddress4} className="form-control" placeholder="Adresse ligne 2"/>
							</div>
							<div className="form-group row">
								<div className="col-4">
									<input type="text" name="bzip" onChange={handleChange.bind(this)} value={this.state.bzip} className="form-control" placeholder="Code postal"/>
								</div>
								<div className="col-8">
									<input type="text" name="bcity" onChange={handleChange.bind(this)} value={this.state.bcity} className="form-control" placeholder="Ville *"/>
								</div>
							</div>
							<div className="form-group">
								<input type="text" name="bcountry" onChange={handleChange.bind(this)} value={this.state.bcountry} className="form-control" placeholder="Pays / Etat *"/>
							</div>
						</form>
						}
						{this.state.user &&
						<form className="col-lg-6 col-sm-12">
							<h3 className="text-center my-4"><small>Mes informations de livraison</small></h3>
							<div className="form-group d-flex">
								<label className="radio-inline form-check-label">
									<input type="radio" className="form-check-input" name="dsexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.dsexe_m === '1'}/>
									&nbsp;M
								</label>
								<label className="radio-inline form-check-label ml-4">
									<input type="radio" className="form-check-input" name="dsexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.dsexe_m === '0'}/>
									&nbsp;Mme
								</label>
							</div>
							<div className="form-group">
								<input type="text" name="daddress1" onChange={handleChange.bind(this)} value={this.state.daddress1} className="form-control" placeholder="Nom et prénom"/>
							</div>
							<div className="form-group">
								<input type="text" name="daddress2" onChange={handleChange.bind(this)} value={this.state.daddress2} className="form-control" placeholder="Entreprise"/>
							</div>
							<div className="form-group">
								<input type="text" name="daddress3" onChange={handleChange.bind(this)} value={this.state.daddress3} className="form-control" placeholder="Ligne 1"/>
							</div>
							<div className="form-group">
								<input type="text" name="daddress4" onChange={handleChange.bind(this)} value={this.state.daddress4} className="form-control" placeholder="Ligne 2"/>
							</div>
							<div className="form-group row">
								<div className="col-4">
									<input type="text" name="dzip" onChange={handleChange.bind(this)} value={this.state.dzip} className="form-control" placeholder="Code postal *"/>
								</div>
								<div className="col-8">
									<input type="text" name="dcity" onChange={handleChange.bind(this)} value={this.state.dcity} className="form-control" placeholder="Ville *"/>
								</div>
							</div>
							<div className="form-group">
								<input type="text" name="dcountry" onChange={handleChange.bind(this)} value={this.state.dcountry} className="form-control" placeholder="Pays / Etat *"/>
							</div>
							<hr />
							<div className="form-group">
								<input type="text" name="dphone" onChange={handleChange.bind(this)} value={this.state.dphone} className="form-control" placeholder="Numéro de téléphone"/>
							</div>
						</form>
						}
					</div>
					<div className="row">
						<div className="col-lg-6">
							<div className="form-group">
								<button className="btn btn-primary" onClick={this.updateBaddress.bind(this)}>Enregistrer les modifications</button>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="form-group">
								<button className="btn btn-primary" onClick={this.updateDaddress.bind(this)}>Enregistrer les modifications</button>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-6 col-md-10 col-sm-12">
							<h3 className="text-center my-4"><small>Supprimer mon compte</small></h3>
							<Confirm action={this.deleteAccount.bind(this)} text="Supprimer mon compte" />
						</div>
					</div>
			</div>
		);
	}
}
