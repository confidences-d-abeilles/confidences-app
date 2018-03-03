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
			newsTake: 0,
			newsActu: '',
			newsTitle: ''
		}
	}

	componentDidMount() {

	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(nextState);
	// 	this.setState({
	// 		newsTake: 1})
	// 	console.log(nextState);
	// }

	componentWillReceiveProps(nextProps) {

		if (nextProps.name) {
			const data = new FormData();
			console.log("propsname")
			console.log(nextProps.name);
			data.append('id_news', nextProps.name);
			request({
				url:'/news/getOneNews/',
				method: 'POST',
				data: data
			},this.refs.notif).then((res) => {
				console.log(res);
				console.log(res[0].content);
				console.log(res[0].img);
				this.setState({
					newsTake: 1,
					actu: res[0].content,
					actuTitle: res[0].title,
					actuImgUp: res[0].img,
					newsModify: nextProps.name
				}, () => {
					console.log("ẗest new actu");
					console.log(this.state.actuImg);
					console.log(this.state.newsActu);
				})
			})
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

	// launchModify(e) {
	// 	e.preventDefault();
	// 	this.setState({
	// 		newsModify: e.target.value
	// 	})
	// }

	updateActu(e) {
		e.preventDefault()
		console.log("img data");
		console.log(document.getElementById('actu-img').files[0]);
		console.log("img dataUp");
		console.log(this.state.actuImgUp);
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		data.append('date', new Date());
		if (document.getElementById("actu-img").files[0]) {
			console.log("file img ok");
			data.append('img', document.getElementById('actu-img').files[0]);
		} else {
			console.log("deja up");
			data.append('img', this.state.actuImgUp);
		}
		console.log(this.state.actu);
		console.log(this.state.actuTitle);
		console.log(this.state.newsModify);
		console.log(new Date())
		request({
			url: '/news/'+this.state.newsModify,
			method: 'put',
			data: data
		}, this.refs.notif).then((res) => {
			this.setState({
				selected: ''
			})
		});
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
			<form onSubmit={this.state.newsTake?this.updateActu.bind(this):this.createActu.bind(this)}>
				<div className="form-group">
					<input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} placeholder={this.state.newsTake?this.state.actuTitle:'Titre'}/>
				</div>
				<div className="form-group">
					<ReactQuill
						name="actu"
						className="form-control"
						onChange={(value) => { this.setState({ actu: value })}}
						value={this.state.newsTake?this.state.actu:'Titre'}


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
