import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import request from '../../../../services/Net';
import General from './tiles/General/General';
import Bundle from './tiles/Bundle';
import Address from '../../../utils/Address/Address';
import Email from './tiles/Email';
import Memo from './tiles/Memo/Memo';
import { login } from '../../../../services/AuthService';
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class Fiche extends Component {
  state = {
    user: null,
    redirect: false,
    goToAccount: false,
  };

  componentWillMount() {
    this.getUser();
  }

  getUser = () => {
    const { notification } = this.props;
    request({
      url: `/user/${this.props.match.params.id}`,
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        user: res,
      });
    });
  };

  getUserId = () => {
    const { match: { params: { id } } } = this.props;
    return id;
  };

  deleteUser = () => {
    const { notification } = this.props;
    request({
      url: `/user/${this.getUserId()}`,
      method: 'delete',
    }, notification).then((res) => {
      this.setState({
        redirect: true,
      });
    });
  };

  handlePromotion = ({ target: { value } }) => {
    const { notification } = this.props;
    request({
      url: `/users/${this.getUserId()}/promote/${value}`,
      method: 'patch',
    }, notification).then(() => {
      this.getUser();
    });
  };

  impersonate = () => {
    const { notification } = this.props;
    request({
      url: '/impersonate',
      method: 'post',
      data: {
        userId: this.getUserId(),
      },
    }, notification).then((res) => {
      login(res.id, res.token, res.user_type);
      this.setState({
        goToAccount: true,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/admin/manage/user" />}
        {this.state.goToAccount && <Redirect to="/account" />}
        <div className="row">
          <div className="col">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
              <li className="breadcrumb-item"><Link to="/admin/manage/user">Utilisateurs</Link></li>
              <li className="breadcrumb-item active">Utilisateur</li>
            </ol>
          </div>
        </div>
        <div className="row">
          {this.state.user
          && (
            <div className="col-lg-4">
              <General
                data={this.state.user}
                delete={this.deleteUser}
                impersonate={this.impersonate}
                handlePromotion={this.handlePromotion}
              />
              {this.state.user.addresses.map(element => (
                <div className="newcard" key={element.id}>
                  <h4>{(element.type === 1) ? 'Adresse de facturation' : 'Adresse de livraison'}</h4>
                  <Address data={element} />
                </div>
              ))}
            </div>
          )}
          {this.state.user
          && (
          <div className="col-lg-4">
            <div className="newcard">
              <h4>Parrainage</h4>
              <Bundle bundle={this.state.user.bundles[0]} />
            </div>
          </div>
          )}
          {this.state.user
          && (
          <div className="col-lg-4">
            <div className="newcard">
              <h4>Memo</h4>
              <Memo user={this.state.user} />
            </div>
            <div className="newcard">
              <h4>Emails</h4>
              <Email user={this.state.user} refresh={this.getUser} />
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }
});
