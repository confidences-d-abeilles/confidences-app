import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Meta from './utils/Meta'
import ReactGA from 'react-ga';

export default class JobsMarketing extends Component {

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
						<h1 className="text-center my-4">Offre de stage Communication | Marketing - Janvier 2018</h1>
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
								<strong>Relation Client</strong> : vous interagissez régulièrement avec les gourmands
								de miel ou les protecteurs d’abeille et êtes le garant d’une expérience
								exceptionnelle. Vous incarnez l’excellence du service client
							</li>
							<li>
								<strong>Déploiement de la stratégie marketing-com</strong> : vous élaborez des campagnes d’emailing
								ciblées, définissez le content marketing et établissez une analyse de la performance
								(insights sur l’audience conversion, rebond, etc)
							</li>
							<li>
								<strong>Développement du content marketing</strong> : vous concevez les supports de communication tels que :
								livre blanc, blog, newsletter, infographie. Vous participez à la rédaction des communiqués
								de presse
							</li>
							<li>
								<strong>Partenariats communication</strong> : identifier et cibler les partenaires digitaux,
								prise de contact, création du contenu approprié, plv
							</li>
						</ul>
						<h2>Profil recherché</h2>
						<ul>
							<li>
								Vous êtes entrepreneur(se) dans l’âme, l’aventure vous fait rêver et l’ambition avancer ?
								C’est un bon début.
							</li>
							<li>Vous avez soif d’autonomie, de responsabilités et de liberté ? Parfait !</li>
						</ul>
						<p>Vous avez aussi les compétences suivantes :</p>
						<ul>
							<li>Une bonne connaissance des réseaux sociaux et de la communication sur Internet. Bien.</li>
							<li>Une aisance parfaite pour le français et l’anglais à l’écrit. C’est extra.</li>
							<li>
								Une première expérience avec la suite Adobe, Google Analytics, Mailjet ou un autre outil
								d’emailing ? C’est formidable.
							</li>
							<li>Créatif(ve) et force de proposition ? Épatant !</li>
							<li>Vous aimez écrire ? Nous devrions nous entendre.</li>
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
