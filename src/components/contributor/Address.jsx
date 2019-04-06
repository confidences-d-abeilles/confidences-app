import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import request from '../../services/Net';
import { isLoggedIn } from '../../services/AuthService';
import Meta from '../utils/Meta';
import EditAddress from '../utils/Address/EditAddress';
import { withNotification } from '../../services/withNotification';

export default withNotification(class ContributorAddress extends Component {
  state = {
    redirect: false,
    message: '',
    address: {
      country: 'France',
      type: 1,
    },
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        address: {
          ...this.state.address,
          sexe_m: res.sexe_m ? '1' : '0',
          name: res.name,
          firstname: res.firstname,
        },
      });
    });
  }

  changeAddress = (e) => {
    this.setState({
      address: { ...this.state.address, [e.target.name]: e.target.value }
    });
  };

  createAddress = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    request({
      url: '/address',
      method: 'post',
      data: this.state.address
    }, notification).then(() => {
      request({
        url: '/address',
        method: 'post',
        data: { ...this.state.address, type: 2 }
      }, notification).then(() => {
        this.setState({
          redirect: true,
        });
      });
    });
  };

  render() {
    return (
      <div className="container py-4">
        <Meta title="Adresse" />
        {(isLoggedIn()) ? null : <Redirect to="/" />}
        {(this.state.redirect) ?
          <Redirect to="/contributor/wish" />
          : null}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center my-4">Votre adresse</h2>
            <EditAddress company={false} data={this.state.address} onChange={this.changeAddress} onSubmit={this.createAddress} />
            <p className="alert alert-info">
              Remarque : votre adresse n’est utile que pour la
              rédaction du contrat. Ne vous inquiétez pas, nous
              n’allons pas vous contacter par voie postale.
            </p>
          </div>
        </div>

      </div>
    );
  }
});
