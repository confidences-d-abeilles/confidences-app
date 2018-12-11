import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import request from '../../../../../../services/Net';

// Take a user id as props

export default class Sendmail extends Component {
  sendMail = (id) => {
    request({
      url: `/mail/send_${id}`,
      method: 'post',
      data: {
        userId: this.props.id,
      },
    }, this.refs.notif).then((res) => {
      this.props.refresh();
    });
  }

  render() {
    return (
      <div>
        <NotificationSystem ref="notif" />
        <button className="btn btn-info btn-sm" onClick={this.sendMail.bind(this, 305)}>Send 305</button>
        <hr />
      </div>
    );
  }
}
