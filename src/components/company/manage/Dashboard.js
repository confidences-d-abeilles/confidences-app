
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
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
			<div className="row py-4">
				<NotificationSystem ref="notif" />
				<div className="col text-center"><Link to={(this.state.user)?'/'+this.state.user.namespace:''}><button className="btn btn-secondary">Consulter ma page entreprise</button></Link></div>
			</div>
		);
	}
}
