import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import request from '../services/Net';
import imgPlaceholder from '../assets/img/logo_ruche_entreprise.png';
import Loading from './utils/Loading';
import Meta from './utils/Meta';
import SquareImg from './utils/SquareImg';
import { withNotification } from '../services/withNotification';

class Hives extends Component {
  state = {
    hives: null,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/hive',
      method: 'get',
    }, notification).then((res) => {
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
        <h1>Les ruches</h1>
        {hives ? (
          <div className="row justify-content-center">
            {hives.map((hive) => {
              if (hive.imgs && hive.imgs[0]) {
                return (
                  <div key={hive.id} className="card col-lg-3 col-md-5 col-sm-11 m-1" style={{ maxWidth: '20em' }}>
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

Hives.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(Hives);
