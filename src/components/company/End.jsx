import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../assets/img/end_part.jpg';

import Meta from '../utils/Meta';
import request from '../../services/Net';
import PayChecker from '../utils/PayChecker';

export default class CompanyEnd extends Component {
  state = {
    namespace: '',
    bundleId: null,
  };

  componentDidMount() {
    const { notification } = this.props;
    this.setState({ loading: true });
    request({
      url: '/user/me',
      method: 'get',
    }, notification)
      .then((res) => {
        this.setState({
          namespace: res.namespace,
          bundleId: res.bundles[0].id,
        });
      });
  }

  render() {
    const { bundleId, namespace } = this.state;
    return (
      <div className="container py-4">
        <Meta title="Félicitations" />
        <PayChecker bundleId={bundleId}>
          <div className="row justify-content-center">
            <div className="col-8">
              <h2 className="text-center my-4">Génial ! Vous avez choisi de rejoindre notre aventure.</h2>
              <p className="text-center">
                <img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
                <br />
                <h4 className="text-center my-4">Toute l'équipe de Confidences  d'Abeilles vous remercie !</h4>
              </p>
              <div className="row justify-content-center">
                <div className="col text-center">
                  <Link to="/company/manage" className="btn btn-primary btn-lg">Mon compte</Link>
                </div>
                <div className="col text-center">
                  <Link to={`/parrains/${namespace}`} className="btn btn-primary btn-lg">Découvrir notre page</Link>
                </div>
              </div>
            </div>
          </div>
        </PayChecker>
      </div>
    );
  }
}
