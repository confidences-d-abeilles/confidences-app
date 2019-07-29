import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PayChecker from '../utils/PayChecker';
import Meta from '../utils/Meta';
import request from '../../services/Net';
import { withNotification } from '../../services/withNotification';

import Main from '../../assets/img/end_part.jpg';

const IndividualEnd = ({ notification }) => {
  const [bundleId, setBundleId] = useState(null);
  const [bundleState, setBundleState] = useState(null);

  useEffect(() => {
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      request({
        url: `/bundle/owner/${res.id}`,
        method: 'get',
      }, notification).then(({ state, id }) => {
        setBundleState(state);
        setBundleId(id);
      });
    });
  }, []);

  return (
    <div className="container py-4">
      <Meta title="Félicitations" />
      <PayChecker bundleId={bundleId}>
        <div className="row justify-content-center">
          <div className="col-8">
            <h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains d'abeilles.</h2>
            <p className="text-center">
              <img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
            </p>
            {!bundleState ? <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous souhaite la bienvenue.</h4>
              : <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous remercie !</h4>
            }
            <p className="text-center">
              <Link to="/individual/manage" className="btn btn-primary">{!bundleState ? 'Découvrir mon espace' : 'Mon compte'}</Link>
            </p>
          </div>
        </div>
      </PayChecker>
    </div>
  );
};

IndividualEnd.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(IndividualEnd);
