import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../../services/Net'
import Bundle from './Bundle'

export default class AdminManageBundles extends Component {

	constructor(props) {
		super(props)

		this.state = {
			bundles: [],
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
					<h2 className="text-center">Gestion des parrainages</h2>
					<div className="row">
						<div className="col">
							<table className="table">
								<tbody>
									<tr><th>Propriétaire</th><th>Pack</th><th>Nombre de ruches associées</th><th>Status</th><th>Actions</th></tr>
									{this.state.bundles.map((bundle) => {
										return (
											<tr className={(bundle.state == 2)?'table-danger':null} className={(bundle.state == 3)?'table-success':null} key={bundle.id}>
												<td>{bundle.owner.firstname} {bundle.owner.firstname} ({bundle.owner.company_name})</td>
												<td>{bundle.hives} ruches</td>
												<td>{bundle.contain.length} ruches</td>
												<td>{bundle.state}</td>
												<td><button className="btn btn-primary btn-sm" onClick={() => { this.setState({manage_id : bundle.id })}}>Gérer</button></td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
						<div className="col">
							{this.state.manage_id != 0 && <Bundle id={this.state.manage_id} refresh={this.get.bind(this)} />}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
