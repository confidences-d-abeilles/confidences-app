import React, { Component } from 'react';
import { request } from '../../../../services/NetService';

export default class ContributorManageInfosSocial extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentWillMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					loading: false,
					firstname: content.firstname,
					name: content.name,
					email: content.email,
					baddress1: content.baddress[0].line1,
					baddress2: content.baddress[0].line2,
					bzipcode: content.baddress[0].zipcode,
					bcity: content.baddress[0].city,
					daddress1: content.baddress[0].line1,
					daddress2: content.baddress[0].line2,
					dzipcode: content.baddress[0].zipcode,
					dcity: content.baddress[0].city
				})
			}
		})
	}

	render () {
		return (
			<div>
				{(this.state.loading)?'Chargement en cours...':
					<div>
						<div className="row">
							<div className="col-6">
								{this.state.firstname}<br />
								{this.state.email}
							</div>
							<div className="col-6">
								{this.state.name}
							</div>
						</div>
						<div className="row">
							<div className="col-6">
								<span className="lead">Adresse de facturation :<br /></span>
								{this.state.name} {this.state.firstname}<br />
								{this.state.baddress1}<br />
								{(this.state.baddress2)?this.state.baddress2+<br />:''}
								{this.state.bzipcode} {this.state.bcity}<br />
							</div>
							<div className="col-6">
								<span className="lead">Adresse de livraison :<br /></span>
								{this.state.name} {this.state.firstname}<br />
								{this.state.baddress1}<br />
								{(this.state.baddress2)?this.state.baddress2+<br />:''}
								{this.state.bzipcode} {this.state.bcity}<br />
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}
