import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Link } from 'react-router-dom';
import request from '../services/Net';
import imgPlaceholder from '../assets/img/logo_ruche_entreprise.png';
import Loading from './utils/Loading';

import Meta from './utils/Meta';
import SquareImg from './utils/SquareImg';

export default class Hives extends Component {
  state = {
    hives: null,
  }

  componentDidMount() {
    request({
      url: '/hive',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        hives: res.reverse(),
      });
    });
  }

  render() {
    const { hives } = this.state;
    return (
      <div className="container-fluid">
        <Meta title="Les ruches" />
        <NotificationSystem ref="notif" />
        <h1 style={{ fontFamily: 'HighTo', color: '#E49C00' }} className="text-center my-4">LES RUCHES</h1>
        {hives ? (
          <div className="row justify-content-center">
            {hives.map((hive) => {
              if (hive.imgs && hive.imgs[0]) {
                return (
                  <div className="card col-lg-3 col-md-5 col-sm-11 m-1" style={{ maxWidth: '20em' }}>
                    <SquareImg className="card-img-top img-fluid" src={(hive.imgs && hive.imgs[0]) ? `${process.env.REACT_APP_CONTENT_DOMAIN}/${hive.imgs[0]}` : imgPlaceholder} alt="Card image cap" />
                    <div className="card-block" style={{ height: 'auto', flex: '0' }}>
                      <h2 className="card-title text-center" style={{ fontFamily: 'HighTo' }}>{hive.name}</h2>
                      <Link to={`/hive/${hive.id}`} className="btn btn-link float-right">Voir en détail</Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ) : <Loading />}
      </div>
    );
  }
}
