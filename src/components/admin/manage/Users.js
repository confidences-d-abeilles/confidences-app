import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		this.state = {
			users : []
		}
	}

	componentDidMount() {
		this.getUsers();
	}

	getUsers() {
		request({
			url: '/user',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				users : res
			});
		})
	}

	deleteUser(id) {
		request({
			url : '/users/'+id,
			method : 'delete'
		}, this.refs.notif).then((res) => {
			this.getUsers();
		});
	}

	promoteUser(id) {
		request({
			url : '/users/'+id+'/promote',
			method : 'patch'
		}, this.refs.notif).then((res) => {
		});
	}

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center">Gérer les utilisateurs</h2>
					<table className="table">
						<tbody>
							<tr><th>Email</th><th>Type d'utilisateur</th><th>Actions</th></tr>
							{this.state.users.map((user) => {
									return (<tr key={user.id}><td>{user.email}</td><td>{user.user_type}</td><td><button onClick={this.promoteUser.bind(this, user.id)} className="btn btn-primary btn-sm">Promouvoir</button><button onClick={this.deleteUser.bind(this, user.id)} className="btn btn-primary btn-sm">Supprimer</button></td></tr>)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
