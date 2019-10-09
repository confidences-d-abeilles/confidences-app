import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';
import moment from 'moment';

import { withRouter } from 'react-router';
import Button from '@cda/button';
import request from '../../services/Net';
import PayForm from '../utils/PayForm';
import { handleChange } from '../../services/FormService';
import Meta from '../utils/Meta';
import Address from '../utils/Address/Address';
import ViewAddress from '../utils/Address/ViewAddress';
import Resume from './Checkout/Resume';
import { withNotification } from '../../services/withNotification';

class CompanyCheckout extends Component {
  bankTransferEnum = Object.freeze({
    NO_TRANSFER: 0,
    BANK_ACCOUNT_ADDED: 1,
    BANK_TRANSFER_DONE: 2,
  });

  constructor(props) {
    super(props);

    this.state = {
      bill_number: '',
      redirect: false,
      hives: 0,
      products: [],
      paytype: '',
      price: 0,
      saved: false,
      dash: false,
      feedback: '',
      present_date: moment(),
      wish: false,
      bundle_id: null,
      delivery_address: {
        type: 2,
      },
      company_name: null,
    };
    this.bankTransfer = this.bankTransferEnum.NO_TRANSFER;
  }


  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification)
      .then((res) => {
        this.setState({
          hives: res.bundles[0].hives,
          pots: res.bundles[0].pots,
          price: res.bundles[0].price,
          products: res.bundles[0].products,
          bundle_id: res.bundles[0].id,
          duplicate: true,
          feedback: res.bundles[0].feedback,
          user: res,
          company_name: res.company_name,
          bundleState: res.bundles[0].state,
        });

        request({
          url: `/bill/bundle/${res.bundles[0].id}`,
          method: 'get',
        }, notification).then((res1) => {
          this.setState({
            bill_number: res1.number,
          });
        });
        res.addresses.forEach((address) => {
          if (address.type === 1) {
            this.setState({ billing_address: address });
          } else if (address.type === 2) {
            this.setState({
              delivery_address: address,
            });
          }
        });
      });
  }

  setBankTransfer = (done) => {
    const { history } = this.props;
    this.bankTransfer = done
      ? this.bankTransferEnum.BANK_TRANSFER_DONE : this.bankTransferEnum.BANK_ACCOUNT_ADDED;
    this.save().then(() => {
      history.push('/company/manage');
    });
  };

  async save() {
    const { notification } = this.props;
    return new Promise((resolve) => {
      request({
        url: `/bundle/${this.state.bundle_id}`,
        method: 'put',
        data: {
          state: (this.bankTransfer === this.bankTransferEnum.BANK_TRANSFER_DONE) ? 1 : 0,
          virementBenefAdd: (this.bankTransfer === this.bankTransferEnum.BANK_ACCOUNT_ADDED),
          later: (this.state.paytype === '2'),
          feedback: this.state.feedback,
          present: this.state.present,
          present_email: this.state.present_email,
          present_message: this.state.present_message,
          present_date: (this.state.present) ? this.state.present_date : new Date(),
          present_name: this.state.present_name,
          present_firstname: this.state.present_firstname,
        },
      }, notification).then((res) => {
        resolve();
      });
    });
  }

  noAction = async () => {
    const { history } = this.props;
    await this.save();
    history.push('/company/manage');
  };

  async saveFeedback() {
    const { notification } = this.props;
    const { feedback, bundle_id: bundleId } = this.state;
    return new Promise((resolve) => {
      request({
        url: `/bundle/${bundleId}`,
        method: 'put',
        data: {
          feedback,
        },
      }, notification).then(() => {
        resolve();
      });
    });
  }

  changeBundle = () => {
    const { notification } = this.props;
    const { bundle_id: bundleId } = this.state;
    request({
      url: `/bundle/${bundleId}`,
      method: 'delete',
    }, notification).then(() => {
      this.setState({ wish: true });
    });
  };


  render() {
    const {
      redirect,
      dash,
      wish,
      bundleState,
      hives,
      pots,
      products,
      price,
      billing_address,
      delivery_address,
    } = this.state;
    return (
      <div className="container py-4">
        <Meta title="Confirmation et versement" />
        {(redirect) ? <Redirect to="/company/end" /> : null}
        {(dash) ? <Redirect to="/company/end" /> : null}
        {(wish) ? <Redirect to="/company/wish" /> : null}
        {(bundleState > 5) ? <Redirect to="/company/manage" /> : null}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-11 col-md-10 col-sm-12">
            <h2 className="text-center my-4">Confirmation et versement</h2>
            <Resume
              changeBundle={this.changeBundle}
              hives={hives}
              pots={pots}
              products={products}
              price={price}
            />
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-10 col-sm-12">
                <h3 className="my-4">Adresse de reçu fiscal</h3>
                <ViewAddress data={billing_address} company />
                <h3 className="my-4">Message</h3>
                <div className="form-group">
                  <textarea rows="5" className="form-control" name="feedback" onChange={handleChange.bind(this)} value={this.state.feedback} placeholder="Informations complémentaires concernant votre don ou commentaires, laissez-nous un petit message, nous y prêterons grande attention :)" />
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-sm-12">
                <h3 className="my-4">Adresse de livraison</h3>
                <Address data={delivery_address} company />
              </div>
            </div>
            <h3 className="my-4">Versement sécurisé</h3>
            <div className="row justify-content-center">
              <form className="col-lg-3 col-md-10 col-sm-12 my-4">
                <div className="form-group">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="paytype" value="0" onChange={handleChange.bind(this)} checked={(this.state.paytype === '0')} />
                      <span>Carte bancaire</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="paytype" value="1" onChange={handleChange.bind(this)} checked={(this.state.paytype === '1')} />
                      <span>Virement bancaire</span>
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="paytype" value="2" onChange={handleChange.bind(this)} checked={(this.state.paytype === '2')} />
                      <span>Payer plus tard</span>
                    </label>
                  </div>
                </div>
              </form>
              <div className="col-lg-9 col-md-10 col-sm-12">
                {this.state.paytype === '0'
                  && (
                  <Elements locale="fr">
                    <PayForm price={this.state.price} before={this.save.bind(this)} bundle={this.state.bundle_id} date={(this.state.present_date) ? this.state.present_date : new Date()} for={this.state.company_name} endpoint="/company/end" />
                  </Elements>
                  )
                }
                {this.state.paytype === '1'
                  && (
                  <div>
                    <p>Voici les coordonnées bancaires de l’association pour procéder au virement</p>
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
                      <strong>Numéro d’ordre du reçu à indiquer dans la référence du virement : </strong>
                      {this.state.bill_number}
                    </p>
                    <p>
                      Si votre banque vous impose un délai concernant l’ajout d’un nouveau compte bénéficiaire, nous vous
											invitons à sélectionner « Bénéficiaire ajouté ». Un mail vous invitant à confirmer votre virement vous sera
											alors adressé 3 jours plus tard.
                      {' '}
                      <br />
                      De notre côté, la validation de votre virement sera faite sous 48h.
                    </p>
                    <Button onClick={this.setBankTransfer.bind(this, false)} primary>Bénéficiaire ajouté</Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={this.setBankTransfer.bind(this, true)} primary>Virement effectué</Button>
                  </div>
                  )
                }
                {this.state.paytype === '2'
                  && (
                  <div>
                    <p>
                      Vous pouvez choisir de verser votre don quand bon
                      vous semble. En cliquant sur « Payer plus tard », vous
                      serez redirigé vers votre tableau de bord. Les
                      fonctionnalités sont bridées et&nbsp;
                      <strong>
                      votre page dédiée ne peut être publiquement consultée.
                      </strong>
                      <br />
                      <br />
                      N’oubliez pas que pour un don effectué entre :
                      <ul>
                        <li>Le 1er février et le 31 juillet, vous recevrez le miel de vos abeilles en automne.</li>
                        <li>Le 1er août et le 31 janvier, vous recevrez le miel de vos abeilles au printemps suivant.</li>
                      </ul>
                      Bonne visite sur notre plateforme !
                    </p>
                    <Button onClick={this.noAction.bind(this)} primary>Payer plus tard</Button>
                  </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(withNotification(CompanyCheckout));
