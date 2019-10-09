import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import request from '../../services/Net';
import Meta from '../utils/Meta';
import EditAddress from '../utils/Address/EditAddress';
import { withNotification } from '../../services/withNotification';

export default withNotification(class CompanyAddress extends Component {
  state = {
    redirect: false,
    message: '',
    address: {
      country: 'France',
      type: 1
    },
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get'
    }, notification).then((res) => {
      this.setState({
        address: {
          ...this.state.address,
          sexe_m: res.sexe_m ? '1' : '0',
          name: res.name,
          firstname: res.firstname,
          company_name: res.company_name,
          phone: res.phone
        }
      });
    });
  }

  changeAddress = (e) => {
    this.setState({
      address: { ...this.state.address, [e.target.name]: e.target.value }
    })
  }

  createAddress = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    request({
      url: '/address',
      method: 'post',
      data: this.state.address
    }, notification).then((res) => {
      console.log(this.state.address);
      request({
        url: '/address',
        method: 'post',
        data: { ...this.state.address, type: 2 }
      }, notification).then((res) => {
        this.setState({
          redirect: true
        })
      });
    });
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Adresse" />
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <h2 className="text-center my-4">Adresse de reçu fiscal</h2>
            <EditAddress company={true} data={this.state.address} onChange={this.changeAddress} onSubmit={this.createAddress} />
            <p className="alert alert-info">Merci de renseigner ici l’adresse de reçu fiscal de votre société. Si l’adresse de livraison n’est pas la même, vous aurez toujours la possibilité de la modifier par la suite.</p>
          </div>
        </div>
        {(this.state.redirect) ?
          <Redirect to="/company/wish" />
          : null}
      </div>
    );
  }
});
