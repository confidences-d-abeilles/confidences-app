import React, { Component } from 'react';
import request from '../../../services/Net';
import NotificationSystem from 'react-notification-system';


export default class AdminManageMails extends Component {

	launch = () => {
		request({
			url : '/automailer',
			method : 'POST'
		});
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<button className="btn btn-danger" onClick={this.launch} >Launch email</button>
			</div>
		)
	}
}
