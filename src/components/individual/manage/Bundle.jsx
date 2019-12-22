/* eslint-disable camelcase */

import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';
import Input from '@cda/input';

import ButtonLink from '@cda/button-link';
import request from '../../../services/Net';
import Loading from '../../utils/Loading';
import { handleChange } from '../../../services/FormService';
import Meta from '../../utils/Meta';
import Details from './bundle/Details';
import Hive from './bundle/Hive';
import { withNotification } from '../../../services/withNotification';
import PropTypes from 'prop-types';

class Bundle extends Component {
  state = {
    user: null,
    edit_present: false,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'GET',
    }, notification).then((res) => {
      this.setState({
        user: res,
      });
      if (res.bundles[0] && res.bundles[0].present) {
        this.setState({
          present_firstname: res.bundles[0].firstname,
          present_name: res.bundles[0].name,
          present_email: res.bundles[0].email,
        });
      }
    });
  }

  checkInfos() {
    const { user } = this.state;
    if (user.addresses && !user.addresses[0]) {
      return (<Redirect to="/individual/address" />);
    }
    if (user && user.bundles[0] && user.bundles[0].state === 0) {
      return (
        <div className="text-center">
          <p className="alert alert-danger mt-4">
            Vous n'avez pas encore réglé votre parrainage.&nbsp;
            <Link to="/individual/payment">Cliquez ici</Link>
            {' '}
pour le faire ou
            <Link to="/individual/checkout">sur ce lien</Link>
&nbsp;
            si vous souhaitez modifier l'offre choisie.&nbsp;
            Si vous avez ajouté Confidences d'Abeilles en tant que bénéficiaire, effectuez votre virement&nbsp;
            et confirmez le
            <Link to="/individual/payment">ici</Link>
.
          </p>
        </div>
      );
    }

    if (user && user.bundles[0] && user.bundles[0].state === 1) {
      return (
        <div className="text-center">
          <p className="alert alert-warning mt-4">La validation du règlement de votre parrainage est en cours</p>
        </div>
      );
    }

    if (user && !user.bundles[0]) {
      return (<Redirect to="/individual/wish" />);
    }

    if (user && user.bundles[0]) {
      return (
        <p className="text-center my-5">
          {user.hive_id
            && <ButtonLink to={`/hive/${user.hive_id}`}>Voir la page de ma ruche</ButtonLink>}
          {/*<ButtonLink external url="https://confidences-dabeilles-visites.appointedd.com/" primary>Réserver une visite du rucher</ButtonLink>*/}
          {user.bundles[0].certif
          && <ButtonLink to={`${process.env.REACT_APP_CONTENT_DOMAIN}/${user.bundles[0].certif}`} external>Télécharger mon certificat de parrainage</ButtonLink>}
        </p>
      );
    }
    return null;
  }

  savePresent(e) {
    e.preventDefault();
    const {
      user, present_firstname, present_name, present_email,
    } = this.state;
    const { notification } = this.props;
    request({
      url: `/bundle/${user.bundles[0].id}`,
      method: 'put',
      data: {
        present_firstname,
        present_name,
        present_email,
      },
    }, notification).then(() => {
      this.setState({ edit_present: false });
    });
  }


  render() {
    let dispDateInfoCadeau;
    const {
      user, edit_present, present_firstname, present_name, present_email,
    } = this.state;
    if (user && user.bundles[0]) {
      if (user.bundles[0].state < 2 && user.bundles[0].present
        && moment(user.bundles[0].start_date).isBefore(moment())) {
        dispDateInfoCadeau = moment().format('DD/MM/YYYY');
      } else {
        dispDateInfoCadeau = moment(user.bundles[0].start_date).format('DD/MM/YYYY');
      }
    }

    return (
      <div>
        <Meta title="Mon parrainage" />
        <div className="row">
          <div className="col-lg-12">
            <h2 className="my-2 text-center">Mon parrainage</h2>
            {(user) ? this.checkInfos() : ''}
          </div>
        </div>
        {(user && user.bundles[0])
          ? (
            <div className="row">
              <Details data={user.bundles[0]} />
              {user.bundles[0].contain && <Hive hive={user.bundles[0].contain[0]} />}
            </div>
          )
          : <Loading />}
        <div className="row mt-4">
          <div className="col-lg-12">
            {user && user.bundles[0] && user.bundles[0].present && !edit_present
              && (
              <div>
                <h3 className="text-center"><small>J'ai choisi d'offrir mon parrainage à</small></h3>
                <hr />
                <strong>
                  {present_firstname}
                  {' '}
                  {present_name}
                </strong>
                <br />
                dont l'adresse mail est
                {' '}
                <strong>{present_email}</strong>
                <br />
                Les premières informations sur ce cadeau seront envoyées le
                {' '}
                <strong>{dispDateInfoCadeau}</strong>
                <br />
                {(this.state.user.bundles[0].state < 2) ? (
                  <div>
                  Tant que votre parrainage n'est pas réglé, le bénéficiaire du cadeau ne sera pas informé !
                    <br />
                  </div>
                ) : null}
                <br />
                <button className="btn btn-secondary btn-sm pull-right" onClick={() => { this.setState({ edit_present: true }); }}>
                  <FontAwesome name="pencil" />
                  {' '}
Modifier ces informations
                </button>
              </div>
              )}
            {user && user.bundles[0] && user.bundles[0].present && edit_present
            && (
            <form onSubmit={this.savePresent.bind(this)}>
              <h3 className="text-center"><small>J'ai choisi d'offrir mon parrainage à</small></h3>
              <div className="form-group">
                <label>Nom</label>
                <Input type="text" name="present_name" value={present_name} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Nom" />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <Input type="text" name="present_firstname" value={present_firstname} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Prénom" />
              </div>
              <div className="form-group">
                <label>Adresse email</label>
                <Input type="email" name="present_email" value={present_email} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Email" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary">Enregistrer</button>
              </div>
            </form>
            )}
          </div>
        </div>
      </div>
    );
  }
};

Bundle.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
}

export default withNotification(Bundle);
