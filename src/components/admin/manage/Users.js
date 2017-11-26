import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		this.state = {
			users : [],
			selectedUser: null
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

	selectUser(user) {
		this.setState({
			selectedUser: user
		})
	}

	render () {
		return (
			<div className="container-fluid">
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col my-2">
						<h2 className="text-center">Gérer les utilisateurs</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-3">
						<table className="table">
							<tbody>
								<tr><th>Email</th><th></th></tr>
								{this.state.users.map((user) => {
										return (<tr key={user.id}><td>{(user.company_name)?user.company_name:user.firstname+' '+user.name}</td><td><button className="btn btn-sm btn-link" onClick={this.selectUser.bind(this, user)}>Manage</button></td></tr>)
								})}
							</tbody>
						</table>
					</div>
						{(this.state.selectedUser)?
							<div className="col-9">
								<h3>Coordonnees</h3>
									Nom et prenom : {this.state.selectedUser.firstname} {this.state.selectedUser.name}<br />
								{(this.state.selectedUser.company_name)?'Nom de la societe : '+this.state.selectUser.company_name+'<br />':null}
							</div>
						:<div className="col-9">
							Cliquer sur un utilisateur dans la liste a gauche
						</div>}
				</div>
			</div>
		)
	}
}
