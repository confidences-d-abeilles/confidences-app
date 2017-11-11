import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import { handleChange } from '../../../services/FormService'

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
		this.get();
	}

	componentWillReceiveProps() {
		this.get();
	}

	get() {
		request({
			url: '/bundle/'+this.props.id,
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

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(this.state.bundle)?
					<div>
						<h3>Parrainage {this.state.bundle.id}</h3>
						Demande initiale : {this.state.bundle.hives} ruches et {this.state.bundle.bees} abeilles <br />
						Nombre de ruches totalement ou partielement associées : {this.state.bundle.contain.length}<br />
						<h4>Associer une ruche</h4>
						<form className="form-inline my-2" onSubmit={this.assocHive.bind(this)}>
							<select name="hive" onChange={handleChange.bind(this)} className="form-control">
								<option value="0">Choisir une ruche...</option>
								{this.state.hives.map((hive) => {
									if (hive.occupation == 0) {
										return (<option value={hive.id} key={hive.id}>{hive.name} (occupé à {hive.occupation}%)</option>)
									} else {
										return null;
									}
								})}
							</select>
							<button className="btn btn-primary mx-2">Associer cette ruche</button>
						</form>
						<button className="btn btn-primary" onClick={this.validate.bind(this)}>Valider la préparation du parrainage</button>
						<button className="btn btn-primary" onClick={this.delete.bind(this)}>Supprimer ce parrainage</button>
					</div>
				:'Chargement en cours...'}
			</div>
		)
	}
}
