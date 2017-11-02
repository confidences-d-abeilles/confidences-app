
import React, { Component } from 'react';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'


const config = require('../../../config.js')

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
				<object data={(this.state.user)?config.cdn_url+"/"+this.state.user.contracts[0].filename:''} type="application/pdf" width="600" height="400">
				</object>
			</div>
		);
	}
}
