import React, { Component } from 'react'
import { handleChange, handleTick } from '../../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import ReactQuill from 'react-quill';

const config = require('../../../config.js');

export default class CompanyManageMyPage extends Component {

	constructor (props) {
		super (props);
		this.state = {
			name : '',
			namespace : '',
			description : '',
			involvement : '',
			logo: null,
			cover: null,
			link1_name: '',
			link1_url: '',
			link2_name: '',
			link2_url: '',
			visible: false
		}
	}

	componentDidMount() {
		this.get();
		this.setState({
			newLogo : (document.getElementById("logo").files[0])?document.getElementById("logo").files[0].name:null,
			newCover : (document.getElementById("cover").files[0])?document.getElementById("cover").files[0].name:null,
			actuImg : (document.getElementById("actu-img").files[0])?document.getElementById("actu-img").files[0].name:null
		})
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
				logo: res.logo,
				cover: res.cover,
				description : res.description,
				involvement : res.involvement,
				link1_name: res.link1_name,
				link1_url: res.link1_url,
				link2_name: res.link2_name,
				link2_url: res.link2_url,
				visible: res.visible
			});
		}).catch((err) => {})
	}

	submit(e) {
		e.preventDefault();
		if (this.state.description.length > 1000) {
			this.refs.notif.addNotification({
				message: "La présentation générale de votre entreprise est un peu trop longue. Merci de la raccourcir.",
				level: 'warning'
			})
		} else if (this.state.involvement.length > 3700) {
			this.refs.notif.addNotification({
				message: 'Le champs "Votre engagement en faveur de la biodiversité" contient trop de caractères. Merci de le raccourcir.',
				level: 'warning'
			})
		} else {
			const formData = new FormData();
			formData.append('company_name', this.state.name);
			formData.append('namespace', this.state.namespace);
			formData.append('description', this.state.description);
			formData.append('involvement', this.state.involvement);
			formData.append('link1_name', this.state.link1_name);
			formData.append('link1_url', this.state.link1_url);
			formData.append('link2_name', this.state.link2_name);
			formData.append('link2_url', this.state.link2_url);
			formData.append('visible', this.state.visible);
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
	}

	createActu(e) {
		e.preventDefault()
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		if (document.getElementById("actu-img").files[0]) {
			data.append('img', document.getElementById('actu-img').files[0]);
		}
		request({
			url: '/news',
			method: 'post',
			data: data,
			header: {
				'content-type' : 'multipart/form-data'
			}
		}, this.refs.notif).then((res) => {

		})
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
						<a href={(this.state.user)?"/"+this.state.user.namespace:'/'} target="_blank" className="btn btn-secondary">Voir ma page</a>
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
						<label>Photo de couverture de votre page {(this.state.cover)?<a href={config.cdn_url+'/'+this.state.cover} target="_blank">Visualiser l'image actuelle</a>:null}</label>
						{(!this.state.cover)?<label htmlFor="cover" className={(this.state.newCover)?'active-upload':'upload'}>Glisser l'image ici ou cliquez pour en séléctionner une parmi vos fichers<br/>Taille recommandée : 1200x240 - {(this.state.newCover)?'Selectionné : '+this.state.newCover:"Aucun fichier séléctionné"}</label>
						:<label htmlFor="cover" className={(this.state.newCover)?'active-upload':'upload'}>Glisser une nouvelle image ici ou cliquez pour en séléctionner une parmi vos fichers<br/>Taille recommandée : 1200x240 - {(this.state.newCover)?'Selectionné : '+this.state.newCover:"Aucun fichier séléctionné"}</label>}
						<input type="file" className="form-control" id="cover" onChange={() => { this.setState({ newCover : document.getElementById("cover").files[0].name }) }} style={{display:'none'}}/>
					</div>
					<div className="form-group">
						<label>Logo de votre entreprise {(this.state.logo)?<a href={config.cdn_url+'/'+this.state.logo} target="_blank">Visualiser le logo actuel</a>:null}</label>
						{(!this.state.logo)?<label htmlFor="logo" className={(this.state.newLogo)?'active-upload':'upload'}>Glisser votre logo ici ou cliquez pour en séléctionner un parmi vos fichers<br/>Taille recommandée : 280x210 - {(this.state.newLogo)?'Selectionné : '+this.state.newLogo:"Aucun fichier séléctionné"}</label>
						:<label htmlFor="logo" className={(this.state.newLogo)?'active-upload':'upload'}>Glisser votre nouveau logo ici ou cliquez pour en séléctionner un parmi vos fichers<br/>Taille recommandée : 280x210 - {(this.state.newLogo)?'Selectionné : '+this.state.newLogo:"Aucun fichier séléctionné"}</label>}
						<input type="file" className="form-control" id="logo" onChange={() => { this.setState({ newLogo : document.getElementById("logo").files[0].name }) }} style={{display:'none'}}/>
					</div>
					<div className="form-group">
						<label>Présentation générale de l’entreprise ({1000 - this.state.description.length} caractères restants)</label>
						<textarea name="description" maxLength="1000" className="form-control" value={this.state.description} onChange={handleChange.bind(this)} placeholder="Présentation générale de l’entreprise (1000 caractères max. espaces compris)" />
					</div>
					<div className="form-group">
						<label>Notre engagement en faveur de la biodiversité ({3700 - this.state.involvement.length} caractères restants)</label>
						<textarea name="involvement" maxLength="3700" className="form-control" value={this.state.involvement} onChange={handleChange.bind(this)} placeholder="Notre engagement en faveur de la biodiversité (3700 caractères max. espaces compris)" />
					</div>
					<div className="form-group">
						<label>Bouton d'action 1</label>
						<input type="texte" name="link1_name" className="form-control" value={this.state.link1_name} placeholder="Texte à afficher" onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<input type="texte" name="link1_url" className="form-control" value={this.state.link1_url} placeholder="URL du bouton d'action 1" onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<label>Bouton d'action 2</label>
						<input type="texte" name="link2_name" className="form-control" value={this.state.link2_name} placeholder="Texte à afficher" onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<input type="texte" name="link2_url" className="form-control" value={this.state.link2_url} placeholder="URL du bouton d'action 2" onChange={handleChange.bind(this)} />
					</div>
					<div className="form-group">
						<input type="checkbox" name="visible" onChange={handleTick.bind(this)} checked={this.state.visible} /> Rendre ma page publique
					</div>
					<div className="form-group">
						<input type="submit" value="Enregistrer les modifications" className="btn btn-primary" onClick={this.submit.bind(this)} />
					</div>
				</form>
				<h3 className="text-center">Ajouter une actualité</h3>
				<form onSubmit={this.createActu.bind(this)}>
					<div className="form-group">
						<input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} placeholder="Titre"/>
					</div>
					<div className="form-group">
						<ReactQuill
							name="actu"
							className="form-control"
							onChange={(value) => { this.setState({ actu: value })}}
							defaultValue={this.state.actu}
							placeholder="Texte de l'actualité"
							modules={{
								toolbar: [
									['bold', 'italic', 'underline','strike', 'blockquote'],
									[{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
									['link'],
									['clean']
								]
							}}/>
					</div>
					<div className="form-group">
						<label htmlFor="actu-img" className={(this.state.actuImg)?'active-upload':'upload'}>Glisser une image ou cliquez pour en séléctionner un parmi vos fichers<br/>Taille recommandée : 400x300 - {(this.state.actuImg)?'Selectionné : '+this.state.actuImg:"Aucun fichier séléctionné"}</label>
						<input type="file" className="form-control" id="actu-img" onChange={() => { this.setState({ actuImg : document.getElementById("actu-img").files[0].name }) }} style={{display:'none'}}/>
					</div>
					<button className="btn btn-primary">Soumettre</button>
				</form>
			</div>
		)
	}
}
