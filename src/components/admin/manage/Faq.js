import React, { Component } from 'react'
import request from '../../../services/Net'
import { handleChange } from '../../../services/FormService'
import NotificationSystem from 'react-notification-system'

export default class AdminManageFaq extends Component {

	constructor (props) {
		super (props)
		this.state = {
			items : []
		}
	}

	componentDidMount() {
		this.getQA()
	}

	getQA() {
		request({
			url : '/faq',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ items : res })
		})
	}

	delete(id) {
		request({
			url: '/faq/'+id,
			method: 'delete'
		}, this.refs.notif).then((res) => {
			this.getQA()
		})
	}

	addQA (e) {
		e.preventDefault();
		request({
			url : '/faq',
			method : 'post',
			data : {
				question : this.state.newQuestion,
				answer : this.state.newAnswer,
				type : this.state.type
			}
		}, this.refs.notif).then((res) => {
			this.getQA()
		})
	}

	render () {
		return  (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center my-4">Gerer la FAQ</h2>
					<form>
						<h3>Ajouter une question / réponse</h3>
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Question" name="newQuestion" onChange={handleChange.bind(this)} />
						</div>
						<div className="form-group">
							<textarea className="form-control" placeholder="Réponse" name="newAnswer" onChange={handleChange.bind(this)} />
						</div>
						<div className="form-group">
							<select className="form-control" name="type" onChange={handleChange.bind(this)}>
								<option value="0">Cible</option>
								<option value="1">Général</option>
								<option value="2">Entreprise</option>
								<option value="3">Particulier</option>
								<option value="4">Apporteur d'affaire</option>
							</select>
						</div>
						<div className="form-group">
							<input className="btn btn-primary" type="submit" value="Ajouter" onClick={this.addQA.bind(this)} />
						</div>
					</form>
					<table className="table">
						<tbody>
							{this.state.items.map((item) => {
								return (<tr key={item.id}><td>{item.question}</td><td><button onClick={this.delete.bind(this, item.id)} className="btn btn-primary btn-sm">Supprimer</button></td></tr>)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
