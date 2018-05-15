import React, { Component } from 'react'
import request from '../../../../services/Net'
import List from './List'

export default class AdminManageBundle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bundles: null
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
					<h2 className="text-center my-4">Gérer les parrainages</h2>
					<List data={this.state.bundles} />
				</div>
			</div>
		)
	}
}
