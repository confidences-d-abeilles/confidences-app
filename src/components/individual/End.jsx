import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import PayChecker from '../utils/PayChecker';
import Main from '../../assets/img/end_part.jpg';

import Meta from '../utils/Meta';
import request from '../../services/Net';
import { withNotification } from '../../services/withNotification';

export default withNotification(class IndividualEnd extends Component {
  state = {
    bundleId: null,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      request({
        url: `/bundle/owner/${res.id}`,
        method: 'get',
      }, notification).then((res) => {
        this.setState({
          bundleState: res.state,
          bundleId: res.id,
        });
      });
    });
  }

  render() {
    const { bundleId } = this.state;
    return (
      <div className="container py-4">
        <Meta title="Félicitations" />
        <NotificationSystem ref="notif" />
        <PayChecker bundleId={bundleId}>
          <div className="row justify-content-center">
            <div className="col-8">
              <h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains d'abeilles.</h2>
              <p className="text-center">
                <img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
              </p>
              {!this.state.bundleState ? <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous souhaite la bienvenue.</h4>
                : <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous remercie !</h4>
                    }
              <p className="text-center">
                <Link to="/individual/manage" className="btn btn-primary">{!this.state.bundleState ? 'Découvrir mon espace' : 'Mon compte'}</Link>
              </p>
            </div>
          </div>
        </PayChecker>
      </div>
    );
  }
});
