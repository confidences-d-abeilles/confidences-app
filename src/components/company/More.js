import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../assets/img/ent_more.jpg';
import leaflet from '../../assets/leaflet_e.pdf';
import broch from '../../assets/brochure.pdf';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
const config = require('../../config.js');

export default class More extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			deployFirst: false,
			deployTwo: false,
			deploy3: false
		}
	}

	render () {
		return (
			<div className="container">
				<Meta title="En savoir plus"/>
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<img src={Banner} alt="Banner" className="img-fluid"/>
					</div>
					<div className="col-9">
						<h1 className="text-center my-5">Ce que nous voulons dire aux entreprises</h1>
						<h2 className=" my-5">Pourquoi responsabiliser votre activité ?</h2>
						<p>
							Votre entreprise souhaite prendre ses responsabilités vis-à-vis de la société.
							Vous voulez dépasser vos préoccupations économiques, légales et adopter un comportement plus éthique.
							Vous avez donc compris qu’en responsabilisant vos activités commerciales, qu’en investissant dans le développement durable vous pérennisiez votre entreprise à long terme.
							Le mouvement est en marche et de plus en plus d’acteurs sont conscients que ce n’est pas en achetant des crédits carbones, issus de la plantation d’arbres ailleurs dans le monde, que l’on aborde l’impact local d’une entreprise.
						

							{this.state.deployFirst?
								' Cela passe par l’intégration de pratiques responsables bénéficiant à toutes les parties prenantes. Parmi ces dernières on retrouve aussi la société. En effet, les entreprises ne peuvent pas réussir si la société échoue ; elle peut échouer si son environnement se dégrade par exemple. Les entreprises ont donc tout intérêt à ne pas le détériorer, voir même à le protéger.'
								:
								''
							}
							<br/>
								<button className="btn btn-primary btn-sm " onClick={() =>
									{this.state.deployFirst?
										this.setState({
											deployFirst: false
											})
											:
											this.setState({
												deployFirst: true
											})
										}
									}>
									{!this.state.deployFirst? 'develloper' : 'reduire'}
								</button>

							<br/><br/>
						</p>
						<h3 className="my-4">Comment le faire ?</h3>
						<p>

							C’est décidé, vous voulez inscrire votre entreprise dans une démarche participative et durable pour l’environnement.
							Faites donc le choix de parrainer des ruches !
							D’une part vous aidez les apiculteurs à protéger les abeilles, d’autre part ces abeilles vont prendre soin de la biodiversité et donc de votre environnement qui est aussi celui des parties prenantes de votre entreprises ;
							{this.state.deployTwo?
								<strong>enfin, vous soutenez la filière française du miel et permettez aux consommateurs de manger local plutôt qu’importé.
								Votre action va encore plus loin : en protégeant les abeilles vous favorisez la pollinisation, les rendemments agricoles augmentent, les pesticides ne sont plus nécessaires, l’environnement s’en porte mieux et les abeilles aussi.
								Le cercle vertueux est bouclé !
								</strong>
								:
								<button className="btn btn-secondary btn-sm pull-right" onClick={() =>
										this.setState({
											deployTwo: true
										})
									}>
									develloper
								</button>
							}
							<br/>
							<br/>
							<div className="col-lg-4 col-md-6 col-sm-12 my-4">
							« Le parrainage de ruches c’est une façon de penser l’environnement dans lequel évolue votre entreprise, une démarche porteuse de sens et de cohésion. »
							</div>
							<br/>
							<p className="text-center">
								<Link to="/signup/company" className="btn btn-secondary mr-4">C’est parti, nous parrainons une ruche</Link>
							</p>
							<br/>
						</p>
						<h3>Qu’est ce que le parrainage de ruches vous apporte ?</h3>
						<p>
							Ne nous voilons pas la face, ce n’est pas en parrainant des ruches que vous allez fondamentalement responsabiliser vos activités commerciales.
							A défaut, vous montrez que vous êtes préocupés par l’évolution de l’environnement dans lequel s’inscrit votre entreprise ; ce même environnement que l’ensemble de vos parties prenantes partagent.
							Que votre activité soit de type B2B ou B2C, vos clients sont de plus en plus exigeants.
							{this.state.deploy3?
								<strong>
							Ils accordent une importance croissante à l’éthique et à la responsabilité dans le comportement des entreprises.
							Parrainer des ruches n’est pas LA solution à vos problématiques de développement durable et de comportement responsable mais un élément de réponse.
							« Les petits ruisseaux font les grandes rivières. »
							<br/>
							<br/>
							Plus concrètement.
							Utilisez votre parrainage dans votre communication interne et fédérer votre équipe autour d’une ou plusieurs ruches.
							Engagez vos collaborateurs en leur proposant de créer le futur design de vos pots de miel !
							Partagez avec eux les dernières actualités des ruches, ils se languiront alors de recevoir un pot de miel de « leurs » abeilles.
							<br/>
							<br/>
							Le parrainage représente aussi une stratégie de différenciation vis-a-vis de vos concurrents.
							Vos prospects n’y seront pas insensibles et vous les convertirez plus facilement en clients.
							<br/>
								</strong>
							:
							<button className="btn btn-secondary btn-sm pull-right" onClick={() =>
									this.setState({
										deploy3: true
									})
								}>
								develloper
							</button>
						}
						</p>
						<p>
							Très concrètement. Un service sur mesure incluant :
						</p>
						<p>
							<ul>
								<li>
									80 pots de miels personnalisés (125g de miel produit par vos abeilles à offrir à vos clients, partenaires ou collaborateurs)
								</li>
								<li>
									1 outil de personnalisation des étiquettes en ligne
									</li>
									<li>
							1 graphiste à votre écoute pour réaliser des étiquettes exclusives (frais de création non compris)
							</li>
							<li>
							1 page dédiée à votre société (détails des actions responsables menées, photos et actualités de la ruches parrainée) Voir un exemple
							</li>
							<li>
							1 éditeur d’actualité (pour alimenter vous-même la page dédiée)
							</li>
							<li>
							1 ruche à vos couleurs
							</li>
							<li>
							Du contenu de qualité pour engager votre communauté sur les réseaux sociaux et aborder diverses thématiques
							</li>
							<li>
							1 certificat de parrainage
							</li>
							<li>
								1 visite de la ruche à organiser avec votre équipe pour découvrir le monde des abeilles sous la tenue d’apiculteur. Organisation de séminaire possible.
								</li>
							</ul>
							<p className="text-center">
								<Link to="/signup/company" className="btn btn-secondary mr-4">Devenir parrain</Link>
							</p>
						</p>
						<h3 className="text-center">Tarifs et Conditions</h3>
						<p>
						Consulter les tarifs
						Ces tarifs comprennent l’ensemble des éléments cités ci-dessus ainsi que les frais de port pour l’envoi des pots de miel en France métropolitaine.
						Pour l’étranger, les situations seront étudiées au cas par cas, nous contacter en amont.<br/>
						L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie ou en Savoie.
						Vous souhaitiez voir vos ruches installées sur le site de votre entreprise, sur son toit pas exemple ?
						N’hésitez pas à nous en faire la demande.
						Nous étudierons la faisabilité du projet et nous reviendrons vers vous avec un devis si cela est envisageable (les tarifs présents sur le site ne concernent pas cette prestation).
						<br/><br/>
						</p>
						<h4 className="text-center">Quand parrainer ?</h4>
						<p>
							Vous pouvez parrainer des abeilles tout au long de l’année.
							Il faut savoir que pour un parrainage effectué entre :
							<br/>
							Le 1er juillet et le 31 décembre, vous recevrez le miel de vos abeilles après la récolte de printemps ; à partir du mois de mai de l’année suivante.
							<br/>
							Le 1er janvier et le 30 juin, vous recevrez le miel de vos abeilles à l’automne, à partir du mois d’octobre.
						</p>
						<p className="text-center">
							<Link to="/signup/company" className="btn btn-secondary mr-4">Parrainer une ruche</Link>
							<a href={broch} className="btn btn-secondary m-4" target="_blank">Brochure de présentation</a>
						</p>
						<h3 className="text-center">Événement et visibilité</h3>
						<p>
							Événement
							<br/>
							Pourquoi ne pas profiter de votre parrainage pour en faire un élément de cohésion entre les membres de votre équipe ?
							<br/>
								<ul>
									<li>
										Activité Team Building (1/2 journée)
										Enfilez la fameuse vareuse de l’apiculteur et plongez dans le monde passionnant des abeilles en ouvrant votre première ruche.
										Frissons garantis !
										Au cours de la visite, les apiculteurs vous révèlent le fonctionnement d’une ruche, son organisation et partagent avec vous les confidences de vos abeilles.
										Pour le plus grand plaisir de vos papilles une dégustation des produits de la ruche couronne le tout.
									</li>
									<li>
									Séminaire Team Building (journée)
									Sur une journée complète, vous découvrez aussi le monde des abeilles, vous profitez le temps d’un repas de notre sélection de tables de chefs qui travaillent le miel Confidences d’Abeilles ; enfin, vous choisissez l’une des nombreuses activités sportives qu’offre notre région pour vous défouler.
									Entre le lac, les airs et la montagne il y a de quoi faire.
									</li>
							</ul>
						</p>
						<p>
							Visibilité
							<br/>
							Les engagements responsables que vous prenez et les efforts que vous faîtes méritent d’être soulignés.
							Les clients ou les partenaires de votre société attendent parfois que vous preniez de tels engagements pour justifier à leur tour travailler avec des partenaires responsablement engagés.
							De simples communiqués en interne ne suffisent pas, la communication doit être transparente et accessible à tous.
							C’est pourquoi nous attachons une grande importance à la mise en valeur de vos actions et vous proposons trois canaux de communication :
							<ul>
								<li>
									La plateforme web de parrainage
									<br/>
									C’est le canal privilégié, celui que nous vous dédions totalement avec la configuration de votre propre page.
									Décrivez votre activité, présentez vos engagements, ajoutez des liens vers votre site internet, publiez vos actualités et présentez vos ruches aux visiteurs.
									La configuration est très simple et nous vous guidons.
									La page est optimisée pour être partagée sur les réseaux sociaux.
									Voir un exemple
									De même, les sliders et autres photos utilisées sur notre plateforme mettent à l’honneur les parrains
								</li>
								<li>
									Les supports de communication
									<br/>
									Nos propres supports de communication sont des vecteurs puissants de diffusion de l’information.
									Nous nous servons régulièrement de nos parrains pour illustrer nos supports ou accompagner nos explications d’exemples.
								</li>
								<li>
									Les réseaux sociaux
									<br/>
									Ce sont les canaux que nous utilisons le plus pour notre propre communication.
									Nos « followers » (15 000+) forment une communauté engagée qui interagit bien avec nos publications.
									Nous les utiliserons pour communiquer sur votre engagement à nos côtés.
								</li>
							</ul>
						</p>
						<p className="text-center">
							<Link to="/signup/company" className="btn btn-secondary mr-4">Parrainer une ruche</Link>
						</p>
						<div className="text-center">
							<a href={broch} className="btn btn-secondary m-4" target="_blank">Brochure de présentation</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
