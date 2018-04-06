import React, { Component } from 'react';
import logoSquare from '../assets/img/logo-square.png';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../services/AuthService';
import FontAwesome from 'react-fontawesome'

export default class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect : false,
			banner: true
		}
	}

	render () {
		return (
			<div>
				{this.state.banner &&
				<div style={{ width: '100%', height: 'auto', backgroundColor: '#424242', color: 'white', lineHeight: '3em', textAlign: 'center' }}>
					&nbsp;&nbsp;Ceci est la première version de la plateforme. Si vous rencontrez des difficultés au cours de son utilisation, <Link to="/contact">contactez nous</Link> ! <button className="btn btn-link" onClick={() => { this.setState({ banner: false }); }}>Fermer</button>
				</div>}
				<nav className="navbar navbar-toggleable-md navbar-light" style={{ boxShadow: '0 2px 2px silver' }}>
					<button className="navbar-toggler navbar-toggler-right align-self-center" type="button" data-toggle="collapse" data-target="#navbarNav">
						<span className="navbar-toggler-icon"></span>
					</button>
					{(this.state.redirect)?<Redirect to="/" />:null}
					<Link className="navbar-brand" to="/">
						<img src={logoSquare} width="auto" height="64" alt="Logo Confidences d'Abeilles" />
						<h2 className="badge badge-danger" style={{ position: 'absolute', top: '75px', left: '75px', fontSize: '2em', zIndex: 1000 }}>{(process.env.NODE_ENV === "development")?'Bêta':null}</h2>
					</Link>
					<div className="hidden-lg-up collapse" style={{justifyContent: 'space-between'}} id="navbarNav" onClick={() => { document.getElementById("navbarNav").classList.remove("show") }}>
						{(isLoggedIn())?
							<ul className="navbar-nav">
								<li className="nav-item" data-toggle="collapse" data-target="#navbarNav">
									<Link className="nav-link" to="/prices">Tarifs</Link>
								</li>
								<div className="dropdown-divider"></div>
							</ul>
							:
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/company/presentation">Entreprise</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/individual/presentation">Particulier</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contributor/presentation">Partenaire</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/prices">Tarifs</Link>
								</li>
								<div className="dropdown-divider"></div>
							</ul>
						}
						{(isLoggedIn())?
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/about">Notre histoire</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/team">L'équipe</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">Contact</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/jobs">Jobs</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://confidencesdabeilles.fr/" target="_blank" rel="noopener noreferrer">Boutique <FontAwesome name="external-link" /></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog <FontAwesome name="external-link" /></a>
								</li>
								<div className="dropdown-divider"></div>
								<li className="nav-item">
									<Link className="nav-link" to="/account">Mon compte</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/logout">Deconnexion</Link>
								</li>
							</ul>
							:
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link className="nav-link" to="/about">Notre histoire</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/team">L'équipe</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/contact">Contact</Link>
								</li>
								<li className="nav-item">
									<Link className="nav-link" to="/jobs">Jobs</Link>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://confidencesdabeilles.fr/" target="_blank" rel="noopener noreferrer">Boutique <FontAwesome name="external-link" /></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog <FontAwesome name="external-link" /></a>
								</li>
								<div className="dropdown-divider"></div>
								<li className="nav-item">
									<Link className="nav-link" to="/login">Se connecter</Link>
								</li>
								<li className="nav-item">
									<Link className="btn btn-primary" to="/presignup">Créer un compte</Link>
								</li>
							</ul>
						}
			</div>
				{(isLoggedIn())?
					<ul className="navbar-nav hidden-md-down">
						<li className="nav-item">
							<Link className="nav-link" to="/prices">Tarifs</Link>
						</li>
					</ul>
					:
					<ul className="navbar-nav hidden-md-down">
						<li className="nav-item">
							<NavLink className="nav-link" to="/company/presentation" activeStyle={{backgroundColor: 'rgb(230,230,230)',
							boxShadow: '0px 0px 5px 2px rgb(230,230,230)'}}>Entreprise</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/individual/presentation" activeStyle={{backgroundColor: 'rgb(230,230,230)',
							boxShadow: '0px 0px 5px 2px rgb(230,230,230)'}}>Particulier</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/contributor/presentation" activeStyle={{backgroundColor: 'rgb(230,230,230)',
							boxShadow: '0px 0px 5px 2px rgb(230,230,230)'}}>Partenaire</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/prices" activeStyle={{backgroundColor: 'rgb(230,230,230)',
							boxShadow: '0px 0px 5px 2px rgb(230,230,230)'}}>Tarifs</NavLink>
						</li>
					</ul>
				}
				{(isLoggedIn())?
					<ul className="navbar-nav ml-auto hidden-md-down">
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" style={{ cursor : 'pointer' }} href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								La société
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<Link className="dropdown-item" to="/about">Notre histoire</Link>
								<Link className="dropdown-item" to="/team">L'équipe</Link>
								<Link className="dropdown-item" to="/contact">Contact</Link>
								<Link className="dropdown-item" to="/jobs">Jobs</Link>
								<a className="dropdown-item" href="https://confidencesdabeilles.fr/" target="_blank" rel="noopener noreferrer">Boutique <FontAwesome name="external-link" /></a>
								<a className="dropdown-item" href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog <FontAwesome name="external-link" /></a>
							</div>
						</li>
						<li className="nav-item">
							&nbsp;&nbsp;<Link className="btn btn-primary" to="/account">Mon compte</Link>
					</li>
					<li className="nav-item">
						&nbsp;&nbsp;<Link className="btn btn-primary" to="/logout">Deconnexion</Link>
				</li>
			</ul>
			:
			<ul className="navbar-nav ml-auto hidden-md-down">
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle" style={{ cursor : 'pointer' }} id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						La société
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
						<Link className="dropdown-item" to="/about">Notre histoire</Link>
						<Link className="dropdown-item" to="/team">L'équipe</Link>
						<Link className="dropdown-item" to="/contact">Contact</Link>
						<Link className="dropdown-item" to="/jobs">Jobs</Link>
						<a className="dropdown-item" href="https://confidencesdabeilles.fr/" target="_blank" rel="noopener noreferrer">Boutique <FontAwesome name="external-link" /></a>
						<a className="dropdown-item" href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog <FontAwesome name="external-link" /></a>
					</div>
				</li>

				<li className="nav-item">
					&nbsp;&nbsp;<Link className="btn btn-primary" to="/login">Se connecter</Link>
				</li>
				<li className="nav-item">
					&nbsp;&nbsp;<Link className="btn btn-primary" to="/presignup">Créer un compte</Link>
				</li>


	</ul>
	}

	</nav>
	</div>
);
}
}
