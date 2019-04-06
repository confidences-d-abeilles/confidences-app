import React, { Component } from 'react';
import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';


export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      conf: '',
    };
  }

  changePassword(e) {
    e.preventDefault();
    const { notification } = this.props;
    const { password, conf } = this.state;
    if (password === conf) {
      request({
        url: '/user',
        method: 'put',
        data: {
          password: password,
        },
      }, notification);
    } else {
      notification.addNotification({
        message: 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
        level: 'warning',
      });
    }
  }

  render() {
    return (
      <div className="row">
        <form className="col-6" onSubmit={this.changePassword.bind(this)}>
          <h3 className="text-center my-4">Modifier mon mot de passe</h3>
          <div className="form-group">
            <input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
          </div>
          <div className="form-group">
            <input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
          </div>
          <button className="btn btn-primary">Enregistrer</button>
        </form>
      </div>
    );
  }
}
