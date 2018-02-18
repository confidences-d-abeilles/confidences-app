import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import imgPlaceholder from '../assets/img/logo_ruche_entreprise.png';
import { Link } from 'react-router-dom'
import Loading from './utils/Loading'
import { handleChange } from '../services/FormService';
import ReactGA from 'react-ga';
import Meta from './utils/Meta'
import SquareImg from './utils/SquareImg'

const config = require('../config.js')

export default class Hives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hives : null,
			criteria: ''
		}
		ReactGA.pageview(this.props.location.pathname);
	}

	componentDidMount() {
		request({
			url: '/hive',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				hives : res.reverse()
			})
		})
	}

	render() {
		return (
			<div className="container">
				<Meta title="Les ruches"/>
				<NotificationSystem ref="notif" />
				<h1 style={{ fontFamily: "HighTo", color: '#E49C00' }} className="text-center my-4">LES RUCHES</h1>
				<div className="row justify-content-center">
					<div className="col">
						{this.state.hives?
						<div className="row justify-content-center">
							{this.state.hives.map((hive) => {
								if (hive.imgs && hive.imgs[0]) {
									return (<div className="card w-25 m-3 justify-content-between">
									<SquareImg className="card-img-top img-fluid" src={(hive.imgs && hive.imgs[0])?config.cdn_url+'/'+hive.imgs[0]:imgPlaceholder} alt="Card image cap" />
									<div className="card-block" style={{ height: 'auto', flex: '0' }}>
										<h2 className="card-title text-center" style={{ fontFamily: "HighTo"}} >{hive.name}</h2>
										<Link to={'/hive/'+hive.id} className="btn btn-link float-right">Voir en détail</Link>
									</div>
								</div>)
							} else {
								return null;
							}
							})}
						</div>:<Loading />}
					</div>
				</div>
			</div>
		)
	}
}
