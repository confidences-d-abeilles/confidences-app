import React, { Component } from 'react'
import Create from './coupons/Create'
import List from './coupons/List'

export default class Coupons extends Component {

	constructor (props) {
		super (props);
	}

	render () {
		return (
			<div className="container-fluid">
				<h1>Gérer les coupons</h1><hr />
				<div className="row">
					<div className="col-lg-3"><Create refresh={this.forceUpdate.bind(this)} /></div>
					<div className="col-lg-9"><List /></div>
				</div>
			</div>
		)
	}
}
