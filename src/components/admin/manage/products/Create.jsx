import React, { Component } from 'react';
import Button from '@cda/button';
import Input from '@cda/input';

import { handleChange } from '../../../../services/FormService';
import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';

class Create extends Component {
  state = {
    designation: '',
    type: '',
    price: '',
    duty: '',
    ttc: '',
  };

  create = (e) => {
    const { notification, refresh } = this.props;
    const {
      designation, type, price, duty,
    } = this.state;
    e.preventDefault();
    request({
      url: '/product',
      method: 'post',
      data: {
        designation,
        type,
        price,
        duty,
      },
    }, notification).then(() => {
      this.setState({
        designation: '',
        type: '',
        price: '',
        duty: '',
      });
      refresh();
    });
  };

  render() {
    const {
      designation, type, price, ttc, duty,
    } = this.state;
    return (
      <form onSubmit={this.create}>
        <Input
          type="text"
          name="designation"
          placeholder="Designation du produit"
          value={designation}
          onChange={handleChange.bind(this)}
        />
        <select
          name="type"
          onChange={handleChange.bind(this)}
          value={type}
        >
          <option value="">Choisissez un type de produit</option>
          <option value="10">Parrainage entreprise</option>
          <option value="11">Produit supplémentaire entreprise</option>
          <option value="20">Parrainage particulier</option>
          <option value="21">Produit supplementaire particulier</option>
        </select>
        <Input
          type="number"
          name="price"
          min="0"
          step="0.01"
          placeholder="Prix HT du produit"
          value={price}
          onChange={
                    (e) => {
                      this.setState({
                        price: e.target.value,
                        ttc: (parseFloat(e.target.value, 10) + (parseFloat(this.state.duty, 10) / 100) * parseFloat(e.target.value, 10)).toFixed(2),
                      });
                    }}
        />
        <Input
          type="number"
          step="0.01"
          name="duty"
          min="0"
          placeholder="TVA"
          value={duty}
          onChange={
                    (e) => {
                      this.setState({
                        duty: e.target.value,
                      });
                      if (price) {
                        this.setState({
                          ttc: (price) ? (parseFloat(price, 10) + (parseFloat(e.target.value, 10) / 100) * parseFloat(price, 10)).toFixed(2) : '',
                        });
                      } else {
                        this.setState({
                          price: (ttc) ? (parseFloat(ttc, 10) / (parseFloat(e.target.value, 10) + 100) * 100).toFixed(2) : '',
                        });
                      }
                    }}
        />
        <Input
          type="number"
          name="ttc"
          min="0"
          step="0.01"
          placeholder="Prix TTC du produit"
          value={ttc}
          onChange={
                    (e) => {
                      this.setState({
                        ttc: e.target.value,
                        price: (e.target.value / (parseFloat(duty) + 100) * 100).toFixed(2),
                      });
                    }}
        />
        <Button>Créer le produit</Button>
      </form>
    );
  }
}

export default withNotification(Create);
