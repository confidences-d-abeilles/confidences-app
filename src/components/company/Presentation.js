import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { Link } from 'react-router-dom';

export default class CompanyPresentation extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col">
						<h1>Vos abeilles n'ont jamais ete aussi proche de prendre leur envol !</h1>
						<p>
							Il ne vous reste que quelques informations a saisir et ca sera fait !
						</p>
						<Link to="/company/signup" className="btn btn-secondary">Demarrer</Link>
					</div>
					<div className="col">
						<img src={imgPlaceholder} alt="Empty img space" />
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Parrainer une ruche c'est</h2>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h3>Pour l'entreprise</h3>
						<ul>
							<li>Point</li>
							<li>Point</li>
							<li>Point</li>
							<li>Point</li>
						</ul>
					</div>
					<div className="col">
						<h3>Pour l'apiculteur</h3>
						<ul>
							<li>Point</li>
							<li>Point</li>
							<li>Point</li>
							<li>Point</li>
						</ul>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col text-center">
						<a href="https://confidencesdabeilles.fr/parrainer-ruche" className="btn btn-primary" target="_blank" rel="noopener noreferrer">En savoir plus</a>
					</div>
				</div>
			</div>
		);
	}
}
