import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'

export default class AdminManageHives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hives : [],
			new: ''
		}
	}

	componentDidMount() {
		this.get();
	}

	get() {
		request({
			url: '/hive',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				hives: res
			})
		})
	}

	addHive(e) {
		e.preventDefault();
		request({
			url: '/hive',
			method: 'post',
			data: {
				name: this.state.new
			}
		}, this.refs.notif).then((res) => {
			this.get();
		})
	}

	delete(id) {
		request({
			url: '/hive/'+id,
			method: 'delete'
		}, this.refs.notif).then((res) => {
			this.get();
		})
	}

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center">Gérer les ruches</h2>
					<h3>Créer une ruche</h3>
					<form className="form-inline my-2" onSubmit={this.addHive.bind(this)}>
						<input type="text" className="form-control mx-2" name="new" value={this.state.new} placeholder="Nom commun de la nouvelle ruche" onChange={handleChange.bind(this)} />
						<button type="submit" className="btn btn-primary">Créer la ruche</button>
					</form>
					<table className="table">
						<tbody>
							<tr><th>Identifiant de la ruche</th><th>Nom commun de la ruche</th><th>Occupation</th><th>Actions</th></tr>
							{this.state.hives && this.state.hives.map((hive) => {
								return (
									<tr><td>{hive.id}</td><td>{hive.name}</td><td>{hive.occupation} %</td><td><button className="btn btn-primary btn-sm" onClick={this.delete.bind(this, hive.id)} >Supprimer</button></td></tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
