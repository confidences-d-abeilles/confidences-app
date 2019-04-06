import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import request from '../../../services/Net';
import Confirm from '../../utils/Confirm';
import { logout } from '../../../services/AuthService';
import { handleChange } from '../../../services/FormService';
import Meta from '../../utils/Meta';
import Loading from '../../utils/Loading';

export default class Account extends Component {
  state = {
    sessions: null,
    logout: false,
    newsletter: null,
    email: '',
    firstname: '',
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      console.log(res);
      this.setState({
        email: res.email,
        firstname: res.firstname,
      });
      request({
        url: `/newsletter/${res.email}/17334`,
        method: 'get',
      }, notification).then((res) => {
        this.setState({ newsletter: res });
      });
    });
  }

  deleteAccount() {
    const { notification } = this.props;
    request({
      url: '/user',
      method: 'delete',
    }, notification).then(() => {
      logout();
      this.setState({
        logout: true,
      });
    });
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
          password,
        },
      }, notification);
    } else {
      notification.addNotification({
        message: 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
        level: 'warning',
      });
    }
  }


  sub() {
    const { notification } = this.props;
    request({
      url: '/newsletter',
      method: 'post',
      data: {
        email: this.state.email,
        listId: '17334',
        firstname: this.state.firstname,
      },
    }, notification).then((res) => {
      this.setState({
        newsletter: !this.state.newsletter,
      });
    });
  }

  unsub() {
    const { notification } = this.props;
    const { email, newsletter } = this.state;
    request({
      url: `/newsletter/${email}/17334`,
      method: 'delete',
    }, notification).then(() => {
      this.setState({
        newsletter: !newsletter,
      });
    });
  }

  render() {
    const { logout } = this.state;
    return (
      <div className="row">
        <Meta title="Mon compte" />
        {logout && <Redirect to="/" />}
        <div className="col-lg-12">
          <h2 className="text-center my-5">Mon compte</h2>
          <div className="row">
            <div className="col-lg-6">
              <h3 className="my-2"><small>Modifier mon mot de passe</small></h3>
              <hr />
              <form onSubmit={this.changePassword.bind(this)}>
                <div className="form-group">
                  <input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
                </div>
                <div className="form-group">
                  <input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
                </div>
                <div className="text-center">
                  <button className="btn btn-secondary btn-sm mb-4">Enregistrer</button>
                </div>
              </form>
              <h3 className="my-2"><small>Newsletter</small></h3>
              <hr />
              {(this.state.newsletter === null)
                ? <Loading />
                : (this.state.newsletter)
                  ? (
                    <div>
                      <p>Vous êtes inscrit à la newsletter.</p>
                      <div className="text-center">
                        <button className="btn btn-secondary btn-sm" value={false} onClick={this.unsub.bind(this)}>Me désinscrire</button>
                      </div>
                    </div>
                  )
                  :														(
                    <div>
                      <p>Vous n'êtes pas inscrit à la newsletter.</p>
                      <div className="text-center">
                        <button className="btn btn-secondary btn-sm" value onClick={this.sub.bind(this)}>M'inscrire</button>
                      </div>
                    </div>
                  )
													}
            </div>
            <div className="col-lg-6 text-center">
              <h3 className="my-2"><small>Supprimer mon compte</small></h3>
              <hr />
              <p className="alert alert-danger">
                <FontAwesome name="warning" />
                {' '}
ATTENTION ! Vous allez supprimer votre compte ainsi toutes les informations vous concernant. Il ne sera pas possible de revenir en arrière. En confirmant la suppression de votre compte vous renoncez en même temps à vos droits liés à votre compte ainsi qu’à ceux liés à la souscription d’un parrainage ; vous résiliez votre parrainage quand bien même celui-ci ne serait pas arrivé à son terme. Cette action est permanente et nous ne serons pas capables de retrouver vos données.
              </p>
              <Confirm action={this.deleteAccount.bind(this)} text="Supprimer mon compte" class="btn btn-sm btn-danger" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
