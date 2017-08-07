import React, { Component } from 'react';
import logoSquare from '../assets/img/logo-square.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {

	render () {
		return (
			<nav className="navbar navbar-toggleable-md navbar-light">
				<div className="container">
					<Link className="navbar-brand" to="/">
						<img src={logoSquare} width="auto" height="64" alt="Logo Confidences d'Abeilles" />
					</Link>
					<div className="collapse navbar-collapse" style={{justifyContent: 'space-between'}} id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/company/presentation">Entreprise</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/individual/presentation">Particulier</Link>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">Partenaire</a>
							</li>
						</ul>
						<ul className="navbar-nav pull-xs-right">
							<li className="nav-item dropdown">
								<a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									La société
								</a>
								<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
									<a className="dropdown-item" href="#">A propos</a>
									<a className="dropdown-item" href="#">Contact</a>
									<a className="dropdown-item" href="#">Jobs</a>
									<a className="dropdown-item" href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog</a>
								</div>
							</li>
							<li className="nav-item">
								&nbsp;&nbsp;<Link className="btn btn-primary" to="/login">Se connecter</Link>
						</li>
						<li className="nav-item">
							&nbsp;&nbsp;<a className="btn btn-primary" href="#" data-toggle="modal" data-target="#createAccount">Créer un compte</a>
					</li>
					<div className="modal fade" id="createAccount" tabindex="-1" role="dialog">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel">Je suis ...</h5>
									<button type="button" className="close" data-dismiss="modal">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div className="modal-body text-center">
									<a href="/company/signup" className="btn btn-warning">Une Entreprise</a><br /><br />
									<a href="/individual/signup" className="btn btn-warning">Un Particulier</a>
								</div>
							</div>
						</div>
					</div>
				</ul>
			</div>
		</div>
	</nav>
);
}
}
