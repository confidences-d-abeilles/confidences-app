import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import { handleChange } from '../../../services/FormService'
import Confirm from '../../utils/Confirm'

export default class Bundle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bundle: null,
			hives: [],
			hive: "0"
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
				bundle: res
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
			}, this.refs.notif);
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
				return ("Non regle");
				break;
			case 1:
				return("En attente de validation");
				break;
			case 2:
				return ("Paye");
				break;
			case 3:
				return ("Paye et en place");
				break;
			default:
				return ("N / A");
				break;
		}
	}

	validatePayement() {
		request({
			url: '/payment/validate/'+this.state.bundle.id,
			method: 'put'
		}, this.refs.notif).then((res) => {
			this.props.refresh();
		})
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
									<h3 className="card-title">Etat du paiement</h3>
									<h4 className="my-4">
											{this.getPaymentStatus(this.state.bundle.state)}
									</h4>
									{this.state.bundle.state === 1 && <button className="btn btn-info" onClick={this.validatePayement.bind(this)}>Valider le paiement</button>}
								</div>
							</div>
							<div className="card">
								<div className="card-block">
									<h3 className="card-title">Etat de l'offre</h3>
									<p className="card-text">
										Demande initiale : {this.state.bundle.hives} ruches et {this.state.bundle.bees} abeilles <br />
										Nombre de ruches totalement ou partielement associées : {this.state.bundle.contain.length}<br />
									</p>
								</div>
							</div>
						</div>
						<div className="card-deck my-4">
							<div className="card">
								<div className="card-block">
									<h3 className="card-title">Ruches associees</h3>
									<p className="card-text">
										Les ruches associees...
									</p>
									<form className="my-2" onSubmit={this.assocHive.bind(this)}>
										<select name="hive" onChange={handleChange.bind(this)} className="form-control">
											<option value="0">Choisir une ruche...</option>
											{this.state.hives.map((hive) => {
												if ((this.state.bundle.bees && hive.occupation < (50000 - this.state.bundle.bees) / 50000 * 100) || (this.state.bundle.hives > 0 && hive.occupation === 0)) {
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
