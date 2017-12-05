import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import imgPlaceholder from '../assets/img/profile.png';
import { Link } from 'react-router-dom'
import Loading from './utils/Loading'
import { handleChange } from '../services/FormService';

const config = require('../config.js')

export default class Hives extends Component {

	constructor(props) {
		super(props)
		this.state = {
			bundles : null,
			criteria: ''
		}
	}

	componentDidMount() {
		request({
			url: '/bundle',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundles : res
			})
		})
	}

	render() {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h2 className="text-center">Les ruches</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-2">
						<h3>Filtrer</h3>
						<input type="text" className="form-control" placeholder="Rechercher un nom de parrain ou de ruche..." onChange={handleChange.bind(this)} name="criteria" value={this.state.criteria} disabled />
					</div>
					<div className="col-lg-10">
						{this.state.bundles?
						<div className="row justify-content-center">
							{this.state.bundles.map((bundle) => {
								const owner = (bundle.owner.company_name)?bundle.owner.company_name:bundle.owner.firstname+' '+bundle.owner.name;
								const datetime = new Date(bundle.createdAt);
								return (
									bundle.contain.map((hive) => {
										return (
											<div className="card w-25 m-3 justify-content-between">
												<img className="card-img-top img-fluid" src={(hive.imgs && hive.imgs[0])?config.cdn_url+'/'+hive.imgs[0]:imgPlaceholder} alt="Card image cap" />
												<div className="card-block" style={{ height: 'auto', flex: '0' }}>
													<h3 className="card-title">{hive.name}</h3>
													<h6 className="card-subtitle text-muted">Parrainée par {owner} depuis le {datetime.getDate()+'/'+parseInt(datetime.getMonth()+1)+'/'+datetime.getFullYear()}</h6>
													<Link to={'/hive/'+hive.id} className="btn">Voir en détails</Link>
												</div>
											</div>
										)
									})
								)
							})}
						</div>:<Loading />}
					</div>
				</div>
			</div>
		)
	}
}
