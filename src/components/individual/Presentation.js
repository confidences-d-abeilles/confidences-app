import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';

export default class IndividualPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col">
						<h1>Vos abeilles n'ont jamais ete aussi proche de prendre leur envol !</h1>
						<p>
							Pour parrainer vos premières abeilles c’est très
							simple : complétez le formulaire d’inscription,
							choisissez le nombre d’abeilles et voilà !
						</p>
						<Link to="/signup/individual" className="btn btn-secondary">Demarrer</Link>
					</div>
					<div className="col">
						<img src={imgPlaceholder} alt="Empty img space" />
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Parrainer une ruche c'est</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-4">
						<h3>Pour vous</h3>
						<ul>
							<li>Adopter une démarche participative et
							responsable vis-à- vis de
							l’environnement</li>
							<li>S’engager concrètement dans la
							protection de la biodiversité</li>
							<li>Une histoire à partager avec vos amis</li>
							<li>Une ruche portant votre nom</li>
							<li>Une page dédiée à la ruche dans
							laquelle vos abeilles évoluent, des
							photos de la ruche et des abeilles ainsi
							que des actualités seront
							régulièrement postées</li>
							<li>Un certain nombre de pots de miel
							personnalisés avec votre nom ou celui
							de la personne à qui est offert le
							parrainage : un cadeau unique qui
							ravira votre famille et vos amis.</li>
						</ul>
					</div>
					<div className="col-4">
						<h3>Pour nous les apiculteurs</h3>
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
							<li>Un moyen de sensibiliser un grand
							nombre de personnes à la protection
							des abeilles</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-4 text-center">
						<Link to="/signup/individual" className="btn btn-primary">Demarrer</Link>
					</div>
					<div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche/particulier" className="btn btn-primary" target="_blank" rel="noopener noreferrer">En savoir plus</a>
					</div>
				</div>
			</div>
		);
	}
}
