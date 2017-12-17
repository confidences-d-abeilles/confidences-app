import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../utils/Loading'

export default class AdminManageUsers extends Component {

	constructor(props) {
		super(props)
		this.state = {
			users : null,
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
					<h2 className="text-center my-4">Gérer les utilisateurs</h2>
				</div>
				<div className="row">
					<div className="col-3" style={{ maxHeight: '50vh', overflowY : 'scroll' }}>
						{this.state.users?
						<table className="table">
							<tbody>
								<tr><th>Denomination</th><th></th></tr>
								{this.state.users.map((user) => {
									return (<tr key={user.id}><td>{(user.company_name)?user.company_name:user.firstname+' '+user.name}</td><td><button className="btn btn-sm btn-link" onClick={this.selectUser.bind(this, user)}>Manage</button></td></tr>)
								})}
							</tbody>
						</table>
						:<Loading />}
					</div>
						{(this.state.selectedUser)?
							<div className="col-lg-9 col-md-12">
								<div className="row">
									<div className="col-lg-6 col-md-12 my-2">
										<div className="card">
											<div className="card-block">
												<h3 className="card-title">Informations generales</h3>
												<p className="card-text">
													<strong>Nom et prenom :</strong> {this.state.selectedUser.firstname} {this.state.selectedUser.name}<br />
													{(this.state.selectedUser.company_name)?<span><strong>Nom de la societe :</strong> {this.state.selectedUser.company_name}<br /></span>:null}
													<strong>Adresse email :</strong> {this.state.selectedUser.email}<br />
												</p>
											</div>
										</div>
									</div>
										{this.state.selectedUser.addresses && this.state.selectedUser.addresses[0] &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Adresse de facturation</h3>
														<p className="card-text">
															{this.state.selectedUser.addresses[0].line1}<br />
															{this.state.selectedUser.addresses[0].line2}<br />
															{this.state.selectedUser.addresses[0].line3}<br />
															{this.state.selectedUser.addresses[0].line4}<br />
															{this.state.selectedUser.addresses[0].zipcode} {this.state.selectedUser.addresses[0].city}<br />
															{this.state.selectedUser.addresses[0].country}
														</p>
													</div>
											</div>
										</div>
										}
										{this.state.selectedUser.addresses && this.state.selectedUser.addresses[1] &&
											<div className="col-lg-6 col-md-12 my-2">
												<div className="card">
													<div className="card-block">
														<h3 className="card-title">Adresse de livraison :</h3>
														<p className="card-text">
															{this.state.selectedUser.addresses[1].line1}<br />
															{this.state.selectedUser.addresses[1].line2}<br />
															{this.state.selectedUser.addresses[1].line3}<br />
															{this.state.selectedUser.addresses[1].line4}<br />
															{this.state.selectedUser.addresses[1].zipcode} {this.state.selectedUser.addresses[0].city}<br />
															{this.state.selectedUser.addresses[1].country}
														</p>
													</div>
												</div>
											</div>
										}
							</div>
						</div>
						:<div className="col-lg-9 col-md-12 col-sm-12">
							Cliquer sur un utilisateur dans la liste
						</div>}
				</div>
			</div>
		)
	}
}
