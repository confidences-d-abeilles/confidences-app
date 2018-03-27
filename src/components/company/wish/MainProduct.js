import React, { Component } from 'react'

export default class MainProduct extends Component {

	constructor(props) {
		super(props);
		this.state = {
			qty: "1",
			pots: "80"
		}
	}

	product = this.props.product;

	updateQty(e) {
		this.product.qty = (e.target.value)?Math.abs(e.target.value):'';
		this.props.update(this.product);
		this.setState({
			qty: (e.target.value)?Math.abs(e.target.value):''
		});
	}

	componentWillReceiveProps(next) {
		this.setState({
			pots: next.pots
		})
	}

	render() {
		return (
			<div>
				<p className="my-4 lead">
					Je choisis de parrainer <input type="number" onChange={this.updateQty.bind(this)} name="qty" min="1" max="99" value={this.state.qty} style={{ borderWidth: '0px 0px 1px', width: '1.7em', margin: '1em', fontSize: '2em' }} /> ruche{(this.state.qty > 1)?'s':''}
				</p>
				<ul>
					<li>Cela représente plus de {this.state.qty * 50000} abeilles supplémentaires pour prendre soin de la biodiversité</li>
					<li>En échange nous recevons le fruit de nos abeilles: {this.state.pots} pots de miel au design entièrement personnalisable</li>
				</ul>
			</div>
		)
	}
}
