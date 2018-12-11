import React, { Component } from 'react';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements';
import PropTypes from 'prop-types';
import NotificationSystem from 'react-notification-system';
import request from '../../services/Net';
import Loading from './Loading';

const config = require('../../config.js');

class PayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      monthlyPayment: false,
    };

    this.monthlyPrice = {
      10000: 10,
      20000: 17,
      30000: 23,
      40000: 27,
      50000: 32,
    };
  }

  monthlyPaymentChanged = (ev) => {
    let monthlyPayment = false;

    if (ev.target.checked) {
      monthlyPayment = true;
    }

    this.setState({
      monthlyPayment,
    });
  }

  async handleSubmit(ev) {
    const {
      before,
      forUser,
      price:
      prevPrice,
      nbBees,
      stripe,
      bundle,
      date,
      endpoint,
    } = this.props;
    const { monthlyPayment } = this.state;
    ev.preventDefault();
    if (before) {
      await before();
    }
    this.setState({
      loading: true,
    });
    let price = prevPrice;
    if (monthlyPayment) {
      price = this.monthlyPrice[nbBees];
    }
    price *= 100;
    stripe.createSource({
      type: 'card',
      owner: {
        name: forUser,
      },
      amount: price,
      currency: 'eur',
      metadata: {
        bundle,
        monthlyPayment,
      },
    }).then(({ source }) => {
      request({
        url: '/payment/prepare',
        method: 'post',
        data: {
          source,
          dateStart: date,
          dateEnd: new Date(new Date(date).setFullYear(new Date().getFullYear() + 1)),
          redirect: config.appUrl + endpoint,
        },
      }, this.refs.notif).then((res) => {
        if (res) {
          window.location.replace(res.redirect.url);
        }
      }).catch(() => {
        this.setState({
          loading: false,
        });
      });
    }).catch(() => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { fail, loading } = this.state;
    const { price } = this.props;
    return (
      <div className="row">
        <NotificationSystem ref="notif" />
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit.bind(this)} className="text-center" style={{ padding: '10px', margin: '10px' }}>
            <span>Numéro de carte bancaire</span>
            <CardNumberElement style={{ base: { fontSize: '18px' } }} />
            <span>Date d'expiration</span>
            <CardExpiryElement style={{ base: { fontSize: '18px' } }} />
            <span>Code de sécurité</span>
            <CardCVCElement style={{ base: { fontSize: '18px' } }} />
            {fail && <p className="alert alert-danger">Echec du paiement  </p>}
            {loading
              ? (
                <div className="text-center">
                  <Loading />
                  Paiement en cours
                </div>
              )
              : (
                <button type="submit" className="btn btn-primary mt-3">
                  Payer
                  {`${price} €`}
                </button>
              )}
          </form>
        </div>
        <div className="col-lg-6">
          <p
            className="mt-4"
            style={{
              border: 'solid 1px #E49600', backgroundColor: 'rgba(228, 150, 0, 0.6)', padding: '10px', margin: '10px',
            }}
          >
Les paiements sont réalisés via le système
            <strong>sécurisé</strong>
            {' '}
            Stripe qui utilise le
            <strong>
protocole
            SSL
            </strong>
. Les informations transmises sont
            <strong>cryptées</strong>
            {' '}
et le paiement est compatible 3D
            Secure, MasterCard SecureCode, Verified by VISA.
            Dans un soucis de sécurité, Confidences d'Abeilles ne conserve pas vos
            informations bancaires.
          </p>
        </div>
      </div>
    );
  }
}

PayForm.propTypes = {
  price: PropTypes.number.isRequired,
};

export default injectStripe(PayForm);
