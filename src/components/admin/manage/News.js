import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../services/FormService'

export default class AdminManageNews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users : []
		}
	}

	componentDidMount() {
		request({
			url : '/users',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				users : res
			});
		});
	}

	sendNews(e) {
		e.preventDefault();
		request({
			url : '/news/user/'+this.state.userId,
			method: 'post',
			data : {
				content: this.state.news_content
			}
		}, this.refs.notif);
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col">
						<h2 className="text-center">News client</h2>
						<form>
							<div className="form-group">
								<select className="form-control" name="userId" onChange={handleChange.bind(this)} >
									<option selected>Choisissez un utilisateur</option>
									{this.state.users.map((user) => {
										return (<option value={user.id}>{user.firstname} {user.name} {(user.company_name)?'('+user.company_name+')':null}</option>)
									})}
								</select>
							</div>
							<div className="form-group">
								<textarea name="news_content" onChange={handleChange.bind(this)} placeholder="Texte de la news..." className="form-control" />
							</div>
							<div className="form-group">
								<input className="btn btn-primary" type="submit" value="Envoyer la news" onClick={this.sendNews.bind(this)} />
							</div>
						</form>
					</div>
				</div>
				<div className="row"></div>
				<div className="row"></div>
				<div className="row"></div>
			</div>
		);
	}
}
