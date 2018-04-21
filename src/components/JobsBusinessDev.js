import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class JobsDesigner extends Component {

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
						<h1 className="text-center my-4">Offre de stage Business Development - Mai 2018</h1>
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
						<p>
							Vous êtes toujours au fait des dernières innovations ? Vous aimez partager
							votre savoir et challenger les modèles en place ? Bienvenue chez Confidences
							d’Abeilles, où sous la responsabilité des fondateurs et du responsable produit
							vos principales responsabilités seront :
						</p>
						<ul>
							<li>
                <strong>Relation Client :</strong> vous interagissez régulièrement avec les gourmands de miel ou les
                protecteurs d’abeilles et êtes le garant d’une expérience exceptionnelle. Vous incarnez
                l’excellence du service client.
							</li>
							<li>
              <strong>Développement du service de parrainage :</strong> vous êtes chargé(e) de la prospection client, de la
              tenue et de l’enrichissement du CRM. Vous accompagnez nos utilisateurs lors de leur
              onboard (mails, appels, rendez-vous), vous convertissez nos prospects en clients, et nos
              clients en ambassadeurs.
              </li>
              <li>
                <strong>Communication :</strong> vous travaillez avec Léa, responsable de la communication et de l’emailing,
              	pour réaliser des campagnes marketing ciblées. Vous participez la rédaction des campagnes,
              	à la conception de supports physiques, et à l’analyse de la performance.
              </li>
              <li>
              <strong>Partenariat :</strong> vous identifiez des partenaires et vous élaborez des propositions commerciales
              personnalisées selon le profil des entreprises ciblées.
              Profil recherché
              </li>
						</ul>
						<h2>Profil recherché</h2>
						<ul>
							<li>
								Vous êtes entrepreneur(se) dans l’âme, l’aventure vous fait rêver et
								l’ambition avancer ? C’est un bon début.
							</li>
							<li>
								Vous avez soif d’autonomie, de responsabilités et de liberté ? Parfait !
							</li>
              Vous matchez aussi les critères suivants :
							<li>
								Une aisance au téléphone et une empathie naturelle auprès de votre interlocuteur. Super.
							</li>
							<li>
								Une ténacité sans faille même dans l’échec. C’est formidable.
							</li>
							<li>
								Créatif(ve) et force de proposition ? Épatant !
							</li>
							<li>
              Une excellente communication écrite et orale en français. Bien
              </li>
							<li>
								Rigoureux(se) et méthodique. Excellent.
							</li>
              <li>
								Une première expérience dans la vente. C’est extra.
							</li>
              <li>
								Vous pensez que les défis sont faits pour être relevés. Nous devrions nous entendre.
							</li>
						</ul>
						<p>Alors n’hésitez plus et rejoignez-nous !</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
            <h2>Déroulement des entretiens</h2>
						<p>
              Le profil LinkedIn et le CV ne sont pas optionnels. Épargnez-nous la lettre de motivation, les
              formulations cérémonieuses, et écrivez-nous avec vos mots.<br/><br/>
							<strong>Étape 1 :</strong> Premier entretien téléphonique d’introduction<br/><br/>
              <strong>Étape 2 :</strong> Rencontre physique avec l’un des fondateurs
						</p>
						<h2>Conditions</h2>
						<p>
              8 semaines à partir de Mai 2018 – stage conventionné<br/>
              Stage rémunéré selon implication et résultats
						</p>
					</div>
				</div>
			</div>
		)
	}
}
