import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';
import first from '../../assets/img/P/1.jpg';
import second from '../../assets/img/P/2.jpg';
import third from '../../assets/img/P/3.jpg';
import fourth from '../../assets/img/P/4.jpg';
import fifth from '../../assets/img/P/5.jpg';
import sixth from '../../assets/img/P/6.jpg';
import leaflet from '../../assets/leaflet_p.pdf';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class IndividualPresentation extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container py-4">
				<Meta title="Parrainer des abeilles"/>
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12 text-center">
						<h2 className="text-left">Vos abeilles n’ont
						jamais été aussi
						proche de prendre leur
						envol !</h2>
					<p className="text-left">
							Pour parrainer vos premières abeilles c’est très
							simple : complétez le formulaire d’inscription,
							choisissez le nombre d’abeilles et voilà !
						</p>
						<Link to="/signup/individual" className="btn btn-secondary m-2">Parrainer mes permières abeilles</Link>
						<Link to="/present" className="btn btn-secondary m-2">Offrir un parrainage</Link>
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
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h2 className="text-center my-4">Parrainer une ruche c'est :</h2>
					</div>
				</div>
				<div className="row justify-content-around align-items-start">
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Pour vous</h3>
						<ul>
							<li>
								Adopter une démarche participative et responsable vis-à-vis de l’environnement</li>
							<li>
								S’engager concrètement dans la <strong>protection de la biodiversité</strong>
							</li>
							<li>
								Une histoire à partager avec vos amis
							</li>
							<li>
								Une ruche portant votre nom
							</li>
							<li>
								Une page dédiée à la ruche dans laquelle vos abeilles évoluent, des photos de la ruche et des abeilles ainsi que des actualités seront régulièrement postées</li>
							<li>
								Entre 8 et 40 <strong>pots de miel personnalisés avec votre nom</strong> ou celui de la personne à qui est offert le parrainage : un cadeau unique qui ravira votre famille et vos amis.
							</li>
							<li>
								La possibilité de <strong>rendre visite à vos abeilles</strong> équipé(e) de la fameuse tenue de protection de l'apiculteur
							</li>
						</ul>
					</div>
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Pour nous les apiculteurs</h3>
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
							<li>Un moyen de sensibiliser un grand
							nombre de personnes à la protection
							des abeilles</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center justify-content-around">
					<div className="col-lg-4 col-md-6 col-sm-12 text-center m-4">
						<Link to="/signup/individual" className="btn btn-secondary">Parrainer des abeilles</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 text-center m-4">
						<Link to="/individual/more" className="btn btn-secondary">En savoir plus</Link>
					</div>
					<div className="col-12 text-center">
						<a href={leaflet} className="btn btn-secondary m-4" target="_blank">Télécharger la plaquette de présentation</a>
					</div>
				</div>
			</div>
		);
	}
}
