import React, { Component } from 'react'
import Gaetan from '../assets/img/gaetan.jpg'
import Nico from '../assets/img/nico.jpg'
import Clem from '../assets/img/clement.jpg'
import Mick from '../assets/img/mickael.jpg'
import Benoit from '../assets/img/benoit.jpg'
import Lea from '../assets/img/lea.jpg'
import Marion from '../assets/img/marion.jpg'
import Profile from '../assets/img/profile.png'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class Team extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta title="L'équipe"/>
				<h2 className="text-center my-4">Notre équipe</h2>
				<div className="row justify-content-around">
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Gaetan} alt="Gaetan" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">GAËTAN EKSZTEROWICZ</h3>
						<h4 className="text-center mb-4"><small>CO-FOUNDER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/popowych" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://twitter.com/GaetanEksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:gaetan@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/gaetaneksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://medium.com/@geksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='medium' size="2x" /></a>
						</p>
						<p className="text-justify">
							Gaëtan poursuit ses études en mastère spécialisé entrepreneurs à Grenoble Ecole de Management. Il complète ainsi son parcours d’ingénieur généraliste des Mines, une école qu’il avait intégrée à la suite d’une classe préparatoire en Physique-Chimie. Apiculteur depuis l’âge de 14ans, il a co-fondé Confidences d’Abeilles. En tant qu’instigateur, il a développé la marque, ses services, son image en s’occupant entre autres de la communication, du marketing et du design. Il est par ailleurs responsable de la production, de la qualité, de la commercialisation et des partenariats conclus avec les sous-traitants de la société.<br/>
							Passionné d’apiculture, c’est lui qui rédige la majorité des articles de vulgarisation du blog et il reste président d’honneur de l’association d’apiculture qu’il a fondée sur son campus étudiant.
						</p>
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Nico} alt="Nicolas" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">NICOLAS EKSZTEROWICZ</h3>
						<h4 className="text-center mb-4"><small>CO-FOUNDER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/nicolas.ekszterowicz" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:nicolas@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/nicolas-ekszterowicz-113271a8/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Nicolas Ekszterowicz est en dernière année d’étude à l’ESISAR et sera diplômé ingénieur des systèmes intelligents et communicants en juin prochain.<br />
							ll est entré dans cette école du groupe INP de Grenoble à la suite d'un cursus à l’IUT d'Annecy en GE2I. C’est notamment lui qui est en charge du développement du site internet de Confidences d’Abeilles et de l'amélioration de l'expérience client. Il travaille aussi sur un projet de modernisation et d’automatisation de la chaîne de production.<br />
							Enfin, il participe aussi à la bonne conduite du rucher, aux récoltes et à la commercialisation des produits Confidences d’Abeilles.
						</p>
					</div>
				</div>
				<div className="row justify-content-around">
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Clem} alt="Clement" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">CLEMENT CHAMPOUILLON</h3>
						<h4 className="text-center mb-4"><small>WEB DEVELOPER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/clement.champouillon" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:clement@champouillon.com"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://fr.linkedin.com/in/cl%C3%A9ment-champouillon-335668143" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Clément est étudiant à l'école 42 (école de développement informatique parisienne) mais également développeur freelance et apiculteur amateur. Il travaille très régulièrement pour des professionnels indépendants ou des jeunes entreprises à la réalisation de leurs sites internet et applications mobiles. Il réalise entre autres la plateforme de parrainage sur laquelle vous naviguez à l'initiative de Confidences d’Abeilles.
						</p>
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Mick} alt="Mickael" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">MICKAEL PHILIPOT</h3>
						<h4 className="text-center mb-4"><small>BUSINESS DEVELOPPER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/mickael.philipot" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://twitter.com/mickaelphilipot" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:mickael@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/mickael-philipot-083475144" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Après des années dans le sport de haut niveau, Mickael a décidé de ranger ces spatules pour s'engager sur un nouveau projet. Détenteur d'une licence Management de la Relation Commerciale à l'IUT d'Annecy-le-vieux, il compte aujourd'hui mettre en pratique ses connaissance et aussi beaucoup apprendre du milieu de l'apiculture. Cet amateur de miel depuis toujours est aujourd'hui en charge du développement Commercial et Marketing chez Confidences d'Abeilles.
						</p>
					</div>
				</div>
				<div className="row justify-content-around">
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Lea} alt="Lea" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">LEA</h3>
						<h4 className="text-center mb-4"><small>MARKETING & COMMUNICATION</small></h4>
						<p className="text-center">
							<a href="mailto:lea@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/léa-sengèle-147b63149" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Etudiante à l'IAE de Toulouse en master, Léa, amoureuse des produits de la ruche, est aujourd'hui en charge du développement du service de parrainage ainsi que de la communication chez Confidences d'Abeilles.
						</p>
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Benoit} alt="Benoit" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">BENOÎT LAMANT</h3>
						<h4 className="text-center mb-4"><small>COMMUNITY & EVENT CONSULTANT</small></h4>
						<p className="text-center">
							<a href="https://www.linkedin.com/in/beno%C3%AEt-lamant-88b48a130/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Après avoir suivi un cursus commercial, Benoît s’oriente vers une licence en Event & Management.
							Il s’inspire de l’environnement qui l’entoure et le motive dans ses projets.
							Réel adepte de la communication, il fait de l’adaptation, de l’originalité et du partage de sensations les points clés de sa stratégie opérationnelle.
							C'est un grand amateur des produits de la ruche.
						</p>
					</div>
				</div>
				<div className="row justify-content-around">
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Marion} alt="Marion" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">MARION LETUR</h3>
						<h4 className="text-center mb-4"><small>GRAPHISTE & WEBDESIGNER</small></h4>https://www.behance.net/leturm
						<p className="text-center">
							<a href="https://www.instagram.com/larecruedesign/" target="_blank" rel="noopener noreferrer"><FontAwesome name='instagram' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://fr-fr.facebook.com/larecruedesign/" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="http://marionletur.com/" target="_blank" rel="noopener noreferrer"><FontAwesome name='globe' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/marion-letur-642427107/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.behance.net/leturm" target="_blank" rel="noopener noreferrer"><FontAwesome name='behance' size="2x" /></a>
						</p>
						<p className="text-justify">
							Illustratrice freelance depuis Janvier 2016. Vive, créative et dévouée dans son travail, elle a intégré la team Confidences d'Abeilles en tant que Graphiste-Webdesigner.<br/>
							Vous pourrez trouver Marion sur un sommet de Bellevaux puisqu'elle aime crapahuter, sur une scène dans un bar puisqu'elle est chanteuse, ou juste dans un bar parce que c'est quand même sympa de profiter d'une bonne bière avec les copains.
						</p>
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Profile} alt="Someone" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">VOUS</h3>
						<h4 className="text-center mb-4"><small>STAGIAIRE</small></h4>
						<p className="text-justify">
							Vous cherchez un stage ? Vous voulez rejoindre une équipe jeune, dynamique, passionnée par son travail et qui adore le challenge ? Alors vous êtes au bon endroit <span role="img" aria-label="Smile">😊</span><br /><br />
							Pour accompagner notre développement nous avons constamment besoin de nouveaux talents, de personnes passionnées. Nous cherchons donc des stagiaires pour ces différents postes : <strong>Web Designer</strong>, <strong>ReactJS / NodeJS Developer</strong>, <strong>UI/UX Designer</strong>, <strong>Community Manager</strong>, <strong>Communication</strong>, <strong>Marketing et Business Developer</strong>.
							<br /><br />
							Vous pensez avoir le profil type ? C’est parfait, notre aventure prometteuse ne fait que débuter. Envolez-vous donc avec nous !
						</p>
						<p className="text-center">
								<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<p className="text-justify">
							Aucune offre ne vous correspond ? Confidences d’Abeilles est toujours à la recherche de personnes talentueuses, n’hésitez pas à postuler !
						</p>
					</div>
				</div>
			</div>
		)
	}
}
