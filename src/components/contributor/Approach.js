
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContributorApproach extends Component {

	render () {
		return (
			<div className="container">
				<h2 className="text-center">Ajouter une entreprise</h2>
				<p className="lead">A partir de cette étape, je confirme avoir pris contact avec l'entreprise en question.</p>
				<p className="text-center"><Link to="/contributor/lead" className="btn btn-primary">Suivant</Link></p>
			</div>
		);
	}
}
