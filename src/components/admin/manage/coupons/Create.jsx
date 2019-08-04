import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Input from '@cda/input';
import Button from '@cda/button';

import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';

export default class Create extends Component {
  state = {
    products: [],
    product: '',
    type: '',
    code: '',
    amount: '',
    pots: '',
    min: 0,
    max: 0,
    designation: '',
    expire: moment(new Date()),
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const { notification } = this.props;
    request({
      url: '/product',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        products: res,
      });
    });
  };

  create(e) {
    e.preventDefault();
    const { notification, refresh } = this.props;
    const {
      product, type, designation, code, expire, amount, pots, min, max,
    } = this.state;
    request({
      url: '/coupon',
      method: 'post',
      data: {
        product,
        type,
        designation,
        code,
        expire,
        amount,
        pots,
        min,
        max,
      },
    }, notification).then(() => {
      refresh();
      this.setState({
        product: '',
        type: '',
        code: '',
        amount: '',
        pots: '',
        min: '0',
        max: '0',
        designation: '',
        expire: moment(new Date()),
      });
    });
  }

  handleExpire(date) {
    this.setState({
      expire: date,
    });
  }

  render() {
    const {
      products, product, min, max, type, designation, code, amount, expire, pots,
    } = this.state;
    return (
      <form onSubmit={this.create.bind(this)}>
        <select name="product" onChange={handleChange.bind(this)} value={product}>
          <option value="">Produit éligible...</option>
          {products.map((product, key) => (
            <option key={key} value={product.id}>{product.designation}</option>
          ))}
        </select>
        <select name="type" onChange={handleChange.bind(this)} value={type}>
          <option value="">Type d'offre</option>
          <option value="0">Systématique</option>
          <option value="1">Option</option>
          <option value="2">Offre temporaire</option>
        </select>
        <Input
          type="text"
          name="designation"
          onChange={handleChange.bind(this)}
          value={designation}
          placeholder="Désignation"
        />
        <Input
          type="text"
          name="code"
          value={code}
          placeholder="Code souhaité"
          onChange={handleChange.bind(this)}
        />
        <Input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange.bind(this)}
          placeholder="Montant de la promo en €"
        />
        <Input
          type="number"
          name="pots"
          min={0}
          step={1}
          value={pots}
          onChange={handleChange.bind(this)}
          placeholder="Pots de miels a retirer"
        />
        <div className="form-group">
          Date d'expiration :&nbsp;
          <DatePicker
            dateFormat="DD/MM/YYYY"
            selected={expire}
            onChange={this.handleExpire.bind(this)}
          />
        </div>
        <div className="form-group">
          Quantités éligibles (0 pour un limite infinie)
          <div className="row">
            <div className="col">
              <Input
                type="number"
                name="min"
                onChange={handleChange.bind(this)}
                value={min}
                placeholder="min"
              />
            </div>
            <div className="col">
              <Input
                type="number"
                name="max"
                onChange={handleChange.bind(this)}
                value={max}
                placeholder="max"
              />
            </div>
          </div>
        </div>
        <Button>Créer le coupon</Button>
      </form>
    );
  }
}
