import React, { Component } from 'react'
import request from '../../../services/Net'

export default class CompanyManageBills extends Component {

	constructor(props) {
		super (props)
		this.state = {
			user : null
		}
	}

	render () {
		return (
			<div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Mes factures</h2>
					</div>
				</div>
			</div>
		)
	}
}
