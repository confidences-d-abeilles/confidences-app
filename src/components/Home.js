import React, { Component } from 'react';
import imgPlaceholder from '../assets/img/img-placeholder.gif';
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import { Link } from 'react-router-dom'

const config = require('../config.js');

export default class Home extends Component {

	constructor (props) {
		super (props)
		this.state = {}
	}
	componentDidMount() {
		request({
			url : '/users',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ users : res });
		})
	}

    render () {
        return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
				<div className="row align-items-center">
					<div className="col">
						<h1>Parrainez une ruche, aidez-nous à protéger les abeilles</h1>
						<p>
							Confidences d’Abeilles vous propose
							aujourd’hui de l’aider à poursuivre sa
							mission. Vous aussi participez à la protection
							des abeilles, à la préservation de la
							biodiversité en parrainant une ruche.
						</p>
						<button className="btn btn-secondary" data-toggle="modal" data-target="#createAccount">Parrainer une ruche</button>
					</div>
					<div className="col">
						<div id="carouselHome" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Third slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center my-4">
					<div className="col-9">
						<p>
							Cette mission nous la menons avec vous, particuliers, entreprises, citoyens avertis qui nous
							accompagner depuis nos débuts. En financement un rucher pédagogique vous nous avez déjà
							permis d’organiser des journées découvertes et d’autres de formation ; nous sommes fiers
							aussi d’avoir lancés plusieurs néophytes dans le grand bain de l’apiculture !
						</p>
					</div>
				</div>
				<div className="row justify-content-center align-items-center my-4">
					<div className="col">
						<h2 className="text-center my-4">Ils parrainent déjà des ruches</h2>
						{(this.state.users)?
							<div id="parrains">
							{this.state.users.map((user) => {
								if (user.user_type === 1 || user.user_type  === 2) {
									return (
										<div key={user.id}>
											<Link to={'/'+user.namespace}>
											<img src={(user.logo)?config.cdn_url+'/'+user.logo:''} alt={(user.company_name)?user.company_name:user.firstname+' '+user.name} />
											</Link>
										</div>
									)
								} else {
									return null;
								}
							})}
							</div>
							:null}
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-9">
						<p>
							Vous voulez apporter votre pierre à l’édifice et participer à cette belle aventure ? Nous vous
							proposons de parrainer une ruche. En échange de quoi, les butineuses vous feront découvrir
							leur précieux butin : une partie du miel qu’elles auront amassé !
						</p>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-4 text-center">
						<button className="btn btn-primary" data-toggle="modal" data-target="#createAccount">Parrainer une ruche</button>
					</div><div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Lister les ruches</a>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Les dernières actualités</h2>
						<p className="alert alert-info">[Known Bug] Données manquantes</p>
					</div>
				</div>
			</div>
        );
    }
}
