import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import FontAwesome from 'react-fontawesome';
import '../assets/styles/Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

	render () {
		return (
			<footer className="bg-faded">
				<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div>
							<Link to="/"><img src={logo} alt="Logo Confidences d'Abeilles" height="128px" /></Link><br /><br />
							<a href="https://www.facebook.com/confidencesdabeille" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="https://twitter.com/Cosme_conf" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="https://www.instagram.com/confidences_dabeilles/" target="_blank" rel="noopener noreferrer"><FontAwesome name='instagram' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<a href="https://www.linkedin.com/company-beta/11010483/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
						</div>
					</div>
					<div className="col-lg-6 row">
						<div className="col-lg-4">
							<h2>Services</h2>
							<ul>
								<li><Link to="/company/signup" className="noStyleLink">Entreprise</Link></li>
								<li><Link to="/individual/signup" className="noStyleLink">Particulier</Link></li>
								<li><Link to="#" className="noStyleLink">Partenaire</Link></li>
								<li><Link to="#" className="noStyleLink">Tarifs</Link></li>
							</ul>
						</div>
						<div className="col-lg-4">
							<h2>La société</h2>
							<ul>
								<li><Link to="#" className="noStyleLink">A propos</Link></li>
								<li><Link to="#" className="noStyleLink">Contact</Link></li>
								<li><Link to="#" className="noStyleLink">Jobs</Link></li>
								<li><a href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
							</ul>
						</div>
						<div className="col-lg-4">
							<h2>Ressources</h2>
							<ul>
								<li><Link to="#" className="noStyleLink">FAQ</Link></li>
								<li><Link to="#" className="noStyleLink">Presse</Link></li>
								<li><Link to="/mentions_legales" className="noStyleLink">Mentions légales</Link></li>
								<li><Link to="/cgv" className="noStyleLink">CGV</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			</footer>
		);
	}
}
