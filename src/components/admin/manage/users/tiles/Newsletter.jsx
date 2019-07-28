import React, { Component } from 'react';
import Input from '@cda/input';

import request from '../../../../../services/Net';
import { handleChange } from '../../../../../services/FormService';
import { withNotification } from '../../../../../services/withNotification';

export default withNotification(class Newsletter extends Component {
  state = {
    mjlist : [],
    listId : '',
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url : '/newsletter/list',
      method : 'get'
    }, notification).then((res) => {
      this.setState({ mjlist : res });
    })
  }

  subscribe = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    if (this.state.listId === '') {
      notification.addNotification({
        level : 'warning',
        message : 'Veuillez choisir une liste'
      })
      return;
    }
    request({
      url : '/newsletter',
      method : 'post',
      data : {
        email : this.props.email,
        firstname : this.props.firstname,
        listId : this.state.listId
      }
    }, notification).then((res) => {

    })
  }

  render () {
    return (
      <form onSubmit={this.subscribe}>
        <hr />
        <h4><small>Listes de diffusion MJ</small></h4>
        <select name="listId" onChange={handleChange.bind(this)} className="my-2 form-control form-control-sm">
          <option defaultValue value="">Choisissez une liste...</option>
          {this.state.mjlist.map(e => (
            <option key={e.ID} value={e.ID}>{e.Name}</option>
          ))}
        </select>
        <Input type="submit" value="Ajouter à cette liste" className="my-2 btn form-control btn-sm btn-secondary" />
        <hr />
      </form>
    )
  }
});
