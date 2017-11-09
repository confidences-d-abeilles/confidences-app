import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import { Link } from 'react-router-dom'
import imgPlaceholder from '../assets/img/profile.png';

export default class Hives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hives : []
		}
	}

	componentDidMount() {
		request({
			url: '/hive',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				hives : res
			})
		})
	}

	render() {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col">
						<h2 className="text-center">Les ruches</h2>
						<div className="row">
							{this.state.hives.map((hive) => {
								return (
									<div className="card" style={{ width: '20%' }}>
										<img className="card-img-top img-fluid" src={imgPlaceholder} alt="Card image cap" />
										<div className="card-block">
											<h3 className="card-title">{hive.name}</h3>
											<Link to={'/hives/'+hive.id} className="btn">Voir en détails</Link>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
