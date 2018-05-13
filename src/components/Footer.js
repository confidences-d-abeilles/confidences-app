import React, { Component } from 'react';
import logo from '../assets/img/logo.png';
import FontAwesome from 'react-fontawesome';
import '../assets/styles/footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {

	render () {
		return (
			<footer className="bg-faded">
				<div className="container-fluid">
					<div className="row justify-content-around">
						<div className="col-lg-4 mb-4">
							<div>
								<Link to="/"><img src={logo} alt="Logo Confidences d'Abeilles" className="img-fluid" style={{ maxHeight: '128px' }}/></Link><br /><br />
								<a href="https://www.facebook.com/confidencesdabeille" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://twitter.com/Cosme_conf" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://www.instagram.com/confidences_dabeilles/" target="_blank" rel="noopener noreferrer"><FontAwesome name='instagram' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<a href="https://www.linkedin.com/company-beta/11010483/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
							</div>
						</div>
						<div className="col-lg-6 col-md-12 row">
							<div className="col-lg-4 col-md-4 col-sm-6 mb-4">
								<h3 className="text-left">Services</h3>
								<ul>
									<li><Link to="/company/presentation" className="noStyleLink">Entreprise</Link></li>
									<li><Link to="/individual/presentation" className="noStyleLink">Particulier</Link></li>
									<li><Link to="/contributor/presentation" className="noStyleLink">Partenaire</Link></li>
									<li><Link to="/prices" className="noStyleLink">Tarifs</Link></li>
								</ul>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-4">
								<h3 className="text-left">La société</h3>
								<ul>
									<li><Link to="/about" className="noStyleLink">Notre histoire</Link></li>
									<li><Link to="/ourvalues" className="noStyleLink">Nos valeurs</Link></li>
									<li><Link to="/team" className="noStyleLink">L'équipe</Link></li>
									<li><Link to="/contact" className="noStyleLink">Contact</Link></li>
									<li><Link to="/jobs" className="noStyleLink">Jobs</Link></li>
									<li><a href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
								</ul>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6 mb-4">
								<h3 className="text-left">Ressources</h3>
								<ul>
									<li><Link to="/faq" className="noStyleLink">FAQ</Link></li>
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
