import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';

import MainProduct from './MainProduct';
import Product from './Product';
import { Button } from '../../components/utils/Button';

export default class Wish extends Component {
  static sortProducts = (a, b) => (a.createdAt > b.createdAt);

  mainProduct = this.props.mainProduct || 10;

  state = {
    products: [],
    coupons: [],
    couponsOk: [],
    options: [],
    optionsOk: [],
    codes: [],
    codesOk: [],
    optionSelect: '',
    price: '0',
    pots: '40',
    code: '',
    codeResult: '',
    redirect: false,
  };

  componentDidMount() {
    this.getProducts();
    this.getCoupons();
  }

  handleSubmit = () => {
    const { notification } = this.props;
    const endpoint = this.mainProduct === 20 ? 'individual' : 'company';
    const {
      products, couponsOk, optionsOk, codesOk,
    } = this.state;
    request({
      url: `/bundle/${endpoint}`,
      method: 'post',
      data: {
        products,
        coupons: couponsOk,
        options: optionsOk,
        codes: codesOk,
      },
    }, notification)
      .then(() => {
        this.setState({ redirect: true });
      })
      .catch(() => {
      });
  };

  updateProducts = (product) => {
    const tmp = this.state.products.filter(e => (e.id !== product.id));
    tmp.push(product);
    tmp.sort(this.sortProducts);
    this.setState({
      products: tmp,
    }, () => {
      this.calcCoupons();
    });
  }

