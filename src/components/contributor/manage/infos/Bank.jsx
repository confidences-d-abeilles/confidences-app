import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';

export default class ContributorManageInfosBank extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    ReactGA.pageview(location.pathname);
    this.state = {
      iban: '',
      name: '',
    };
  }

  componentDidMount() {
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        iban: res.iban,
        name: res.account_holder,
      });
    });
  }

  updateBank(e) {
    e.preventDefault();
    const { iban, name } = this.state;
    request({
      url: '/user',
      method: 'put',
      data: {
        iban,
        account_holder: name,
      },
    }, this.refs.notif);
  }

  render() {
    const { iban, name } = this.state;
    return (
      <div className="row my-4">
        <NotificationSystem ref="notif" />
        <div className="col-6">
          <form onSubmit={this.updateBank.bind(this)}>
            <div className="form-group">
              <input type="text" name="iban" onChange={handleChange.bind(this)} className="form-control" value={iban} placeholder="IBAN" />
            </div>
            <div className="form-group">
              <input type="text" name="name" onChange={handleChange.bind(this)} className="form-control" value={name} placeholder="Nom du titulaire du compte" />
            </div>
            <button type="submit" className="btn btn-primary">Mettre à jour</button>
          </form>
        </div>
      </div>
    );
  }
}
