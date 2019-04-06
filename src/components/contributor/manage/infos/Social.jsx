import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';
import Address from '../../../utils/Address/Address';
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class ContributorManageInfosSocial extends Component {
  state = {
    loading: true,
    usexe_m: '',
    bsexe_m: '',
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url : '/user/me',
      method: 'get',
    }, notification).then((res) => {
      if (res) {
        this.setState({
          loading: false,
          usexe_m: res.sexe_m?'1':'0',
          firstname: res.firstname,
          name: res.name,
          email: res.email,
          school: res.school,
          phone: res.phone,
          user: res,
        })
        res.addresses.map((address) => {
          if (address.type === 1) {
            this.setState({
              billing_address: address
            })
          }
          return (0);
        });
      }
    });
  }

  changeInfos(e) {
    e.preventDefault();
    const { notification } = this.props;
    const { phone, email, school } = this.state;
    request({
      url: '/user',
      method: 'put',
      data: {
        phone,
        email,
        school,
      },
    }, notification).then(() => {
      this.setState({
        editInfos: false,
      });
    });
  }

  render() {
    return (
      <div>
        {(this.state.loading)?'Chargement en cours...':
          <div>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
              {(!this.state.editInfos)?
                <div>
                  <strong>Nom :</strong> {this.state.user.name}<br />
                  <strong>Prénom :</strong> {this.state.user.firstname}<br />
                  <strong>Numéro de téléphone :</strong> {this.state.phone}<br />
                  <strong>Email :</strong> {this.state.email}<br />
                  <strong>Ecole :</strong> {this.state.school}<br /><br />
                  <button className="btn btn-secondary btn-sm pull-right" onClick={() => this.setState({ editInfos: true })}>
                    <FontAwesome name="pencil" />&nbsp;Editer ces informations
                  </button>
                </div>
                :
                <form onSubmit={this.changeInfos.bind(this)}>
                  <div className="form-group">
                    <label>Numéro de téléphone</label>
                    <input type="tel" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control form-control-sm" placeholder="Numéro de téléphone" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} className="form-control form-control-sm" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <label>Ecole</label>
                    <input type="text" name="school" onChange={handleChange.bind(this)} value={this.state.school} className="form-control form-control-sm" placeholder="school" />
                  </div>
                  <div className="form-group text-center">
                    <button className="btn btn-primary">Enregistrer</button>
                  </div>
                </form>
              }
              </div>
              <div className="col-lg-6 col-sm-12">
                <span className="lead">Adresse :<br /></span>
                <Address data={this.state.billing_address} />
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
});
