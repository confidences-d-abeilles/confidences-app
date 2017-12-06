import React, { Component } from 'react'
import Gaetan from '../assets/img/gaetan.jpg'
import Nico from '../assets/img/nico.jpg'
import Clem from '../assets/img/clement.jpg'
import Profile from '../assets/img/profile.png'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

export default class Team extends Component {

	render () {
		return (
			<div className="container">
				<h2 className="text-center my-4">Notre équipe</h2>
				<div className="row justify-content-around">
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Gaetan} alt="Gaetan" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">GAËTAN EKSZTEROWICZ</h3>
						<h4 className="text-center mb-4"><small>CEO & CO-FOUNDER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/popowych" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://twitter.com/GaetanEksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:gaetan@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/gaetaneksz" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Gaëtan est étudiant à l’Ecole des Mines d’Alès, une école d’ingénieur généraliste dans laquelle il est rentré à la suite d’une classe préparatoire en Physique-Chimie. Il s’occupe du développement du rucher, de la communication, du marketing et du design. Il rédige de plus l’essentiel des articles du site internet ainsi que ceux du blog. Il a créé en parallèle une association d’apiculture, EM’API, sur son campus universitaire et incite, autant que possible, les gens à se lancer avec une première ruche.
						</p>
						<blockquote className="blockquote">
							<p className="mb-0 text-justify">
								« Savoir gérer une ou plusieurs ruches n’est pas aussi compliqué qu’il y paraît et j’aimerais susciter l’envie chez les membres [de l’association] d’acquérir leurs propres ruches ; que ce soit pour le plaisir et le luxe de déguster le meilleur miel qui soit mais aussi pour préserver les populations d’abeilles. »
							</p>
						</blockquote>
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Nico} alt="Nicolas" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">NICOLAS EKSZTEROWICZ</h3>
						<h4 className="text-center mb-4"><small>DIRECTOR & CO-FOUNDER</small></h4>
						<p className="text-center">
							<a href="https://www.facebook.com/nicolas.ekszterowicz" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="mailto:nicolas@confidencesdabeilles.fr"><FontAwesome name='envelope-o' size="2x" /></a>&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/in/nicolas-ekszterowicz-113271a8/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</p>
						<p className="text-justify">
							Nicolas est étudiant à l’ESISAR, une école d’ingénieur des systèmes intelligents et communicants faisant partie du groupe INP de Grenoble ; « grand admissible » à la suite de son cursus à l’IUT d’Annecy en GE2I, c’est lui qui est aujourd’hui en charge du développement des interfaces sur le web, du codage, de la programmation et du design. Il travaille actuellement à la modernisation et l’automatisation de la chaine de production.
							Ce statut ne l’empêche en rien de participer à la bonne conduite du rucher, aux récoltes et à la commercialisation.
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
					</div>
					<div className="col-lg-5 col-md-10 col-sm-12 text-center mt-4">
						<img src={Profile} alt="Someone" className="w-50 rounded-circle"/>
						<h3 className="text-center mt-4">VOUS</h3>
						<h4 className="text-center mb-4"><small>STAGIAIRE</small></h4>
						<p className="text-justify">
							Vous cherchez un stage ? Vous voulez rejoindre une équipe jeune, dynamique, passionnée par son travail et qui adore le challenge ? Alors vous êtes au bon endroit 😊<br /><br />
						Pour accompagner notre développement nous avons constamment besoin de nouveaux talents, de personnes passionnées. Nous cherchons donc des stagiaires en <strong>Communication</strong>, <strong>Commercialisation</strong>, <strong>Community Management</strong> et <strong>Business Development</strong>.
							<br /><br />
							Vous pensez avoir le profil type ? C’est parfait, notre aventure prometteuse ne fait que débuter. Envolez vous donc avec nous !
						</p>
						<p className="text-center">
								<Link className="btn btn-secondary" to="/apply">Postulez</Link>
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
