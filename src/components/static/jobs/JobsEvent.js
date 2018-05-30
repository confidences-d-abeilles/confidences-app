import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from '../../utils/Meta'

export default class JobsEvent extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta title="Offre de stage"/>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">Offre de stage Community | Event Manager - Janvier 2018</h1>
						<h2>A propos</h2>
						<p>
							Confidences d’Abeilles est une jeune entreprise annécienne qui développe des produits et
							des services autour de l’apiculture.
						</p>
						<p>
							L’esprit de la marque est la découverte et le partage des trésors que peuvent produire les abeilles.
							L’excellence est une exigence qui amène chaque jour les membres de l’équipe à travailler avec passion,
							respect et humilité. L’authenticité est le maître mot chez Confidences d’Abeilles.<br/>
							L’équipe est actuellement composée des deux fondateurs et d’une troisième personne qui a rejoint
							l’aventure pour le lancement du service de parrainage. Des freelances interviennent régulièrement.
						</p>
						<h2>Missions</h2>
						<ul>
							<li>
								<strong>Prospection</strong> : identifier et cibler les partenaires et événements clés
								stratégiques (sur le terrain comme sur les réseaux sociaux)
							</li>
							<li>
								<strong>Prise de contact et négociation</strong>
							</li>
							<li>
								<strong>Déploiement opérationnel</strong> : logistique, animation,
								assurer le bon déroulement de la prestation
							</li>
							<li>
								<strong>Réflexion stratégique</strong> : proposition de l’amélioration du processus commercial
								général sur l’offre événementielle
							</li>
							<li>
								<strong>Gestion et animation des réseaux sociaux</strong> : réflexion créative et production régulière des
								contenus (visuels, GIF, infographie, étude, jeu concours, …) susceptibles de générer des
								interactions (social media, relais sur d’autres sites, retombées presse, …)
							</li>
							<li>
								<strong>Reporting et suivi de la performance</strong>
							</li>
							<li>
								<strong>Constitution d’un CRM</strong> : constituer un fichier d’influenceurs / blogueurs /
								youtubeurs avec lesquels des partenariats sont envisagés
							</li>
						</ul>
						<h2>Profil recherché</h2>
						<ul>
							<li>
								Vous êtes entrepreneur(se) dans l’âme, l’aventure vous fait rêver et l’ambition avancer ?
								C’est un bon début.
							</li>
							<li>Vous avez le permis ? On continue.</li>
							<li>Vous avez soif d’autonomie, de responsabilités et de liberté ? Ça nous plait !</li>
							<li>
								Vous connaissez bien les réseaux sociaux (reporting, insights) et avez déjà utilisé
								des outils comme Buffer, HootSuite, HubSpot ? C’est formidable.
							</li>
							<li>Vous êtes à l’aise en français et en anglais à l’écrit comme à l’oral ? Excellent.</li>
							<li>Vous avez déjà travaillé dans l’événementiel ? C'est super.</li>
							<li>Vous êtes créatif(ve) et force de proposition ? Épatant !</li>
							<li>Vous êtes dynamique et avez un très bon relationnel ? Nous devrions nous entendre.</li>
						</ul>
						<p>Alors n’hésitez plus et rejoignez-nous !</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<h2>Conditions</h2>
						<p>
							4-6 mois à partir de Janvier 2018 – stage conventionné<br/>
							Stage rémunéré
						</p>
					</div>
				</div>
			</div>
		)
	}
}
