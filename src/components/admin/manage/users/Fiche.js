import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class Fiche extends Component {

	constructor (props) {
		super (props);
		this.state = {
			user : null
		}
	}

	getUser = () => {
		request({
			url : '/user/'+this.props.match.params.id,
			method : 'get'
		}).then((res) => {
			this.setState({
				user : res
			})
		}, this.refs.notifs);
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col">
						<ol className="breadcrumb">
							<li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
							<li className="breadcrumb-item"><Link to="/admin/manage/user">Utilisateurs</Link></li>
							<li className="breadcrumb-item active">Utilisateur</li>
						</ol>
					</div>
				</div>
			</div>
		)
	}
}