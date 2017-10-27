
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			user : null
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get',
		}, this.refs.notif).then((res) => {
			this.setState({ user : res });
		})
	}

	render () {
		return (
			<div>
				<div className="row py-4">
					<NotificationSystem ref="notif" />
					<div className="col text-center"><Link to={(this.state.user)?'/'+this.state.user.namespace:''}><button className="btn btn-secondary">Consulter ma page entreprise</button></Link></div>
				</div>
				<div className="row">
					<div className="col">
						{(this.state.user)?
							this.state.user.news.map((actu) => {
								const date = new Date(actu.createdAt);
								return (
									<div className="card my-2" key={actu.id}>
										<div className="card-block">
											<div className="card-subtitile text-muted">
												{date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()+' à '+date.getHours()+'h'+date.getMinutes()}
											</div>
											<div className="card-text">
												{actu.content}
											</div>
										</div>
									</div>
								)
							}):''}
					</div>
				</div>
			</div>
		);
	}
}
