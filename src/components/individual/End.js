import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class CompanyEnd extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col-8">
						<h2 className="text-center my-4">Felicitations ! Vous faites desormais parti de la grande famille des parrains de ruches.</h2>
						<p className="text-center">
							<img src={imgPlaceholder} className="img-fluid mx-auto d-block" alt="Img temp" />
							<br />
							Toutes l'equipe de Confidences  d'Abeilles vous remercie !<br /><br />
                        <Link to="/individual/manage" className="btn btn-primary">Mon compte</Link>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
