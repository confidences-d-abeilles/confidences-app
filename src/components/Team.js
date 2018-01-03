import React, { Component } from 'react'
import Gaetan from '../assets/img/gaetan.jpg'
import Nico from '../assets/img/nico.jpg'
import Clem from '../assets/img/clement.jpg'
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
							<a href="https://www.linkedin.com/in/gaetaneksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Gaëtan est en dernière année d’étude à l’Ecole des Mines. Une école d’ingénieur généraliste dans laquelle il est rentré à la suite d’une classe préparatoire en Physique-Chimie. Apiculteur depuis l’âge de 14 ans, il a co-fondé Confidences d’Abeilles en 2015. En tant que président, il a développé la marque et son image en s’occupant entre autres de la communication, du branding et du design. Il est par ailleurs responsable de la production, de la qualité, de la commercialisation et des partenariats de plus en plus nombreux.<br />Passionné d’apiculture, il rédige les articles de vulgarisation du blog et continue de superviser l’association d’apiculture qu’il a fondé sur son campus étudiant.<br />Le projet de parrainage de ruches est pour lui un premier pas. Un premier pas vers la création d’une communauté sociale apicole de personnes averties ; amateurs, professionnels, parrains œuvrant ensemble pour changer la donne. Des synergies avec d’autres acteurs sont déjà en place.
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
						<h4 className="text-center mb-4"><small>WEB DEVELOPPER</small></h4>
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
						<img src={Profile} alt="Someone" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">VOUS</h3>
						<h4 className="text-center mb-4"><small>STAGIAIRE</small></h4>
						<p className="text-justify">
							Vous cherchez un stage ? Vous voulez rejoindre une équipe jeune, dynamique, passionnée par son travail et qui adore le challenge ? Alors vous êtes au bon endroit 😊<br /><br />
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
