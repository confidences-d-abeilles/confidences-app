import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class IndividualPresentation extends Component {

	render () {
		return (
			<div className="container">
				<div className="row align-items-center">
					<div className="col">
						<h1>Vos abeilles n'ont jamais ete aussi proche de prendre leur envol !</h1>
						<p>
							Il ne vous reste que quelques informations a saisir et ca sera fait !
						</p>
						<button className="btn btn-primary">Demarrer</button>
					</div>
					<div className="col">
						<img src={imgPlaceholder} alt="Empty img space" />
					</div>
				</div>
			</div>
		);
	}
}
