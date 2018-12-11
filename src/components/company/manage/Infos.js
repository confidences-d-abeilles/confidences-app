
import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Redirect } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import request from '../../../services/Net';
import { handleChange } from '../../../services/FormService';
import Meta from '../../utils/Meta';
import FileUpload from '../../utils/FileUpload';
import Address from '../../utils/Address/Address';

export default class CompanyManageInfos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
      password: '',
      conf: '',
      loadLogo: false,
    };
  }

  componentDidMount() {
    this.get();
  }

  get() {
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        user: res,
        email: res.email,
        phone: res.phone,
      });
      res.addresses.forEach((address) => {
        if (address.type === 1) {
          this.setState({
            billing_address: address,
          });
        }
        if (address.type === 2) {
          this.setState({
            delivery_address: address,
          });
        }
      });
    });
  }

  changeInfos(e) {
    e.preventDefault();
    request({
      url: '/user',
      method: 'put',
      data: {
        phone: this.state.phone,
        email: this.state.email,
      },
    }, this.refs.notif).then((res) => {
      this.setState({
        editInfos: false,
      });
    });
  }

  uploadLogo(e) {
    e.preventDefault();
    if (document.getElementById('HQlogo').files[0]) {
      this.setState({ loadLogo: true });
      const data = new FormData();
      data.append('HQlogo', document.getElementById('HQlogo').files[0]);
      request({
        url: '/user',
        method: 'put',
        data,
      }, this.refs.notif).then((res) => {
        this.props.update();
        this.setState({ loadLogo: false });
      });
    }
  }

  render() {
    return (
      <div>
        <Meta title="Mes informations" />
        {this.state.logout && <Redirect to="/" />}
        <NotificationSystem ref="notif" />
        <div className="row mt-5">
          <div className="col">
            <h2 className="text-center">
              Mes informations

            </h2>
            <h3>Mon logo</h3>
            <form onSubmit={this.uploadLogo.bind(this)}>
              <FileUpload identifier="HQlogo" loading={this.state.loadLogo} label="Merci d'uploader un fichier de bonne qualité (nous en avons besoin pour la plaque que nous posons sur la ruche). Recommandations : 1200 x 1200px, 2mo maximum. Utilisez le format PNG si votre logo contient des zones ou un fond transparent." accept="image/*" />
              <div className="form-group text-center">
                <button className="btn btn-secondary">Envoyer le logo</button>
              </div>
            </form>
          </div>
        </div>
        {(this.state.user)

          ? (
            <div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <h3 className="text-center"><small>Mes informations</small></h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  {(!this.state.editInfos)
                    ? (
                      <div>
                        <strong>Entreprise :</strong>
                        {' '}
                        {this.state.user.company_name}
                        <br />
                        <strong>Siret :</strong>
                        {' '}
                        {this.state.user.siret}
                        <br />
                        <strong>Nom :</strong>
                        {' '}
                        {this.state.user.name}
                        <br />
                        <strong>Prénom :</strong>
                        {' '}
                        {this.state.user.firstname}
                        <br />
                        <strong>Numéro de téléphone :</strong>
                        {' '}
                        {this.state.phone}
                        <br />
                        <strong>Email :</strong>
                        {' '}
                        {this.state.email}
                        <br />
                        <br />
                        <button
                          className="btn btn-secondary btn-sm pull-right"
                          onClick={() => {
                            this.setState({ editInfos: true });
                          }}
                        >
                          <FontAwesome name="pencil" />
&nbsp;Editer ces informations

                        </button>
                      </div>
                    )
                    : (
                      <form onSubmit={this.changeInfos.bind(this)}>
                        <div className="form-group">
                          <label>Numéro de téléphone</label>
                          <input type="tel" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control form-control-sm" placeholder="Numéro de téléphone" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} className="form-control form-control-sm" placeholder="Email" />
                        </div>
                        <div className="form-group text-center">
                          <button className="btn btn-primary">Enregistrer</button>
                        </div>
                      </form>
                    )
              }
                </div>
              </div>

            </div>
          )
          : null}
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <h3 className="text-center my-4"><small>Mon adresse de facturation</small></h3>
            <Address data={this.state.billing_address} company />
          </div>
          <div className="col-lg-6 col-sm-12">
            <h3 className="text-center my-4"><small>Mes informations de livraison</small></h3>
            <Address data={this.state.delivery_address} company />
          </div>
        </div>
      </div>
    );
  }
}
