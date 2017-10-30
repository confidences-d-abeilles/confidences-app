import React, { Component } from 'react'
import { handleChange } from '../../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'


export default class CompanyManageMyPage extends Component {

	constructor (props) {
		super (props);
		this.state = {
			name : '',
			namespace : '',
			description : '',
			involvement : ''
		}
	}

	componentDidMount() {
		this.get();
	}

	get() {
		request({
			url : '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res,
				name : res.company_name,
				namespace : res.namespace,
				description : res.description,
				involvement : res.involvement,
				link1_name: res.link1_name,
				link1_url: res.link1_url,
				link2_name: res.link2_name,
				link2_url: res.link2_url
			});
		}).catch((err) => {})
	}

	submit(e) {
		e.preventDefault();
		const formData = new FormData();
		formData.append('company_name', this.state.name);
		formData.append('namespace', this.state.namespace);
		formData.append('description', this.state.description);
		formData.append('involvement', this.state.involvement);
		formData.append('link1_name', this.state.link1_name);
		formData.append('link1_url', this.state.link1_url);
		formData.append('link2_name', this.state.link2_name);
		formData.append('link2_url', this.state.link2_url);
		if (document.getElementById("cover").files[0]) {
			formData.append('cover', document.getElementById("cover").files[0]);
		}
		if (document.getElementById("logo").files[0]) {
			formData.append('logo', document.getElementById("logo").files[0]);
		}
		request({
			url : '/user',
			method : 'put',
			data : formData,
			headers : {
				'content-type': 'multipart/form-data'
			}
		}, this.refs.notif).then((res) => {
			this.get()
		}).catch((err) => {

		});
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
						<Link to={(this.state.user)?"/"+this.state.user.namespace:'/'} className="btn btn-secondary">Voir ma page</Link>
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
						<input type="file" className="form-control" name="cover" id="cover" />
					</div>
					<div className="form-group">
						<label>Logo de votre entreprise</label>
						<input type="file" className="form-control" name="logo" id="logo" />
					</div>
					<div className="form-group">
						<textarea name="description" className="form-control" value={this.state.description} onChange={handleChange.bind(this)} placeholder="Présentation brève de la société ..." />
					</div>
					<div className="form-group">
						<label>Notre Engagement pour la biodiversite</label>
						<textarea name="involvement" className="form-control" value={this.state.involvement} onChange={handleChange.bind(this)} placeholder="Engagement environnemental (optionnel) ..." />
					</div>
					<div className="form-group">
						<label>Nom du lien 1</label>
						<input type="texte" name="link1_name" className="form-control" value={this.state.link1_name} onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Url du lien 1</label>
						<input type="texte" name="link1_url" className="form-control" value={this.state.link1_url} onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Nom du lien 2</label>
						<input type="texte" name="link2_name" className="form-control" value={this.state.link2_name} onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Url du lien 2</label>
						<input type="texte" name="link2_url" className="form-control" value={this.state.link2_url} onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<input type="submit" value="Modifier ma page" className="btn btn-primary" onClick={this.submit.bind(this)} />
					</div>

				</form>
			</div>
		)
	}
}
