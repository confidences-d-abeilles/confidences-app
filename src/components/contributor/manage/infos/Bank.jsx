import React, { Component } from 'react';
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../../services/FormService'


export default class ContributorManageInfosBank extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			iban : '',
			name : ''
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				iban: res.iban,
				name: res.account_holder
			});
		})
	}

	updateBank(e) {
		e.preventDefault();
		request({
			url: '/user',
			method: 'put',
			data : {
				iban: this.state.iban,
				account_holder: this.state.name
			}
		}, this.refs.notif);
	}

	render () {
		return (
			<div className="row my-4">
				<NotificationSystem ref="notif" />
				<div className="col-6">
					<form onSubmit={this.updateBank.bind(this)}>
						<div className="form-group">
							<input type="text" name="iban" onChange={handleChange.bind(this)} className="form-control" value={this.state.iban} placeholder="IBAN"/>
						</div>
						<div className="form-group">
							<input type="text" name="name" onChange={handleChange.bind(this)} className="form-control" value={this.state.name} placeholder="Nom du titulaire du compte"/>
						</div>
						<button className="btn btn-primary">Mettre à jour</button>
					</form>
				</div>
			</div>
		);
	}
}
