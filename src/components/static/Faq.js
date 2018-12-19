import React, { Component } from 'react'
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import FontAwesome from 'react-fontawesome'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class Faq extends Component {

	constructor(props) {
		super(props)
		this.state = {
			list: []
		}
		ReactGA.pageview(this.props.location.pathname);
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
				<Meta title="FAQ"/>
				<div className="row">
					<NotificationSystem ref="notif" />
					<div className="col">
						<h2 className="text-center">
							FAQ
						</h2>
						<h3 className="mt-4" data-toggle="collapse" href="#general-wrapper" style={{ cursor: 'pointer' }}>Général&nbsp;<FontAwesome name='chevron-down' /></h3>
							<div id="general-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 1) {
									return (
										<div key={item.id}>
											<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
						<h3 className="mt-4" data-toggle="collapse" href="#company-wrapper" style={{ cursor: 'pointer' }}>Entreprise&nbsp;<FontAwesome name='chevron-down' /></h3>
							<div id="company-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 2) {
									return (
										<div key={item.id}>
											<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
						<h3 className="mt-4" data-toggle="collapse" href="#individual-wrapper" style={{ cursor: 'pointer' }}>Particulier&nbsp;<FontAwesome name='chevron-down' /></h3>
						<div id="individual-wrapper" className="collapse">
							{this.state.list.map((item) => {
								if (item.type === 3) {
									return (
										<div key={item.id}>
											<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							</div>
					</div>
				</div>
			</div>
		)
	}
}
