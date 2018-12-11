import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import request from '../../../../../services/Net';
import { handleChange } from '../../../../../services/FormService';

export default class Newsletter extends Component {
  /* This component take a firstname and a email as props */

  constructor(props) {
    super(props);
    this.state = {
      mjlist: [],
      listId: '',
    };
  }

  componentDidMount() {
    request({
      url: '/newsletter/list',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({ mjlist: res });
    });
  }

  subscribe = (e) => {
    e.preventDefault();
    if (this.state.listId === '') {
      this.refs.notif.addNotification({
        level: 'warning',
        message: 'Veuillez choisir une liste',
      });
      return;
    }
    request({
      url: '/newsletter',
      method: 'post',
      data: {
        email: this.props.email,
        firstname: this.props.firstname,
        listId: this.state.listId,
      },
    }, this.refs.notif).then((res) => {

    });
  }

  render() {
    return (
      <form onSubmit={this.subscribe}>
        <hr />
        <h4><small>Listes de diffusion MJ</small></h4>
        <NotificationSystem ref="notif" />
        <select name="listId" onChange={handleChange.bind(this)} className="my-2 form-control form-control-sm">
          <option defaultValue value="">Choisissez une liste...</option>
          {this.state.mjlist.map(e => (
            <option key={e.ID} value={e.ID}>{e.Name}</option>
          ))}
        </select>
        <input type="submit" value="Ajouter à cette liste" className="my-2 btn form-control btn-sm btn-secondary" />
        <hr />
      </form>
    );
  }
}
