import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class IndividualManage extends Component {

	render () {
		return (
			<div className="container py-4">
				<div className="row">
					<div className="col-3">
						<img src={imgPlaceholder} alt="Logo entreprise" className="img-fluid img-thumbnail" />
						<br /><br />
						<ul className="list-group">
							<li className="list-group-item active">Mon parrainage en cours</li>
							<li className="list-group-item">Mes informations</li>
							<li className="list-group-item">Ma page dediee</li>
							<li className="list-group-item">Personnalisation</li>
							<li className="list-group-item">Mes factures</li>
							<li className="list-group-item">Deconnexion</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
