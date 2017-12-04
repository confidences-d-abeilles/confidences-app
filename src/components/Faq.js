import React, { Component } from 'react'
import request from '../services/Net'
import NotificationSystem from 'react-notification-system'
import FontAwesome from 'react-fontawesome'


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
						<h3 className="my-4" data-toggle="collapse" href="#general-wrapper" style={{ cursor: 'pointer' }}>Général&nbsp;<FontAwesome name='chevron-down' /></h3>
							<div id="general-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 1) {
									return (
										<div className="my-4" key={item.id}>
											<a className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></a>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
						<h3 className="my-4" data-toggle="collapse" href="#company-wrapper" style={{ cursor: 'pointer' }}>Entreprise&nbsp;<FontAwesome name='chevron-down' /></h3>
							<div id="company-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 2) {
									return (
										<div className="my-4" key={item.id}>
											<a className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></a>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
						<h3 className="my-4" data-toggle="collapse" href="#individual-wrapper" style={{ cursor: 'pointer' }}>Particulier&nbsp;<FontAwesome name='chevron-down' /></h3>
						<div id="individual-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 3) {
									return (
										<div className="my-4" key={item.id}>
											<a className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></a>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
						<h3 className="my-4" data-toggle="collapse" href="#contributor-wrapper" style={{ cursor: 'pointer' }}>Partenaires&nbsp;<FontAwesome name='chevron-down' /></h3>
							<div id="contributor-wrapper" className="collapse">
								Si vous avez des questions à soumettre concernant cette catégorie, utilisez le formulaire disponible <a href="https://goo.gl/forms/omh9deJlroedr5732" target="_blank">ici</a> !
							</div>
					</div>
				</div>
			</div>
		)
	}
}
