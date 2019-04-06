import React, { Component } from 'react';
import request from '../services/Net';
import { handleChange } from '../services/FormService';
import Meta from './utils/Meta';
import { withNotification } from '../services/withNotification';
import { Button } from './utils/Button';

export default withNotification(class Forgot extends Component {
  state = {
    email: '',
    ok: false,
  };

  resetPassword = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { notification } = this.props;
    request({
      url: '/user/ask',
      method: 'post',
      data: {
        email,
      },
    }, notification).then(() => {
      this.setState({
        ok: true,
      });
    });
  };

  render() {
    const { ok } = this.state;
    return (
      <div className="container">
        <Meta title="Mot de passe oublié"/>
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
                <Button type="submit">Envoyer un email de récupération</Button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }
});
