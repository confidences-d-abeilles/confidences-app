import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';
import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';
import Address from '../../../utils/Address/Address';


export default class ContributorManageInfosSocial extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      loading: true,
      usexe_m: '',
      bsexe_m: '',
    };
  }

  componentDidMount() {
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif).then((res) => {
      if (res) {
        this.setState({
          loading: false,
          usexe_m: res.sexe_m ? '1' : '0',
          firstname: res.firstname,
          name: res.name,
          email: res.email,
          school: res.school,
          phone: res.phone,
          user: res,
        });
        res.addresses.map((address) => {
          if (address.type === 1) {
            this.setState({
              billing_address: address,
            });
          }
          return (0);
        });
      }
    });
  }

  // submitInfos(e) {
  //   e.preventDefault();
  //   request({
  //     url: '/user',
  //     method: 'put',
  //     data: {
  //       sexe_m: this.state.usexe_m === '0' ? 'false':'true',
  //       firstname: this.state.firstname,
  //       name: this.state.name,
  //       email: this.state.email,
  //       school: this.state.school
  //     }
  //   }, this.refs.notif)
  // }

  changeInfos(e) {
    e.preventDefault();
    request({
      url: '/user',
      method: 'put',
      data: {
        phone: this.state.phone,
        email: this.state.email,
        school: this.state.school,
      },
    }, this.refs.notif).then((res) => {
      this.setState({
        editInfos: false,
      });
    });
  }
  // submitBaddress(e) {
  //   e.preventDefault();
  //   request({
  //     url: '/address/'+this.state.bid,
  //     method: 'put',
  //     data: {
  //       sexe_m: this.state.bsexe_m === '0' ? 'false':'true',
  //       line1: this.state.bline1,
  //       line2: this.state.bline2,
  //       line3: this.state.bline3,
  //       line4: this.state.bline4,
  //       zipcode: this.state.bzipcode,
  //       city: this.state.bcity
  //     }
  //   }, this.refs.notif);
  // }

  render() {
    return (
      <div>
        <NotificationSystem ref="notif" />
        {(this.state.loading) ? 'Chargement en cours...'
          : (
            <div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  {(!this.state.editInfos)
                    ? (
                      <div>
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
                        <strong>Ecole :</strong>
                        {' '}
                        {this.state.school}
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
                        <div className="form-group">
                          <label>Ecole</label>
                          <input type="text" name="school" onChange={handleChange.bind(this)} value={this.state.school} className="form-control form-control-sm" placeholder="school" />
                        </div>
                        <div className="form-group text-center">
                          <button className="btn btn-primary">Enregistrer</button>
                        </div>
                      </form>
                    )
              }
                </div>
                <div className="col-lg-6 col-sm-12">
                  <span className="lead">
Adresse :
                    <br />
                  </span>
                  <Address data={this.state.billing_address} />
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
