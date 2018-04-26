import React, { Component } from 'react';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import Loading from '../../utils/Loading'
import { handleChange } from '../../../services/FormService'
import moment from 'moment'

const config = require('../../../config.js');

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			user : null,
			hivesNames : null,
			loading: false
		}
	}

	componentDidMount() {
		this.prepareData();
	}

	prepareData() {
		this.setState({
			loading : true
		});
		request({
			url : '/user/me',
			method : 'get',
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res
			});
			if (res.bundles[0]) {
				if (res.bundles[0].contain && res.bundles[0].contain[0]) {
					this.setState({
						hives : res.bundles[0].contain
					});
				} else {
					this.setState({
						hivesNames : new Array(res.bundles[0].hives).fill('')
					});
				}
			}
			console.log(res.bundles[0]);
			this.setState({
				loading : false
			});
		})
	}

	handleName(index, e) {
		const names = this.state.hivesNames;
		names[index] = e.target.value;
		this.setState({
			hivesNames: names
		})
	}

	saveNames(e) {
		e.preventDefault();
		if (this.state.hivesNames.indexOf('') != -1) {
			this.refs.notif.addNotification({
				message : "Il manque certains noms de ruches, veillez à tous les sélectionner.",
				level: 'warning'
			});
		} else {
			this.setState({
				loading : true
			});
			request({
				url: '/bundle/'+this.state.user.bundles[0].id+'/multi_assoc',
				method: 'post',
				data: {
					hivesNames : this.state.hivesNames
				}
			}, this.refs.notif).then((res) => {
				this.setState({
					hivesNames: null
				})
				this.prepareData();
			})
		}
	}

	render () {
		return (
			<div>
				<div className="row py-4">
					<NotificationSystem ref="notif" />
					<div className="col text-center">
						<a href={(this.state.user)?'/parrains/'+this.state.user.namespace:''} target="_blank" className="btn btn-secondary disabled">Consulter ma page entreprise</a>

						{(this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].certif && this.state.user.bundles[0].state > 1) ?
							<a href={config.cdn_url + '/' + this.state.user.bundles[0].certif}
								className="btn btn-secondary m-2" target="_blank">Télécharger mon certificat de parrainage
							</a> :
							<a href="#" className="btn btn-secondary m-2 disabled" target="_blank" role="button" aria-disabled="true">Télécharger mon certificat de parrainage</a>
						}
					</div>
				</div>
				{(this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state >= 2)?
				<div>
					<h2>Vos ruches</h2>
					<hr />
					{(this.state.loading)?<Loading />:
						[
							(this.state.hivesNames)?
						<div className="row py-4 align-items-center">
							<div className="col-lg-4">
								<p>Vous pouvez maintenant choisir le nom de {this.state.user.bundles[0].hives > 1?'vos ruches':'votre ruche'}.</p>
							</div>
							<form className="col-lg-8" onSubmit={this.saveNames.bind(this)}>
								{this.state.hivesNames.map((val, key) => {
									return (
										<div className="form-group">
											<label>Ruche n° {key+1}</label>
											<select value={this.state.hivesNames[key]} onChange={this.handleName.bind(this, key)} className="form-control">
												<option value="">Choisissez un nom pour cette ruche</option>
												<option value="Campanule">Campanule</option>
												<option value="Épilobe">Épilobe</option>
												<option value="Rhododendron">Rhododendron</option>
												<option value="Muguet">Muguet</option>
												<option value="Arnica">Arnica</option>
												<option value="Lis martagon">Lis martagon</option>
												<option value="Sainfoin">Sainfoin</option>
												<option value="Ail des ours">Ail des ours</option>
												<option value="Alchémille">Alchémille</option>
												<option value="Marguerite">Marguerite</option>
												<option value="Bourache">Bourache</option>
												<option value="Linaigrette">Linaigrette</option>
												<option value="Colchique">Colchique</option>
												<option value="Centaurée ">Centaurée </option>
												<option value="Aster">Aster</option>
												<option value="Bouton d'or">Bouton d'or</option>
												<option value="Coucou">Coucou</option>
												<option value="Pensée des Alpes">Pensée des Alpes</option>
												<option value="Gentiane jaune">Gentiane jaune</option>
												<option value="Anémone">Anémone</option>
												<option value="Jonquille">Jonquille</option>
												<option value="Menthe">Menthe</option>
												<option value="Crocus">Crocus</option>
												<option value="Colchique des Alpes">Colchique des Alpes</option>
												<option value="Coquelicot">Coquelicot</option>
												<option value="Digitale">Digitale</option>
												<option value="Iris des marais">Iris des marais</option>
												<option value="Ancolie commune">Ancolie commune</option>
												<option value="Bleuet de montagne">Bleuet de montagne</option>
												<option value="Millepertuis">Millepertuis</option>
												<option value="Joubarbe">Joubarbe</option>
												<option value="Orchis Vanillé">Orchis Vanillé</option>
												<option value="Petite pervenche">Petite pervenche</option>
												<option value="Edelweiss">Edelweiss</option>
												<option value="Lotier des Alpes">Lotier des Alpes</option>
												<option value="Oeillet sauvage">Oeillet sauvage</option>
												<option value="Primevère">Primevère</option>
												<option value="Muscari">Muscari</option>
												<option value="Vipérine">Vipérine</option>
												<option value="Safran">Safran</option>
												<option value="Chicorée">Chicorée</option>
												<option value="Phacélie">Phacélie</option>
												<option value="Génépi">Génépi</option>
											</select>
										</div>)}
									)}
									<div className="form-group text-center">
										<button className="btn btn-primary">Confirmer mon choix</button>
									</div>
								</form>
							</div>:
							<div>

							{(this.state.user && this.state.user.bundles[0])?
								<p>
									Notre offre: {this.state.user.bundles[0].hives} ruche{this.state.user.bundles[0].hives > 1?'s':''}<br />
									Date de début: {moment(this.state.user.bundles[0].start_date).format("DD/MM/YYYY")}<br />
									Date de fin: {moment(this.state.user.bundles[0].end_date).format("DD/MM/YYYY")}<br />
								</p>
								:
								null
							}
							</div>,
							this.state.hives &&
								<div className="row">
									{this.state.hives.map((ruche) => {
										return (
											<div className="col-lg-4">
												<div className="card my-2 p-1">
													Ruche {ruche.name}<br />
												<a href={config.app_url+'/hive/'+ruche.id}>Voir la page</a>
												</div>
											</div>
										)
									})}
								</div>]
							}
						</div>:null}
					</div>
				);
			}
		}
