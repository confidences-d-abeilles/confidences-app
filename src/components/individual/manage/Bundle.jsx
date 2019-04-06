import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

import request from '../../../services/Net';
import Loading from '../../utils/Loading';
import { handleChange } from '../../../services/FormService';
import Meta from '../../utils/Meta';
import Details from './bundle/Details';
import Hive from './bundle/Hive';
import { ButtonLink } from '../../utils/Button';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class Bundle extends Component {
  state = {
    user: null,
    edit_present: false,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'GET'
    }, notification).then((res) => {
      this.setState({
          user: res
      });
      if (res.bundles[0] && res.bundles[0].present) {
        this.setState({
          present_firstname: res.bundles[0].firstname,
          present_name: res.bundles[0].name,
          present_email: res.bundles[0].email
        })
      }
    });
  }

  checkInfos() {
    if (this.state.user.addresses && !this.state.user.addresses[0]) {
      return (<Redirect to="/individual/address" />);
    }
    if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 0 ) {
      return (
        <div className="text-center">
          <p className="alert alert-danger mt-4">
            Vous n'avez pas encore réglé votre parrainage.&nbsp;
            <Link to="/individual/payment">Cliquez ici</Link> pour le faire ou <Link to="/individual/checkout">sur ce lien</Link>&nbsp;
            si vous souhaitez modifier l'offre choisie.&nbsp;
            Si vous avez ajouté Confidences d'Abeilles en tant que bénéficiaire, effectuez votre virement&nbsp;
            et confirmez le <Link to="/individual/payment">ici</Link>.
          </p>
          <a href="/" className="btn btn-secondary m-2 disabled" rel="noopener noreferrer" target="_blank" role="button" aria-disabled="true">Télécharger mon certificat de parrainage</a>
        </div>
      );
    }

    if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 1 ) {
      return (
        <div className="text-center">
          <p className="alert alert-warning mt-4">La validation du règlement de votre parrainage est en cours</p>
        </div>
      );
    }

    if (this.state.user && !this.state.user.bundles[0]) {
      return (<Redirect to="/individual/wish" />);
    }

    if (this.state.user && this.state.user.bundles[0]) {
      return (
        <p className="text-center my-5">
          {this.state.user.hive_id &&
            <ButtonLink secondary to={'/hive/'+this.state.user.hive_id} label="Voir la page de ma ruche" />}
          {this.state.user.bundles[0].certif &&
          <a href={process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.user.bundles[0].certif} rel="noopener noreferrer" className="btn btn-secondary m-2 btn-sm" target="_blank">Télécharger mon certificat de parrainage</a>}
        </p>
      )
    }
  }

  savePresent(e) {
    e.preventDefault();
    const { notification } = this.props;
    request({
      url: '/bundle/'+this.state.user.bundles[0].id,
      method: 'put',
      data: {
        present_firstname: this.state.present_firstname,
        present_name: this.state.present_name,
        present_email: this.state.present_email
      }
    }, notification).then((res) => {
      this.setState({ edit_present: false });
    })
  }


  render() {

    let dispDateInfoCadeau;
    if (this.state.user && this.state.user.bundles[0]){
      if (this.state.user.bundles[0].state < 2 && this.state.user.bundles[0].present &&
        moment(this.state.user.bundles[0].start_date).isBefore(moment())) {
        dispDateInfoCadeau = moment().format("DD/MM/YYYY");
      }
      else {
        dispDateInfoCadeau = moment(this.state.user.bundles[0].start_date).format("DD/MM/YYYY");
      }
    }

    return (
      <div>
        <Meta title="Mon parrainage" />
        <div className="row">
          <div className="col-lg-12">
            <h2 className="my-2 text-center">Mon parrainage</h2>
            {(this.state.user)?this.checkInfos():''}
          </div>
        </div>
        {(this.state.user && this.state.user.bundles[0])?
        <div className="row">
            <Details data={this.state.user.bundles[0]} />
            {this.state.user.bundles[0].contain && <Hive hive={this.state.user.bundles[0].contain[0]} />}
        </div>
        :<Loading />}
        <div className="row mt-4">
          <div className="col-lg-12">
            {this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].present && !this.state.edit_present &&
              <div>
                <h3 className="text-center"><small>J'ai choisi d'offrir mon parrainage à</small></h3>
                <hr />
                <strong>{this.state.present_firstname} {this.state.present_name}</strong><br />
                dont l'adresse mail est <strong>{this.state.present_email}</strong><br />
                Les premières informations sur ce cadeau seront envoyées le <strong>{dispDateInfoCadeau}</strong><br />
              {(this.state.user.bundles[0].state < 2) ? (<div>
                  Tant que votre parrainage n'est pas réglé, le bénéficiaire du cadeau ne sera pas informé !<br /></div>):null}<br />
            <button className="btn btn-secondary btn-sm pull-right" onClick={() => { this.setState({ edit_present : true })}}><FontAwesome name="pencil" /> Modifier ces informations</button>
          </div>}
          {this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].present && this.state.edit_present &&
            <form onSubmit={this.savePresent.bind(this)}>
              <h3 className="text-center"><small>J'ai choisi d'offrir mon parrainage à</small></h3>
              <div className="form-group">
                <label>Nom</label>
                <input type="text" name="present_name" value={this.state.present_name} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Nom" />
              </div>
              <div className="form-group">
                <label>Prénom</label>
                <input type="text" name="present_firstname" value={this.state.present_firstname} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Prénom" />
              </div>
              <div className="form-group">
                <label>Adresse email</label>
                <input type="email" name="present_email" value={this.state.present_email} onChange={handleChange.bind(this)} className="form-control form-control-sm" placeholder="Email" />
              </div>
              <div className="form-group text-center">
                <button className="btn btn-primary">Enregistrer</button>
              </div>
            </form>}
          </div>
        </div>
      </div>
    )
  }
});
