import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';
import first from '../../assets/img/E/1.jpg';
import second from '../../assets/img/E/2.jpg';
import third from '../../assets/img/E/3.jpg';
import fourth from '../../assets/img/E/4.jpg';
import fifth from '../../assets/img/E/5.jpg';
import sixth from '../../assets/img/E/6.jpg';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta';
import leaflet from '../../assets/leaflet_e.pdf';

export default class CompanyPresentation extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container py-4">
				<Meta title="Parrainer des ruches"/>
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12 text-center">
						<h2 className="text-left">Vos abeilles n’ont
						jamais été aussi
						proche de prendre leur
						envol !</h2>
						<p className="text-left">
							Pour parrainer votre première ruche c’est très
							simple : complétez notre formulaire en moins
							de 3 minutes et voilà ! Vous avez accès à la
							page dédiée à votre entreprise.
						</p>
						<Link to="/signup/company" className="btn btn-secondary my-2">Parrainer des ruches</Link>
					</div>
					<div className="col-lg-6 col-md-10 hidden-sm-down my-4">
						<div id="carouselHome" className="carousel slide" data-interval="3000" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselHome" data-slide-to="0" className="active"></li>
								<li data-target="#carouselHome" data-slide-to="1"></li>
								<li data-target="#carouselHome" data-slide-to="2"></li>
								<li data-target="#carouselHome" data-slide-to="3"></li>
								<li data-target="#carouselHome" data-slide-to="4"></li>
								<li data-target="#carouselHome" data-slide-to="5"></li>
							</ol>
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block" src={first} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={second} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={third} alt="Third slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fourth} alt="Fourth slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fifth} alt="Fifth slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={sixth} alt="Sixth slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Le parrainage de ruche c’est :</h2>
					</div>
				</div>
				<div className="row justify-content-around align-items-start">
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Pour l'entreprise</h3>
						<ul>
							<li>
								Adopter une démarche participative et responsable vis-à- vis de l’environnement
							</li>
							<li>
								S’engager concrètement dans la <strong>protection de la biodiversité</strong>
							</li>
							<li>
								Une stratégie pour <strong>se démarquer de la concurrence</strong>
							</li>
							<li>
								Une histoire à partager avec ses partenaires
							</li>
							<li>
								Un <strong>contenu de qualité</strong>, original et engageant à publier régulièrement sur les <strong>réseaux sociaux</strong>
							</li>
							<li>
								Une ruche au nom et aux couleurs de l’entreprise
							</li>
							<li>
								Une <strong>page, dédiée à l'entreprise</strong>, détaille sa démarche environnementale ; des photos de sa ruche ainsi que des actualités y sont régulièrement postées
							</li>
							<li>
								Une visibilité digitale supplémentaire
							</li>
							<li>
								<strong>80 pots de miel de 125g personnalisés</strong> aux couleurs de l’entreprise : un cadeau unique pour ses collaborateurs, ses partenaires ou encore ses clients</li>
							<li>
								La possibilité d'organiser avec son équipe une <strong>visite de la ruche</strong> sous la fameuse tenue d'apiculteur
							</li>
						</ul>
					</div>
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Pour l'apiculteur</h3>
						<ul>
							<li>C’est l’assurance de maintenir notre
							cheptel et de l’accroitre</li>
							<li>Un nombre plus important de ruches
							nous permet plus facilement
							d’équilibrer les colonies entre elles</li>
							<li>L’implantation de nouveaux ruchers
							permet localement d’agir sur la
							biodiversité (pollinisation) mais aussi
							d’organiser des visites pédagogiques
							pour les curieux</li>
							<li>Une visibilité supplémentaire</li>
							<li>Un moyen de sensibiliser un grand
							nombre de personnes à la protection
							des abeilles</li>
						</ul>
					</div>
				</div>
				<div className="row justify-content-around align-items-center">
					<div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 my-4 text-center">
						<Link to="/signup/company" className="btn btn-secondary">Parrainer une ruche</Link>
					</div>
					<div className="col-lg-5 col-md-6 col-sm-12 col-xs-12 my-4 text-center">
						<Link to="/company/more"className="btn btn-secondary">En savoir plus</Link>
					</div>
					<div className="col-12 text-center">
						<a href={leaflet} className="btn btn-secondary m-4" target="_blank">Télécharger la plaquette de présentation</a>
					</div>
				</div>
			</div>
		);
	}
}
