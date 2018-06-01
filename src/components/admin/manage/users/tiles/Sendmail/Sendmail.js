import React, { Component } from 'react'
import request from '../../../../../../services/Net'
import NotificationSystem from 'react-notification-system';

// Take a user id as props

export default class Sendmail extends Component {


	sendMail = (id) => {
		request({
			url : '/mail/send_'+id,
			method : 'post',
			data : {
				userId : this.props.id
			}
		}, this.refs.notif).then(res => {

		});
	}

	render ()  {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<button className="btn btn-info btn-sm" onClick={this.sendMail.bind(this, 305)} >Send 305</button>
				<hr />
			</div>
		)
	}
}