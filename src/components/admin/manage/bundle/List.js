import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from '../../../../services/Net'

export default class List extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bundles: []
		}
	}

	componentDidMount() {
		this.get()
	}

	get() {
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
				<div className="col">
					<table className="table">
						<tbody>
							<tr>
								<th>Client</th>
								<th>Client</th>
								<th>Client</th>
								<th>Client</th>
							</tr>
							{this.state.bundles.map((bundle) => {
								return (
										<tr>
											<Link to="/admin/manage/bundle/test" className="link-nostyle">
												<td>{(bundle.owner)?bundle.owner.firstname+' '+bundle.owner.name+' '+bundle.owner.company_name:'[corrupted]'}</td>
												<td>{(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'}</td>
												<td>{bundle.state}</td>
												<td><button className="btn btn-link btn-sm" onClick={() => { this.setState({manage_id : bundle.id })}}>Gérer</button></td>
											</Link>
										</tr>
									)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}
