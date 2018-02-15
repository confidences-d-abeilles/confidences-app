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
						<h2 className="my-4">Créer un produit</h2>
						<Create />
					</div>
					<div className="col">
						<h2 className="my-4">Les produits</h2>
						<List />
					</div>
				</div>
			</div>
		)
	}

}
