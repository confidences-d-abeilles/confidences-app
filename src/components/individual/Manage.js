import React, { Component } from 'react';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import { request } from '../../services/NetService';
import { isLoggedIn } from '../../services/AuthService';
import { Link, Redirect } from 'react-router-dom';

export default class IndividualManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					user: content
				});
			}
		});
	}

	render () {
		return (
			<div className="container py-4">
				{(!isLoggedIn)?<Redirect to="/" />:null}
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
					<div>
					</div>
				</div>
			</div>
		);
	}
}
