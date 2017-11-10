import React, { Component } from 'react';
import request from '../../../../services/Net';
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../../services/FormService'

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
					school: res.school,
					user: res
				})
				res.addresses.map((address) => {
					if (address.type === 1) {
						this.setState({
							bid: address.id,
							bline1: address.line1,
							bline2: address.line2,
							bzipcode: address.zipcode,
							bcity: address.city
						})
					}

					return (0);
				});
			}
		});
	}

	submitInfos(e) {
		e.preventDefault();
		request({
			url: '/user',
			method: 'put',
			data: {
				firstname: this.state.firstname,
				name: this.state.name,
				email: this.state.email,
				school: this.state.school
			}
		}, this.refs.notif)
	}

	submitBaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.bid,
			method: 'put',
			data: {
				line1: this.state.bline1,
				line2: this.state.bline2,
				zipcode: this.state.bzipcode,
				city: this.state.bcity
			}
		}, this.refs.notif);
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(this.state.loading)?'Chargement en cours...':
					<div>
						<form className="row py-4">
							<div className="col-6 text-center">
								<div className="form-group">
									<input type="text" value={this.state.firstname} name="firstname" className="form-control" placeholder="Prénom" onChange={handleChange.bind(this)} />
								</div>
								<div className="form-group">
									<input type="email" value={this.state.email} name="email" className="form-control" placeholder="Email" onChange={handleChange.bind(this)} />
								</div>
							</div>
							<div className="col-6 text-center">
								<div className="form-group">
									<input type="text" value={this.state.name} name="name" className="form-control" placeholder="Nom" onChange={handleChange.bind(this)} />
								</div>
								<div className="form-group">
									<input type="text" value={this.state.school} name="school" className="form-control" placeholder="Mon école" onChange={handleChange.bind(this)} />
								</div>
							</div>
							<div className="col text-center">
								<div className="form-group">
									<input type="submit" value="Enregistrer" className="btn btn-primary" onClick={this.submitInfos.bind(this)}/>
								</div>
							</div>
						</form>
						<div className="row">
							<div className="col-6">
								<span className="lead">Adresse :<br /></span>
								<form key={this.state.user.id}>
									<div className="form-group">
										<input type="texte" name="bline1" onChange={handleChange.bind(this)} value={this.state.bline1} className="form-control" />
									</div>
									<div className="form-group">
										<input type="texte" name="bline2" onChange={handleChange.bind(this)} value={this.state.bline2} className="form-control" />
									</div>
									<div className="form-group row">
										<div className="col-4">
											<input type="texte" name="bzipcode" onChange={handleChange.bind(this)} value={this.state.bzipcode} className="form-control" />
										</div>
										<div className="col-8">
											<input type="texte" name="bcity" onChange={handleChange.bind(this)} value={this.state.bcity} className="form-control" />
										</div>
									</div>
									<div className="form-group">
										<input type="submit" value="Enregistrer" className="btn btn-primary" onClick={this.submitBaddress.bind(this)} />
									</div>
								</form>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}
