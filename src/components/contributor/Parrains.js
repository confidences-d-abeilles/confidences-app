import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'

export default class ContributorParrains extends Component {

	constructor(props) {
		super(props);
		this.state = {
			leads : []
		}
	}

	componentDidMount() {
		request({
			url: '/lead',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({ leads : res })
		});
	}

	render () {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<h2>Liste des entreprises déjà démarchées</h2>
			</div>
		);
	}
}
