import React, { Component } from 'react'
import request from '../services/Net'
import NotificationSystem from 'react-notification-system'



export default class Faq extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
	}

	componentDidMount() {
		request({
			url : '/faq',
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
						<h3 className="my-4">Question générales</h3>
						{this.state.list.map((item) => {
							if (item.type === 1) {
								return (
									<div className="card my-2" key={item.id}>
										<div className="card-header" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>
											<h3>{item.question}</h3>
										</div>
										<div className="collapse" id={item.id}>
											<div className="card-block">
												<p className="card-text">{item.answer}</p>
											</div>
										</div>
									</div>
								)
							} else {
								return null
							}
						})}
						<h3 className="my-4">Pour les entreprises</h3>
							{this.state.list.map((item) => {
								if (item.type === 2) {
									return (
										<div className="card my-2" key={item.id}>
											<div className="card-header" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>
												<h3>{item.question}</h3>
											</div>
											<div className="collapse" id={item.id}>
												<div className="card-block">
													<p className="card-text">{item.answer}</p>
												</div>
											</div>
										</div>
									)
								} else {
									return null
								}
							})}
						<h3 className="my-4">Pour les particuliers</h3>
							{this.state.list.map((item) => {
								if (item.type === 3) {
									return (
										<div className="card my-2" key={item.id}>
											<div className="card-header" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>
												<h3>{item.question}</h3>
											</div>
											<div className="collapse" id={item.id}>
												<div className="card-block">
													<p className="card-text">{item.answer}</p>
												</div>
											</div>
										</div>
									)
								} else {
									return null
								}
							})}
						<h3 className="my-4">Pour les apporteurs d'affaire (bientot masque)</h3>
							{this.state.list.map((item) => {
								if (item.type === 4) {
									return (
										<div className="card my-2" key={item.id}>
											<div className="card-header" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>
												<h3>{item.question}</h3>
											</div>
											<div className="collapse" id={item.id}>
												<div className="card-block">
													<p className="card-text">{item.answer}</p>
												</div>
											</div>
										</div>
									)
								} else {
									return null
								}
							})}
					</div>
				</div>
			</div>
		)
	}
}
