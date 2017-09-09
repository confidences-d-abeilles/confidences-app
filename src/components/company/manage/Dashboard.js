
import React, { Component } from 'react';
import { request } from '../../../services/NetService';

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hives : 0,
			loading : true
		}
	}

	componentWillMount() {
		request('/user', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					hives : content.bundles[0].hives,
					loading: false
				});
			}
		});
	}

	render () {
		return (
			<p className="lead">
				{(this.state.loading)?'Chargement en cours...':'Nous parrainons '+this.state.hives+' ruches.'}

			</p>
		);
	}
}
