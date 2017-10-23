import React, { Component } from 'react'
import { handleChange } from '../../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'


export default class CompanyManageMyPage extends Component {

	constructor (props) {
		super (props);
		this.state = {

		}
	}

	componentWillMount() {
		request({
			url : '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ user : res})
		}).catch((err) => {})
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<h2 className="text-center">Modifier ma page</h2>
				<div className="row my-4">
					<div className="col text-center">
						<a href={require('../../../assets/page_ent.pdf')} target="_blank" className="btn btn-secondary">Comment personaliser ma page ?</a>
					</div>
					<div className="col text-center">
						<Link to={(this.state.user)?"/"+this.state.user.company_name:'/'} className="btn btn-secondary">Voir ma page</Link>
					</div>
				</div>
				<form>
					<div className="form-group">
						<input type="text" placeholder="Nom de l'entreprise" name="name" value={this.state.name} onChange={handleChange.bind(this)} className="form-control" />
					</div>
					<div className="form-group">
						<label>{"https://parrainage.confidencesdabeilles.fr/"+this.state.namespace}</label>
						<input type="text" placeholder="URL de votre page" name="namespace" value={this.state.namespace} onChange={handleChange.bind(this)} className="form-control" />
					</div>
					<div className="form-group">
						<label>Photo de couverture de votre page</label>
						<input type="file" className="form-control" name="cover" />
					</div>
					<div className="form-group">
						<label>Logo de votre entreprise</label>
						<input type="file" className="form-control" name="logo" />
					</div>
					<div className="form-group">
						<textarea name="description" className="form-control" value={this.state.description} onChange={handleChange.bind(this)} placeholder="Présentation brève de la société ..." />
					</div>
					<div className="form-group">
						<textarea name="involvement" className="form-control" value={this.state.involvement} onChange={handleChange.bind(this)} placeholder="Engagement environnemental (optionnel) ..." />
					</div>
					<div className="form-group"></div>

				</form>
			</div>
		)
	}
}
