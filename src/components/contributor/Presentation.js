import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';

export default class ContributorPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col">
						<h1>Confidences d'Abeilles c'est comme une ruche, plus on est et mieux on se porte !</h1>
						<p>
							Rejoignez-nous, aidez-nous a faire grossir le projet et prenez votre envol !
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
							Que vous soyez etudiant en ecole de commerce, d'ingenieurs, a la FAC, en IUT, ou meme pas etudiant, peu importe en fait, vous pouvez le devenir.
							Tout ce qui compte, c'est votre motivation, votre reseau et vos capacites de commercial. Votre job ?
							Promouvoir le service de parrainage de ruches de Confidences d'Abeilles ! Votre objectif ?
							Faire parrainer des ruches par des entreprises. Et la contrepartie ? Interessante, plutot interessante. :)
						</p>
					</div>
				</div>
				<div className="row justify-content-center my-4">
					<div className="col-4">
						<h3>Qu'est ce que j'y gagne ?</h3>
						<ul>
							<li>Un contrat souple et revocable a tout moment</li>
							<li>Je met a profit mon reseau</li>
							<li>Je travaille et ameliore mon approche commerciale</li>
							<li>J'agrandi et consolide mon reseau</li>
							<li>Je beneficie d'une remuneration forfaitaire interessante</li>
						</ul>
					</div>
					<div className="col-4">
						<h3>Que gagnons nous ?</h3>
						<ul>
							<li>Une optimisation de notre prospection</li>
							<li>Une mise en relation et une conclusion de vente accelerees</li>
							<li>Le developpement de notre activite</li>
							<li>En deleguant cet aspect commercial, nous pouvons nous recentrer sur le coeur de notre activite : l'apiculture</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">En savoir plus sur le contrat</a>
					</div><div className="col-4 text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">En savoir plus sur l'offre de parrainage</a>
					</div>
				</div>
			</div>
		);
	}
}
