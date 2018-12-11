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
    const { location } = this.props;
    ReactGA.pageview(location.pathname);
    this.state = {
      loading: true,
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

  changeInfos(e) {
    e.preventDefault();
    const { phone, email, school, billing_address } = this.state;
    request({
      url: '/user',
      method: 'put',
      data: {
        phone,
        email,
        school,
      },
    }, this.refs.notif).then(() => {
      this.setState({
        editInfos: false,
      });
    });
  }

  render() {
    const {
      loading,
      editInfos,
      user,
      phone,
      email,
      school,
    } = this.state;
    return (
      <div>
        <NotificationSystem ref="notif" />
        {loading ? 'Chargement en cours...'
          : (
            <div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  {(!editInfos)
                    ? (
                      <div>
                        <strong>Nom :</strong>
                        {' '}
                        {user.name}
                        <br />
                        <strong>Prénom :</strong>
                        {' '}
                        {user.firstname}
                        <br />
                        <strong>Numéro de téléphone :</strong>
                        {' '}
                        {phone}
                        <br />
                        <strong>Email :</strong>
                        {' '}
                        {email}
                        <br />
                        <strong>Ecole :</strong>
                        {' '}
                        {school}
                        <br />
                        <br />
                        <button
                          className="btn btn-secondary btn-sm pull-right"
                          type="button"
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
                          <input type="tel" name="phone" onChange={handleChange.bind(this)} value={phone} className="form-control form-control-sm" placeholder="Numéro de téléphone" />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="email" onChange={handleChange.bind(this)} value={email} className="form-control form-control-sm" placeholder="Email" />
                        </div>
                        <div className="form-group">
                          <label>Ecole</label>
                          <input type="text" name="school" onChange={handleChange.bind(this)} value={school} className="form-control form-control-sm" placeholder="school" />
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
                  <Address data={billing_address} />
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}
