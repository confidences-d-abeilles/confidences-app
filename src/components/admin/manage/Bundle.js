import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import { handleChange } from '../../../services/FormService'
import Confirm from '../../utils/Confirm'
import DatePicker from 'react-datepicker';
import moment from 'moment'

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
				stateSelector: res.state
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

	validate () {
		request({
			url: '/bundle/'+this.props.id,
			method: 'put',
			data : {
				state: 3
			}
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		});
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
			this.props.refresh();
		})
	}

	updatePayment(e) {
		e.preventDefault();
		request({
			url: '/bundle/'+this.props.id,
			method: 'put',
			data : {
				state: this.state.stateSelector
			}
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		});
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(this.state.bundle)?
					<div>
						<div className="card-deck mb-4">
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
										<button className="btn btn-secondary btn-small my-2" onClick={this.changeStartDate.bind(this)}>Mettre a jour</button><br />
										Demande : {this.state.bundle.hives} ruches et {this.state.bundle.bees} abeilles <br />
										Nombre de ruches totalement ou partielement associées : {this.state.bundle.contain.length}<br /><br />
										{(this.state.bundle.present)?
										<p>
											<strong>Ce parrainage est un cadeau pour :</strong><br />
											{this.state.bundle.firstname} {this.state.bundle.name}<br />
											{this.state.bundle.email}<br />
											Date d'effet : {moment(this.state.bundle.start_date).format("DD/MM/YYYY")}
										</p>
										:'Ce parrainage n\'est pas un cadeau'}
									</p>
								</div>
							</div>
						</div>
						<div className="card-deck my-4">
							<div className="card">
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
							<div className="card">
								<div className="card-block">
									<h3 className="card-title">Autre action</h3>
									<p className="card-text">
										<button className="btn btn-secondary my-2" onClick={this.validate.bind(this)}>Valider la préparation du parrainage</button>
										<Confirm action={this.delete.bind(this)} text="Supprimer ce parrainage" />
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
