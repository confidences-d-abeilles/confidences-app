import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import { handleChange } from '../../../services/FormService'
import Confirm from '../../utils/Confirm'
import DatePicker from 'react-datepicker';
import moment from 'moment'
import FontAwesome from 'react-fontawesome'
const config = require("../../../config.js");

export default class Bundle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bundle: null,
			hives: [],
			hive: "0",
			stateSelector: '',
			bundleStart: ''
		}
	}

	componentDidMount() {
		this.get(this.props.id);
	}

	componentWillReceiveProps(next) {
		this.get(next.id);
	}

	get(id) {
		request({
			url: '/bundle/'+id,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundle: res,
				stateSelector: res.state,
				present_name: res.name,
				present_firstname: res.firstname,
				present_email: res.email,
				present: res.present
			})
		})

		request({
			url: '/hive',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				hives: res
			})
		})
	}

	assocHive (e) {
		e.preventDefault()
		if (this.state.hive) {
			request({
				url: '/bundle/'+this.props.id+'/associate/'+this.state.hive,
				method: 'put'
			}, this.refs.notif).then((res) => {
				this.props.refresh();
			});
		}
	}

	delete () {
		request({
			url: '/bundle/'+this.props.id,
			method: 'delete'
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		});
	}

	getPaymentStatus(nb) {
		switch(nb) {
			case 0:
				return ("Non reglé");
				break;
			case 1:
				return("En attente de validation");
				break;
			case 2:
				return ("Payé");
				break;
			case 3:
				return ("Payé et en place");
				break;
			default:
				return ("N / A");
				break;
		}
	}

	handleDateChange(date) {
		this.setState({
			bundleStart: date
		})
	}

	changeStartDate() {
		request({
			url: '/bundle/'+this.props.id,
			method: 'put',
			data: {
				present_date: this.state.bundleStart
			}
		}, this.refs.notif).then((res) => {
			this.setState({ bundleStart : '' })
			this.props.refresh();
		})
	}

	updatePresent(e) {
		e.preventDefault();
		request({
			url: '/bundle/'+this.props.id,
			method: 'put',
			data : {
				present_email: this.state.present_email,
				present_name: this.state.present_name,
				present_firstname: this.state.present_firstname
			}
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		});
	}

	updatePayment(e) {
		e.preventDefault();
		const data = new FormData();
		data.append('state', this.state.stateSelector);
		if (this.state.present == false && this.state.stateSelector === '2') {
			data.append('present_date', new Date());
			data.append('present_end', new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
		}
		request({
			url: '/bundle/'+this.props.id,
			method: 'put',
			data : data
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		});
	}

	uploadCertif() {
		const data = new FormData();
		if (document.getElementById("certif").files[0]) {
			data.append("certif", document.getElementById("certif").files[0])
		}
		request({
			url: '/bundle/'+this.props.id+'/certif',
			method: 'put',
			data : data
		}, this.refs.notif)
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(this.state.bundle)?
					<div className="row">
						<div className="col-lg-6">
							<div className="card">
								<div className="card-block">
									<h3 className="card-title">Paiement</h3>
									<h4 className="my-4">
											{this.getPaymentStatus(this.state.bundle.state)}
									</h4>
									<form onSubmit={this.updatePayment.bind(this)}>
										<div className="form-group">
											<select className="form-control" onChange={handleChange.bind(this)} name="stateSelector" value={this.state.stateSelector}>
												<option value="0">Non reglé</option>
												<option value="1">Paiement en attente de validation</option>
												<option value="2">Payé</option>
												<option value="3">Payé et en place</option>
											</select>
										</div>
										<button className="btn btn-primary">Mettre a jour le status</button>
									</form>
								</div>
							</div>
							<div className="card mt-4">
								<div className="card-block">
									<h3 className="card-title">Ruches</h3>
									<p className="card-text">
										Les ruches associees...
									</p>
									<form className="my-2" onSubmit={this.assocHive.bind(this)}>
										<select name="hive" onChange={handleChange.bind(this)} className="form-control">
											<option value="0">Choisir une ruche...</option>
											{this.state.hives.map((hive) => {
												if ((this.state.bundle.bees && hive.occupation <= (50000 - this.state.bundle.bees) / 50000 * 100) || (this.state.bundle.hives > 0 && hive.occupation === 0)) {
													return (<option value={hive.id} key={hive.id}>{hive.name} (occupé à {hive.occupation}%)</option>)
												} else {
													return null;
												}
											})}
										</select>
										<button className="btn btn-secondary my-2">Associer cette ruche</button>
									</form>
								</div>
							</div>
							<div className="card mt-4">
								<div className="card-block">
									<h3 className="card-title">Certificat de parrainage</h3>
									{this.state.bundle.certif &&
									<a href={config.cdn_url+'/'+this.state.bundle.certif} target="_blank" className="btn btn-secondary btn-sm my-2">Actuel <FontAwesome name="external-link" /></a>}
									<div className="form-group">
										<label htmlFor="certif" className={(this.state.certif)?'active-upload':'upload'} style={{ position: 'relative' }}>
											<input type="file" className="form-control" id="certif" onChange={() => { this.setState({ certif : document.getElementById("certif").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
											Glisser un PDF ou cliquez pour en séléctionner un parmi vos fichiers<br/>
											{(this.state.certif)?'Selectionné : '+this.state.certif:"Aucun fichier séléctionné"}
										</label>
									</div>
									<div className="form-group">
										<button className="btn btn-primary" onClick={this.uploadCertif.bind(this)} >Uploader le certificat</button>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="card">
								<div className="card-block">
									<h3 className="card-title">Demande</h3>
									<p className="card-text">
										Date : {moment(this.state.bundle.start_date).format("DD/MM/YYYY")}<br />
										<DatePicker
											dateFormat="DD/MM/YYYY"
											selected={this.state.bundleStart}
											onChange={this.handleDateChange.bind(this)}
											className="form-control"
											/>
										<button className="btn btn-secondary btn-sm my-2" onClick={this.changeStartDate.bind(this)}>Mettre a jour</button><br />
										Demande : {this.state.bundle.hives} ruches et {this.state.bundle.bees} abeilles <br />
										Nombre de ruches totalement ou partielement associées : {this.state.bundle.contain.length}<br /><br />
										{(this.state.bundle.present)?
										<form onSubmit={this.updatePresent.bind(this)}>
											<strong>Ce parrainage est un cadeau pour :</strong><br />
											<div className="form-group">
												<input type="text" name="present_firstname" onChange={handleChange.bind(this)} value={this.state.present_firstname} placeholder="Prenom" className="form-control" />
											</div>
											<div className="form-group">
												<input type="text" name="present_name" onChange={handleChange.bind(this)} value={this.state.present_name} placeholder="Nom" className="form-control" />
											</div>
											<div className="form-group">
												<input type="text" name="present_email" onChange={handleChange.bind(this)} value={this.state.present_email} placeholder="Email" className="form-control" />
											</div>
											<button className="btn btn-secondary btn-sm my-2" >Valider</button>
										</form>
										:'Ce parrainage n\'est pas un cadeau'}
									</p>
								</div>
							</div>
							<div className="card mt-4">
								<div className="card-block">
									<h3 className="card-title">Autre action</h3>
									<p className="card-text">
										<Confirm action={this.delete.bind(this)} text="Supprimer ce parrainage" />
									</p>
								</div>
							</div>
							<div className="card mt-4">
								<div className="card-block">
									<h3 className="card-title">Message</h3>
									<p className="card-text">
										{this.state.bundle.feedback}
									</p>
								</div>
							</div>
						</div>
					</div>
				:'Chargement en cours...'}
			</div>
		)
	}
}
