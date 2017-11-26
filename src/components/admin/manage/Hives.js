import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'
import ReactQuill from 'react-quill';

export default class AdminManageHives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hives : [],
			new: '',
			selected: ''
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

	createActu(e) {
		e.preventDefault();
		const data = new FormData();
		data.append('content', this.state.actu);
		data.append('title', this.state.actuTitle);
		if (document.getElementById("actu-img").files[0]) {
			data.append('img', document.getElementById('actu-img').files[0]);
		}
		request({
			url: '/news/hive/'+this.state.selected,
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
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col">
						<h2 className="text-center">Gérer les ruches</h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
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
										<tr className={this.state.selected === hive.id && 'table-info'}>
											<td>{hive.id}</td><td>{hive.name}</td><td>{hive.occupation} %</td>
											<td>
												<button className="btn btn-primary btn-sm" onClick={() => { this.setState({ selected : hive.id })}} >Gérer</button>
												<button className="btn btn-primary btn-sm" onClick={this.delete.bind(this, hive.id)} >Supprimer</button>
											</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
					{(this.state.selected)?
					<div className="col">
						<h3>Créer une news</h3>
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
									<label htmlFor="actu-img" className={(this.state.actuImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
										<input type="file" className="form-control" id="actu-img" onChange={() => { this.setState({ actuImg : document.getElementById("actu-img").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
										Glisser une image ou cliquez pour en séléctionner un parmi vos fichers<br/>
										Taille recommandée : 400x300 - {(this.state.actuImg)?'Selectionné : '+this.state.actuImg:"Aucun fichier séléctionné"}
									</label>
								</div>
								<button className="btn btn-primary">Soumettre</button>
							</form>
						<h3>Ajouter des photos</h3>
					</div>:<div className="col"></div>}
				</div>
			</div>
		)
	}
}
