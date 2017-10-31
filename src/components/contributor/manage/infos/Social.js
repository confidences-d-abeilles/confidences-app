import React, { Component } from 'react';
import request from '../../../../services/Net';
import NotificationSystem from 'react-notification-system'

export default class ContributorManageInfosSocial extends Component {

	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			if (res) {
				this.setState({
					loading: false,
					firstname: res.firstname,
					name: res.name,
					email: res.email,
				})
			}
		});
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
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
