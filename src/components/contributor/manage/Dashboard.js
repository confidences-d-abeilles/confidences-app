
import React, { Component } from 'react';
import { request } from '../../../services/NetService';
import { Link } from 'react-router-dom';

export default class ContributorManageDashboard extends Component {

	constructor(props) {
		super(props);

	}



	render () {
		return (
			<div>
				<div className="row">
					<div className="col-6">Mes dernieres ruches vendues</div>
					<div className="col-6">Les derniers parrains</div>
				</div>
				<div className="row">
					<div className="col-6">Bla</div>
					<div className="col-6">Actu</div>
				</div>
			</div>
		);
	}
}
