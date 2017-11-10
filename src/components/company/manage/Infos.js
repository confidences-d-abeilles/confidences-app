
import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'

export default class CompanyManageInfos extends Component {

	constructor(props) {
		super(props)
		this.state = {

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

	updateBaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.bid,
			method: 'put',
			data : {
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
				<NotificationSystem ref="notif" />
				<div className="row my-2">
					<div className="col">
						<h2 className="text-center">
							Mes informations
						</h2>
					</div>
				</div>
					<div className="row">

						{(this.state.user)?
						<div className="col">
							<h3 className="text-center">Mes informations</h3>
							<p>
								<strong>Entreprise :</strong> {this.state.user.company_name}<br />
								<strong>Siret :</strong> {this.state.user.siret}<br />
								<strong>Nom :</strong> {this.state.user.name}<br />
								<strong>Prénom :</strong> {this.state.user.firstname}<br />
								<strong>Poste dans l'entreprise :</strong> {this.state.user.job}<br />
								<form onSubmit={this.changeInfos.bind(this)}>
									<div className="form-group">
										<input type="phone" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control" placeholder="Numéro de téléphone" />
									</div>
									<div className="form-group">
										<input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} className="form-control" placeholder="Email" />
									</div>
									<button className="btn btn-primary">Mettre à jour</button>
								</form>
							</p>
						</div>
						:null}
						{(this.state.user)?
						<div className="col">
							<h3 className="text-center">Modifier mon mot de passe</h3>
							<form onSubmit={this.changePassword.bind(this)}>
								<div className="form-group">
									<input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
								</div>
								<div className="form-group">
									<input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
								</div>
								<button className="btn btn-primary">Enregistrer</button>
							</form>
						</div>
						:'Chargement en cours...'}
					</div>
					<div className="row">
						{this.state.user &&
						<form className="col-6 text-center">
							<h3 className="text-center">Mon adresse de facturation</h3>
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
							<div className="form-group">
								<button className="btn btn-primary" onClick={this.updateBaddress.bind(this)}>Enregistrer les modifications</button>
							</div>
						</form>
						}
						{this.state.user &&
						<form className="col-6 text-center">
							<h3 className="text-center">Mes informations de livraison</h3>
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
							<div className="form-group">
								<button className="btn btn-primary" onClick={this.updateDaddress.bind(this)}>Enregistrer les modifications</button>
							</div>
						</form>
						}
					</div>
			</div>
		);
	}
}
