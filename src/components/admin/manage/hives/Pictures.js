import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import request from '../../../../services/Net';

const config = require('../../../../config.js');


export default class Pictures extends Component {
  delete = (index) => {
    request({
      url: `/hive/${this.props.hiveId}/picture/${index}`,
      method: 'delete',
    }, this.refs.notif).then((res) => {
      this.props.refresh();
    });
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="mt-4">
        <NotificationSystem ref="notif" />
        {(this.props.data && this.props.data.length !== 0)
          ? (
            <div>
              <p className="text-center"><small><em>Cliquez sur une des images pour la supprimer instantanément</em></small></p>
              {this.props.data.map((img, index) => (
                <img key={index} alt={img} className="w-25 p-2" src={`${config.cdn_url}/${img}`} onClick={this.delete.bind(this, index)} style={{ cursor: 'pointer' }} />
              ))}
            </div>
          )
          : <p>Aucune image à afficher pour cette ruche</p>}
      </div>
    );
  }
}
