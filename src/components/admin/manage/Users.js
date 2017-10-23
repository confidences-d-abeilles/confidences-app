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
			url: '/users',
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
					<table>
						<tbody>
							{this.state.users.map((user) => {
									return (<tr key={user.id}><td>{user.email}</td><td><button onClick={this.promoteUser.bind(this, user.id)} className="btn btn-primary">Promouvoir</button><button onClick={this.deleteUser.bind(this, user.id)} className="btn btn-primary">Supprimer</button></td></tr>)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
