import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import Bundle from './Bundle'
import Loading from '../../utils/Loading';
import ReactGA from 'react-ga';
export default class AdminManageBundles extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);

		this.state = {
			bundles: null,
			manage_id: 0
		}
	}

	componentDidMount () {
		this.get()
	}

	get () {
		request({
			url: '/bundle',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundles : res
			})
		})
	}

	render () {
		return (
			<div className="row">
				<NotificationSystem ref="notif" />
				<div className="col">
					<h2 className="text-center my-4">Gestion des parrainages</h2>
					<div className="row">
						<div className="col" style={{ maxHeight: '50vh', overflowY : 'scroll' }}>
							{this.state.bundles?
							<table className="table table-sm">
								<tbody>
									<tr><th>Propriétaire</th><th>Pack</th><th>Status</th><th>Actions</th></tr>
									{this.state.bundles.map((bundle) => {
										return (
											<tr className={(this.state.manage_id === bundle.id)?'table-info':null} key={bundle.id}>
												<td>{(bundle.owner)?bundle.owner.firstname+' '+bundle.owner.name+' '+bundle.owner.company_name:'[corrupted]'}</td>
												<td>{(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'}</td>
												<td>{bundle.state}</td>
												<td><button className="btn btn-link btn-sm" onClick={() => { this.setState({manage_id : bundle.id, bundle_owner: bundle.owner, bundle: bundle})}}>Gérer</button></td>
											</tr>
										)
									})}
								</tbody>
							</table>
							:<Loading />}
						</div>
						<div className="col">
							{this.state.manage_id != 0 && <Bundle id={this.state.manage_id} owner={this.state.bundle_owner} bundle={this.state.bundle} refresh={this.get.bind(this)} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
