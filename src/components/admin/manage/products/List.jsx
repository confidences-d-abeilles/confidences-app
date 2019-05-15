import React, { Component } from 'react';

import request from '../../../../services/Net';
import Loading from '../../../utils/Loading';
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class List extends Component {
  state = {
    products: [],
    loading: true,
  };

  componentDidMount() {
    this.refresh();
  }

  componentWillReceiveProps() {
    this.refresh();
  }

  refresh = () => {
    const { notification } = this.props;
    this.setState({
      loading: true,
    });
    request({
      url: '/product',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        products: res,
        loading: false,
      });
    }).catch(() => {
      this.setState({
        loading: false,
      });
    });
  };

  delete = (id) => {
    const { notification } = this.props;
    request({
      url: `/product/${id}`,
      method: 'delete',
    }, notification).then(() => {
      const { products } = this.state;
      const newProducts = products.filter(product => product.id !== id);
      this.setState({
        products: newProducts,
      });
    }).catch(() => {
      this.refresh();
    });
  };

  decode = (type) => {
    switch (type) {
      case 10:
        return ('Parrainage entreprise');
      case 11:
        return ('Produit suplémentaire entreprise');
      case 20:
        return ('Parrainage particulier');
      case 21:
        return ('Produit suplémentaire particulier');
      default:
        return null;
    }
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div>
        <table className="table table-sm">
          <tbody>
            <tr>
              <th>Designation</th>
              <th>Type</th>
              <th>Prix HT</th>
              <th>TVA</th>
              <th>Prix TTC</th>
            </tr>
            {products.map(product => (
              <tr>
                <td>{product.designation}</td>
                <td>{this.decode(product.type)}</td>
                <td>{`${product.price} €`}</td>
                <td>{`${product.duty} %`}</td>
                <td>{`${(product.price + (product.price / 100 * product.duty)).toFixed(2)} €`}</td>
                <td><button className="btn btn-primary btn-sm" type="button" onClick={() => this.delete(product.id)}>Supprimer</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <Loading />}
      </div>
    );
  }
});
