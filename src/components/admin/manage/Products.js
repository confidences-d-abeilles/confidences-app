import React, { Component } from 'react'
import Create from './products/Create'
import List from './products/List'

export default class Products extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container-fluid">
				<h1>Gérer les produits</h1><hr />
				<div className="row">
					<div className="col">
						<Create />
					</div>
					<div className="col">
						<List />
					</div>
				</div>
			</div>
		)
	}

}
