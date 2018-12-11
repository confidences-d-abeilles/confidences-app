import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import request from '../../../../services/Net';
import General from './tiles/General/General';
import Bundle from './tiles/Bundle';
import Address from '../../../utils/Address/Address';
import Email from './tiles/Email';
import Memo from './tiles/Memo/Memo';

export default class Fiche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      redirect: false,
    };
  }

  componentWillMount() {
    this.getUser();
  }

  getUser = () => {
    request({
      url: `/user/${this.props.match.params.id}`,
      method: 'get',
    }).then((res) => {
      this.setState({
        user: res,
      });
    }, this.refs.notifs);
  }

  deleteUser = () => {
    request({
      url: `/user/${this.props.match.params.id}`,
      method: 'delete',
    }).then((res) => {
      this.setState({
        redirect: true,
      });
    }, this.refs.notifs);
  }

  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/admin/manage/user" />}
        <NotificationSystem ref="notif" />
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
            <General data={this.state.user} delete={this.deleteUser} />
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
              <Bundle data={this.state.user} />
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
}
