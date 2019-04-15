import React, { Component } from 'react';

import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';
import { Button } from '../../../utils/Button';

export default withNotification(class Pictures extends Component {

  delete = index => {
    const { notification } = this.props;
    request({
      url : '/hive/'+this.props.hiveId+'/picture/'+index,
      method: 'delete'
    }, notification).then(res => {
      this.props.refresh();
    })
  }

  setAsDefault = index => {
    const { notification } = this.props;
    request({
      url : '/hive/img/'+this.props.hiveId,
      method: 'put'
    }, notification).then(res => {
      this.props.refresh();
    })
  }

  render () {
    return (
      <div className="mt-4">
        {(this.props.data && this.props.data.length !== 0)?
          <div>
            {this.props.data.map((img, index) => (
              <>
                <img key={index} alt={img} className="w-25 p-2" src={process.env.REACT_APP_CONTENT_DOMAIN+'/'+img} style={{ cursor: 'pointer' }} />
                <Button onClick={this.delete.bind(this, index)}>Supprimer</Button>
                <Button onClick={this.setAsDefault.bind(this, index)}>Par defaut</Button>
              </>
            ))}
          </div>
        :<p>Aucune image à afficher pour cette ruche</p>}
      </div>
    )
  }
});
