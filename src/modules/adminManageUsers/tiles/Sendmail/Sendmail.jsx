import React, { Component } from 'react';

import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class Sendmail extends Component {
  sendMail = (id) => {
    const { notification } = this.props;
    request({
      url : '/mail/send_'+id,
      method : 'post',
      data : {
        userId : this.props.id
      }
    }, notification).then(res => {
      this.props.refresh();
    });
  }

  render ()  {
    return (
      <div>
        <button className="btn btn-info btn-sm" onClick={this.sendMail.bind(this, 305)} >Send 305</button>
        <hr />
      </div>
    )
  }
});
