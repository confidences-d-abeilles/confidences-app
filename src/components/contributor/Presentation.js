import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';
import first from '../../assets/img/AA/1.jpg';
import second from '../../assets/img/AA/2.jpg';
import third from '../../assets/img/AA/3.jpg';
import fourth from '../../assets/img/AA/4.jpg';

export default class ContributorPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-10 col-sm-12 text-center">
						<h2 className="text-left">Chez Confidences
						d’Abeilles comme dans
						la ruche, plus on est,
						mieux l’on se porte !</h2>
						<p className="text-left">
							Rejoignez-nous, aidez-nous à installer des
							ruches et toucher des commissions
							intéressantes.
						</p>
						<Link to="/signup/contributor" className="btn btn-secondary">Devenir apporteur d'affaires</Link>
					</div>
					<div className="col-lg-6 col-md-10 hidden-sm-down my-4">
						<div id="carouselHome" className="carousel slide" data-interval="3000" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselHome" data-slide-to="0" className="active"></li>
								<li data-target="#carouselHome" data-slide-to="1"></li>
								<li data-target="#carouselHome" data-slide-to="2"></li>
								<li data-target="#carouselHome" data-slide-to="3"></li>
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
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h2 className="text-center my-4">Un apporteur d'affaires, c'est quoi ?</h2>
						<p>
							Que vous soyez étudiant en école de commerce, d&#39;ingénieurs, à la FAC, en IUT ou même non
							étudiant, peu importe en fait ; la seule chose qui compte c&#39;est votre motivation, votre réseau
							et vos compétences commerciales. Votre mission ? Promouvoir le service de parrainage de
							ruches proposé par Confidences d&#39;Abeilles ! Votre objectif ? Faire parrainer des ruches par des
							entreprises. Keep calm, on vous aide pour ça :)
						</p>
					</div>
				</div>
				<div className="row justify-content-around align-items-start">
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Qu'est ce que j'y gagne ?</h3>
						<ul>
							<li>Une commission intéressante par ruche parrainée</li>
							<li>Un agrandissement et une consolidation de votre réseau</li>
							<li>Une belle occasion de travailler votre approche commerciale</li>
							<li>Un super contrat qui ne vous engage à rien au final</li>
						</ul>
					</div>
					<div className="col-lg-5 col-md-6 col-sm-10 card" style={{ backgroundColor: '#ECEFF1' }}>
						<h3 className="text-center my-4">Que gagne Confidences d’Abeilles ?</h3>
						<ul>
							<li>Une optimisation de notre prospection</li>
							<li>Une mise en relation et une conclusion de parrainage accélérées</li>
							<li>Le développement de notre activité et l’assurance de maintenir notre cheptel et de l’accroitre</li>
							<li>Du temps pour se concentrer sur le cœur de son activité : l’apiculture</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center justify-content-around">
					<div className="col-lg-4 col-md-6 col-sm-12 text-center">
						<Link to="/signup/contributor" className="btn btn-primary my-4">Je m'inscris</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 text-center">
						<Link to="/company/more" className="btn btn-primary my-4">En savoir plus sur l'offre de parrainage</Link>
					</div>
				</div>
			</div>
		);
	}
}
