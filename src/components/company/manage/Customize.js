import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import ReactGA from 'react-ga';
import { Link } from 'react-router-dom'
import logoSquare from '../../../assets/img/logo-square.png';
import Eti1 from '../../../assets/img/label/sample_Etiquette_E1.jpg';
import Eti2 from '../../../assets/img/label/sample_Etiquette_E2.jpg'
import Eti3 from '../../../assets/img/label/sample_Etiquette_E3.jpg'
import Eti4 from '../../../assets/img/label/sample_Etiquette_E4.jpg'
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
				<div className="col">
				<h2 className="text-center my-4">Personnaliser nos pots de miel</h2>
				</div>
			</div>
			<div className="row">
				<div className="col">
					<div className="row">
						<div className="col">
							<div className="card">
								<div className="card-block">
									<div>
										<h5 className="text-center my-4">Notre étiquette personnalisée</h5>
											<i className="card-text" style={{fontSize: '85%'}}>Une version « par défaut » est générée automatiquement. 3
											solutions sont à votre disposition pour la modifier.</i>
												<div style={{ width: '30%', height: '30%', backgroundColor: '#84B183', color: 'white', lineHeight: '3em', textAlign: 'center', bordel: '5px solid black', borderWith: '25px', padding: '10px'}}>
												recuperer le label par dafault de lentreprise
												</div>
									</div>
							</div>
						</div>
						</div>
						</div>
						<div className="row">
							<div className='col'>
								<div className="card">
									<div className="card-block">


						<h5 className="text-center my-4">Réalisation en interne</h5>
						<p style={{fontSize: '85%'}}>Téléchargez un modèle (format AI, INDD),
						Modifiez-le,
						Renvoyez-nous votre version !</p>
						<button className="btn btn-primary">
							Télécharger le modèle
						</button>
						<form onSubmit={this.upload.bind(this)} className="my-2">
							<div className="form-group">
								<div style={{fontSize: '85%'}}><label htmlFor="label" className={(this.state.label)?'active-upload':'upload'}>Glissez votre fichier ou cliquez pour en sélectionner un
								(formats acceptés : PDF, AI, INDD, PSD, PNG, JPG)<br/>
								⚠ ATTENTION ⚠ Assurez-vous que les dimensions de votre
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
					</div>
					</div>
				</div>
					<div className="col">
						<div className="card">
							<div className="card-block">
								<div className="row">
									<div className="col">
										<h5 className="text-center my-4">Éditeur en ligne</h5><br />
										<button className="btn btn-primary">Démarrer ?</button><br />
										<p className="text-center">Templates disponibles</p>
									</div>
								</div>
						<div className="row">
							<div className="col">
								<img  width="auto" height="90" src={Eti1} alt="parrainage1" />
							</div>
							<div className="col">
							<img  width="auto" height="90" src={Eti2} alt="parrainage2" />
							</div>
						</div>
						<div className="row">
							<div className="col">
							<img  width="auto" height="90" src={Eti3} alt="parrainage3" />
							</div>
							<div className="col">
							<img  width="auto" height="90" src={Eti4} alt="parrainage4" />
							</div>
						</div>
						<Link to="/requestlabel" className="btn btn-primary">
							Contacter une graphiste
						</Link>

				</div>
				</div>
				</div>
			</div>
		</div>
		)
	}
}
