import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import { isLoggedIn } from '../../services/AuthService';
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import EditAddress from '../utils/Address/EditAddress'

export default class ContributorAddress extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      redirect: false,
      message: '',
      address: {
        country: 'France',
        type: 1
      }
    }
  }

  componentDidMount() {
    request({
      url: '/user/me',
      method: 'get'
    }, this.refs.notif).then((res) => {
      this.setState({
        address: {
          ...this.state.address,
          sexe_m: res.sexe_m?'1':'0',
          name: res.name,
          firstname: res.firstname,
        }
      });
    });
  }

  changeAddress = (e) => {
    this.setState({
      address: { ...this.state.address, [e.target.name] : e.target.value }
    })
  }

  createAddress = (e) => {
    e.preventDefault();
    request({
      url : '/address',
      method: 'post',
      data : this.state.address
    }, this.refs.notif).then((res) => {
      request({
        url : '/address',
        method: 'post',
        data : { ...this.state.address, type: 2 }
      }, this.refs.notif).then((res) => {
        this.setState({
          redirect : true
        })
      });
    });
  }



    render () {
        return (
      <div className="container py-4">
        <Meta title="Adresse"/>
        {(isLoggedIn())?null:<Redirect to="/" />}
        {(this.state.redirect)?
        <Redirect to="/contributor/wish" />
        :null}
        <div className="row justify-content-center">
          <NotificationSystem ref="notif" />
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '50%'}}></div>
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
}
