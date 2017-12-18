import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'
import Loading from '../../utils/Loading'
import { Redirect } from 'react-router-dom'
import { logout } from '../../../services/AuthService'
import Confirm from '../../utils/Confirm'

export default class IndividualManageInfos extends Component {

	constructor(props) {
		super(props)
		this.state = {
			logout: false,
			phone: '',
			email: '',
			baddress1: '',
			baddress2: '',
			baddress3: '',
			baddress4: '',
			bzip: '',
			bcity: '',
			bcountry: '',
			daddress1: '',
			daddress2: '',
			daddress3: '',
			daddress4: '',
			dzip: '',
			dcity: '',
			dcountry: '',
			dphone: '',
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

	async save() {
		await request({
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
		await request({
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
		await request({
			url: '/user',
			method: 'put',
			data: {
				phone: this.state.phone,
				email: this.state.email
			}
		}, this.refs.notif)
	}

	updateBaddress() {
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

	updateDaddress() {
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

	changeInfos() {
		request({
			url: '/user',
			method: 'put',
			data: {
				phone: this.state.phone,
				email: this.state.email
			}
		}, this.refs.notif)
	}

	render () {
		return (
			<div>
				{this.state.logout && <Redirect to="/" />}
				<NotificationSystem ref="notif" />
				<div className="row my-5">
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
						</div>
						<div className="row">
							<div className="col-lg-6 col-sm-12 my-4">
								<strong>Nom :</strong> {this.state.user.name}<br />
								<strong>Prénom :</strong> {this.state.user.firstname}<br />
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-sm-12">
								<form>
									<div className="form-group">
										<input type="phone" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control" placeholder="Numéro de téléphone" />
									</div>
									<div className="form-group">
										<input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} className="form-control" placeholder="Email" />
									</div>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-6 col-sm-12 text-center my-4">
								<h3 className="text-center"><small>Mon adresse de facturation</small></h3>
							</div>
							<div className="col-lg-6 col-sm-12 text-center my-4">
								<h3 className="text-center"><small>Mes informations de livraison</small></h3>
							</div>
						</div>
						<div className="row">
							<form className="col-lg-6 col-sm-12 text-center">
								<div className="form-group">
									<input type="text" name="baddress1" onChange={handleChange.bind(this)} value={this.state.baddress1} className="form-control" placeholder="Nom et prénom"/>
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
							<form className="col-lg-6 col-sm-12 text-center">
								<div className="form-group">
									<input type="text" name="daddress1" onChange={handleChange.bind(this)} value={this.state.daddress1} className="form-control" placeholder="Nom et prénom"/>
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
						</div>
						<div className="row">
							<div className="col-lg-12 text-center">
								<button className="btn btn-primary" onClick={this.save.bind(this)}>Enregistrer les modifications</button>
							</div>
						</div>
					</div>
				:<Loading />}
			</div>
		);
	}
}
