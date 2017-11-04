import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';

export default class ContributorPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col">
						<h1>Chez Confidences
						d’Abeilles comme dans
						la ruche, plus on est,
						mieux l’on se porte !</h1>
						<p>
							Rejoignez-nous, aidez-nous à installer des
							ruches et toucher des commissions
							intéressantes.
						</p>
						<Link to="/signup/contributor" className="btn btn-secondary">Devenir apporteur d'affaires</Link>
					</div>
					<div className="col">
						<img src={imgPlaceholder} alt="Empty img space" />
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col-9">
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
				<div className="row justify-content-center my-4">
					<div className="col-4">
						<h3>Qu'est ce que j'y gagne ?</h3>
						<ul>
							<li>Une commission intéressante par ruche parrainée</li>
							<li>Un agrandissement et une consolidation de votre réseau</li>
							<li>Une belle occasion de travailler votre approche commerciale</li>
							<li>Un super contrat qui ne vous engage à rien au final</li>
						</ul>
					</div>
					<div className="col-4">
						<h3>Que gagne Confidences d’Abeilles ?</h3>
						<ul>
							<li>Une optimisation de notre prospection</li>
							<li>Une mise en relation et une conclusion de parrainage accélérées</li>
							<li>Le développement de notre activité et l’assurance de maintenir notre cheptel et de l’accroitre</li>
							<li>Du temps pour se concentrer sur le cœur de son activité : l’apiculture</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Le contrat</a>
					</div><div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">L'offre de parrainage</a>
					</div>
				</div>
			</div>
		);
	}
}
