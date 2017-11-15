import React, { Component } from 'react'
import request from '../services/Net'
import NotificationSystem from 'react-notification-system'



export default class Faq extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list : []
		}
	}

	componentDidMount() {
		request({
			url : '/faq/1',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				list : res
			})
		})
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col">
						<h2 className="text-center">
							FAQ
						</h2>
						<p>
							Nous avons oublié de répondre à des questions ? Venez donc nous les soumettre <a href="https://goo.gl/forms/omh9deJlroedr5732" target="_blank">ici</a> !
						</p>
						{this.state.list.map((item) => {
							return (
								<div className="card" key="item.id">
									<div className="card-block">
										<h3 className="card-title">{item.question}</h3>
										<p className="card-text">{item.answer}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		)
	}
}
