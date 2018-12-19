import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import request from '../services/Net';
import Loading from './utils/Loading';
import Meta from './utils/Meta';

export default class Confirm extends Component {
  state = {
    loading: true,
    redirect: false,
  }

  componentDidMount() {
    const { match : { params : { token } } } = this.props;
    request({
      url: `/user/email/${token}`,
      method: 'get',
    }, this.refs.notif).then(() => {
      this.setState({
        loading: false,
      });
      setTimeout(() => {
        this.setState({
          redirect: true,
        });
      }, 3000);
    });
  }

  render() {
    const { redirect, loading } = this.state;
    return (
      <div className="container py-5">
        <Meta title="Confirmation d'adresse email"/>
        {redirect && <Redirect to="/account" />}
        <NotificationSystem  ref="notif" />
        { loading
          ? <Loading />
          : <p className="alert alert-success">Votre adresse email est bien vérifié, vous allez être redirigé vers votre compte dans quelques instants</p>}
      </div>
    );
  }
}
