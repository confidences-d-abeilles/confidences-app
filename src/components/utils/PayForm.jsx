import React, { Component } from 'react';
import {
  CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe,
} from 'react-stripe-elements';

import Button from '@cda/button';
import request from '../../services/Net';
import Loading from './Loading';
import { withNotification } from '../../services/withNotification';

class PayForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
      loading: false,
      monthlyPayment: false,
      priceFormat: ' €',
    };

    this.monthlyPrice = {
      10000: 10,
      20000: 17,
      30000: 23,
      40000: 27,
      50000: 32,
    };
  }

  componentDidMount() {
    this.setState({
      priceFormat: `${this.props.price} €`,
    });
  }

  monthlyPaymentChanged = (ev) => {
    let monthlyPayment = false;
    let priceFormat = `${this.props.price} €`;

    if (ev.target.checked) {
      monthlyPayment = true;
      priceFormat = `${this.monthlyPrice[this.props.nbBees]} € / mois`;
    }

    this.setState({
      monthlyPayment,
      priceFormat,
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const { notification } = this.props;
    if (this.props.before) {
      await this.props.before();
    }
    this.setState({
      loading: true,
    });
    let { price } = this.props;
    if (this.state.monthlyPayment) {
      price = this.monthlyPrice[this.props.nbBees];
    }
    price *= 100;
    this.props.stripe.createSource({
      type: 'card',
      owner: {
        name: this.props.for,
      },
      amount: price,
      currency: 'eur',
      metadata: {
        bundle: this.props.bundle,
        monthlyPayment: this.state.monthlyPayment,
      },
    }).then(({ source }) => {
      request({
        url: '/payment/prepare',
        method: 'post',
        data: {
          source,
          dateStart: this.props.date,
          dateEnd: new Date(new Date(this.props.date).setFullYear(new Date().getFullYear() + 1)),
          redirect: process.env.REACT_APP_APP_DOMAIN + this.props.endpoint,
        },
      }, notification).then((res) => {
        if (res) {
          window.location.replace(res.redirect.url);
        }
      }).catch((err) => {
        this.setState({
          loading: false,
        });
      });
    }).catch((err) => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={this.handleSubmit.bind(this)} className="text-center" style={{ padding: '10px', margin: '10px' }}>
            <label>Numéro de carte bancaire</label>
            <CardNumberElement style={{ base: { fontSize: '18px' } }} />
            <label>Date d'expiration</label>
            <CardExpiryElement style={{ base: { fontSize: '18px' } }} />
            <label>Code de sécurité</label>
            <CardCVCElement style={{ base: { fontSize: '18px' } }} />
            {this.state.fail && <p className="alert alert-danger">Echec du paiement  </p>}
            {(this.state.loading)
              ? (
                <div className="text-center">
                  <Loading />
                Versement en cours
                </div>
              )
              : (
                <Button className="btn btn-primary mt-3">
Verser&nbsp;
                  {this.props.price}
                  {' '}
€
                </Button>
              )
              }
          </form>
        </div>
        <div className="col-lg-6">
          <p
            className="mt-4"
            style={{
              border: 'solid 1px #E49600', backgroundColor: 'rgba(228, 150, 0, 0.6)', padding: '10px', margin: '10px',
            }}
          >
            Les versements sont réalisés via le système&nbsp;
            <strong>sécurisé</strong>
            &nbsp;
            Stripe qui utilise le&nbsp;
            <strong>
              protocole SSL
            </strong>
            . Les informations transmises sont&nbsp;
            <strong>cryptées</strong>
            &nbsp;
            et le paiement est compatible 3D Secure, MasterCard SecureCode, Verified by VISA.
            Dans un soucis de sécurité,&nbsp;
            l'association Confidences d&apos;Abeilles ne conserve pas vos informations bancaires.
          </p>
        </div>
      </div>
    );
  }
}

export default injectStripe(withNotification(PayForm));
