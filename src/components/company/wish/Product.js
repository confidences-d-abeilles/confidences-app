import React, { Component } from 'react'

export default class Product extends Component {

	constructor(props) {
		super(props);
		this.state = {
			qty: "1"
		}
	}

	product = this.props.product;

	updateQty(e) {
		this.setState({
			qty: e.target.value
		});
		this.product.qty = e.target.value;
		this.props.update(this.product);
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.product.designation} ({this.product.price} €) : </label>
				<input type="number" onChange={this.updateQty.bind(this)} name="qty" value={this.state.qty} className="form-control" />
			</div>
		)
	}
}
