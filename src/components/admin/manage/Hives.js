import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'
import ReactQuill from 'react-quill'
import Loading from '../../utils/Loading'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Confirm from '../../utils/Confirm';

import 'react-datepicker/dist/react-datepicker.css';

export default class AdminManageHives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hives : null,
			new: '',
			selected: '',
			actu: '',
			actuTitle: '',
			actuDate: ''
		}
	}

	componentDidMount() {
		this.get();
	}

	handleDateChange(date) {
		this.setState({
			actuDate: date
		});
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
			this.setState({
				new: ''
			})
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

	createActu(e) {
		e.preventDefault();
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		data.append('date', this.state.actuDate);
		if (document.getElementById("actu-img").files[0]) {
			data.append('img', document.getElementById('actu-img').files[0]);
		}
		request({
			url: '/news/hive/'+this.state.selected.id,
			method: 'post',
			data: data,
			header: {
				'content-type' : 'multipart/form-data'
			}
		}, this.refs.notif).then((res) => {
			this.setState({
				actuTitle: '',
				actu: '',
				actuDate: ''
			})
		})
	}

	updateActu(e) {
		e.preventDefault();
		const data = new FormData();
		data.append('content', this.state.actuModify);
		data.append('title', this.state.actuModifyTitle);
		data.append('date', this.state.actuModifyDate);
		if (document.getElementById("actu-modify-img").files[0]) {
			data.append('img', document.getElementById('actu-modify-img').files[0]);
		}
		request({
			url: '/news/'+this.state.newsModify,
			method: 'put',
			data: data
		}, this.refs.notif).then((res) => {
			this.get();
			this.setState({
				selected: ''
			})
		});
	}

	deleteActu() {
		request({
			url: '/news/'+this.state.newsModify,
			method: 'delete'
		}, this.refs.notif).then((res) => {
			this.get();
			this.setState({
				selected: ''
			})
		})
	}

	addPhoto(e) {
		e.preventDefault()
		const data = new FormData();
		data.append('id', this.state.selected.id);
		if (document.getElementById("hive-img").files[0]) {
			data.append("img", document.getElementById("hive-img").files[0]);
			request({
				url: '/hive/photo',
				method: 'post',
				data: data,
				header: {
					'content-type' : 'multipart/form-data'
				}
			}, this.refs.notif)
		}
	}

	launchModify(e) {
		e.preventDefault();
		this.setState({
			newsModify: e.target.value
		})

		request({
			url: '/news/'+e.target.value,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				actuModifyTitle: res.title,
				actuModify: res.content,
				actuModifyDate : res.date
			})
		})
	}

	render () {
		return (
			<div>
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col">
						<h2 className="text-center my-4">Gérer les ruches</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<h3>Créer une ruche</h3>
						<form className="form-inline my-3" onSubmit={this.addHive.bind(this)}>
							<input type="text" className="form-control mx-2" name="new" value={this.state.new} placeholder="Nom commun de la nouvelle ruche" onChange={handleChange.bind(this)} />
							<button type="submit" className="btn btn-primary">Créer la ruche</button>
						</form>
						<div style={{ maxHeight: '50vh', overflowY : 'scroll' }}>
							{this.state.hives?
							<table className="table">
								<tbody>
									<tr><th>Nom</th><th>Occupation</th><th></th></tr>
									{this.state.hives && this.state.hives.map((hive) => {
										return (
											<tr className={this.state.selected.id === hive.id && 'table-info'}>
												<td>{hive.name}</td><td>{hive.occupation} %</td>
												<td>
													<button className="btn btn-link btn-sm" onClick={() => { this.setState({ selected : hive })}} >Gérer</button>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
							:<Loading />}
						</div>
					</div>
					{(this.state.selected)?
					<div className="col-lg-8">
						<h3 className="my-4">Créer une news</h3>
							<form onSubmit={this.createActu.bind(this)}>
								<div className="form-group">
									<input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} value={this.state.actuTitle} placeholder="Titre"/>
								</div>
								<div className="form-group">
									<label>Date de l'actu</label>
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
									<label htmlFor="actu-img" className={(this.state.actuImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
										<input type="file" className="form-control" id="actu-img" onChange={() => { this.setState({ actuImg : document.getElementById("actu-img").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
										Glisser une image ou cliquez pour en séléctionner un parmi vos fichers<br/>
										Taille recommandée : 400x300 - {(this.state.actuImg)?'Selectionné : '+this.state.actuImg:"Aucun fichier séléctionné"}
									</label>
								</div>
								<button className="btn btn-primary">Soumettre</button>
							</form>
							<h3 className="my-4">Modifier une news</h3>
							<select className="form-control" onChange={this.launchModify.bind(this)} name="newsModify">
								<option selected disabled>News a modifier</option>
								{this.state.selected.news.map((actu) => {
									const date = (actu.date)?moment(actu.date):moment(actu.createdAt);
									return (
										<option value={actu.id}>{actu.title} ( {date.format("DD/MM/YYYY")} )</option>
									)
								})}
							</select>
							{this.state.newsModify &&
								<div>
								<form onSubmit={this.updateActu.bind(this)} className="mt-4">
									<div className="form-group">
										<input type="text" className="form-control" name="actuModifyTitle" value={this.state.actuModifyTitle} onChange={handleChange.bind(this)} placeholder="Titre"/>
									</div>
									<div className="form-group">
										<label>Date de l'actu</label>
										<DatePicker
											dateFormat="DD/MM/YYYY"
											selected={moment(this.state.actuModifyDate)}
											onChange={(date) => { this.setState({ actuModifyDate : date })}}
											className="form-control"
											/>
									</div>
									<div className="form-group">
	 									<ReactQuill
											name="actuModify"
											className="form-control"
											onChange={(value) => { this.setState({ actuModify: value })}}
											value={this.state.actuModify}
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
										<label htmlFor="actu-modify-img" className={(this.state.actuModifyImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
											<input type="file" className="form-control" id="actu-modify-img" onChange={() => { this.setState({ actuModifyImg : document.getElementById("actu-modify-img").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
											Glisser une image ou cliquez pour en séléctionner un parmi vos fichers<br/>
											Taille recommandée : 400x300 - {(this.state.actuModifyImg)?'Selectionné : '+this.state.actuModifyImg:"Aucun fichier séléctionné"}
										</label>
									</div>
									<button className="btn btn-primary m-2">Soumettre</button>
								</form>
								<Confirm action={this.deleteActu.bind(this)} text="Supprimer cette news" className="m-2"/>
							</div>}
						<h3 className="py-4">Ajouter des photos</h3>
						<form onSubmit={this.addPhoto.bind(this)}>
							<div className="form-group">
								<label htmlFor="hive-img" className={(this.state.hiveImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
									<input type="file" className="form-control" id="hive-img" onChange={() => { this.setState({ hiveImg : document.getElementById("hive-img").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
									Glisser une image ou cliquez pour en séléctionner un parmi vos fichers<br/>
									Taille recommandée : 400x300 - {(this.state.hiveImg)?'Selectionné : '+this.state.hiveImg:"Aucun fichier séléctionné"}
								</label>
							</div>
							<button className="btn btn-primary">Ajouter cette photo</button>
						</form>
					</div>:<div className="col"></div>}
				</div>
			</div>
		)
	}
}
