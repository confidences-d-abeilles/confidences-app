import React, { Component } from 'react';
import imgPlaceholder from '../assets/img/img-placeholder.gif';
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import { Link } from 'react-router-dom'
import '../assets/styles/parrains_homepage.css'
import first from '../assets/img/homepage/1.jpg';
import second from '../assets/img/homepage/2.jpg';
import third from '../assets/img/homepage/3.jpg';
import fourth from '../assets/img/homepage/4.jpg';
import fifth from '../assets/img/homepage/5.jpg';
import sixth from '../assets/img/homepage/6.jpg';
import seventh from '../assets/img/homepage/7.jpg';

const defaultImg = require("../assets/img/profile.png")
const config = require('../config.js');

export default class Home extends Component {

	constructor (props) {
		super (props)
		this.state = {}
	}

	componentDidMount() {
		request({
			url : '/user/public',
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
					<div className="col-lg-6 col-sm-12">
						<h1>Parrainez une ruche, aidez-nous à protéger les abeilles</h1>
						<p>
							Confidences d’Abeilles vous propose
							aujourd’hui de l’aider à poursuivre sa
							mission. Vous aussi participez à la protection
							des abeilles, à la préservation de la
							biodiversité en parrainant une ruche.
						</p>
						<Link to="/company/presentation" className="btn btn-secondary mr-4">Service entreprise</Link><Link to="/individual/presentation" className="btn btn-secondary">Service particulier</Link>
					</div>
					<div className="col-lg-6 col-sm-12 my-4">
						<div id="carouselHome" className="carousel slide" data-interval="5000" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselHome" data-slide-to="0" className="active"></li>
								<li data-target="#carouselHome" data-slide-to="1"></li>
								<li data-target="#carouselHome" data-slide-to="2"></li>
								<li data-target="#carouselHome" data-slide-to="3"></li>
								<li data-target="#carouselHome" data-slide-to="4"></li>
								<li data-target="#carouselHome" data-slide-to="5"></li>
								<li data-target="#carouselHome" data-slide-to="6"></li>
							</ol>
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block" src={first} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={second} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={third} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fourth} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fifth} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={sixth} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={seventh} alt="First slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center my-4">
					<div className="col-9">
						<p>
							Cette mission nous la menons avec vous, particuliers, entreprises, citoyens avertis qui nous
							accompagnez depuis nos débuts. En financement un rucher pédagogique vous nous avez déjà
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
										<Link to={'/'+user.namespace}>
										<img src={(user.logo)?config.cdn_url+'/'+user.logo:defaultImg} alt={(user.company_name)?user.company_name:user.firstname+' '+user.name} />
										{(user.company_name)?user.company_name:user.firstname+' '+user.name}
										</Link>
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
						<Link to="/account"><button className="btn btn-primary" data-toggle="modal" data-target="#createAccount">Parrainer une ruche</button></Link>
					</div><div className="col-4 text-center">
						<Link to="/hives" className="btn btn-primary">Découvrir les ruches</Link>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						{/*<h2 className="text-center my-4">Les dernières actualités</h2>*/}
					</div>
				</div>
			</div>
        );
    }
}
