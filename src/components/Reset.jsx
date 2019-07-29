import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '@cda/input';
import Button from '@cda/button';

import request from '../services/Net';
import { handleChange } from '../services/FormService';
import Meta from './utils/Meta';
import { withNotification } from '../services/withNotification';

class Reset extends Component {
  state = {
    password: '',
    confirmation: '',
    ok: false,
    redirect: false,
  };

  resetPassword(e) {
    const { notification } = this.props;
    const { password, confirmation } = this.state;
    e.preventDefault();
    if (confirmation !== password) {
      notification.addNotification({
        message: 'Le mot de passe et la confirmation ne correspondent pas',
        level: 'warning',
      });
    } else if (password.length < 6) {
      notification.addNotification({
        message: 'Le mot de passe doit contenir au moins 6 caractères',
        level: 'warning',
      });
    } else {
      request({
        url: '/user/reset',
        method: 'post',
        data: {
          password,
          token: this.props.match.params.token,
        },
      }, notification).then(() => {
        this.setState({
          ok: true,
        });
        setTimeout(() => {
          this.setState({
            redirect: true,
          });
        }, 5000);
      });
    }
  }

  render() {
    const { redirect, ok } = this.state;
    return (
      <div className="container">
        <Meta title="Définir un nouveau mot de passe" />
        {redirect && <Redirect to="/login" />}
        <div className="row justify-content-center">
          <div className="col-4">
            <h2 className="text-center my-4">Définir un nouveau mot de passe</h2>
            {ok
              ? (
                <p className="alert alert-success">
                Le mot de passe a bien été enregistré. Vous allez etre redirigé dans 5 secondes vers la page de connexion.
                </p>
              )
              : (
                <form onSubmit={this.resetPassword.bind(this)} className="text-center">
                  <div className="form-group">
                    <Input type="password" name="password" onChange={handleChange.bind(this)} placeholder="Nouveau mot de passe" />
                  </div>
                  <div className="form-group">
                    <Input type="password" name="confirmation" onChange={handleChange.bind(this)} placeholder="Confirmation du nouveau mot de passe" />
                  </div>
                  <Button>Définir</Button>
                </form>
              )}
          </div>
        </div>
      </div>
    );
  }
}

Reset.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(Reset);