  calcPrice() {
    const { basePots = 40 } = this.props;
    this.setState({ price: '0' }, () => {
      this.state.products.map((e) => {
        const qty = (e.qty) ? parseFloat(e.qty) : 0;
        this.setState((prev) => {
          if (e.type === this.mainProduct) {
            return { price: parseFloat(prev.price) + parseFloat(e.price) * qty, pots: basePots * qty };
          }
          return { price: parseFloat(prev.price) + parseFloat(e.price) * qty };
        });
        return null;
      });
      this.state.couponsOk.map((e) => {
        this.setState(prev => ({ price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty) }));
        return null;
      });
      this.state.optionsOk.map((e) => {
        this.setState(prev => ({ price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty), pots: parseFloat(prev.pots) - parseFloat(e.pots) * parseFloat(e.qty) }));
        return null;
      });
      this.state.codesOk.map((e) => {
        this.setState(prev => ({ price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty) }));
        return null;
      });
    });
  }

  calcCoupons() {
    const tmp = [];
    const tmp2 = [];
    const tmp3 = [];
    this.state.coupons.map((coupon) => {
      this.state.products.forEach((product) => {
        if (coupon.type === 0 && coupon.product.id === product.id
          && product.qty >= coupon.min && (product.qty <= coupon.max || coupon.max === 0)) {
          coupon.qty = product.qty;
          tmp.push(coupon);
        }
        if (coupon.type === 1 && coupon.product.id === product.id) {
          coupon.qty = product.qty;
          tmp2.push(coupon);
        }
        if (coupon.type === 2 && coupon.product.id === product.id
          && product.qty >= coupon.min && (product.qty <= coupon.max || coupon.max === 0)) {
          coupon.qty = product.qty;
          tmp3.push(coupon);
        }
      });
      return null;
    });
    this.setState({
      couponsOk: tmp,
      codes: tmp3,
      codesOk: this.state.codesOk,
      options: tmp2,
    }, () => {
      this.calcPrice();
    });
  }

  handleCode(e) {
    e.preventDefault();
    const tmp = [];
    let notValid = true;
    this.state.codes.map((coupon) => {
      this.state.products.forEach((product) => {
        if (coupon.type === 2 && coupon.code === this.state.code && coupon.product.id === product.id) {
          this.setState({
            code: '',
            codeResult: 'Le code a bien été appliqué',
          });
          notValid = false;
          coupon.qty = product.qty;
          tmp.push(coupon);
        }
      });
      return null;
    });
    if (notValid) {
      this.setState({
        codeResult: "Ce code n'est pas applicable",
        code: '',
      });
    }
    this.setState({
      codesOk: tmp,
    }, () => {
      this.calcCoupons();
    });
  }

  selectOption(e) {
    this.setState({
      optionSelect: e.target.value,
    });
    const tmp = [];
    this.state.coupons.map((coupon) => {
      if (coupon.id === e.target.value) {
        const tmp2 = coupon;
        this.state.products.map((e) => {
          if (e.id === coupon.product.id) {
            tmp2.qty = e.qty;
          }
          return null;
        });
        tmp.push(tmp2);
      }
      return null;
    });
    this.setState({
      optionsOk: tmp,
    }, () => {
      this.calcPrice();
    });
  }

  getProducts() {
    const { notification } = this.props;
    request({
      url: '/product',
      method: 'get',
    }, notification).then((res) => {
      res = res.filter(e => (e.type === this.mainProduct || e.type === this.mainProduct + 1));
      res = res.map((e) => {
        const tmp = e;
        if (e.type === this.mainProduct) {
          tmp.qty = '1';
        }
        if (e.type === this.mainProduct + 1) {
          tmp.qty = '0';
        }
        return tmp;
      });
      this.setState({
        products: res,
      }, this.calcPrice.bind(this));
    });
  }

  getCoupons() {
    const { notification } = this.props;
    request({
      url: '/coupon',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        coupons: res,
      }, () => {
        this.calcCoupons();
      });
    });
  }


  render() {
    return (
      <div className="container py-4">
        {this.state.redirect && this.mainProduct === 10 && <Redirect to="/company/checkout" />}
        {this.state.redirect && this.mainProduct === 20 && <Redirect to="/individual/checkout" />}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress"><div className="progress-bar" role="progressbar" style={{ width: '80%' }} /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {this.state.products.map((e) => {
              if (e.type === this.mainProduct) {
                return (
                  <MainProduct product={e} key={e.id} update={this.updateProducts.bind(this)} pots={this.state.pots} individual={this.mainProduct === 20} />
                );
              }
              return null;
            })}
            <h3 className="my-2"><small>Produits supplémentaires</small></h3>
            <p>Merci de sélectionner le nombre de produits à ajouter à votre offre.</p>
            {this.state.products.map((e) => {
              if (e.type === this.mainProduct + 1) {
                return (
                  <Product product={e} key={e.id} update={this.updateProducts} />
                );
              }
              return null;
            })}
          </div>
          <div className="col-lg-6 pt-5">
            <h3><small>Options</small></h3>
            <form>
              <div className="form-group">
                {this.state.options.map(e => (
                  <div key={e.id}>
                    <input type="radio" id={e.id} name="optionSelect" onChange={this.selectOption.bind(this)} value={e.id} checked={this.state.optionSelect === e.id} />
                    &nbsp;
                    <label htmlFor={e.id}>
                      {`${e.designation} ( ${-e.amount} € / unité )`}
                    </label>
                  </div>
                ))}
              </div>
            </form>
            <h3><small>Code promo</small></h3>
            {this.state.codeResult}
            <form className="form-inline my-2" onSubmit={this.handleCode.bind(this)}>
              <input type="text" className="form-control" name="code" onChange={handleChange.bind(this)} value={this.state.code} placeholder="Entrez un code promo..." />
              <Button>Vérifier le code</Button>
            </form>
            <h3><small>Réductions</small></h3>
            {this.state.couponsOk.length < 1
                && <p>Aucune réduction immédiate n'est applicable</p>}
            {this.state.couponsOk.map(e => (
              <span key={e.id}>
                {`${e.designation} ( ${-e.amount} € / unité )`}
              </span>
            ))}
            {this.state.codesOk.length < 1
                && <p>Aucun code promotionnel n'a été appliqué</p>}
            {this.state.codesOk.map(e => (
              <span key={e.id}>
                {`${e.designation} ( ${-e.amount} € / unité )`}
              </span>
            ))}
            <p className="lead text-center">
              {`Total : ${this.state.price} €`}
              <br />
              <Button onClick={this.handleSubmit}>Valider et passer au paiement</Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Wish.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};
