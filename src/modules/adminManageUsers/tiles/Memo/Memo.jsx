import React, { Component } from 'react';

import ViewMemo from './ViewMemo';
import EditMemo from './EditMemo';
import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit : false,
      content : props.user.comment,
    };
  }

  handleMemo = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  updateMemo = () => {
    const { notification } = this.props;
    request({
      url:'/user/'+this.props.user.id,
      method: 'PUT',
      data: {
        comment : this.state.content
      }
    }, notification).then((res) => {
      this.setState({
        edit: false
      });
    });
  };

  editMode = (mode) => {
    this.setState({
      edit : mode,
    });
  };

  render () {
    return (
      <div>
        {(this.state.edit)?
          <EditMemo onChange={this.handleMemo} submit={this.updateMemo} content={this.state.content} />
        :<ViewMemo edit={this.editMode.bind(this, true)} content={this.state.content} />}
      </div>
    )
  }
});
