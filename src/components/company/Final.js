import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class CompanyFinal extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col-9">
						<h2 className="text-center my-4">Félicitation ! Vous faîtes désormais
						partie de la grande famille des parrains de ruches.</h2>
						<p className="lead text-center">Toute l’équipe de Confidences
						d’Abeilles vous souhaite la
						bienvenue.</p>
						<div className="row">
							<div className="col text-center">
								<Link to="/account" className="btn btn-primary">Mon compte</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
