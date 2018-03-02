import React, { Component } from 'react'
import { handleChange, handleTick } from '../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import ReactQuill from 'react-quill';
import ReactGA from 'react-ga';
import moment from 'moment';
const config = require('../../config.js');

export default class Feedback extends Component {

	constructor (props) {
		super (props);
		console.log(props.name);
		this.state = {
			id_user : '',
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
			bundle: null,
			visible: false,
			english: false,
			bundle_date: moment(),
			bundle_state: 0,
			bundle: [],
			allFeedback: null
		}
	}
	// appeler getOwner de nezscontroller
	// avant le chargement de la page verifier le serveur
	// relancer le serveur
	// verifier quon recupere bien les bonne Data
	// trouver un moyen de check juste le owner
	// les affichers
	// et les renvoyer dans le formulaire
	// et props 0 on save une nouvelle actue
	// si on la modifie 1 reecrire dessus
	 // et supprime ?

	launchModify(e) {
		e.preventDefault();
		this.setState({
			newsModify: e.target.value
		})
	}

	createActu(e) {
		e.preventDefault()
		console.log('createActu');
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		data.append('data', new Date());
		if (document.getElementById("actu-img").files[0]) {
			data.append('img', document.getElementById('actu-img').files[0]);
		}
		console.log('data ok');
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

	render() {

		return (
			<div>
			<NotificationSystem ref="notif" />
			<h3 className="text-center">Ajouter une actualité</h3>
			<form onSubmit={this.createActu.bind(this)}>
				<div className="form-group">
					<input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} placeholder={this.props.name?'nouvelle trouver':'Titre'}/>
				</div>
				<div className="form-group">
					<ReactQuill
						name="actu"
						className="form-control"
						onChange={(value) => { this.setState({ actu: value })}}
						defaultValue='Texte de l actualité'
						value={this.props.name ? this.props.name : null}
						placeholder='Texte de l actualité'
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
					<label htmlFor="actu-img" className={(this.state.actuImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
						<input type="file" className="form-control" id="actu-img" onChange={() => { this.setState({ actuImg : document.getElementById("actu-img").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
						Glisser une image ou cliquez pour en séléctionner un parmi vos fichiers<br/>
						Taille recommandée : 400x300 - {(this.state.actuImg)?'Selectionné : '+this.state.actuImg:"Aucun fichier séléctionné"}
					</label>
				</div>
				<button className="btn btn-primary">Soumettre</button>
			</form>
			</div>
		)
	}
}
