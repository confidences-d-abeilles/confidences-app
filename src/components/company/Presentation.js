import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';

export default class CompanyPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
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
						<Link to="/signup/company" className="btn btn-secondary my-2">Demarrer</Link>
					</div>
					<div className="col-lg-6 col-md-10 col-sm-12 text-center">
						<img src={imgPlaceholder} alt="Empty img space" className="img-fluid mt-2" />
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Le parrainage de ruches c’est :</h2>
					</div>
				</div>
				<div className="row justify-content-center align-items-start">
					<div className="col-lg-4 col-md-6 col-sm-10">
						<h3>Pour l'entreprise</h3>
						<ul>
							<li>Adopter une démarche participative et
							responsable vis-à- vis de
							l’environnement</li>
							<li>S’engager concrètement dans la
							protection de la biodiversité</li>
							<li>Une stratégie pour se démarquer de
							vos concurrents</li>
							<li>Une histoire à partager avec vos
							partenaires</li>
							<li>Un contenu de qualité, original et
							engageant à publier régulièrement sur
							vos réseaux sociaux</li>
							<li>Une ruche au nom de votre entreprise</li>
							<li>Une page dédiée à votre entreprise
							détaillant votre démarche
							environnementale, sur laquelle des
							photos de votre ruche ainsi que des
							actualités seront régulièrement
							postées</li>
							<li>Une visibilité digitale supplémentaire</li>
							<li>80 pots de miel de 125g personnalisés
							à vos couleurs : un cadeau unique pour
							vos collaborateurs, vos partenaires ou
							vos clients</li>
						</ul>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-10">
						<h3>Pour l'apiculteur</h3>
						<ul>
							<li>C’est l’assurance de maintenir notre
							cheptel et de l’accroitre</li>
							<li>Un nombre plus important de ruche
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
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-2 text-center">
						<Link to="/signup/company" className="btn btn-primary">Parrainer une ruche</Link>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-2 text-center">
						<Link to="/company/more"className="btn btn-primary">En savoir plus</Link>
					</div>
				</div>
			</div>
		);
	}
}
