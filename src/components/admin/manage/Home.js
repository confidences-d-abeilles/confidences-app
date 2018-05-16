
import React, { Component } from 'react'
import request from '../../../services/Net';
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom'

export default class Home extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			users : [],
			bundles : [],
			nbp : 0,
			nbe : 0,
			nbaa : 0,
			nbed : 0,
			nbad : 0,
			nbnp : 0,
			nbea : 0,
			nbpa : 0
		}
	}

	componentDidMount() {
		this.getUsers();
		this.getBundles();
	}

	getUsers() {
		request({
			url: '/user',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				users : res,
				nbp : res.filter((e) => { return (e.user_type === 1) } ).length,
				nbe : res.filter((e) => { return (e.user_type === 2) } ).length,
				nbaa : res.filter((e) => { return (e.user_type === 3) } ).length,
				nbed : res.filter((e) => { return (e.user_type === 4) } ).length,
				nbad : res.filter((e) => { return (e.user_type === 5) } ).length
			});
		})
	}

	getBundles() {
		request({
			url: '/bundle',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundles : res,
				nbnp : res.filter((e) => { return (e.state === 0) } ).length,
				nbea : res.filter((e) => { return (e.state === 1) } ).length,
				nbpa : res.filter((e) => { return (e.state === 2) } ).length,
				nbpaep : res.filter((e) => { return (e.state === 3) } ).length
			})
		})
	}

	render () {
		return (
			<div>
				<div className="row">
					<div className="col">
						<ol className="breadcrumb">
							<li className="breadcrumb-item">Panel d'Administration</li>
						</ol>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<p className="lead">Utilisateurs</p>
						<table className="table">
							<tr><td>Particuliers</td><td>{this.state.nbp}<br/></td></tr>
							<tr><td>Entreprises</td><td>{this.state.nbe}<br/></td></tr>
							<tr><td>Apporteurs d'Affaires</td><td>{this.state.nbaa}<br/></td></tr>
							<tr><td>Editeurs</td><td>{this.state.nbed}<br/></td></tr>
							<tr><td>Administrateurs</td><td>{this.state.nbad}<br/></td></tr>
							<tr><td>Total</td><td>{this.state.users.length}<br/></td></tr>
						</table>
					</div>
					<div className="col">
						<p className="lead">Parrainages</p>
						<table className="table">
							<tr><td><Link to="/admin/manage/bundle/unpaid">Gérer</Link></td><td>Non payé</td><td>{this.state.nbnp}<br/></td></tr>
							<tr><td><Link to="/admin/manage/bundle/pending">Gérer</Link></td><td>En attente de validation</td><td>{this.state.nbea}<br/></td></tr>
							<tr><td><Link to="/admin/manage/bundle/paid">Gérer</Link></td><td>Payés</td><td>{this.state.nbpa}<br/></td></tr>
							<tr><td><Link to="/admin/manage/bundle/ok">Gérer</Link></td><td>Payés et en place</td><td>{this.state.nbpaep}<br/></td></tr>
							<tr><td><Link to="/admin/manage/bundle">Gérer</Link></td><td>Total</td><td>{this.state.bundles.length}<br/></td></tr>
						</table>
					</div>
					<div className="col">
						<p className="lead">Ruches</p>
					</div>
				</div>
			</div>
		)
	}
}