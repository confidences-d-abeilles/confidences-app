import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Elements } from 'react-stripe-elements';

import { withRouter } from 'react-router';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import request from '../services/Net';
import PayForm from './utils/PayForm';
import Meta from './utils/Meta';
import { withNotification } from '../services/withNotification';
import { Button } from '@cda/button';

class IndividualPayement extends Component {
  state = {
    redirect: false,
    bill_number: '',
  };

  nbBees = null;

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification)
      .then((res) => {
        this.setState({
          price: res.bundles[0].price,
          bundle_id: res.bundles[0].id,
          name: res.name,
          firstname: res.firstname,
        });
        this.nbBees = res.bundles[0].bees;
      });
  }

  updateBundleState = (state) => () => {
    console.log(this.props);
    const { notification, history } = this.props;
    return new Promise(() => {
      request({
        url: `/bundle/${this.state.bundle_id}`,
        method: 'put',
        data: {
          state,
        },
      }, notification).then(() => {
        history.push('/individual/manage');
      });
    });
  };

  render() {
    const { t, redirect } = this.props;
    const { bill_number, price, bundle_id, present, start_date, firstname, name } = this.state;
    return (
      <div className="container py-4">
        <Meta title="Paiement" />
        {(this.state.redirect) ? <Redirect to="/individual/end" /> : null}
        <div className="row">
          <div className="col-lg-12">
            <h2 className="text-center">Régler mon parrainage</h2>
          </div>
          <div className="col-lg-6">
            <h3 className="text-center my-4"><small>Paiement sécurisé par carte bancaire</small></h3>
            <Elements locale="fr">
              <PayForm price={price} nbBees={this.nbBees} bundle={bundle_id} date={present ? start_date : new Date()} for={`${firstname} ${name}`} endpoint={redirect} />
            </Elements>
          </div>
          <div className="col-lg-6" style={{ borderStyle: 'solid', borderColor: '#E49C00', borderWidth: '0 0 0 4px' }}>
            <h3 className="text-center my-4"><small>{t('payByTransfer')}</small></h3>
            <p>{t('ourTransferInfo')}</p>
            <p>
              <strong>{t('domiciliation')}</strong>
              {t('bankName')}
              <br />
              <strong>{t('IBAN')}</strong>
              {t('IBANValue')}
              <br />
              <strong>{t('BIC')}</strong>
              {t('BICValue')}
              <br />
              <br />
              <strong>{`${t('billNumber')} ${bill_number}`}</strong>
            </p>
            <p>
              {t('delay')}
              <br />
              {t('validationOnOurSide')}
            </p>
            <p className="text-center">
              <Button onClick={this.updateBundleState(0)}>{t('added')}</Button>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button onClick={this.updateBundleState(1)}>{t('done')}</Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

IndividualPayement.propTypes = {
  t: PropTypes.func.isRequired,
  redirect: PropTypes.string.isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(withNotification(withTranslation('payment')(IndividualPayement)));
