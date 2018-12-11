import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import { Elements } from 'react-stripe-elements';
import ReactGA from 'react-ga';
import PayForm from '../utils/PayForm';
import request from '../../services/Net';
import Meta from '../utils/Meta';

export default class CompanyPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bees: null,
      redirect: false,
      company_name: null,
    };
    ReactGA.pageview(this.props.location.pathname);
  }

  componentDidMount() {
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif)
      .then((res) => {
        this.setState({
          price: res.bundles[0].price,
          bundle_id: res.bundles[0].id,
        });
      });
  }

  updateBundleState = state => new Promise((resolve) => {
    request({
      url: `/bundle/${this.state.bundle_id}`,
      method: 'put',
      data: {
        state,
      },
    }, this.refs.notif).then((res) => {
      this.setState({ redirect: true });
    });
  })

  async save() {
    console.log('save bundle request');
    return new Promise((resolve) => {
      request({
        url: `/bundle/${this.state.bundle_id}`,
        method: 'put',
        data: {
          state: this.transferBank ? 1 : this.state.bundleState,
          bankTransferDone: (this.transferBankDone ? 'true' : 'false'),
          present_date: (this.state.present) ? this.state.start_date : new Date(),
        },
      }, this.refs.notif).then((res) => {
        resolve();
      });
    });
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Paiement" />
        <NotificationSystem ref="notif" />
        {(this.state.redirect) ? <Redirect to="/company/end" /> : null}
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Régler mon parrainage</h2>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center my-4"><small>Paiement sécurisé par carte bancaire</small></h3>
            <Elements locale="fr">
              <PayForm price={this.state.price} before={this.save.bind(this)} bundle={this.state.bundle_id} date={(this.state.present) ? this.state.start_date : new Date()} for={this.state.company_name} endpoint="/company/end" />
            </Elements>
          </div>
          <div className="col-lg-6" style={{ borderStyle: 'solid', borderColor: '#E49C00', borderWidth: '0 0 0 4px' }}>
            <h3 className="text-center my-4"><small>Paiement par virement bancaire</small></h3>
            <p>Veuillez trouver nos coordonnées bancaires pour procéder au virement</p>
            <p>
              <strong>Domiciliation : </strong>
QONTO - 92641 BOULOGNE-BILLANCOURT
              <br />
              <strong>IBAN : </strong>
FR76 1679 8000 0100 0004 1298 259
              <br />
              <strong>BIC : </strong>
TRZOFR21XXX
              <br />
              <br />
              <strong>Numéro de facture à indiquer dans la référence du virement : </strong>
              {this.state.bill_number}
            </p>
            <p>
              Si votre banque vous impose  un  délai  concernant  l’ajout  d’un  nouveau  compte  bénéficiaire,  nous  vous
              invitons  à  sélectionner  «  Bénéficiaire ajouté  ».  Un  mail  vous  conviant  à  confirmer  votre  virement  vous  sera
              alors  adressé  3  jours  plus  tard.
              {' '}
              <br />
              De  notre  côté,  la  validation  de  votre  virement  sera  faite  sous  48h.

            </p>
            <p className="text-center">
              <button onClick={this.updateBundleState.bind(this, 0)} className="btn btn-primary">Bénéficiaire ajouté</button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={this.updateBundleState.bind(this, 1)} className="btn btn-primary">Virement effectué</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
