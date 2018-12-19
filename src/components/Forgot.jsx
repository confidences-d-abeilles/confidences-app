import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import request from '../services/Net';
import { handleChange } from '../services/FormService';
import Meta from './utils/Meta';

export default class Forgot extends Component {
  state = {
    email: '',
    ok: false,
  }

  resetPassword = (e) => {
    e.preventDefault();
    const { email } = this.state;
    request({
      url: '/user/ask',
      method: 'post',
      data: {
        email,
      }
    }, this.refs.notif).then(() => {
      this.setState({
        ok: true,
      });
    });
  }

  render() {
    const { ok } = this.state;
    return (
      <div className="container">
        <Meta title="Mot de passe oublié"/>
        <NotificationSystem ref="notif" />
        <div className="row justify-content-center">
          <div className="col-4">
            <h2 className="text-center my-4">Mot de passe oublié</h2>
            {ok ? (
              <p className="alert alert-success">
                Un email de récupération vient de vous être envoyé.
              </p>
            ) : (
              <form onSubmit={this.resetPassword} className="text-center">
                <div className="form-group">
                  <input type="email" className="form-control" name="email" onChange={handleChange.bind(this)} placeholder="Adresse email"/>
                </div>
                <button className="btn btn-primary" type="submit">Envoyer un email de récupération</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
}
