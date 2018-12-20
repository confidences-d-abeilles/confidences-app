
import React, { Component } from 'react';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'


export default class ContributorManageContract extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			user : null
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res
			})
		})
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<object data={(this.state.user)?process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.user.id+'.pdf':null} type="application/pdf" style={{ width: '100%' }} height="400">
				</object>
			</div>
		);
	}
}
