import React, { Component } from 'react';

export default class MainProduct extends Component {
  constructor(props) {
    super(props);
    const { individual } = props;
    this.state = {
      qty: '1',
    };
  }

	product = this.props.product;

	updateQty(e) {
	  this.product.qty = (e.target.value) ? Math.abs(e.target.value) : '';
	  this.props.update(this.product);
	  this.setState({
	    qty: (e.target.value) ? Math.abs(e.target.value) : '',
	  });
	}

  getLabel = () => {
    const { individual } = this.props;
    const { qty } = this.state;
    if (individual) {
      return 'x 10 000 abeilles';
    }
    return `ruche${(qty > 1) ? 's' : ''}`;
  };

  render() {
    const { qty } = this.state;
    const { individual, pots } = this.props;
    return (
      <div>
        <p className="my-4 lead">
          {individual ? `Je parrainer` : `Nous soutenons`}
          {' '}
          <input
            type="number"
            onChange={this.updateQty.bind(this)}
            name="qty"
            min="1"
            max="99"
            value={qty}
            style={{
              borderWidth: '0px 0px 1px', width: '1.7em', margin: '1em', fontSize: '2em',
            }}
          />
          {` ${this.getLabel()}`}
        </p>
        <ul>
          <li>
            {`Cela représente plus de ${qty * (individual ? 10000 : 50000)} abeilles supplémentaires pour prendre soin de la biodiversité`}
          </li>
          <li>
            {`En échange nous recevons le fruit de nos abeilles : ${pots} pots de miel au design entièrement personnalisable`}
          </li>
        </ul>
      </div>
    );
  }
}
