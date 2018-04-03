import React, { Component } from 'react'
import { handleChange, handleTick } from '../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import ReactQuill from 'react-quill';
import ReactGA from 'react-ga';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Confirm from './Confirm';
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
			bundle_state: 0,
			bundle: [],
			newsTake: 0,
			newsActu: '',
			newsTitle: '',
			actuDate: moment(new Date()),
			actu: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.name) {
			const data = new FormData();
			data.append('id_news', nextProps.name);
			request({
				url:'/news/getOneNews/',
				method: 'POST',
				data: data
			},this.refs.notif).then((res) => {
				this.setState({
					newsTake: 1,
					actu: res[0].content,
					actuTitle: res[0].title,
					actuImg: res[0].img,
					actuDate: moment(res[0].date),
					newsModify: nextProps.name
				}, () => {
					console.log(this.state.actuDate);
					console.log("ẗest new actu");
				})
			})
		}
	}

	updateActu(e) {
		e.preventDefault()
		const data = new FormData();
		console.log("update");
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		data.append('date', this.state.actuDate);
		if (document.getElementById("actu-img").files[0]) {
			data.append('img', document.getElementById('actu-img').files[0]);
		} else {
			data.append('img', this.state.actuImg);
		}
		request({
			url: '/news/'+this.state.newsModify,
			method: 'put',
			data: data
		}, this.refs.notif).then((res) => {
			this.setState({
				selected: '',
				content: '',
				title: '',
				actuDate: moment(new Date()),
				actuTitle: '',
				newsTake: 0,
				actu: '',
				actuImg: ''
			})
		});
	}

	createActu(e) {
		e.preventDefault()
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		data.append('date', this.state.actuDate);
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
			this.setState({
				newsTake: 0,
				actu: '',
				actuTitle: '',
				actuImg: ''
			})
		})
	}

	handleDateChange(date) {
		this.setState({
			actuDate: date
		});
		console.log(date);
	}

	deleteActu() {
		console.log("delete");
		request({
			url: '/news/delete/'+this.state.newsModify,
			method: 'DELETE'
		}, this.refs.notif).then((res) => {
			this.setState({
				newsModify: null,
				content: '',
				actuTitle: '',
				actuDate: moment(new Date()),
				actuImg: '',
				actu: ''
			})
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
					<label>Date de l'actualité</label>
					<DatePicker
						dateFormat="DD/MM/YYYY"
						selected={this.state.actuDate}
						onChange={this.handleDateChange.bind(this)}
						className="form-control"
						/>
				</div>
				<div className="form-group">
					<ReactQuill
						name="actu"
						className="form-control"
						onChange={(value) => { this.setState({ actu: value })}}
						value={this.state.actu}
						placeholder='actualité'
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
						Glissez une image ou cliquez pour en séléctionner un parmi vos fichiers<br/>
						Recommandations : 400x300px, 100ko maximum - {(this.state.actuImg)?'Selectionné : '+this.state.actuImg:"Aucun fichier séléctionné"}
					</label>
				</div>
				<button className="btn btn-secondary btn-sm">Soumettre</button>
			</form>
			<br/>
			{this.state.newsModify ? <Confirm action={this.deleteActu.bind(this)} text="Supprimer cette news" className="btn btn-secondary btn-sm"/>: null}
			</div>
		)
	}
}
