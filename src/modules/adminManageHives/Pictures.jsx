import React, { Component } from 'react';
import { Button } from '@cda/button';
import request from '../../services/Net';
import { withNotification } from '../../services/withNotification';

class Pictures extends Component {
  delete = (index) => {
    const { notification, hiveId, refresh } = this.props;
    request({
      url: `/hive/${hiveId}/picture/${index}`,
      method: 'delete',
    }, notification).then(() => {
      refresh();
    });
  };

  setAsDefault = (index) => {
    const { notification, refresh, hiveId } = this.props;
    request({
      url: `/hive/img/${hiveId}`,
      method: 'put',
    }, notification).then(() => {
      refresh();
    });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="mt-4">
        {(data && data.length !== 0)
          ? (
            <div>
              {data.map((img, index) => (
                <>
                  <img key={index} alt={img} className="w-25 p-2" src={`${process.env.REACT_APP_CONTENT_DOMAIN}/${img}`} style={{ cursor: 'pointer' }} />
                  <Button onClick={() => this.delete(index)}>Supprimer</Button>
                  <Button onClick={() => this.setAsDefault(index)}>Par defaut</Button>
                </>
              ))}
            </div>
          )
          : <p>Aucune image à afficher pour cette ruche</p>}
      </div>
    );
  }
};

export default withNotification(Pictures);
