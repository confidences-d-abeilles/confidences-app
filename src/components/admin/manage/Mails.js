import React, { Component } from 'react';
import request from '../../../services/Net';
import NotificationSystem from 'react-notification-system';
import { handleChange } from '../../../services/FormService';


export default class AdminManageMails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailNumber: '',
			userId: undefined,
			userNameList: []
		}
	}

	componentDidMount() {
		request({
			url : '/user',
			method : 'GET'
		}, this.refs.notif).then((res) => {
			this.setState({
				userNameList : res,
				userId : res[0].id
			});
		});
	}

	launch = () => {
		request({
			url : '/automailer',
			method : 'POST'
		});
	}

	sendMailUser = (ev) => {
		ev.preventDefault()
		request({
			url : '/mail',
			method : 'POST',
			data : {
				emailNumber: this.state.emailNumber,
				userId: this.state.userId
			}
		}, this.refs.notif);
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{/*gfdgdfg<button className="btn btn-danger" onClick={this.launch} >Launch email</button>*/}
				<h2>Test mails</h2>
				<form onSubmit={this.sendMailUser}>
					<label>Identifiant du mail à envoyer :</label>
					<input type="text" name="emailNumber" onChange={handleChange.bind(this)} value={this.state.emailNumber} className="form-control form-control-sm" />
					<label>User :</label>
					<select name="userId" onChange={handleChange.bind(this)} value={this.state.userId} className="form-control">
						{this.state.userNameList.map((user) => <option value={user.id} key={user.id}>
								{user.name + ' ' + user.firstname}
							</option>)
						}
					</select>
					<button className="btn btn-danger">Send Mail</button>
				</form>
			</div>
		)
	}
}
