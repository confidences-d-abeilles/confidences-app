import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../assets/img/end_part.jpg';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system'

export default class CompanyEnd extends Component {
	
	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			namespace: ''
		}
	}
	
	componentDidMount() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				namespace: res.namespace
			})
		});
	}
	
	render () {
		return (
			<div className="container py-4">
				<Meta title="Félicitations"/>
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col-8">
						<h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains de ruches.</h2>
						<p className="text-center">
							<img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
							<br />
							Toute l'équipe de Confidences  d'Abeilles vous remercie !
						</p>
						<div className="row justify-content-center">
							<div className="col text-center">
								<Link to="/company/manage" className="btn btn-primary btn-lg">Mon compte</Link>
							</div>
							<div className="col text-center">
								<Link to={'/parrains/'+this.state.namespace}  className="btn btn-primary btn-lg">Découvrir notre page</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
