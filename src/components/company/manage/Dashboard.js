
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';

const config = require('../../../config.js');

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			user : null
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get',
		}, this.refs.notif).then((res) => {
			this.setState({ user : res });
		})
	}

	render () {
		return (
			<div>
				<div className="row py-4">
					<NotificationSystem ref="notif" />
					<div className="col text-center">
						<a href={(this.state.user)?'/'+this.state.user.namespace:''} target="_blank" className="btn btn-secondary disabled">Consulter ma page entreprise</a>

						{(this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].certif && this.state.user.bundles[0].state > 1) ?
							<a href={config.cdn_url + '/' + this.state.user.bundles[0].certif}
								className="btn btn-secondary m-2" target="_blank">Télécharger mon certificat de parrainage
							</a> :
							<a href="#" className="btn btn-secondary m-2 disabled" target="_blank" role="button" aria-disabled="true">Télécharger mon certificat de parrainage</a>
						}
					</div>
				</div>
			</div>
		);
	}
}
