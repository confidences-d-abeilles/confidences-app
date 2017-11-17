import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'

const config = require('../../../config.js');

export default class CompanyManageCustomize extends Component {

	constructor(props) {
		super(props);
		this.state = {
			label : '',
			current: null
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				current: res.label
			})
		});
	}

	upload(e) {
		e.preventDefault()
		const formData = new FormData();
		if (document.getElementById("label").files[0]) {
			formData.append('label', document.getElementById("label").files[0]);
		}
		request({
			url : '/user',
			method : 'put',
			data : formData,
			headers : {
				'content-type': 'multipart/form-data'
			}
		}, this.refs.notif)
	}

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center">Personaliser mes étiquettes</h2>
					{this.state.current &&
						<p className="text-center">
							<img className="img-fluid my-2 center-block" src={config.cdn_url+'/'+this.state.current} alt="Etiquette actuelle"/>
						</p>
					}
					<p>
						Vous avez la possibilité d’apporter les modifications que vous souhaitez sur
						l’étiquette qui sera apposée sur vos pots de miel. Pour cela, il vous suffit de
						la télécharger ci-dessous (format AI, Indd), de l’éditer avec Adobe Illustrator,
						InDesign ou Photoshop ; une fois le résultat final obtenu vous nous renvoyez
						votre fichier (format AI, Indd, Psd ou PDF).<br />
						Nous attirons votre attention sur le fait que les textes cadenassés ne sont
						pas modifiables. Ce sont des mentions obligatoires qui doivent figurer sur les
						pots. Nous nous réservons le droit d’augmenter le contraste si celui-ci venait
						à être diminué en raison d’un fond sombre.
					</p>
					<a href="#" target="_blank" className="btn btn-primary">Télécharger l'étiquette type</a>
					<form onSubmit={this.upload.bind(this)} className="my-2">
						<div className="form-group">
							<label htmlFor="label" className={(this.state.label)?'active-upload':'upload'}>Glisser votre fichier ici ou cliquez pour en séléctionner un parmi vos fichers<br/>Taille recommandée : 280x210 - {(this.state.label)?'Selectionné : '+this.state.label:"Aucun fichier séléctionné"}</label>
							<input type="file" className="form-control" id="label" onChange={() => { this.setState({ label : document.getElementById("label").files[0].name }) }} style={{display:'none'}}/>
						</div>
						<button className="btn btn-primary">Envoyer cette étiquette</button>
					</form>
				</div>
			</div>
		)
	}
}
