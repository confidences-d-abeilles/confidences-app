import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom'

const config = require('../../../config.js');

export default class CompanyManageCustomize extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
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
			console.log(res);
			request({
				url: '/bundle/owner/'+res.id,
				method: 'get'
			}, this.refs.notif).then((bund) => {
				this.setState({
					bundleId: bund.id,
					labelCurrent: bund.label
				})
				console.log(bund.label);
				console.log(bund);
			})
		});
	}

	upload(e) {
		e.preventDefault()
		const formData = new FormData();
		if (document.getElementById("label").files[0]) {
			formData.append('label', document.getElementById("label").files[0]);

		request({
			url : '/bundle/label/'+this.state.bundleId,
			method : 'put',
			data : formData,
			headers : {
				'content-type': 'multipart/form-data'
			}
		}, this.refs.notif).then(() => {
			this.setState({
				labelCurrent: this.state.label,
				label: ''
			})
		})
	}
	}

	// <form onSubmit={this.upload.bind(this)} className="my-2">
	// 	<div className="form-group">
	// 		<label htmlFor="label" className={(this.state.label)?'active-upload':'upload'}>Glisser votre fichier ici ou cliquez pour en séléctionner un parmi vos fichiers<br/>Taille recommandée : 280x210 - {(this.state.label)?'Selectionné : '+this.state.label:"Aucun fichier séléctionné"}</label>
	// 		<input type="file" className="form-control" id="label" onChange={() => { this.setState({ label : document.getElementById("label").files[0].name }) }} style={{display:'none'}}/>
	// 	</div>
	// 	<button className="btn btn-primary">Envoyer cette étiquette</button>
	// </form>


	render () {
		return (
			<div>
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center my-4"></h2>
					{this.state.labelCurrent ?
						<div style={{ height: '210px', maxWidth: '100%' }}>
							<img src={config.cdn_url+'/'+this.state.labelCurrent} alt="labelCurrent" style={{ maxWidth: '100%', maxHeight: '100%' }} />
						</div>
					:null}
				</div>
			</div>
			<div className="row">
				<div className="col-5">
					<div>
						<h5 className="text-center my-4">Notre étiquette personnalisée</h5>
						<i style={{fontSize: '75%'}}>Une version « par défaut » est générée automatiquement. 3
						solutions sont à votre disposition pour la modifier.</i>
						<div style={{ width: '30%', height: '30%', backgroundColor: '#84B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: '5px solid black', borderWith: '25px', padding: '10px'}}>
						Miel Apple
						</div>
					</div>
					<div>
						<h5 className="text-center my-4">Réalisation en interne</h5>
						<p style={{fontSize: '75%'}}>Téléchargez un modèle (format AI, INDD),
						Modifiez-le,
						Renvoyez-nous votre version !</p>
						<button className="btn btn-primary">
							Télécharger le modèle
						</button>
						<form onSubmit={this.upload.bind(this)} className="my-2">
							<div className="form-group">
								<div style={{fontSize: '80%'}}><label htmlFor="label" className={(this.state.label)?'active-upload':'upload'}>Glissez votre fichier ou cliquez pour en sélectionner un
								(formats acceptés : PDF, AI, INDD, PSD, PNG, JPG)<br/>
								⚠ATTENTION ⚠Assurez-vous que les dimensions de votre
								étiquette respectent bien 63,5x38,1mm, avec 1,5mm de fond
								perdu gauche/droite et 0,5mm haut/bas. -
								{(this.state.label)?'Selectionné : '+this.state.label:"Aucun fichier séléctionné"}</label>
								</div>
								<input type="file" className="form-control" id="label" onChange={() => { this.setState({ label : document.getElementById("label").files[0].name }) }} style={{display:'none'}}/>
							</div>
							<button className="btn btn-primary">Soumettre cette étiquette</button>
						</form>
					</div>
				</div>
					<div className="col-6">

					<h5 className="text-center my-4">Éditeur en ligne</h5>
						<button className="btn btn-primary">Démarrer ?</button>
						Templates disponibles
						<div className="row">
							<div className="col-4" style={{ width: '100px', height: '100px', backgroundColor: '#F4B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: 'solid grey 1 px', padding: '10px'}}>
							Miel Apple
							</div>
							<div className="col-4" style={{ width: '30%', height: '30%', backgroundColor: '#F4B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: 'solid grey 1 px', padding: '10px'}}>
							Miel Apple
							</div>
						</div>
						<div className="row">
							<div className="col-4" style={{ width: '30%', height: '30%', backgroundColor: '#F4B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: 'solid grey 1 px', padding: '10px'}}>
							Miel Apple
							</div>
							<div className="col-4" style={{ width: '30%', height: '30%', backgroundColor: '#F4B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: 'solid grey 1 px', padding: '10px'}}>
							Miel Apple
							</div>
						</div>
						<Link to="/requestlabel" className="btn btn-primary">
							Contacter une graphiste
						</Link>
					
				</div>
			</div>
		</div>
		)
	}
}
