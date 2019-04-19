import React, { Component } from 'react';

import request from '../../../services/Net';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class ContributorManageContract extends Component {
  state = {
    user : null
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method : 'get'
    }, notification).then((res) => {
      this.setState({
        user : res
      })
    })
  }

  render() {
    return (
      <div>
        <object data={(this.state.user)?process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.user.id+'.pdf':null} type="application/pdf" style={{ width: '100%' }} height="400" aria-label="contract" />
      </div>
    );
  }
});
