import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import imgPlaceholder from '../assets/img/profile.png';
import { Link } from 'react-router-dom'

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
									<div className="card w-25 m-3">
										<img className="card-img-top img-fluid" src={imgPlaceholder} alt="Card image cap" />
										<div className="card-block">
											<h3 className="card-title">{hive.name}</h3>
											<Link to={'/hive/'+hive.id} className="btn">Voir en détails</Link>
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
